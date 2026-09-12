import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Plus, 
  Trash2, 
  Edit, 
  Eye, 
  Search, 
  CheckCircle2, 
  AlertCircle, 
  Code2, 
  FileCode2, 
  RefreshCw,
  X,
  Save,
  Lock,
  Loader2
} from 'lucide-react';
import useAuth from '../hooks/useAuth';
import problemService from '../services/problemService';

export default function Admin() {
  const { user } = useAuth();
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [toastMessage, setToastMessage] = useState(null);

  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProblem, setEditingProblem] = useState(null);
  const [inspectModalOpen, setInspectModalOpen] = useState(false);
  const [inspectedTestCases, setInspectedTestCases] = useState(null);
  const [saving, setSaving] = useState(false);

  // Form Fields
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Arrays');
  const [difficulty, setDifficulty] = useState('MEDIUM');
  const [description, setDescription] = useState('');
  const [constraintsText, setConstraintsText] = useState('');
  const [starterCodeJS, setStarterCodeJS] = useState('');
  const [starterCodePy, setStarterCodePy] = useState('');
  
  // Test Case arrays
  const [visibleTests, setVisibleTests] = useState([
    { input: '[2,7,11,15], 9', expectedOutput: '[0,1]', explanation: 'nums[0] + nums[1] = 9' }
  ]);
  const [hiddenTests, setHiddenTests] = useState([
    { input: '[3,2,4], 6', expectedOutput: '[1,2]' }
  ]);

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

  const fetchProblems = async () => {
    setLoading(true);
    try {
      const res = await problemService.getProblems({ limit: 100 });
      if (res.success && res.data?.problems) {
        setProblems(res.data.problems);
      }
    } catch (err) {
      console.error('Error fetching admin problems:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProblems();
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleOpenCreateModal = () => {
    setEditingProblem(null);
    setTitle('');
    setCategory('Arrays');
    setDifficulty('MEDIUM');
    setDescription('');
    setConstraintsText('1 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9');
    setStarterCodeJS('function solution() {\n  // Your code\n}');
    setStarterCodePy('def solution():\n    pass');
    setVisibleTests([{ input: '2', expectedOutput: '4', explanation: 'Sample test' }]);
    setHiddenTests([{ input: '10', expectedOutput: '100' }]);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = async (prob) => {
    setEditingProblem(prob);
    setTitle(prob.title);
    setCategory(prob.category);
    setDifficulty(prob.difficulty);
    setDescription(prob.description);
    setConstraintsText((prob.constraints || []).join('\n'));
    setStarterCodeJS(prob.starterCode?.javascript || '');
    setStarterCodePy(prob.starterCode?.python || '');

    // Fetch full test cases including hidden
    try {
      const tcRes = await problemService.getTestCases(prob._id);
      if (tcRes.success && tcRes.data) {
        setVisibleTests(
          (tcRes.data.visibleTestCases || []).map((t) => ({
            input: JSON.stringify(t.input),
            expectedOutput: JSON.stringify(t.expectedOutput),
            explanation: t.explanation || '',
          }))
        );
        setHiddenTests(
          (tcRes.data.hiddenTestCases || []).map((t) => ({
            input: JSON.stringify(t.input),
            expectedOutput: JSON.stringify(t.expectedOutput),
          }))
        );
      }
    } catch (err) {
      setVisibleTests(
        (prob.visibleTestCases || []).map((t) => ({
          input: JSON.stringify(t.input),
          expectedOutput: JSON.stringify(t.expectedOutput),
          explanation: t.explanation || '',
        }))
      );
    }
    setIsModalOpen(true);
  };

  const handleInspect = async (prob) => {
    try {
      const tcRes = await problemService.getTestCases(prob._id);
      if (tcRes.success && tcRes.data) {
        setInspectedTestCases(tcRes.data);
        setInspectModalOpen(true);
      }
    } catch (err) {
      showToast('Failed to load test cases: ' + err.message);
    }
  };

  const handleDeleteProblem = async (id, probTitle) => {
    if (!window.confirm(`Are you sure you want to delete problem "${probTitle}"?`)) return;
    try {
      const res = await problemService.deleteProblem(id);
      if (res.success) {
        showToast(`Problem "${probTitle}" deleted successfully`);
        fetchProblems();
      }
    } catch (err) {
      showToast('Error deleting problem: ' + err.message);
    }
  };

  const handleSaveProblem = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const parseJsonSafe = (str) => {
        try {
          return JSON.parse(str);
        } catch (e) {
          return str;
        }
      };

      const parsedVisible = visibleTests.map((t) => ({
        input: parseJsonSafe(t.input),
        expectedOutput: parseJsonSafe(t.expectedOutput),
        explanation: t.explanation,
      }));

      const parsedHidden = hiddenTests.map((t) => ({
        input: parseJsonSafe(t.input),
        expectedOutput: parseJsonSafe(t.expectedOutput),
      }));

      const payload = {
        title: title.trim(),
        category,
        difficulty,
        description: description.trim(),
        constraints: constraintsText.split('\n').filter((c) => c.trim()),
        starterCode: {
          javascript: starterCodeJS,
          python: starterCodePy,
        },
        visibleTestCases: parsedVisible,
        hiddenTestCases: parsedHidden,
      };

      if (editingProblem) {
        await problemService.updateProblem(editingProblem._id, payload);
        showToast(`Problem "${title}" updated successfully!`);
      } else {
        await problemService.createProblem(payload);
        showToast(`Problem "${title}" created successfully!`);
      }

      setIsModalOpen(false);
      fetchProblems();
    } catch (err) {
      showToast('Error saving problem: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  // Filtered problems
  const filteredProblems = problems.filter((p) => {
    const matchesCat = selectedCategory === 'ALL' || p.category === selectedCategory;
    const matchesQuery = !searchQuery.trim() || p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.slug.includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div style={{ minHeight: '100vh', padding: '2.5rem 0 4rem' }}>
      <div className="container">
        {/* TOAST ALERT */}
        {toastMessage && (
          <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', background: '#10b981', color: 'white', padding: '0.85rem 1.5rem', borderRadius: 'var(--radius-md)', zIndex: 9999, boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
            <CheckCircle2 size={18} />
            {toastMessage}
          </div>
        )}

        {/* HEADER */}
        <div className="flex-between" style={{ marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ display: 'inline-flex', marginBottom: '0.4rem' }}>
              <span className="badge badge-amber">
                <Shield size={14} />
                Platform Administration
              </span>
            </div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800 }}>Problem & Test Suite Manager</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Manage algorithmic challenges, starter code, sample tests, and secure double-blind evaluation suites.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={handleOpenCreateModal} className="btn btn-primary">
              <Plus size={16} />
              Add New Problem
            </button>
            <button onClick={fetchProblems} className="btn btn-secondary">
              <RefreshCw size={16} className={loading ? 'spin' : ''} />
              Refresh
            </button>
          </div>
        </div>

        {/* SEARCH & CATEGORY BAR */}
        <div className="card" style={{ padding: '1.25rem', marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: '1 1 300px', position: 'relative' }}>
              <input
                type="text"
                className="form-input"
                style={{ paddingLeft: '2.5rem' }}
                placeholder="Search problem title or slug..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search 
                size={16} 
                style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} 
              />
            </div>

            <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    border: selectedCategory === cat ? '1px solid #f59e0b' : '1px solid var(--border-subtle)',
                    background: selectedCategory === cat ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
                    color: selectedCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* PROBLEM TABLE */}
        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Title / Slug</th>
                <th>Category</th>
                <th>Difficulty</th>
                <th>Sample Tests</th>
                <th style={{ textAlign: 'right' }}>Admin Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center', padding: '3rem' }}>
                    <RefreshCw size={20} className="spin" style={{ margin: '0 auto 0.5rem' }} />
                    <div>Loading problem bank...</div>
                  </td>
                </tr>
              ) : filteredProblems.length === 0 ? (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center', padding: '3rem' }}>
                    No problems found matching criteria.
                  </td>
                </tr>
              ) : (
                filteredProblems.map((prob) => (
                  <tr key={prob._id}>
                    <td>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{prob.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{prob.slug}</div>
                    </td>
                    <td>
                      <span className="badge" style={{ background: 'rgba(255, 255, 255, 0.04)' }}>
                        {prob.category}
                      </span>
                    </td>
                    <td>
                      <span className={`badge ${prob.difficulty === 'EASY' ? 'badge-emerald' : prob.difficulty === 'MEDIUM' ? 'badge-amber' : 'badge-rose'}`}>
                        {prob.difficulty}
                      </span>
                    </td>
                    <td>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        {prob.visibleTestCases?.length || 0} sample tests
                      </span>
                    </td>
                    <td style={{ textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', gap: '0.4rem' }}>
                        <button
                          onClick={() => handleInspect(prob)}
                          className="btn btn-secondary btn-sm"
                          title="Inspect Test Suites (Visible + Hidden)"
                        >
                          <Eye size={14} color="#06b6d4" />
                        </button>
                        <button
                          onClick={() => handleOpenEditModal(prob)}
                          className="btn btn-secondary btn-sm"
                          title="Edit Problem"
                        >
                          <Edit size={14} color="#f59e0b" />
                        </button>
                        <button
                          onClick={() => handleDeleteProblem(prob._id, prob.title)}
                          className="btn btn-secondary btn-sm"
                          title="Delete Problem"
                        >
                          <Trash2 size={14} color="#f43f5e" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* CREATE / EDIT PROBLEM MODAL */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '780px', maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div className="logo-icon-box" style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #f59e0b, #d946ef)' }}>
                  <Shield size={16} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                    {editingProblem ? `Edit Problem: ${editingProblem.title}` : 'Create New DSA Problem'}
                  </h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Add description, starter code, and double-blind hidden test cases
                  </p>
                </div>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="btn btn-secondary btn-sm" style={{ padding: '0.3rem' }}>
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSaveProblem} style={{ overflowY: 'auto', flex: 1, padding: '1.5rem' }}>
              <div className="grid-2">
                <div className="form-group">
                  <label className="form-label">Problem Title</label>
                  <input
                    type="text"
                    className="form-input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Subtree of Another Tree"
                    required
                  />
                </div>

                <div className="grid-2">
                  <div className="form-group">
                    <label className="form-label">Category</label>
                    <select className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                      {categories.filter((c) => c !== 'ALL').map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Difficulty</label>
                    <select className="form-select" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                      <option value="EASY">EASY</option>
                      <option value="MEDIUM">MEDIUM</option>
                      <option value="HARD">HARD</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Problem Description (Markdown / Plain Text)</label>
                <textarea
                  className="form-textarea"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Given the roots of two binary trees root and subRoot..."
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Constraints (One per line)</label>
                <textarea
                  className="form-textarea"
                  rows={2}
                  value={constraintsText}
                  onChange={(e) => setConstraintsText(e.target.value)}
                  placeholder="1 <= nums.length <= 10^5&#10;-10^9 <= nums[i] <= 10^9"
                />
              </div>

              {/* STARTER CODE */}
              <div className="grid-2" style={{ marginBottom: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label">JavaScript Starter Code</label>
                  <textarea
                    className="form-textarea"
                    rows={4}
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#38bdf8' }}
                    value={starterCodeJS}
                    onChange={(e) => setStarterCodeJS(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Python 3 Starter Code</label>
                  <textarea
                    className="form-textarea"
                    rows={4}
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#10b981' }}
                    value={starterCodePy}
                    onChange={(e) => setStarterCodePy(e.target.value)}
                  />
                </div>
              </div>

              {/* VISIBLE TEST CASES */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div className="flex-between" style={{ marginBottom: '0.5rem' }}>
                  <label className="form-label" style={{ marginBottom: 0, fontWeight: 600, color: 'var(--accent-cyan)' }}>
                    Sample / Visible Test Cases (Displayed for User Debugging)
                  </label>
                  <button
                    type="button"
                    onClick={() => setVisibleTests([...visibleTests, { input: '', expectedOutput: '', explanation: '' }])}
                    className="btn btn-secondary btn-sm"
                    style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}
                  >
                    + Add Sample Test
                  </button>
                </div>
                {visibleTests.map((t, idx) => (
                  <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 32px', gap: '0.5rem', marginBottom: '0.5rem', alignItems: 'center' }}>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Input JSON (e.g. [2,7,11,15], 9)"
                      value={t.input}
                      onChange={(e) => {
                        const next = [...visibleTests];
                        next[idx].input = e.target.value;
                        setVisibleTests(next);
                      }}
                      required
                    />
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Expected Output (e.g. [0,1])"
                      value={t.expectedOutput}
                      onChange={(e) => {
                        const next = [...visibleTests];
                        next[idx].expectedOutput = e.target.value;
                        setVisibleTests(next);
                      }}
                      required
                    />
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Explanation (optional)"
                      value={t.explanation}
                      onChange={(e) => {
                        const next = [...visibleTests];
                        next[idx].explanation = e.target.value;
                        setVisibleTests(next);
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setVisibleTests(visibleTests.filter((_, i) => i !== idx))}
                      className="btn btn-secondary btn-sm"
                      style={{ padding: '0.4rem', color: '#f43f5e' }}
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>

              {/* HIDDEN TEST CASES */}
              <div>
                <div className="flex-between" style={{ marginBottom: '0.5rem' }}>
                  <label className="form-label" style={{ marginBottom: 0, fontWeight: 600, color: '#f43f5e' }}>
                    Hidden Test Cases (Double-Blind: Server Evaluated Only)
                  </label>
                  <button
                    type="button"
                    onClick={() => setHiddenTests([...hiddenTests, { input: '', expectedOutput: '' }])}
                    className="btn btn-secondary btn-sm"
                    style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}
                  >
                    + Add Hidden Test
                  </button>
                </div>
                {hiddenTests.map((t, idx) => (
                  <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 32px', gap: '0.5rem', marginBottom: '0.5rem', alignItems: 'center' }}>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Hidden Input JSON (e.g. [3,2,4], 6)"
                      value={t.input}
                      onChange={(e) => {
                        const next = [...hiddenTests];
                        next[idx].input = e.target.value;
                        setHiddenTests(next);
                      }}
                      required
                    />
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Expected Output (e.g. [1,2])"
                      value={t.expectedOutput}
                      onChange={(e) => {
                        const next = [...hiddenTests];
                        next[idx].expectedOutput = e.target.value;
                        setHiddenTests(next);
                      }}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setHiddenTests(hiddenTests.filter((_, i) => i !== idx))}
                      className="btn btn-secondary btn-sm"
                      style={{ padding: '0.4rem', color: '#f43f5e' }}
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="modal-footer" style={{ marginTop: '1.5rem', padding: '1rem 0 0' }}>
                <button type="button" onClick={() => setIsModalOpen(false)} className="btn btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" disabled={saving}>
                  {saving ? (
                    <>
                      <Loader2 size={16} className="spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save size={16} />
                      Save Problem & Test Cases
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* INSPECT TEST CASES MODAL */}
      {inspectModalOpen && inspectedTestCases && (
        <div className="modal-overlay" onClick={() => setInspectModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px', maxHeight: '80vh', overflowY: 'auto' }}>
            <div className="modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div className="logo-icon-box" style={{ width: '32px', height: '32px', background: '#06b6d4' }}>
                  <Eye size={16} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>
                    Test Suite: {inspectedTestCases.title}
                  </h3>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Admin Double-Blind Test Inspection
                  </p>
                </div>
              </div>
              <button onClick={() => setInspectModalOpen(false)} className="btn btn-secondary btn-sm" style={{ padding: '0.3rem' }}>
                <X size={16} />
              </button>
            </div>

            <div className="modal-body">
              <h4 style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Sample / Visible Tests ({inspectedTestCases.visibleTestCases?.length || 0})
              </h4>
              {(inspectedTestCases.visibleTestCases || []).map((t, idx) => (
                <div key={idx} style={{ background: '#0a0d14', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>
                  <div><strong style={{ color: '#6366f1' }}>Input:</strong> {JSON.stringify(t.input)}</div>
                  <div><strong style={{ color: '#10b981' }}>Output:</strong> {JSON.stringify(t.expectedOutput)}</div>
                </div>
              ))}

              <h4 style={{ fontSize: '0.85rem', color: '#f43f5e', fontWeight: 600, textTransform: 'uppercase', marginTop: '1.25rem', marginBottom: '0.5rem' }}>
                Hidden Tests ({inspectedTestCases.hiddenTestCases?.length || 0})
              </h4>
              {(inspectedTestCases.hiddenTestCases || []).map((t, idx) => (
                <div key={idx} style={{ background: '#0a0d14', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(244, 63, 94, 0.2)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem' }}>
                  <div><strong style={{ color: '#f43f5e' }}>Hidden Input:</strong> {JSON.stringify(t.input)}</div>
                  <div><strong style={{ color: '#10b981' }}>Expected Output:</strong> {JSON.stringify(t.expectedOutput)}</div>
                </div>
              ))}
            </div>

            <div className="modal-footer">
              <button onClick={() => setInspectModalOpen(false)} className="btn btn-secondary">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
