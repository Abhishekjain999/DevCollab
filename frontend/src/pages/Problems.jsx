import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Code2, 
  Play, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  ChevronRight,
  RefreshCw,
  Clock,
  Zap,
  Info
} from 'lucide-react';
import problemService from '../services/problemService';
import CreateRoomModal from '../components/CreateRoomModal';

export default function Problems() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'ALL';

  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedDifficulty, setSelectedDifficulty] = useState('ALL');
  
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [roomModalProblem, setRoomModalProblem] = useState(null);

  const categories = [
    'ALL',
    'Arrays',
    'Strings',
    'Dynamic Programming',
    'Graphs',
    'Trees',
    'HashMap / HashSet',
    'Sliding Window',
  ];

  const difficulties = ['ALL', 'EASY', 'MEDIUM', 'HARD'];

  const fetchProblems = async () => {
    setLoading(true);
    setError(null);
    try {
      const params = { limit: 100 };
      if (selectedCategory !== 'ALL') params.category = selectedCategory;
      if (selectedDifficulty !== 'ALL') params.difficulty = selectedDifficulty;
      if (searchQuery.trim()) params.search = searchQuery.trim();

      const res = await problemService.getProblems(params);
      if (res.success && res.data?.problems) {
        setProblems(res.data.problems);
        if (res.data.problems.length > 0 && !selectedProblem) {
          setSelectedProblem(res.data.problems[0]);
        }
      }
    } catch (err) {
      setError(err.message || 'Unable to load problems');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProblems();
  }, [selectedCategory, selectedDifficulty]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchProblems();
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'ALL') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  const openCreateRoomForProblem = (problem) => {
    setRoomModalProblem(problem);
    setIsCreateOpen(true);
  };

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

  // Aggregated Stats
  const easyCount = problems.filter((p) => p.difficulty === 'EASY').length;
  const mediumCount = problems.filter((p) => p.difficulty === 'MEDIUM').length;
  const hardCount = problems.filter((p) => p.difficulty === 'HARD').length;

  return (
    <div style={{ minHeight: '100vh', padding: '2.5rem 0 4rem' }}>
      <div className="container">
        {/* HEADER & STATS BANNER */}
        <div className="flex-between" style={{ marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'inline-flex', marginBottom: '0.4rem' }}>
              <span className="badge badge-primary">
                <BookOpen size={14} />
                70+ Curated DSA Challenges
              </span>
            </div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800 }}>DSA Problem Bank</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Select any algorithmic problem and launch a real-time collaborative coding room.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ padding: '0.6rem 1rem', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#10b981' }}>{easyCount}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>EASY</div>
            </div>
            <div style={{ padding: '0.6rem 1rem', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f59e0b' }}>{mediumCount}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>MEDIUM</div>
            </div>
            <div style={{ padding: '0.6rem 1rem', background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f43f5e' }}>{hardCount}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>HARD</div>
            </div>
          </div>
        </div>

        {/* SEARCH & FILTERS BAR */}
        <div className="card" style={{ padding: '1.25rem', marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Search Input */}
            <form onSubmit={handleSearch} style={{ flex: '1 1 320px', position: 'relative' }}>
              <input
                type="text"
                className="form-input"
                style={{ paddingLeft: '2.5rem' }}
                placeholder="Search problem title or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search 
                size={16} 
                style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} 
              />
            </form>

            {/* Difficulty Filter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginRight: '0.2rem' }}>Difficulty:</span>
              {difficulties.map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`btn btn-sm ${selectedDifficulty === diff ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem' }}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingTop: '1rem', marginTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  border: selectedCategory === cat ? '1px solid #6366f1' : '1px solid var(--border-subtle)',
                  background: selectedCategory === cat ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                  color: selectedCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PROBLEMS SPLIT VIEW: LIST & PREVIEW DRAWER */}
        <div style={{ display: 'grid', gridTemplateColumns: selectedProblem ? '1.4fr 1fr' : '1fr', gap: '1.5rem', alignItems: 'start' }}>
          {/* PROBLEM TABLE */}
          <div className="data-table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th style={{ width: '40px' }}>#</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Difficulty</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center', padding: '3rem' }}>
                      <RefreshCw size={20} className="spin" style={{ margin: '0 auto 0.5rem' }} />
                      <div>Loading problem catalog...</div>
                    </td>
                  </tr>
                ) : problems.length === 0 ? (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center', padding: '3rem' }}>
                      <Info size={24} color="var(--text-muted)" style={{ margin: '0 auto 0.5rem' }} />
                      <div style={{ fontWeight: 600 }}>No problems match your filter criteria</div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Try resetting difficulty or search query</p>
                    </td>
                  </tr>
                ) : (
                  problems.map((prob, idx) => (
                    <tr 
                      key={prob._id} 
                      onClick={() => setSelectedProblem(prob)}
                      style={{ 
                        cursor: 'pointer',
                        background: selectedProblem?._id === prob._id ? 'rgba(99, 102, 241, 0.08)' : undefined 
                      }}
                    >
                      <td style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{idx + 1}</td>
                      <td>
                        <div style={{ fontWeight: 600, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <span>{prob.title}</span>
                          {selectedProblem?._id === prob._id && (
                            <span className="badge badge-primary" style={{ fontSize: '0.65rem' }}>Active</span>
                          )}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          {prob.slug}
                        </div>
                      </td>
                      <td>
                        <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.04)' }}>
                          {prob.category}
                        </span>
                      </td>
                      <td>
                        {difficultyBadge(prob.difficulty)}
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openCreateRoomForProblem(prob);
                          }}
                          className="btn btn-primary btn-sm"
                          style={{ padding: '0.35rem 0.75rem' }}
                        >
                          <Play size={12} />
                          Practice
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* PROBLEM DETAIL SIDE PREVIEW */}
          {selectedProblem && (
            <div className="card card-glow" style={{ position: 'sticky', top: '5.5rem', maxHeight: 'calc(100vh - 7rem)', overflowY: 'auto' }}>
              <div className="flex-between" style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {difficultyBadge(selectedProblem.difficulty)}
                  <span className="badge badge-cyan">{selectedProblem.category}</span>
                </div>
                <button
                  onClick={() => openCreateRoomForProblem(selectedProblem)}
                  className="btn btn-primary btn-sm"
                >
                  <Play size={14} />
                  Start Collaborative Room
                </button>
              </div>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                {selectedProblem.title}
              </h2>

              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem', whiteSpace: 'pre-line' }}>
                {selectedProblem.description}
              </div>

              {/* Sample Test Cases Preview */}
              {selectedProblem.visibleTestCases && selectedProblem.visibleTestCases.length > 0 && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                    Sample Test Cases:
                  </h4>
                  {selectedProblem.visibleTestCases.slice(0, 2).map((tc, i) => (
                    <div key={i} style={{ background: '#0a0d14', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                      <div style={{ color: '#94a3b8', marginBottom: '0.3rem' }}>
                        <strong style={{ color: '#6366f1' }}>Input:</strong> {JSON.stringify(tc.input)}
                      </div>
                      <div style={{ color: '#94a3b8' }}>
                        <strong style={{ color: '#10b981' }}>Output:</strong> {JSON.stringify(tc.expectedOutput)}
                      </div>
                      {tc.explanation && (
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.3rem', fontStyle: 'italic' }}>
                          Explanation: {tc.explanation}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Starter Code Preview */}
              {selectedProblem.starterCode && (
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    JavaScript Starter Code:
                  </h4>
                  <pre style={{ background: '#0a0d14', padding: '0.85rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', fontSize: '0.8rem', color: '#38bdf8', overflowX: 'auto' }}>
                    {selectedProblem.starterCode.javascript || '// Solution here'}
                  </pre>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <CreateRoomModal 
        isOpen={isCreateOpen} 
        onClose={() => setIsCreateOpen(false)} 
        defaultProblem={roomModalProblem} 
      />
    </div>
  );
}
