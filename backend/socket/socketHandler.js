const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Room = require('../models/Room');
const Message = require('../models/Message');

// In-memory room cache for low-latency state synchronization
const activeRooms = new Map();

/**
 * Configure Socket.IO server with JWT authentication, presence, code sync & chat
 * @param {import('socket.io').Server} io
 */
const initSocket = (io) => {
  // Socket.IO JWT Authentication Middleware
  io.use(async (socket, next) => {
    try {
      const token =
        socket.handshake.auth?.token ||
        socket.handshake.headers?.authorization?.split(' ')[1] ||
        socket.handshake.query?.token;

      if (!token) {
        // Allow guest view if required, or authenticate
        socket.user = { _id: `guest_${socket.id.substring(0, 5)}`, name: 'Guest Developer', role: 'USER' };
        return next();
      }

      const secret = process.env.JWT_SECRET || 'devcollab_super_secure_jwt_secret_key_2026_abhishek';
      const decoded = jwt.verify(token, secret);
      const user = await User.findById(decoded.id).select('name email role profileImage');

      if (user) {
        socket.user = user;
      } else {
        socket.user = { _id: `guest_${socket.id.substring(0, 5)}`, name: 'Guest Developer', role: 'USER' };
      }
      next();
    } catch (error) {
      console.warn('[Socket.IO Auth] Handshake auth error, defaulting to guest:', error.message);
      socket.user = { _id: `guest_${socket.id.substring(0, 5)}`, name: 'Guest Developer', role: 'USER' };
      next();
    }
  });

  io.on('connection', (socket) => {
    console.log(`[Socket.IO] Client connected: ${socket.id} (${socket.user?.name})`);

    // 1. Join Room Event
    socket.on('joinRoom', async ({ roomId }) => {
      if (!roomId) return;
      const cleanRoomId = roomId.trim().toUpperCase();

      socket.join(cleanRoomId);
      socket.currentRoom = cleanRoomId;

      // Initialize room in cache if not present
      if (!activeRooms.has(cleanRoomId)) {
        activeRooms.set(cleanRoomId, {
          users: new Map(),
          code: '',
          language: 'javascript',
          lastActivity: Date.now(),
        });

        // Try to load initial code from DB
        try {
          const roomDoc = await Room.findOne({ roomId: cleanRoomId });
          if (roomDoc) {
            activeRooms.get(cleanRoomId).code = roomDoc.code || '';
            activeRooms.get(cleanRoomId).language = roomDoc.language || 'javascript';
          }
        } catch (err) {
          console.error('[Socket.IO] Error fetching room from DB:', err.message);
        }
      }

      const roomData = activeRooms.get(cleanRoomId);
      const userInfo = {
        socketId: socket.id,
        userId: socket.user?._id?.toString() || socket.id,
        name: socket.user?.name || 'Anonymous',
        role: socket.user?.role || 'USER',
        profileImage: socket.user?.profileImage || '',
      };

      roomData.users.set(socket.id, userInfo);

      // Send current state to newly joined user
      socket.emit('roomInit', {
        roomId: cleanRoomId,
        code: roomData.code,
        language: roomData.language,
        users: Array.from(roomData.users.values()),
      });

      // Broadcast updated participant roster to all clients in room
      io.to(cleanRoomId).emit('roomUsers', {
        users: Array.from(roomData.users.values()),
      });

      // Notify other users in room
      socket.to(cleanRoomId).emit('userJoined', {
        user: userInfo,
        message: `${userInfo.name} joined the coding room`,
      });

      console.log(`[Socket.IO] ${userInfo.name} joined room: ${cleanRoomId} (Active users: ${roomData.users.size})`);
    });

    // 2. Real-Time Code Sync Event (with Echo Prevention)
    socket.on('codeChange', ({ roomId, code, cursorPosition }) => {
      if (!roomId) return;
      const cleanRoomId = roomId.trim().toUpperCase();
      const roomData = activeRooms.get(cleanRoomId);

      if (roomData) {
        roomData.code = code;
        roomData.lastActivity = Date.now();

        // Broadcast to everyone in room EXCEPT sender
        socket.to(cleanRoomId).emit('codeUpdate', {
          code,
          senderId: socket.id,
          senderName: socket.user?.name,
          cursorPosition,
        });
      }
    });

    // 3. Language Change Event
    socket.on('languageChange', ({ roomId, language, defaultStarterCode }) => {
      if (!roomId) return;
      const cleanRoomId = roomId.trim().toUpperCase();
      const roomData = activeRooms.get(cleanRoomId);

      if (roomData) {
        roomData.language = language;
        if (defaultStarterCode) {
          roomData.code = defaultStarterCode;
        }

        // Broadcast language change to all room members
        io.to(cleanRoomId).emit('languageUpdate', {
          language,
          code: defaultStarterCode || roomData.code,
          updatedBy: socket.user?.name,
        });
      }
    });

    // 4. In-Room Chat Message Event (Persisted to MongoDB)
    socket.on('sendMessage', async ({ roomId, message }) => {
      if (!roomId || !message || !message.trim()) return;
      const cleanRoomId = roomId.trim().toUpperCase();

      try {
        let roomDoc = await Room.findOne({ roomId: cleanRoomId });
        let senderId = socket.user?._id;

        // If user is registered and room exists in DB, persist message
        let savedMessage = null;
        if (roomDoc && senderId && !senderId.toString().startsWith('guest_')) {
          const newMsg = await Message.create({
            room: roomDoc._id,
            sender: senderId,
            message: message.trim(),
          });

          savedMessage = {
            _id: newMsg._id,
            room: cleanRoomId,
            sender: {
              _id: socket.user._id,
              name: socket.user.name,
              role: socket.user.role,
              profileImage: socket.user.profileImage,
            },
            message: newMsg.message,
            createdAt: newMsg.createdAt,
          };
        } else {
          // Ephemeral message for guests
          savedMessage = {
            _id: `msg_${Date.now()}`,
            room: cleanRoomId,
            sender: {
              _id: socket.user?._id || socket.id,
              name: socket.user?.name || 'Guest',
              role: socket.user?.role || 'USER',
            },
            message: message.trim(),
            createdAt: new Date(),
          };
        }

        // Broadcast message to everyone in room (including sender)
        io.to(cleanRoomId).emit('receiveMessage', savedMessage);
      } catch (error) {
        console.error('[Socket.IO] Error handling chat message:', error.message);
      }
    });

    // 5. Typing Indicator Events
    socket.on('typing', ({ roomId }) => {
      if (!roomId) return;
      const cleanRoomId = roomId.trim().toUpperCase();
      socket.to(cleanRoomId).emit('userTyping', {
        userId: socket.user?._id || socket.id,
        name: socket.user?.name || 'Someone',
      });
    });

    socket.on('stopTyping', ({ roomId }) => {
      if (!roomId) return;
      const cleanRoomId = roomId.trim().toUpperCase();
      socket.to(cleanRoomId).emit('userStoppedTyping', {
        userId: socket.user?._id || socket.id,
        name: socket.user?.name || 'Someone',
      });
    });

    // 6. Leave Room Event
    socket.on('leaveRoom', ({ roomId }) => {
      handleUserLeave(socket, roomId);
    });

    // 7. Disconnect Event
    socket.on('disconnect', () => {
      if (socket.currentRoom) {
        handleUserLeave(socket, socket.currentRoom);
      }
      console.log(`[Socket.IO] Client disconnected: ${socket.id}`);
    });
  });

  const handleUserLeave = (socket, roomId) => {
    if (!roomId) return;
    const cleanRoomId = roomId.trim().toUpperCase();
    const roomData = activeRooms.get(cleanRoomId);

    if (roomData && roomData.users.has(socket.id)) {
      const user = roomData.users.get(socket.id);
      roomData.users.delete(socket.id);

      socket.leave(cleanRoomId);

      // Broadcast user left
      socket.to(cleanRoomId).emit('userLeft', {
        user,
        message: `${user.name} left the room`,
      });

      // Broadcast updated participant list
      io.to(cleanRoomId).emit('roomUsers', {
        users: Array.from(roomData.users.values()),
      });

      // Cleanup room cache if empty after 10 minutes of inactivity
      if (roomData.users.size === 0) {
        setTimeout(async () => {
          const current = activeRooms.get(cleanRoomId);
          if (current && current.users.size === 0) {
            // Save latest code snapshot to DB before clearing cache
            try {
              if (current.code) {
                await Room.findOneAndUpdate({ roomId: cleanRoomId }, { code: current.code });
              }
            } catch (err) {
              console.error('[Socket.IO] Error persisting code on room exit:', err.message);
            }
            activeRooms.delete(cleanRoomId);
          }
        }, 600000);
      }
    }
  };
};

module.exports = { initSocket, activeRooms };
