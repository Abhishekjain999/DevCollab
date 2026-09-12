import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Code2, 
  BookOpen, 
  Terminal, 
  Users, 
  LayoutDashboard, 
  Plus, 
  LogIn, 
  LogOut, 
  UserCircle,
  Menu,
  X,
  Hash
} from 'lucide-react';
import useAuth from '../hooks/useAuth';
import CreateRoomModal from './CreateRoomModal';
import JoinRoomModal from './JoinRoomModal';

export default function Navbar({ backendConnected = true }) {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="app-header">
        <div className="container nav-container">
          {/* LOGO */}
          <Link to="/" className="brand-logo">
            <div className="logo-icon-box">
              <Code2 size={22} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span>DEV COLLAB</span>
                <span className="badge badge-primary" style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem' }}>v1.0</span>
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 400 }}>
                Code together. Build together.
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/problems" className={`nav-link ${isActive('/problems') ? 'active' : ''}`} style={{ color: isActive('/problems') ? '#ffffff' : undefined }}>
                  <BookOpen size={16} color={isActive('/problems') ? '#6366f1' : 'currentColor'} />
                  <span>Problems (70+)</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`} style={{ color: isActive('/dashboard') ? '#ffffff' : undefined }}>
                  <LayoutDashboard size={16} color={isActive('/dashboard') ? '#06b6d4' : 'currentColor'} />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/interview" className={`nav-link ${isActive('/interview') ? 'active' : ''}`} style={{ color: isActive('/interview') ? '#ffffff' : undefined }}>
                  <Users size={16} color={isActive('/interview') ? '#10b981' : 'currentColor'} />
                  <span>Recruiter Mode</span>
                </Link>
              </li>
              {user?.role === 'ADMIN' && (
                <li>
                  <Link to="/admin" className={`nav-link ${isActive('/admin') ? 'active' : ''}`} style={{ color: isActive('/admin') ? '#ffffff' : undefined }}>
                    <Shield size={16} color="#f59e0b" />
                    <span>Admin Panel</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          {/* ACTIONS & AUTH */}
          <div className="flex-gap-2" style={{ display: 'flex', alignItems: 'center' }}>
            <button 
              onClick={() => setIsJoinOpen(true)}
              className="btn btn-secondary btn-sm"
              title="Join a Room with Room ID"
            >
              <Hash size={14} />
              <span>Join</span>
            </button>

            <button 
              onClick={() => setIsCreateOpen(true)}
              className="btn btn-primary btn-sm"
              title="Start a new real-time room"
            >
              <Plus size={14} />
              <span>New Room</span>
            </button>

            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginLeft: '0.5rem' }}>
                <Link 
                  to="/dashboard" 
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}
                  title="View Profile & Submissions"
                >
                  <div className="user-avatar">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.825rem', fontWeight: 600 }}>
                      {user.name ? user.name.split(' ')[0] : 'Developer'}
                    </span>
                    <span className="badge badge-emerald" style={{ fontSize: '0.6rem', padding: '0.05rem 0.4rem', width: 'fit-content' }}>
                      {user.role || 'USER'}
                    </span>
                  </div>
                </Link>
                <button 
                  onClick={logout} 
                  className="btn btn-secondary btn-sm" 
                  style={{ padding: '0.4rem', borderRadius: 'var(--radius-sm)' }}
                  title="Sign Out"
                >
                  <LogOut size={14} />
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '0.5rem' }}>
                <Link to="/login" className="btn btn-secondary btn-sm">
                  <LogIn size={14} />
                  <span>Sign In</span>
                </Link>
                <Link to="/register" className="btn btn-primary btn-sm">
                  <span>Sign Up</span>
                </Link>
              </div>
            )}

            {/* Mobile menu toggle */}
            <button 
              className="btn btn-secondary btn-sm mobile-only" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ padding: '0.4rem', display: 'none' }}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* MODALS */}
      <CreateRoomModal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} />
      <JoinRoomModal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
    </>
  );
}
