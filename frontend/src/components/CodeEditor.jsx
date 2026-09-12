import React, { useRef, useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { 
  Sparkles, 
  Settings, 
  Maximize2, 
  Minimize2, 
  RotateCcw, 
  AlignLeft, 
  Sliders,
  Eye,
  Play,
  Save,
  Keyboard
} from 'lucide-react';

export default function CodeEditor({
  code,
  language = 'javascript',
  onChange,
  readOnly = false,
  onResetCode,
  onRunCode,
  onSubmitCode,
  onSaveSnapshot,
  lastEditorName = null,
}) {
  const editorRef = useRef(null);
  const monacoRef = useRef(null);
  const [fontSize, setFontSize] = useState(14);
  const [minimap, setMinimap] = useState(false);
  const [wordWrap, setWordWrap] = useState('on');

  const languageMap = {
    javascript: 'javascript',
    python: 'python',
    java: 'java',
    cpp: 'cpp',
    c: 'c',
  };

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;

    // Configure Monaco options
    editor.updateOptions({
      tabSize: 2,
      smoothScrolling: true,
      cursorBlinking: 'smooth',
      cursorSmoothCaretAnimation: 'on',
      fontFamily: "'JetBrains Mono', 'Fira Code', Menlo, Consolas, monospace",
      fontLigatures: true,
      renderLineHighlight: 'all',
      automaticLayout: true,
    });

    // Keyboard Shortcuts
    // Ctrl/Cmd + Enter -> Run Visible Tests
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      if (onRunCode) onRunCode();
    });

    // Ctrl/Cmd + Shift + Enter -> Submit Full Solution
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyMod.Shift | monaco.KeyCode.Enter, () => {
      if (onSubmitCode) onSubmitCode();
    });

    // Ctrl/Cmd + S -> Save Snapshot
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      if (onSaveSnapshot) onSaveSnapshot();
    });
  };

  const handleFormatCode = () => {
    if (editorRef.current) {
      editorRef.current.getAction('editor.action.formatDocument')?.run();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0a0d14' }}>
      {/* Editor Toolbar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.4rem 1rem',
          background: '#0d111a',
          borderBottom: '1px solid var(--border-subtle)',
          fontSize: '0.775rem',
          color: 'var(--text-secondary)',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', color: '#818cf8', fontWeight: 600 }}>
            solution.{language === 'python' ? 'py' : language === 'java' ? 'java' : language === 'cpp' ? 'cpp' : language === 'c' ? 'c' : 'js'}
          </span>
          {readOnly && (
            <span className="badge badge-amber" style={{ fontSize: '0.65rem' }}>
              <Eye size={10} />
              Read-Only
            </span>
          )}
          {lastEditorName && (
            <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>
              Last edit by: <strong style={{ color: 'var(--text-secondary)' }}>{lastEditorName}</strong>
            </span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Shortcuts hint tag */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.3rem', 
              fontSize: '0.7rem', 
              color: 'var(--text-muted)',
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '0.2rem 0.5rem',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)'
            }}
            title="Shortcuts: Ctrl+Enter (Run) • Ctrl+Shift+Enter (Submit) • Ctrl+S (Save Snapshot)"
          >
            <Keyboard size={12} color="var(--primary)" />
            <span>Ctrl+Enter: Run</span>
          </div>

          {/* Font Size */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
            <button
              onClick={() => setFontSize((s) => Math.max(12, s - 1))}
              className="btn btn-secondary btn-sm"
              style={{ padding: '0.2rem 0.5rem', fontSize: '0.7rem' }}
              title="Decrease Font Size"
            >
              A-
            </button>
            <span style={{ fontFamily: 'var(--font-mono)', minWidth: '24px', textAlign: 'center' }}>
              {fontSize}px
            </span>
            <button
              onClick={() => setFontSize((s) => Math.min(22, s + 1))}
              className="btn btn-secondary btn-sm"
              style={{ padding: '0.2rem 0.5rem', fontSize: '0.7rem' }}
              title="Increase Font Size"
            >
              A+
            </button>
          </div>

          {/* Format Code */}
          <button
            onClick={handleFormatCode}
            className="btn btn-secondary btn-sm"
            style={{ padding: '0.25rem 0.6rem', fontSize: '0.725rem' }}
            title="Format Code"
          >
            <AlignLeft size={13} />
            <span>Format</span>
          </button>

          {/* Minimap Toggle */}
          <button
            onClick={() => setMinimap((m) => !m)}
            className="btn btn-secondary btn-sm"
            style={{ padding: '0.25rem 0.6rem', fontSize: '0.725rem', background: minimap ? 'rgba(99, 102, 241, 0.2)' : undefined }}
            title="Toggle Minimap"
          >
            Minimap
          </button>

          {/* Reset to Starter */}
          {onResetCode && (
            <button
              onClick={onResetCode}
              className="btn btn-secondary btn-sm"
              style={{ padding: '0.25rem 0.6rem', fontSize: '0.725rem' }}
              title="Reset code to problem starter"
            >
              <RotateCcw size={13} />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Monaco Editor Container */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <Editor
          height="100%"
          language={languageMap[language] || 'javascript'}
          value={code}
          theme="vs-dark"
          onChange={(val) => {
            if (!readOnly && onChange) {
              onChange(val || '');
            }
          }}
          onMount={handleEditorDidMount}
          options={{
            fontSize,
            minimap: { enabled: minimap },
            wordWrap,
            readOnly,
            scrollBeyondLastLine: false,
            padding: { top: 12, bottom: 12 },
          }}
          loading={
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
              <div className="pulse-dot" style={{ margin: '0 auto 1rem' }}></div>
              Loading Monaco Editor...
            </div>
          }
        />
      </div>
    </div>
  );
}
