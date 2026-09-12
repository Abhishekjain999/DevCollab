import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Sparkles, Code2, Users, Shield, ArrowRight, Loader2 } from 'lucide-react';
import roomService from '../services/roomService';
import problemService from '../services/problemService';
import useAuth from '../hooks/useAuth';

export default function CreateRoomModal({ isOpen, onClose, defaultProblem = null, defaultType = 'PRACTICE' }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [name, setName] = useState('');
  const [selectedProblemId, setSelectedProblemId] = useState(defaultProblem?._id || defaultProblem?.slug || '');
  const [language, setLanguage] = useState('javascript');
  const [type, setType] = useState(defaultType);
  const [permission, setPermission] = useState('COLLABORATIVE');
  const [problems, setProblems] = useState([]);
  const [loadingProblems, setLoadingProblems] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setName(`${user?.name ? user.name.split(' ')[0] : 'Developer'}'s Coding Session`);
      if (defaultProblem) {
        setSelectedProblemId(defaultProblem._id || defaultProblem.slug);
      }
      setType(defaultType);
      fetchProblems();
    }
  }, [isOpen, user, defaultProblem, defaultType]);

  const fetchProblems = async () => {
    setLoadingProblems(true);
    try {
      const res = await problemService.getProblems({ limit: 100 });
      if (res.success && res.data?.problems) {
        setProblems(res.data.problems);
        if (!selectedProblemId && res.data.problems.length > 0) {
          setSelectedProblemId(res.data.problems[0]._id);
        }
      }
    } catch (err) {
      console.error('Failed to load problems:', err);
    } finally {
      setLoadingProblems(false);
    }
  };

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide a room name');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const payload = {
        name: name.trim(),
        problemId: selectedProblemId || undefined,
        language,
        type,
        permission,
      };

      const res = await roomService.createRoom(payload);
      if (res.success && res.data?.room) {
        onClose();
        navigate(`/room/${res.data.room.roomId}`);
      } else {
        setError(res.message || 'Failed to create coding room');
      }
    } catch (err) {
      setError(err.message || 'Error creating room');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div className="logo-icon-box" style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #6366f1, #06b6d4)' }}>
              <Code2 size={16} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                {type === 'INTERVIEW' ? 'Create Technical Interview' : 'Create Collaborative Room'}
              </h3>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Instant real-time room with Monaco Editor & Double-Blind runner
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
              <label className="form-label">Room Name</label>
              <input
                type="text"
                className="form-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Graph Algorithms Practice"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Select DSA Problem</label>
              <select
                className="form-select"
                value={selectedProblemId}
                onChange={(e) => setSelectedProblemId(e.target.value)}
                disabled={loadingProblems}
              >
                <option value="">-- Practice Freeform (No Problem) --</option>
                {problems.map((prob) => (
                  <option key={prob._id} value={prob._id}>
                    [{prob.difficulty}] {prob.title} ({prob.category})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid-2">
              <div className="form-group">
                <label className="form-label">Default Language</label>
                <select
                  className="form-select"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="javascript">JavaScript (Node.js)</option>
                  <option value="python">Python 3</option>
                  <option value="cpp">C++ (GCC)</option>
                  <option value="java">Java 15</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Room Type</label>
                <select
                  className="form-select"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="PRACTICE">Collaborative Practice</option>
                  <option value="INTERVIEW">Technical Interview</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Participant Permissions</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={() => setPermission('COLLABORATIVE')}
                  style={{
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-md)',
                    border: permission === 'COLLABORATIVE' ? '1px solid #6366f1' : '1px solid var(--border-subtle)',
                    background: permission === 'COLLABORATIVE' ? 'rgba(99, 102, 241, 0.15)' : 'var(--bg-input)',
                    color: permission === 'COLLABORATIVE' ? '#ffffff' : 'var(--text-secondary)',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Users size={14} color="#6366f1" /> Collaborative
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                    All participants edit code synchronously
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPermission('READ_ONLY')}
                  style={{
                    padding: '0.75rem',
                    borderRadius: 'var(--radius-md)',
                    border: permission === 'READ_ONLY' ? '1px solid #10b981' : '1px solid var(--border-subtle)',
                    background: permission === 'READ_ONLY' ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-input)',
                    color: permission === 'READ_ONLY' ? '#ffffff' : 'var(--text-secondary)',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Shield size={14} color="#10b981" /> Interview Mode
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                    Interviewer observes, candidate edits
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={submitting}>
              {submitting ? (
                <>
                  <Loader2 size={16} className="spin" />
                  Creating Room...
                </>
              ) : (
                <>
                  <Sparkles size={16} />
                  Launch Room
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
