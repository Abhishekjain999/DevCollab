import React, { useState } from 'react';
import { BookOpen, CheckCircle2, Tag, AlertCircle, Sparkles } from 'lucide-react';

export default function ProblemPanel({ problem }) {
  const [activeTab, setActiveTab] = useState('description');

  if (!problem) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
        <BookOpen size={24} style={{ margin: '0 auto 0.75rem', opacity: 0.5 }} />
        <p>No problem attached to this room.</p>
      </div>
    );
  }

  const difficultyColors = {
    EASY: 'badge-emerald',
    MEDIUM: 'badge-amber',
    HARD: 'badge-rose',
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: '#10141f',
        borderRight: '1px solid var(--border-subtle)',
        overflowY: 'auto',
      }}
    >
      {/* Problem Header */}
      <div style={{ padding: '1.25rem 1.25rem 0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
          <span className={`badge ${difficultyColors[problem.difficulty] || 'badge-primary'}`}>
            {problem.difficulty}
          </span>
          <span className="badge badge-primary">
            {problem.category}
          </span>
        </div>

        <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          {problem.title}
        </h2>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
          <button
            onClick={() => setActiveTab('description')}
            style={{
              padding: '0.35rem 0.75rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              background: activeTab === 'description' ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
              color: activeTab === 'description' ? '#a5b4fc' : 'var(--text-muted)',
              border: 'none',
              borderBottom: activeTab === 'description' ? '2px solid #6366f1' : '2px solid transparent',
              cursor: 'pointer',
            }}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('examples')}
            style={{
              padding: '0.35rem 0.75rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              background: activeTab === 'examples' ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
              color: activeTab === 'examples' ? '#a5b4fc' : 'var(--text-muted)',
              border: 'none',
              borderBottom: activeTab === 'examples' ? '2px solid #6366f1' : '2px solid transparent',
              cursor: 'pointer',
            }}
          >
            Examples ({problem.examples?.length || 0})
          </button>
        </div>
      </div>

      {/* Problem Content */}
      <div style={{ padding: '1.25rem', flex: 1, overflowY: 'auto' }}>
        {activeTab === 'description' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Description */}
            <div>
              <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>
                Problem Statement
              </h4>
              <div style={{ color: 'var(--text-primary)', fontSize: '0.9rem', lineHeight: '1.7', whiteSpace: 'pre-line' }}>
                {problem.description}
              </div>
            </div>

            {/* Constraints */}
            {problem.constraints && problem.constraints.length > 0 && (
              <div>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>
                  Constraints
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {problem.constraints.map((c, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: '#6366f1', fontWeight: 'bold' }}>•</span>
                      <code style={{ background: '#0a0d14', padding: '0.1rem 0.4rem', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>
                        {c}
                      </code>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sample Examples */}
            {problem.examples && problem.examples.length > 0 && (
              <div>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                  Sample Examples
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {problem.examples.map((ex, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: '#0a0d14',
                        padding: '0.85rem',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '0.825rem',
                      }}
                    >
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                        Example {idx + 1}:
                      </div>
                      <div style={{ color: 'var(--text-secondary)', marginBottom: '0.3rem' }}>
                        <strong style={{ color: 'var(--text-muted)' }}>Input:</strong>{' '}
                        <code style={{ color: '#a5b4fc' }}>{ex.input}</code>
                      </div>
                      <div style={{ color: 'var(--text-secondary)', marginBottom: ex.explanation ? '0.3rem' : 0 }}>
                        <strong style={{ color: 'var(--text-muted)' }}>Output:</strong>{' '}
                        <code style={{ color: '#6ee7b7' }}>{ex.output}</code>
                      </div>
                      {ex.explanation && (
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.775rem', marginTop: '0.3rem', fontStyle: 'italic' }}>
                          Explanation: {ex.explanation}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {problem.tags && problem.tags.length > 0 && (
              <div>
                <h4 style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em', marginBottom: '0.6rem' }}>
                  Related Tags
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {problem.tags.map((t, idx) => (
                    <span key={idx} className="badge" style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-secondary)' }}>
                      <Tag size={11} />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'examples' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {problem.examples?.map((ex, idx) => (
              <div
                key={idx}
                style={{
                  background: '#0a0d14',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                  Example {idx + 1}
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Input:</div>
                  <pre style={{ background: '#111622', padding: '0.5rem', borderRadius: '4px', margin: '0.2rem 0', fontSize: '0.825rem', color: '#a5b4fc' }}>
                    {ex.input}
                  </pre>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Expected Output:</div>
                  <pre style={{ background: '#111622', padding: '0.5rem', borderRadius: '4px', margin: '0.2rem 0', fontSize: '0.825rem', color: '#6ee7b7' }}>
                    {ex.output}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
