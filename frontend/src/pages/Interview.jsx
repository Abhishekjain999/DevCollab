import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Shield, 
  Sparkles, 
  Copy, 
  Check, 
  Play, 
  ExternalLink, 
  Code2, 
  FileText, 
  Clock, 
  SlidersHorizontal,
  CheckCircle2,
  Lock,
  Loader2
} from 'lucide-react';
import useAuth from '../hooks/useAuth';
import problemService from '../services/problemService';
import roomService from '../services/roomService';

export default function Interview() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [problems, setProblems] = useState([]);
  const [loadingProblems, setLoadingProblems] = useState(true);
  const [candidateName, setCandidateName] = useState('');
  const [interviewTitle, setInterviewTitle] = useState('');
  const [selectedProblemId, setSelectedProblemId] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [permission, setPermission] = useState('READ_ONLY'); // Interview Mode: Interviewer observes
  
  const [createdRoom, setCreatedRoom] = useState(null);
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProblems();
  }, []);

  const fetchProblems = async () => {
    setLoadingProblems(true);
    try {
      const res = await problemService.getProblems({ limit: 100 });
      if (res.success && res.data?.problems) {
        setProblems(res.data.problems);
        if (res.data.problems.length > 0) {
          setSelectedProblemId(res.data.problems[0]._id);
        }
      }
    } catch (err) {
      console.error('Failed to load problems:', err);
    } finally {
      setLoadingProblems(false);
    }
  };

  const handleCreateInterview = async (e) => {
    e.preventDefault();
    if (!interviewTitle.trim()) {
      setError('Please provide an interview title');
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      const payload = {
        name: interviewTitle.trim(),
        problemId: selectedProblemId,
        language,
        type: 'INTERVIEW',
        permission,
      };

      const res = await roomService.createRoom(payload);
      if (res.success && res.data?.room) {
        setCreatedRoom(res.data.room);
      } else {
        setError(res.message || 'Failed to create interview session');
      }
    } catch (err) {
      setError(err.message || 'Error creating interview session');
    } finally {
      setSubmitting(false);
    }
  };

  const copyInviteLink = () => {
    if (!createdRoom) return;
    const url = `${window.location.origin}/room/${createdRoom.roomId}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div style={{ minHeight: '100vh', padding: '2.5rem 0 4rem' }}>
      <div className="container">
        {/* HEADER */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'inline-flex', marginBottom: '0.4rem' }}>
            <span className="badge badge-emerald">
              <Users size={14} />
              Recruiter & Interview Suite
            </span>
          </div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Technical Interview Console</h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '680px', fontSize: '0.95rem' }}>
            Conduct live coding assessments with real-time synchronized Monaco Editor, custom DSA assignments, candidate permission toggling, and automated double-blind evaluations.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem', alignItems: 'start' }}>
          {/* INTERVIEW GENERATOR CARD */}
          <div className="card card-glow" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.4rem' }}>
              Schedule Live Technical Interview
            </h2>
            <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Assign a challenge and send the candidate their unique live room link.
            </p>

            {error && (
              <div style={{ background: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.3)', color: '#fda4af', padding: '0.75rem', borderRadius: 'var(--radius-md)', marginBottom: '1.25rem', fontSize: '0.85rem' }}>
                {error}
              </div>
            )}

            <form onSubmit={handleCreateInterview}>
              <div className="form-group">
                <label className="form-label">Interview Title / Position</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Senior Backend Engineer - Round 1"
                  value={interviewTitle}
                  onChange={(e) => setInterviewTitle(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Candidate Name (Optional)</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Rahul Sharma"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Assign DSA Challenge</label>
                <select
                  className="form-select"
                  value={selectedProblemId}
                  onChange={(e) => setSelectedProblemId(e.target.value)}
                  disabled={loadingProblems}
                >
                  {problems.map((p) => (
                    <option key={p._id} value={p._id}>
                      [{p.difficulty}] {p.title} ({p.category})
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
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python 3</option>
                    <option value="cpp">C++</option>
                    <option value="java">Java</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Interviewer Control</label>
                  <select
                    className="form-select"
                    value={permission}
                    onChange={(e) => setPermission(e.target.value)}
                  >
                    <option value="COLLABORATIVE">Pair Coding (Both Edit)</option>
                    <option value="READ_ONLY">Observer Mode</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.75rem', marginTop: '0.5rem' }}
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <Loader2 size={16} className="spin" />
                    Generating Session...
                  </>
                ) : (
                  <>
                    <Sparkles size={16} />
                    Generate Interview Room
                  </>
                )}
              </button>
            </form>

            {/* CREATED INTERVIEW ROOM BANNER */}
            {createdRoom && (
              <div style={{ marginTop: '1.75rem', padding: '1.25rem', background: '#0a0d14', borderRadius: 'var(--radius-md)', border: '1px solid var(--accent-emerald)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  <CheckCircle2 size={16} />
                  Interview Room Ready! (ID: {createdRoom.roomId})
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                  <input
                    type="text"
                    readOnly
                    className="form-input"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#38bdf8' }}
                    value={`${window.location.origin}/room/${createdRoom.roomId}`}
                  />
                  <button onClick={copyInviteLink} className="btn btn-secondary btn-sm" style={{ whiteSpace: 'nowrap' }}>
                    {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>

                <button
                  onClick={() => navigate(`/room/${createdRoom.roomId}`)}
                  className="btn btn-success"
                  style={{ width: '100%' }}
                >
                  <ExternalLink size={16} />
                  Enter Live Interview as Interviewer
                </button>
              </div>
            )}
          </div>

          {/* INTERVIEWER VALUE PILLARS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="card">
              <div className="logo-icon-box" style={{ background: '#10b981', marginBottom: '0.75rem', width: '36px', height: '36px' }}>
                <Shield size={18} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Double-Blind Test Security
              </h3>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                Candidates can only run sample tests. Hidden test cases evaluate strictly on the server, guaranteeing fairness and preventing test tampering.
              </p>
            </div>

            <div className="card">
              <div className="logo-icon-box" style={{ background: '#06b6d4', marginBottom: '0.75rem', width: '36px', height: '36px' }}>
                <Code2 size={18} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Monaco Keystroke Synchronization
              </h3>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                Watch candidate coding in real-time, inspect problem-solving flow, and guide them with real-time cursor presence and collaborative chat.
              </p>
            </div>

            <div className="card">
              <div className="logo-icon-box" style={{ background: '#6366f1', marginBottom: '0.75rem', width: '36px', height: '36px' }}>
                <Clock size={18} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Session Snapshots & History
              </h3>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                Automatic snapshots and diffs record the candidate's complete interview trajectory for subsequent hiring committee reviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
