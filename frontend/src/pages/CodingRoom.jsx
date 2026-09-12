import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RoomHeader from '../components/RoomHeader';
import ProblemPanel from '../components/ProblemPanel';
import CodeEditor from '../components/CodeEditor';
import OutputPanel from '../components/OutputPanel';
import Chat from '../components/Chat';
import Participants from '../components/Participants';
import Toast from '../components/Toast';
import roomService from '../services/roomService';
import api from '../services/api';
import useAuth from '../hooks/useAuth';
import useSocket from '../context/SocketContext';
import { 
  MessageSquare, 
  Users, 
  FileText, 
  Code, 
  Terminal, 
  AlertCircle, 
  Sparkles,
  GitBranch,
  History,
  RotateCcw,
  Save,
  Clock,
  CheckCircle2,
  Loader2
} from 'lucide-react';

export default function CodingRoom() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const {
    connected,
    joinRoom,
    leaveRoom,
    roomUsers,
    typingUsers,
    messages,
    setMessages,
    activeCode,
    setActiveCode,
    activeLanguage,
    setActiveLanguage,
    lastCodeSender,
    emitCodeChange,
    emitLanguageChange,
    emitSendMessage,
    emitTyping,
  } = useSocket();

  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rightSidebarTab, setRightSidebarTab] = useState('chat'); // 'chat' | 'participants' | 'snapshots'
  const [mobileTab, setMobileTab] = useState('editor'); // 'problem' | 'editor' | 'output' | 'chat'
  const [toastMessage, setToastMessage] = useState(null);

  // Execution states
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [runResults, setRunResults] = useState(null);
  const [submissionResults, setSubmissionResults] = useState(null);
  const [consoleOutput, setConsoleOutput] = useState(null);

  // Snapshots state
  const [snapshots, setSnapshots] = useState([]);
  const [loadingSnapshots, setLoadingSnapshots] = useState(false);
  const [snapshotDesc, setSnapshotDesc] = useState('');

  const debounceTimerRef = useRef(null);

  const fetchSnapshots = useCallback(async () => {
    if (!roomId) return;
    setLoadingSnapshots(true);
    try {
      const res = await roomService.getSnapshots(roomId);
      if (res.success && res.data?.snapshots) {
        setSnapshots(res.data.snapshots);
      }
    } catch (err) {
      console.error('Failed to load snapshots:', err);
    } finally {
      setLoadingSnapshots(false);
    }
  }, [roomId]);

  // Fetch room data and join Socket.IO room
  useEffect(() => {
    let isMounted = true;

    const fetchRoom = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await roomService.getRoomByRoomId(roomId);
        if (res.success && res.data?.room) {
          if (isMounted) {
            setRoom(res.data.room);
            setActiveLanguage(res.data.room.language || 'javascript');
            if (res.data.room.code) {
              setActiveCode(res.data.room.code);
            }
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Unable to load coding room');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchRoom();
    fetchSnapshots();

    return () => {
      isMounted = false;
    };
  }, [roomId, setActiveLanguage, setActiveCode, fetchSnapshots]);

  // Join room on socket when ready
  useEffect(() => {
    if (connected && roomId) {
      joinRoom(roomId);
      // Fetch initial chat message history
      api.get(`/messages/${roomId}`)
        .then((res) => {
          if (res.data?.data?.messages) {
            setMessages(res.data.data.messages);
          }
        })
        .catch(() => {});
    }

    return () => {
      if (roomId) leaveRoom(roomId);
    };
  }, [connected, roomId, joinRoom, leaveRoom, setMessages]);

  // Handle local code editor typing with debouncing
  const handleCodeChange = (newCode) => {
    setActiveCode(newCode);

    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = setTimeout(() => {
      emitCodeChange(roomId, newCode);
    }, 250);
  };

  // Handle language switch
  const handleLanguageChange = (newLang) => {
    const starter = room?.problem?.starterCode?.[newLang] || `// ${newLang} solution\n`;
    emitLanguageChange(roomId, newLang, starter);
    setToastMessage(`Switched language to ${newLang}`);
  };

  // Reset code to problem starter
  const handleResetCode = () => {
    const starter = room?.problem?.starterCode?.[activeLanguage] || '';
    if (starter) {
      handleCodeChange(starter);
      setToastMessage('Reset code to problem template');
    }
  };

  // Run Code (Visible Tests Only)
  const handleRunCode = async () => {
    setIsRunning(true);
    setConsoleOutput('Executing visible sample test cases in sandbox...');
    try {
      const response = await api.post('/code/run', {
        roomId,
        problemId: room?.problem?._id || room?.problem?.slug,
        language: activeLanguage,
        code: activeCode,
      });

      if (response.data?.success) {
        setRunResults(response.data.data);
        setConsoleOutput(response.data.data.consoleLogs || 'Execution completed successfully.');
      } else {
        setConsoleOutput(response.data?.message || 'Execution error');
      }
    } catch (err) {
      setRunResults({
        allPassed: false,
        passedTests: 0,
        totalTests: room?.problem?.visibleTestCases?.length || 2,
        runtime: 0,
        errorMessage: err.response?.data?.message || err.message || 'Execution failed',
        testCases: (room?.problem?.visibleTestCases || []).map((v) => ({
          input: v.input,
          expectedOutput: v.expectedOutput,
          actualOutput: 'Execution Error: ' + (err.response?.data?.message || err.message),
          passed: false,
        })),
      });
      setConsoleOutput(`Execution Error: ${err.response?.data?.message || err.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  // Submit Code (Hidden + Visible Tests Evaluation)
  const handleSubmitCode = async () => {
    setIsSubmitting(true);
    setConsoleOutput('Evaluating solution against full double-blind test suites...');
    try {
      const response = await api.post('/code/submit', {
        roomId,
        problemId: room?.problem?._id || room?.problem?.slug,
        language: activeLanguage,
        code: activeCode,
      });

      if (response.data?.success) {
        setSubmissionResults(response.data.data);
        setToastMessage(
          response.data.data.status === 'ACCEPTED'
            ? 'Solution Accepted! 100% Tests Passed 🎉'
            : `Evaluation: ${response.data.data.status}`
        );
      }
    } catch (err) {
      setSubmissionResults({
        status: 'EXECUTION_ERROR',
        passedTests: 0,
        totalTests: 10,
        runtime: 0,
        errorMessage: err.response?.data?.message || err.message || 'Submission evaluation failed',
        testResults: [],
      });
      setToastMessage('Submission evaluation failed: ' + (err.response?.data?.message || err.message));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Save Session Snapshot
  const handleSaveSnapshot = async (e) => {
    if (e) e.preventDefault();
    setIsSaving(true);
    try {
      const res = await roomService.createSnapshot(roomId, {
        code: activeCode,
        language: activeLanguage,
        description: snapshotDesc.trim() || `Manual Snapshot (${new Date().toLocaleTimeString()})`,
      });
      if (res.success) {
        setToastMessage(`Snapshot Version ${res.data.snapshot.version} saved!`);
        setSnapshotDesc('');
        fetchSnapshots();
      }
    } catch (err) {
      setToastMessage('Failed to save snapshot: ' + err.message);
    } finally {
      setIsSaving(false);
    }
  };

  // Restore Code from Snapshot
  const handleRestoreSnapshot = async (snap) => {
    if (!window.confirm(`Restore code to Version ${snap.version}? Current unsaved changes will be replaced.`)) return;
    try {
      const res = await roomService.restoreSnapshot(roomId, snap._id);
      if (res.success) {
        handleCodeChange(snap.code);
        if (snap.language && snap.language !== activeLanguage) {
          setActiveLanguage(snap.language);
        }
        setToastMessage(`Restored code to Version ${snap.version}!`);
      }
    } catch (err) {
      setToastMessage('Failed to restore snapshot: ' + err.message);
    }
  };

  // Leave room
  const handleLeaveRoom = async () => {
    try {
      await roomService.leaveRoom(roomId);
    } catch (err) {}
    navigate('/');
  };

  if (loading) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div className="pulse-dot" style={{ width: '18px', height: '18px', margin: '0 auto 1rem' }}></div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Loading Coding Room...</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.35rem' }}>
            Setting up Monaco Editor and Socket.IO workspace
          </p>
        </div>
      </div>
    );
  }

  if (error || !room) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="card" style={{ maxWidth: '480px', textAlign: 'center', padding: '2.5rem' }}>
          <AlertCircle size={40} color="#f43f5e" style={{ margin: '0 auto 1rem' }} />
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>Unable to Join Room</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
            {error || 'This coding room does not exist or has expired.'}
          </p>
          <button onClick={() => navigate('/')} className="btn btn-primary" style={{ width: '100%' }}>
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const isReadOnly = room.permission === 'READ_ONLY' && room.owner?._id !== user?._id;

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'var(--bg-main)' }}>
      {/* ROOM HEADER */}
      <RoomHeader
        room={room}
        activeLanguage={activeLanguage}
        onLanguageChange={handleLanguageChange}
        onSaveSession={handleSaveSnapshot}
        onLeaveRoom={handleLeaveRoom}
        isSaving={isSaving}
        participantCount={roomUsers.length || 1}
      />

      {/* THREE-COLUMN WORKSPACE */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden', position: 'relative' }}>
        {/* LEFT COLUMN: Problem Panel (28% Width) */}
        <div
          style={{
            width: '28%',
            minWidth: '300px',
            maxWidth: '420px',
            height: '100%',
            overflowY: 'auto',
            borderRight: '1px solid var(--border-subtle)',
            background: '#0a0d14',
          }}
        >
          <ProblemPanel problem={room.problem} />
        </div>

        {/* CENTER COLUMN: Monaco Editor + Output Panel */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            overflow: 'hidden',
            borderRight: '1px solid var(--border-subtle)',
          }}
        >
          {/* Top Half: Monaco Code Editor with Shortcuts */}
          <div style={{ height: '60%', minHeight: '240px', overflow: 'hidden' }}>
            <CodeEditor
              code={activeCode}
              language={activeLanguage}
              onChange={handleCodeChange}
              readOnly={isReadOnly}
              onResetCode={handleResetCode}
              onRunCode={handleRunCode}
              onSubmitCode={handleSubmitCode}
              onSaveSnapshot={handleSaveSnapshot}
              lastEditorName={lastCodeSender}
            />
          </div>

          {/* Bottom Half: Output & Test Evaluation Panel */}
          <div style={{ height: '40%', minHeight: '180px', overflow: 'hidden' }}>
            <OutputPanel
              onRunCode={handleRunCode}
              onSubmitCode={handleSubmitCode}
              isRunning={isRunning}
              isSubmitting={isSubmitting}
              runResults={runResults}
              submissionResults={submissionResults}
              consoleOutput={consoleOutput}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Chat, Participants & Snapshot History */}
        <div
          style={{
            width: '24%',
            minWidth: '270px',
            maxWidth: '380px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            background: '#0d111a',
          }}
        >
          {/* Right Tab Switcher */}
          <div style={{ display: 'flex', borderBottom: '1px solid var(--border-subtle)', background: '#090c14' }}>
            <button
              onClick={() => setRightSidebarTab('chat')}
              style={{
                flex: 1,
                padding: '0.6rem 0.3rem',
                fontSize: '0.78rem',
                fontWeight: 600,
                background: rightSidebarTab === 'chat' ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                color: rightSidebarTab === 'chat' ? '#a5b4fc' : 'var(--text-muted)',
                border: 'none',
                borderBottom: rightSidebarTab === 'chat' ? '2px solid #6366f1' : '2px solid transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.3rem',
              }}
            >
              <MessageSquare size={13} />
              <span>Chat</span>
            </button>

            <button
              onClick={() => setRightSidebarTab('participants')}
              style={{
                flex: 1,
                padding: '0.6rem 0.3rem',
                fontSize: '0.78rem',
                fontWeight: 600,
                background: rightSidebarTab === 'participants' ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                color: rightSidebarTab === 'participants' ? '#a5b4fc' : 'var(--text-muted)',
                border: 'none',
                borderBottom: rightSidebarTab === 'participants' ? '2px solid #6366f1' : '2px solid transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.3rem',
              }}
            >
              <Users size={13} />
              <span>Users ({roomUsers.length || 1})</span>
            </button>

            <button
              onClick={() => {
                setRightSidebarTab('snapshots');
                fetchSnapshots();
              }}
              style={{
                flex: 1,
                padding: '0.6rem 0.3rem',
                fontSize: '0.78rem',
                fontWeight: 600,
                background: rightSidebarTab === 'snapshots' ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                color: rightSidebarTab === 'snapshots' ? '#a5b4fc' : 'var(--text-muted)',
                border: 'none',
                borderBottom: rightSidebarTab === 'snapshots' ? '2px solid #6366f1' : '2px solid transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.3rem',
              }}
            >
              <GitBranch size={13} />
              <span>History ({snapshots.length})</span>
            </button>
          </div>

          {/* Right Pane Body */}
          <div style={{ flex: 1, overflow: 'hidden' }}>
            {rightSidebarTab === 'chat' && (
              <Chat
                messages={messages}
                onSendMessage={(msg) => emitSendMessage(roomId, msg)}
                onTyping={() => emitTyping(roomId)}
                typingUsers={typingUsers}
              />
            )}

            {rightSidebarTab === 'participants' && (
              <Participants users={roomUsers} roomOwnerId={room.owner?._id} />
            )}

            {rightSidebarTab === 'snapshots' && (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '0.85rem' }}>
                {/* Save Snapshot Box */}
                <form onSubmit={handleSaveSnapshot} style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    <input
                      type="text"
                      className="form-input"
                      style={{ fontSize: '0.8rem', padding: '0.4rem 0.6rem' }}
                      placeholder="Snapshot note (e.g. DP approach)"
                      value={snapshotDesc}
                      onChange={(e) => setSnapshotDesc(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="btn btn-primary btn-sm"
                      style={{ padding: '0.4rem 0.75rem', whiteSpace: 'nowrap' }}
                      disabled={isSaving}
                    >
                      {isSaving ? <Loader2 size={13} className="spin" /> : <Save size={13} />}
                      Save
                    </button>
                  </div>
                </form>

                {/* Snapshots List */}
                <div style={{ flex: 1, overflowY: 'auto' }}>
                  {loadingSnapshots ? (
                    <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                      <Loader2 size={16} className="spin" style={{ margin: '0 auto 0.4rem' }} />
                      Loading history...
                    </div>
                  ) : snapshots.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '2.5rem 1rem', color: 'var(--text-muted)', fontSize: '0.825rem' }}>
                      <History size={24} style={{ margin: '0 auto 0.5rem', opacity: 0.5 }} />
                      <div>No snapshots saved yet</div>
                      <p style={{ fontSize: '0.75rem', marginTop: '0.3rem' }}>
                        Save a version before testing different approaches.
                      </p>
                    </div>
                  ) : (
                    snapshots.map((snap) => (
                      <div
                        key={snap._id}
                        style={{
                          background: '#090d16',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 'var(--radius-md)',
                          padding: '0.75rem',
                          marginBottom: '0.6rem',
                        }}
                      >
                        <div className="flex-between" style={{ marginBottom: '0.3rem' }}>
                          <span className="badge badge-primary" style={{ fontSize: '0.68rem', padding: '0.1rem 0.45rem' }}>
                            v{snap.version}
                          </span>
                          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                            {new Date(snap.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>

                        <div style={{ fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                          {snap.description}
                        </div>

                        <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                          By {snap.user?.name || 'Developer'} • {snap.language}
                        </div>

                        <button
                          onClick={() => handleRestoreSnapshot(snap)}
                          className="btn btn-secondary btn-sm"
                          style={{ width: '100%', fontSize: '0.725rem', padding: '0.3rem 0.5rem' }}
                        >
                          <RotateCcw size={12} color="var(--primary)" />
                          Restore Code
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Notification Toast */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          type="info"
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}
