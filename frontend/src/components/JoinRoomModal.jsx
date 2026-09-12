import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, LogIn, ArrowRight, Hash } from 'lucide-react';

export default function JoinRoomModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [roomIdInput, setRoomIdInput] = useState('');
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const raw = roomIdInput.trim();
    if (!raw) {
      setError('Please enter a valid Room ID');
      return;
    }

    // Extract room ID if user pasted full URL (e.g., http://localhost:5173/room/DEV-123456)
    let cleanId = raw;
    if (raw.includes('/room/')) {
      cleanId = raw.split('/room/')[1].split('?')[0].split('#')[0];
    }
    cleanId = cleanId.replace(/[^a-zA-Z0-9_-]/g, '').toUpperCase();

    if (cleanId.length < 3) {
      setError('Invalid Room ID format');
      return;
    }

    onClose();
    navigate(`/room/${cleanId}`);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '440px' }}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div className="logo-icon-box" style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #06b6d4, #3b82f6)' }}>
              <LogIn size={16} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Join Coding Room</h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Enter the room ID or paste the invite link
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="btn btn-secondary btn-sm"
            style={{ padding: '0.3rem', borderRadius: 'var(--radius-sm)' }}
          >
            <X size={16} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            {error && (
              <div style={{ background: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.3)', color: '#fda4af', padding: '0.75rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', fontSize: '0.85rem' }}>
                {error}
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Room ID / Link</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  className="form-input"
                  style={{ fontFamily: 'var(--font-mono)', paddingLeft: '2.5rem', letterSpacing: '0.05em' }}
                  placeholder="e.g. DEV-8X2K9L or paste link"
                  value={roomIdInput}
                  onChange={(e) => {
                    setRoomIdInput(e.target.value);
                    setError(null);
                  }}
                  autoFocus
                  required
                />
                <Hash 
                  size={16} 
                  style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} 
                />
              </div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                Room IDs are formatted like <code>DEV-XXXXXX</code> or <code>INT-XXXXXX</code>
              </p>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              <ArrowRight size={16} />
              Enter Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
