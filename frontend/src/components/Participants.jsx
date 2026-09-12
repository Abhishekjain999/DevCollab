import React from 'react';
import { Users, Crown, UserCheck, Shield, Radio } from 'lucide-react';
import useAuth from '../hooks/useAuth';

export default function Participants({ users = [], roomOwnerId = null }) {
  const { user: currentUser } = useAuth();

  const getRoleBadge = (u) => {
    if (u.userId === roomOwnerId || u.role === 'OWNER') {
      return <span className="badge badge-amber" style={{ fontSize: '0.65rem' }}><Crown size={10} /> Host</span>;
    }
    if (u.role === 'RECRUITER') {
      return <span className="badge badge-rose" style={{ fontSize: '0.65rem' }}>Recruiter</span>;
    }
    if (u.role === 'CANDIDATE') {
      return <span className="badge badge-cyan" style={{ fontSize: '0.65rem' }}>Candidate</span>;
    }
    if (u.role === 'OBSERVER') {
      return <span className="badge badge-primary" style={{ fontSize: '0.65rem' }}>Observer</span>;
    }
    return <span className="badge badge-primary" style={{ fontSize: '0.65rem' }}>Collaborator</span>;
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
      {/* Header */}
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
          <Users size={16} color="#06b6d4" />
          <span>Active Participants</span>
        </div>
        <span className="badge badge-cyan" style={{ fontSize: '0.7rem' }}>
          {users.length} Online
        </span>
      </div>

      {/* Participants Roster */}
      <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {users.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '1rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            No active participants found.
          </div>
        ) : (
          users.map((u, idx) => {
            const isMe = u.userId === currentUser?.id || u.userId === currentUser?._id;
            const initial = (u.name || 'D').charAt(0).toUpperCase();

            return (
              <div
                key={u.socketId || idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0.75rem',
                  background: isMe ? 'rgba(99, 102, 241, 0.08)' : '#111622',
                  borderRadius: 'var(--radius-md)',
                  border: `1px solid ${isMe ? 'rgba(99, 102, 241, 0.25)' : 'var(--border-subtle)'}`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div style={{ position: 'relative' }}>
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                      }}
                    >
                      {initial}
                    </div>
                    <span
                      className="pulse-dot"
                      style={{
                        position: 'absolute',
                        bottom: '-1px',
                        right: '-1px',
                        width: '7px',
                        height: '7px',
                      }}
                    ></span>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {u.name} {isMe && <span style={{ color: '#818cf8', fontWeight: 400 }}>(You)</span>}
                    </div>
                  </div>
                </div>

                <div>{getRoleBadge(u)}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
