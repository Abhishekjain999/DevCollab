import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Code2, 
  Terminal, 
  Database, 
  Radio, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Sparkles, 
  FileCode2, 
  Users, 
  GitBranch, 
  SlidersHorizontal,
  Server,
  Zap,
  Lock,
  MessageSquare,
  RefreshCw,
  Search
} from 'lucide-react';
import { checkHealth } from '../services/api';
import problemService from '../services/problemService';
import CreateRoomModal from '../components/CreateRoomModal';
import JoinRoomModal from '../components/JoinRoomModal';

export default function Home() {
  const navigate = useNavigate();
  const [healthData, setHealthData] = useState(null);
  const [latency, setLatency] = useState(null);
  const [loadingHealth, setLoadingHealth] = useState(true);
  const [popularProblems, setPopularProblems] = useState([]);
  const [loadingProblems, setLoadingProblems] = useState(true);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  const fetchHealthStatus = async () => {
    setLoadingHealth(true);
    const startTime = performance.now();
    try {
      const data = await checkHealth();
      const endTime = performance.now();
      setLatency(Math.round(endTime - startTime));
      setHealthData(data);
    } catch (err) {
      setHealthData(null);
    } finally {
      setLoadingHealth(false);
    }
  };

  const fetchFeaturedProblems = async () => {
    setLoadingProblems(true);
    try {
      const res = await problemService.getProblems({ limit: 6 });
      if (res.success && res.data?.problems) {
        setPopularProblems(res.data.problems);
      }
    } catch (err) {
      console.error('Error fetching problems:', err);
    } finally {
      setLoadingProblems(false);
    }
  };

  useEffect(() => {
    fetchHealthStatus();
    fetchFeaturedProblems();
  }, []);

  const categories = [
    { name: 'Arrays', count: '10 Problems', slug: 'Arrays', desc: 'Two Sum, 3Sum, Product of Array Except Self...' },
    { name: 'Strings', count: '10 Problems', slug: 'Strings', desc: 'Valid Palindrome, Group Anagrams, Longest Palindrome...' },
    { name: 'Dynamic Programming', count: '10 Problems', slug: 'Dynamic Programming', desc: 'Climbing Stairs, Coin Change, Word Break...' },
    { name: 'Graphs', count: '10 Problems', slug: 'Graphs', desc: 'Number of Islands, Course Schedule, Rotting Oranges...' },
    { name: 'Trees', count: '10 Problems', slug: 'Trees', desc: 'Max Depth, Invert Tree, Binary Tree Level Order...' },
    { name: 'HashMap / HashSet', count: '10 Problems', slug: 'HashMap / HashSet', desc: 'Contains Duplicate, Longest Consecutive Sequence...' },
    { name: 'Sliding Window', count: '10 Problems', slug: 'Sliding Window', desc: 'Longest Substring Without Repeating Characters...' },
  ];

  const difficultyBadge = (diff) => {
    switch (diff) {
      case 'EASY':
        return <span className="badge badge-emerald">EASY</span>;
      case 'MEDIUM':
        return <span className="badge badge-amber">MEDIUM</span>;
      case 'HARD':
        return <span className="badge badge-rose">HARD</span>;
      default:
        return <span className="badge">{diff}</span>;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <main style={{ flex: 1 }}>
        {/* HERO SECTION */}
        <section style={{ padding: '4.5rem 0 3.5rem', position: 'relative' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', marginBottom: '1.25rem' }}>
              <span className="badge badge-primary" style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}>
                <Sparkles size={14} />
                Real-Time Collaborative Coding & DSA Platform
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              DEV COLLAB
            </h1>
            <p className="gradient-text" style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '1.5rem' }}>
              "Code together. Build together."
            </p>

            <p style={{ maxWidth: '720px', margin: '0 auto 2.5rem', color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7 }}>
              Solve 70+ curated DSA challenges with peers, write and sync code in real-time in Monaco Editor, chat live, and run solutions against double-blind test suites.
            </p>

            {/* QUICK ACTION BUTTONS */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <button onClick={() => setIsCreateOpen(true)} className="btn btn-primary btn-lg">
                <Play size={18} />
                Create Coding Room
              </button>
              <button onClick={() => setIsJoinOpen(true)} className="btn btn-secondary btn-lg">
                <Terminal size={18} />
                Join via Room ID
              </button>
              <Link to="/problems" className="btn btn-secondary btn-lg">
                <FileCode2 size={18} />
                Explore 70+ Problems
              </Link>
            </div>

            {/* LIVE SERVER TELEMETRY BADGE */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '0.6rem 1.25rem', background: 'rgba(17, 22, 34, 0.8)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-full)', backdropFilter: 'blur(10px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="pulse-dot"></span>
                <span style={{ fontSize: '0.825rem', color: '#10b981', fontWeight: 600 }}>
                  MongoDB & Sandboxed Execution Online
                </span>
              </div>
              <span style={{ color: 'var(--border-subtle)' }}>|</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Ping: {latency ? `${latency}ms` : 'Ready'}
              </span>
            </div>
          </div>
        </section>

        {/* 4 PRODUCT PILLARS */}
        <section style={{ padding: '2.5rem 0', background: 'rgba(255, 255, 255, 0.01)' }}>
          <div className="container">
            <div className="grid-4">
              <div className="card">
                <div className="logo-icon-box" style={{ background: '#6366f1', marginBottom: '1rem' }}>
                  <Code2 size={20} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                  Monaco VS Code Editor
                </h3>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                  Full multi-language IDE with syntax highlighting, indentation, shortcuts, and auto-formatting.
                </p>
              </div>

              <div className="card">
                <div className="logo-icon-box" style={{ background: '#06b6d4', marginBottom: '1rem' }}>
                  <Radio size={20} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                  Socket.IO Real-time Sync
                </h3>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                  Synchronized collaborative code editing, cursor positions, live participant presence, and in-room chat.
                </p>
              </div>

              <div className="card">
                <div className="logo-icon-box" style={{ background: '#10b981', marginBottom: '1rem' }}>
                  <ShieldCheck size={20} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                  Double-Blind Security
                </h3>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                  Visible sample tests for debugging; hidden edge-case test suites evaluated strictly in sandboxed isolation.
                </p>
              </div>

              <div className="card">
                <div className="logo-icon-box" style={{ background: '#d946ef', marginBottom: '1rem' }}>
                  <Users size={20} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                  Recruiter & Interview Mode
                </h3>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                  One-click interview room generation with candidate permissions, problem assignments, and live scorecards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 70+ PROBLEM CATEGORIES GRID */}
        <section style={{ padding: '4rem 0' }}>
          <div className="container">
            <div className="flex-between" style={{ marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="badge badge-cyan" style={{ marginBottom: '0.5rem' }}>
                  Comprehensive DSA Catalog
                </span>
                <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>Curated Problem Bank</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  7 core algorithm tracks with 10+ real problems each, sample test cases, and starter code.
                </p>
              </div>
              <Link to="/problems" className="btn btn-secondary">
                View All 70+ Problems
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid-3">
              {categories.map((cat, idx) => (
                <div 
                  key={idx} 
                  className="card"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate(`/problems?category=${encodeURIComponent(cat.slug)}`)}
                >
                  <div className="flex-between" style={{ marginBottom: '0.75rem' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{cat.name}</h4>
                    <span className="badge badge-primary">{cat.count}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    {cat.desc}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-cyan)', fontSize: '0.8rem', fontWeight: 600 }}>
                    <span>Explore Track</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED PROBLEMS LIST PREVIEW */}
        <section style={{ padding: '3.5rem 0', background: 'rgba(255, 255, 255, 0.015)' }}>
          <div className="container">
            <div className="flex-between" style={{ marginBottom: '1.5rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Popular DSA Challenges</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  Jump right in and create a collaborative practice room
                </p>
              </div>
              <Link to="/problems" className="btn btn-secondary btn-sm">
                Full Problem Bank
              </Link>
            </div>

            <div className="data-table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Status</th>
                    <th>Problem Title</th>
                    <th>Category</th>
                    <th>Difficulty</th>
                    <th style={{ textAlign: 'right' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {loadingProblems ? (
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'center', padding: '2rem' }}>
                        Loading DSA problems...
                      </td>
                    </tr>
                  ) : popularProblems.length === 0 ? (
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'center', padding: '2rem' }}>
                        No problems found. Run problem seeder.
                      </td>
                    </tr>
                  ) : (
                    popularProblems.map((prob) => (
                      <tr key={prob._id}>
                        <td style={{ width: '60px' }}>
                          <Code2 size={16} color="var(--primary)" />
                        </td>
                        <td>
                          <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                            {prob.title}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            Slug: {prob.slug}
                          </div>
                        </td>
                        <td>
                          <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                            {prob.category}
                          </span>
                        </td>
                        <td>
                          {difficultyBadge(prob.difficulty)}
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <button
                            onClick={() => {
                              setIsCreateOpen(true);
                            }}
                            className="btn btn-primary btn-sm"
                          >
                            <Play size={12} />
                            Solve in Room
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <CreateRoomModal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} />
      <JoinRoomModal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
    </div>
  );
}
