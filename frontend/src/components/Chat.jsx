import React, { useState, useRef, useEffect } from 'react';
import { Send, MessageSquare, User, Sparkles } from 'lucide-react';
import useAuth from '../hooks/useAuth';

export default function Chat({
  messages = [],
  onSendMessage,
  onTyping,
  typingUsers = [],
}) {
  const [inputText, setInputText] = useState('');
  const { user } = useAuth();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, typingUsers]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    onSendMessage(inputText.trim());
    setInputText('');
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    if (onTyping) onTyping();
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: '#0d111a',
        borderLeft: '1px solid var(--border-subtle)',
      }}
    >
      {/* Chat Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1rem',
          borderBottom: '1px solid var(--border-subtle)',
          background: '#090c14',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, fontSize: '0.875rem' }}>
          <MessageSquare size={16} color="#6366f1" />
          <span>Room Discussion</span>
        </div>
        <span className="badge badge-primary" style={{ fontSize: '0.65rem' }}>
          Real-Time
        </span>
      </div>

      {/* Messages Scroll Area */}
      <div
        style={{
          flex: 1,
          padding: '1rem',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.85rem',
        }}
      >
        {messages.length === 0 ? (
          <div style={{ textAlign: 'center', margin: 'auto 0', color: 'var(--text-muted)', fontSize: '0.825rem' }}>
            <MessageSquare size={24} style={{ margin: '0 auto 0.5rem', opacity: 0.3 }} />
            <p>No messages yet in this room.</p>
            <p style={{ fontSize: '0.75rem', marginTop: '0.2rem' }}>Discuss algorithms, ask questions, or share tips!</p>
          </div>
        ) : (
          messages.map((msg, idx) => {
            const isMe = msg.sender?._id === user?.id || msg.sender?._id === user?._id;
            const senderName = msg.sender?.name || 'Developer';
            const initial = senderName.charAt(0).toUpperCase();

            return (
              <div
                key={msg._id || idx}
                style={{
                  display: 'flex',
                  gap: '0.6rem',
                  alignItems: 'flex-start',
                }}
              >
                {/* Avatar Initials */}
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: isMe ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : '#1e293b',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {initial}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                    <span style={{ fontSize: '0.775rem', fontWeight: 600, color: isMe ? '#a5b4fc' : 'var(--text-primary)' }}>
                      {senderName} {isMe && '(You)'}
                    </span>
                    <span style={{ fontSize: '0.675rem', color: 'var(--text-dim)' }}>
                      {msg.createdAt ? new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                    </span>
                  </div>

                  <div
                    style={{
                      background: isMe ? 'rgba(99, 102, 241, 0.12)' : '#121724',
                      border: `1px solid ${isMe ? 'rgba(99, 102, 241, 0.25)' : 'var(--border-subtle)'}`,
                      padding: '0.5rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.825rem',
                      color: 'var(--text-primary)',
                      lineHeight: '1.5',
                      wordBreak: 'break-word',
                    }}
                  >
                    {msg.message}
                  </div>
                </div>
              </div>
            );
          })
        )}

        {/* Typing Indicator */}
        {typingUsers.length > 0 && (
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span className="pulse-dot" style={{ width: '6px', height: '6px' }}></span>
            <span>{typingUsers.join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Message Input Box */}
      <form
        onSubmit={handleSubmit}
        style={{
          padding: '0.75rem',
          borderTop: '1px solid var(--border-subtle)',
          background: '#090c14',
          display: 'flex',
          gap: '0.5rem',
        }}
      >
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type a message... (e.g. Try hashmap here)"
          style={{
            flex: 1,
            background: 'var(--bg-input)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '0.5rem 0.75rem',
            color: 'var(--text-primary)',
            fontSize: '0.825rem',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          disabled={!inputText.trim()}
          className="btn btn-primary btn-sm"
          style={{ padding: '0.5rem 0.75rem' }}
        >
          <Send size={13} />
        </button>
      </form>
    </div>
  );
}
