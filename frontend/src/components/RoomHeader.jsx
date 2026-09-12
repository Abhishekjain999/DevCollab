import React, { useState } from 'react';
import { 
  Code2, 
  Copy, 
  Check, 
  Users, 
  Save, 
  LogOut, 
  Globe, 
  Lock, 
  FileCode, 
  Sparkles,
  ChevronDown
} from 'lucide-react';

export default function RoomHeader({
  room,
  language,
  onLanguageChange,
  onSaveSession,
  onLeaveRoom,
  participantCount = 1,
  isOwner = false,
  isSaving = false,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const fullUrl = window.location.href;
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const languages = [
    { id: 'javascript', label: 'JavaScript' },
    { id: 'python', label: 'Python 3' },
    { id: 'java', label: 'Java' },
    { id: 'cpp', label: 'C++' },
    { id: 'c', label: 'C' },
  ];

  const difficultyColors = {
    EASY: 'badge-emerald',
    MEDIUM: 'badge-amber',
    HARD: 'badge-rose',
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.65rem 1.25rem',
        background: '#0d111a',
        borderBottom: '1px solid var(--border-subtle)',
        gap: '1rem',
        flexWrap: 'wrap',
      }}
    >
      {/* Left: Room & Problem Info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
        <div className="logo-icon-box" style={{ width: '32px', height: '32px' }}>
          <Code2 size={18} />
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>
              {room?.name || 'Coding Room'}
            </span>
            <span className="badge badge-primary" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>
              {room?.roomId}
            </span>
            {room?.type === 'INTERVIEW' && (
              <span className="badge badge-rose" style={{ fontSize: '0.65rem' }}>
                INTERVIEW MODE
              </span>
            )}
            {room?.visibility === 'PRIVATE' ? (
              <Lock size={13} color="var(--text-muted)" title="Private Room" />
            ) : (
              <Globe size={13} color="var(--text-muted)" title="Public Room" />
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            <FileCode size={12} />
            <span>Problem: <strong>{room?.problem?.title || 'Custom Challenge'}</strong></span>
            {room?.problem?.difficulty && (
              <span className={`badge ${difficultyColors[room.problem.difficulty] || 'badge-primary'}`} style={{ padding: '0.1rem 0.45rem', fontSize: '0.65rem' }}>
                {room.problem.difficulty}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Right: Controls & Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
        {/* Language Selector */}
        <div style={{ position: 'relative' }}>
          <select
            value={language}
            onChange={(e) => onLanguageChange(e.target.value)}
            style={{
              appearance: 'none',
              background: 'var(--bg-input)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '0.4rem 2rem 0.4rem 0.75rem',
              fontSize: '0.8rem',
              fontWeight: 500,
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            {languages.map((lang) => (
              <option key={lang.id} value={lang.id} style={{ background: '#111622', color: '#fff' }}>
                {lang.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={14}
            color="var(--text-muted)"
            style={{
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Copy Shareable Room Link */}
        <button
          onClick={handleCopyLink}
          className="btn btn-secondary btn-sm"
          title="Copy shareable link"
        >
          {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
          <span>{copied ? 'Copied!' : 'Copy Link'}</span>
        </button>

        {/* Participants Pill */}
        <div
          className="badge badge-cyan"
          style={{ padding: '0.4rem 0.7rem', fontSize: '0.775rem', fontWeight: 600 }}
          title={`${participantCount} user(s) currently online`}
        >
          <span className="pulse-dot"></span>
          <Users size={13} style={{ marginLeft: '2px' }} />
          <span>{participantCount}</span>
        </div>

        {/* Save Session */}
        {onSaveSession && (
          <button
            onClick={onSaveSession}
            disabled={isSaving}
            className="btn btn-secondary btn-sm"
            title="Save coding session"
          >
            <Save size={14} />
            <span>{isSaving ? 'Saving...' : 'Save'}</span>
          </button>
        )}

        {/* Leave Room */}
        <button
          onClick={onLeaveRoom}
          className="btn btn-secondary btn-sm"
          style={{ borderColor: 'rgba(244, 63, 94, 0.3)', color: '#fda4af' }}
          title="Leave this room"
        >
          <LogOut size={14} />
          <span>{isOwner ? 'Leave' : 'Leave'}</span>
        </button>
      </div>
    </div>
  );
}
