import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  User, 
  Code2, 
  CheckCircle2, 
  Clock, 
  Terminal, 
  Plus, 
  ArrowRight, 
  RefreshCw, 
  Layers, 
  Calendar, 
  Sparkles, 
  Award,
  AlertCircle,
  FileCode2,
  ExternalLink,
  Play
} from 'lucide-react';
import useAuth from '../hooks/useAuth';
import submissionService from '../services/submissionService';
import roomService from '../services/roomService';
import CreateRoomModal from '../components/CreateRoomModal';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [submissions, setSubmissions] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('submissions'); // 'submissions' | 'rooms'
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const [subRes, roomRes] = await Promise.all([
        submissionService.getSubmissions({ limit: 20 }),
        roomService.getRooms({ limit: 10 }),
      ]);

      if (subRes.success && subRes.data?.submissions) {
        setSubmissions(subRes.data.submissions);
      }
      if (roomRes.success && roomRes.data?.rooms) {
        setRooms(roomRes.data.rooms);
      }
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  // Compute Metrics
  const acceptedSubmissions = submissions.filter((s) => s.status === 'ACCEPTED');
  const uniqueSolvedProblems = new Set(
    acceptedSubmissions.map((s) => s.problem?._id || s.problem?.slug).filter(Boolean)
  );

  const easySolved = acceptedSubmissions.filter((s) => s.problem?.difficulty === 'EASY').length;
  const mediumSolved = acceptedSubmissions.filter((s) => s.problem?.difficulty === 'MEDIUM').length;
  const hardSolved = acceptedSubmissions.filter((s) => s.problem?.difficulty === 'HARD').length;

  const acceptanceRate = submissions.length > 0 
    ? Math.round((acceptedSubmissions.length / submissions.length) * 100) 
    : 0;

  const statusBadge = (status) => {
    switch (status) {
      case 'ACCEPTED':
        return <span className="badge badge-emerald">ACCEPTED</span>;
      case 'WRONG_ANSWER':
        return <span className="badge badge-rose">WRONG ANSWER</span>;
      case 'RUNTIME_ERROR':
        return <span className="badge badge-amber">RUNTIME ERROR</span>;
      case 'TIME_LIMIT_EXCEEDED':
        return <span className="badge badge-rose">TIME LIMIT EXCEEDED</span>;
      case 'COMPILE_ERROR':
        return <span className="badge badge-rose">COMPILE ERROR</span>;
      default:
        return <span className="badge">{status}</span>;
    }
  };

  return (
    <div style={{ minHeight: '100vh', padding: '2.5rem 0 4rem' }}>
      <div className="container">
        {/* PROFILE BANNER */}
        <div className="card card-glow" style={{ padding: '2rem', marginBottom: '2rem' }}>
          <div className="flex-between" style={{ flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div className="user-avatar avatar-lg">
                {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
                  <h1 style={{ fontSize: '1.75rem', fontWeight: 800 }}>{user?.name || 'Developer'}</h1>
                  <span className="badge badge-primary">{user?.role || 'USER'}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  <span>{user?.email}</span>
                  <span>•</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Calendar size={14} /> Member since {new Date(user?.createdAt || Date.now()).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button onClick={() => setIsCreateOpen(true)} className="btn btn-primary">
                <Plus size={16} />
                Create Room
              </button>
              <Link to="/problems" className="btn btn-secondary">
                <FileCode2 size={16} />
                Problem Bank
              </Link>
            </div>
          </div>
        </div>

        {/* METRICS GRID */}
        <div className="grid-4" style={{ marginBottom: '2rem' }}>
          <div className="card">
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
              Unique Problems Solved
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Award size={24} color="#10b981" />
              <span>{uniqueSolvedProblems.size}</span>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 400 }}>/ 70+</span>
            </div>
          </div>

          <div className="card">
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
              Total Submissions
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Terminal size={24} color="#6366f1" />
              <span>{submissions.length}</span>
            </div>
          </div>

          <div className="card">
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
              Acceptance Rate
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#06b6d4', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={24} color="#06b6d4" />
              <span>{acceptanceRate}%</span>
            </div>
          </div>

          <div className="card">
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
              Active Coding Rooms
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Code2 size={24} color="#f59e0b" />
              <span>{rooms.filter((r) => r.isActive).length}</span>
            </div>
          </div>
        </div>

        {/* DIFFICULTY BREAKDOWN CARD */}
        <div className="card" style={{ padding: '1.5rem', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>Problem Difficulty Breakdown</h3>
          <div className="grid-3">
            <div>
              <div className="flex-between" style={{ marginBottom: '0.4rem', fontSize: '0.85rem' }}>
                <span style={{ color: '#10b981', fontWeight: 600 }}>Easy Problems</span>
                <span style={{ color: 'var(--text-muted)' }}>{easySolved} Solved</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                <div style={{ width: `${Math.min(100, (easySolved / 26) * 100)}%`, height: '100%', background: '#10b981', borderRadius: 'var(--radius-full)' }}></div>
              </div>
            </div>

            <div>
              <div className="flex-between" style={{ marginBottom: '0.4rem', fontSize: '0.85rem' }}>
                <span style={{ color: '#f59e0b', fontWeight: 600 }}>Medium Problems</span>
                <span style={{ color: 'var(--text-muted)' }}>{mediumSolved} Solved</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                <div style={{ width: `${Math.min(100, (mediumSolved / 42) * 100)}%`, height: '100%', background: '#f59e0b', borderRadius: 'var(--radius-full)' }}></div>
              </div>
            </div>

            <div>
              <div className="flex-between" style={{ marginBottom: '0.4rem', fontSize: '0.85rem' }}>
                <span style={{ color: '#f43f5e', fontWeight: 600 }}>Hard Problems</span>
                <span style={{ color: 'var(--text-muted)' }}>{hardSolved} Solved</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                <div style={{ width: `${Math.min(100, (hardSolved / 5) * 100)}%`, height: '100%', background: '#f43f5e', borderRadius: 'var(--radius-full)' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* TABS: SUBMISSIONS VS ROOMS */}
        <div className="tabs-header">
          <button 
            className={`tab-btn ${activeTab === 'submissions' ? 'active' : ''}`}
            onClick={() => setActiveTab('submissions')}
          >
            <Terminal size={16} />
            Submission Records ({submissions.length})
          </button>
          <button 
            className={`tab-btn ${activeTab === 'rooms' ? 'active' : ''}`}
            onClick={() => setActiveTab('rooms')}
          >
            <Code2 size={16} />
            Recent Coding Rooms ({rooms.length})
          </button>
        </div>

        {/* TAB 1: SUBMISSIONS TABLE */}
        {activeTab === 'submissions' && (
          <div className="data-table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Problem</th>
                  <th>Language</th>
                  <th>Test Suite</th>
                  <th>Runtime</th>
                  <th>Submitted At</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="6" style={{ textAlign: 'center', padding: '2rem' }}>
                      <RefreshCw size={18} className="spin" style={{ margin: '0 auto 0.4rem' }} />
                      <div>Loading submissions...</div>
                    </td>
                  </tr>
                ) : submissions.length === 0 ? (
                  <tr>
                    <td colSpan="6" style={{ textAlign: 'center', padding: '3rem' }}>
                      <FileCode2 size={24} color="var(--text-muted)" style={{ margin: '0 auto 0.5rem' }} />
                      <div style={{ fontWeight: 600 }}>No submissions yet</div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                        Start a coding room and submit your first solution!
                      </p>
                      <button onClick={() => setIsCreateOpen(true)} className="btn btn-primary btn-sm" style={{ marginTop: '1rem' }}>
                        <Play size={12} />
                        Solve a Challenge
                      </button>
                    </td>
                  </tr>
                ) : (
                  submissions.map((sub) => (
                    <tr key={sub._id}>
                      <td>{statusBadge(sub.status)}</td>
                      <td>
                        <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                          {sub.problem?.title || 'Custom Challenge'}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          {sub.problem?.category || 'Algorithm'}
                        </div>
                      </td>
                      <td>
                        <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                          {sub.language}
                        </span>
                      </td>
                      <td>
                        <span style={{ fontWeight: 600, color: sub.passedTests === sub.totalTests ? '#10b981' : '#f59e0b' }}>
                          {sub.passedTests} / {sub.totalTests} Passed
                        </span>
                      </td>
                      <td>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                          {sub.runtime} ms
                        </span>
                      </td>
                      <td style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        {new Date(sub.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 2: ROOMS TABLE */}
        {activeTab === 'rooms' && (
          <div className="data-table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Room ID</th>
                  <th>Room Name</th>
                  <th>Problem</th>
                  <th>Type</th>
                  <th>Participants</th>
                  <th>Status</th>
                  <th style={{ textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="7" style={{ textAlign: 'center', padding: '2rem' }}>
                      <RefreshCw size={18} className="spin" style={{ margin: '0 auto 0.4rem' }} />
                      <div>Loading rooms...</div>
                    </td>
                  </tr>
                ) : rooms.length === 0 ? (
                  <tr>
                    <td colSpan="7" style={{ textAlign: 'center', padding: '3rem' }}>
                      <Code2 size={24} color="var(--text-muted)" style={{ margin: '0 auto 0.5rem' }} />
                      <div style={{ fontWeight: 600 }}>No active coding rooms</div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                        Create a new room to collaborate with peers in real-time.
                      </p>
                      <button onClick={() => setIsCreateOpen(true)} className="btn btn-primary btn-sm" style={{ marginTop: '1rem' }}>
                        <Plus size={12} />
                        New Coding Room
                      </button>
                    </td>
                  </tr>
                ) : (
                  rooms.map((r) => (
                    <tr key={r._id}>
                      <td>
                        <code style={{ color: '#38bdf8', fontWeight: 600 }}>{r.roomId}</code>
                      </td>
                      <td>
                        <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{r.name}</div>
                      </td>
                      <td>
                        <span style={{ fontSize: '0.85rem' }}>{r.problem?.title || 'Freeform Practice'}</span>
                      </td>
                      <td>
                        <span className={`badge ${r.type === 'INTERVIEW' ? 'badge-amber' : 'badge-primary'}`}>
                          {r.type}
                        </span>
                      </td>
                      <td>
                        <span>{r.participants?.length || 1} online</span>
                      </td>
                      <td>
                        {r.isActive ? (
                          <span className="badge badge-emerald">
                            <span className="pulse-dot"></span> Active
                          </span>
                        ) : (
                          <span className="badge">Closed</span>
                        )}
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <button
                          onClick={() => navigate(`/room/${r.roomId}`)}
                          className="btn btn-secondary btn-sm"
                        >
                          <ExternalLink size={14} />
                          Enter Room
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <CreateRoomModal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} />
    </div>
  );
}
