import React, { createContext, useState, useEffect, useContext, useRef, useCallback } from 'react';
import { io } from 'socket.io-client';
import useAuth from '../hooks/useAuth';

export const SocketContext = createContext(null);

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || 'http://localhost:5000';

export const SocketProvider = ({ children }) => {
  const { token, user } = useAuth();
  const [socket, setSocket] = useState(null);
  const [connected, setConnected] = useState(false);
  const [roomUsers, setRoomUsers] = useState([]);
  const [typingUsers, setTypingUsers] = useState(new Set());
  const [messages, setMessages] = useState([]);
  const [activeCode, setActiveCode] = useState('');
  const [activeLanguage, setActiveLanguage] = useState('javascript');
  const [lastCodeSender, setLastCodeSender] = useState(null);

  const currentRoomRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  // Initialize socket connection when token changes
  useEffect(() => {
    const socketInstance = io(SOCKET_URL, {
      auth: { token },
      transports: ['websocket', 'polling'],
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    socketInstance.on('connect', () => {
      console.log('[Socket] Connected to server:', socketInstance.id);
      setConnected(true);
    });

    socketInstance.on('disconnect', () => {
      console.log('[Socket] Disconnected from server');
      setConnected(false);
    });

    // Room initialization payload
    socketInstance.on('roomInit', ({ code, language, users }) => {
      if (code !== undefined) setActiveCode(code);
      if (language) setActiveLanguage(language);
      if (users) setRoomUsers(users);
    });

    // Updated participants list
    socketInstance.on('roomUsers', ({ users }) => {
      if (users) setRoomUsers(users);
    });

    // Remote code update
    socketInstance.on('codeUpdate', ({ code, senderName, cursorPosition }) => {
      setActiveCode(code);
      setLastCodeSender(senderName);
    });

    // Remote language update
    socketInstance.on('languageUpdate', ({ language, code }) => {
      setActiveLanguage(language);
      if (code) setActiveCode(code);
    });

    // In-room chat message
    socketInstance.on('receiveMessage', (message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Typing indicators
    socketInstance.on('userTyping', ({ userId, name }) => {
      setTypingUsers((prev) => new Set(prev).add(name));
    });

    socketInstance.on('userStoppedTyping', ({ userId, name }) => {
      setTypingUsers((prev) => {
        const next = new Set(prev);
        next.delete(name);
        return next;
      });
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, [token]);

  // Join a room
  const joinRoom = useCallback(
    (roomId) => {
      if (!socket || !roomId) return;
      currentRoomRef.current = roomId;
      setMessages([]);
      setRoomUsers([]);
      socket.emit('joinRoom', { roomId });
    },
    [socket]
  );

  // Leave a room
  const leaveRoom = useCallback(
    (roomId) => {
      if (!socket || !roomId) return;
      socket.emit('leaveRoom', { roomId });
      currentRoomRef.current = null;
    },
    [socket]
  );

  // Send code changes (debounced by caller)
  const emitCodeChange = useCallback(
    (roomId, code, cursorPosition) => {
      if (!socket || !roomId) return;
      setActiveCode(code);
      socket.emit('codeChange', { roomId, code, cursorPosition });
    },
    [socket]
  );

  // Change room programming language
  const emitLanguageChange = useCallback(
    (roomId, language, defaultStarterCode) => {
      if (!socket || !roomId) return;
      setActiveLanguage(language);
      if (defaultStarterCode) setActiveCode(defaultStarterCode);
      socket.emit('languageChange', { roomId, language, defaultStarterCode });
    },
    [socket]
  );

  // Send a chat message
  const emitSendMessage = useCallback(
    (roomId, message) => {
      if (!socket || !roomId || !message.trim()) return;
      socket.emit('sendMessage', { roomId, message });
    },
    [socket]
  );

  // Emit typing indicator with auto-stop timer
  const emitTyping = useCallback(
    (roomId) => {
      if (!socket || !roomId) return;
      socket.emit('typing', { roomId });

      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = setTimeout(() => {
        socket.emit('stopTyping', { roomId });
      }, 2000);
    },
    [socket]
  );

  const value = {
    socket,
    connected,
    roomUsers,
    typingUsers: Array.from(typingUsers),
    messages,
    setMessages,
    activeCode,
    setActiveCode,
    activeLanguage,
    setActiveLanguage,
    lastCodeSender,
    joinRoom,
    leaveRoom,
    emitCodeChange,
    emitLanguageChange,
    emitSendMessage,
    emitTyping,
  };

  return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>;
};

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
};

export default useSocket;
