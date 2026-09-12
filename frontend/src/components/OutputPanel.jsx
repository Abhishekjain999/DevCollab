import React, { useState } from 'react';
import { 
  Play, 
  Send, 
  Terminal, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Cpu, 
  Sparkles, 
  AlertTriangle,
  FileCheck
} from 'lucide-react';

export default function OutputPanel({
  onRunCode,
  onSubmitCode,
  isRunning = false,
  isSubmitting = false,
  runResults = null,
  submissionResults = null,
  consoleOutput = null,
}) {
  const [activeTab, setActiveTab] = useState('tests');

  const getStatusBadge = (status) => {
    switch (status) {
      case 'ACCEPTED':
        return <span className="badge badge-emerald">Accepted 🎉</span>;
      case 'WRONG_ANSWER':
        return <span className="badge badge-rose">Wrong Answer ✕</span>;
      case 'TIME_LIMIT_EXCEEDED':
        return <span className="badge badge-amber">Time Limit Exceeded</span>;
      case 'COMPILE_ERROR':
        return <span className="badge badge-rose">Compile Error</span>;
      case 'RUNTIME_ERROR':
        return <span className="badge badge-rose">Runtime Error</span>;
      default:
        return <span className="badge badge-primary">{status}</span>;
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        background: '#0e121d',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      {/* Tab Navigation & Action Buttons */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.4rem 1rem',
          background: '#0b0e17',
          borderBottom: '1px solid var(--border-subtle)',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <button
            onClick={() => setActiveTab('tests')}
            style={{
              padding: '0.35rem 0.75rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              background: activeTab === 'tests' ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
              color: activeTab === 'tests' ? '#a5b4fc' : 'var(--text-muted)',
              border: 'none',
              borderBottom: activeTab === 'tests' ? '2px solid #6366f1' : '2px solid transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <CheckCircle2 size={13} />
            <span>Sample Tests</span>
            {runResults && (
              <span className={`badge ${runResults.allPassed ? 'badge-emerald' : 'badge-rose'}`} style={{ padding: '0.1rem 0.35rem', fontSize: '0.65rem' }}>
                {runResults.passedTests}/{runResults.totalTests}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('submission')}
            style={{
              padding: '0.35rem 0.75rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              background: activeTab === 'submission' ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
              color: activeTab === 'submission' ? '#a5b4fc' : 'var(--text-muted)',
              border: 'none',
              borderBottom: activeTab === 'submission' ? '2px solid #6366f1' : '2px solid transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <FileCheck size={13} />
            <span>Submission Result</span>
            {submissionResults && (
              <span className={`badge ${submissionResults.status === 'ACCEPTED' ? 'badge-emerald' : 'badge-rose'}`} style={{ padding: '0.1rem 0.35rem', fontSize: '0.65rem' }}>
                {submissionResults.status === 'ACCEPTED' ? 'Passed' : 'Failed'}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('console')}
            style={{
              padding: '0.35rem 0.75rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              background: activeTab === 'console' ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
              color: activeTab === 'console' ? '#a5b4fc' : 'var(--text-muted)',
              border: 'none',
              borderBottom: activeTab === 'console' ? '2px solid #6366f1' : '2px solid transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
          >
            <Terminal size={13} />
            <span>Console</span>
          </button>
        </div>

        {/* Execution Triggers */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <button
            onClick={() => {
              setActiveTab('tests');
              onRunCode();
            }}
            disabled={isRunning || isSubmitting}
            className="btn btn-secondary btn-sm"
            style={{ minWidth: '100px' }}
          >
            <Play size={13} />
            <span>{isRunning ? 'Running...' : 'Run Code'}</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('submission');
              onSubmitCode();
            }}
            disabled={isRunning || isSubmitting}
            className="btn btn-primary btn-sm"
            style={{ minWidth: '110px' }}
          >
            <Send size={13} />
            <span>{isSubmitting ? 'Evaluating...' : 'Submit'}</span>
          </button>
        </div>
      </div>

      {/* Output Body */}
      <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', fontSize: '0.85rem' }}>
        {/* TAB 1: SAMPLE TESTS */}
        {activeTab === 'tests' && (
          <div>
            {isRunning ? (
              <div style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--text-secondary)' }}>
                <div className="pulse-dot" style={{ margin: '0 auto 0.75rem' }}></div>
                <p>Executing code against sample visible test cases...</p>
              </div>
            ) : runResults ? (
              <div>
                <div className="flex-between" style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>Sample Tests:</span>
                    {runResults.allPassed ? (
                      <span className="badge badge-emerald">All Sample Tests Passed ✓</span>
                    ) : (
                      <span className="badge badge-rose">{runResults.passedTests} / {runResults.totalTests} Passed</span>
                    )}
                  </div>
                  {runResults.runtime !== undefined && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.775rem' }}>
                      <Clock size={13} />
                      <span>Runtime: {runResults.runtime} ms</span>
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {runResults.testCases?.map((t, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: '#0a0d14',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        border: `1px solid ${t.passed ? 'rgba(16, 185, 129, 0.25)' : 'rgba(244, 63, 94, 0.25)'}`,
                      }}
                    >
                      <div className="flex-between" style={{ marginBottom: '0.4rem' }}>
                        <span style={{ fontWeight: 600, color: t.passed ? '#6ee7b7' : '#fda4af' }}>
                          Test Case #{idx + 1}
                        </span>
                        <span className={`badge ${t.passed ? 'badge-emerald' : 'badge-rose'}`} style={{ fontSize: '0.7rem' }}>
                          {t.passed ? '✓ Passed' : '✕ Failed'}
                        </span>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.5rem', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                        <div>
                          <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>INPUT</div>
                          <div style={{ color: '#a5b4fc', wordBreak: 'break-all' }}>{JSON.stringify(t.input)}</div>
                        </div>
                        <div>
                          <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>EXPECTED</div>
                          <div style={{ color: '#6ee7b7', wordBreak: 'break-all' }}>{JSON.stringify(t.expectedOutput)}</div>
                        </div>
                        <div>
                          <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>ACTUAL</div>
                          <div style={{ color: t.passed ? '#6ee7b7' : '#fda4af', wordBreak: 'break-all' }}>{JSON.stringify(t.actualOutput)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--text-muted)' }}>
                <Play size={20} style={{ margin: '0 auto 0.5rem', opacity: 0.4 }} />
                <p>Click <strong>Run Code</strong> to execute your solution against sample test cases.</p>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: SUBMISSION EVALUATION (DOUBLE BLIND) */}
        {activeTab === 'submission' && (
          <div>
            {isSubmitting ? (
              <div style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--text-secondary)' }}>
                <div className="pulse-dot" style={{ margin: '0 auto 0.75rem', background: '#6366f1' }}></div>
                <p>Sandboxed Evaluation in Progress (Testing Visible + Hidden Test Cases)...</p>
              </div>
            ) : submissionResults ? (
              <div>
                <div
                  style={{
                    background: submissionResults.status === 'ACCEPTED' ? 'rgba(16, 185, 129, 0.08)' : 'rgba(244, 63, 94, 0.08)',
                    border: `1px solid ${submissionResults.status === 'ACCEPTED' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(244, 63, 94, 0.3)'}`,
                    padding: '1.25rem',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '1rem',
                  }}
                >
                  <div className="flex-between" style={{ marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      {getStatusBadge(submissionResults.status)}
                      <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                        {submissionResults.passedTests} / {submissionResults.totalTests} Tests Passed
                      </span>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Clock size={13} /> {submissionResults.runtime || 42} ms
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Cpu size={13} /> {submissionResults.memory || 14.2} MB
                      </span>
                    </div>
                  </div>

                  {submissionResults.errorMessage && (
                    <div style={{ background: '#0a0d14', padding: '0.75rem', borderRadius: 'var(--radius-sm)', color: '#fda4af', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                      {submissionResults.errorMessage}
                    </div>
                  )}
                </div>

                {/* Safe Blind Test Checklist (Never reveals hidden inputs) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                    Evaluation Checklist:
                  </div>
                  {submissionResults.testResults?.map((t, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: '#0a0d14',
                        padding: '0.6rem 0.85rem',
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {t.passed ? <CheckCircle2 size={14} color="#10b981" /> : <XCircle size={14} color="#f43f5e" />}
                        <span style={{ fontWeight: 500, fontSize: '0.825rem' }}>
                          Test Case #{t.testNumber || idx + 1}
                        </span>
                      </div>
                      <span className={`badge ${t.passed ? 'badge-emerald' : 'badge-rose'}`} style={{ fontSize: '0.7rem' }}>
                        {t.passed ? 'Passed' : 'Failed'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '1.5rem', color: 'var(--text-muted)' }}>
                <Send size={20} style={{ margin: '0 auto 0.5rem', opacity: 0.4 }} />
                <p>Click <strong>Submit</strong> to evaluate your solution against complete hidden test suites.</p>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: CONSOLE OUTPUT */}
        {activeTab === 'console' && (
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.825rem', color: '#94a3b8' }}>
            {consoleOutput ? (
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{consoleOutput}</pre>
            ) : (
              <div style={{ color: 'var(--text-dim)', fontStyle: 'italic' }}>
                // Standard console output (stdout/stderr) will appear here during execution.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
