import React from 'react';
import { Code2, Github, Heart, Shield, Terminal, BookOpen, Layers } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="container footer-content">
        <div className="flex-between" style={{ flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ maxWidth: '420px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <div className="logo-icon-box" style={{ width: '30px', height: '30px' }}>
                <Code2 size={18} />
              </div>
              <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>DEV COLLAB</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.6' }}>
              A real-time collaborative coding platform combining ideas from LeetCode, VS Code, Google Docs collaboration, and CodePair.
            </p>
            <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Tagline: <span style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>"Code together. Build together."</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Platform
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
                <li><a href="#problems" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>DSA Problem Bank (70+)</a></li>
                <li><a href="#rooms" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Collaborative IDE</a></li>
                <li><a href="#interviews" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Recruiter Interview Mode</a></li>
                <li><a href="#history" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Version Snapshots</a></li>
              </ul>
            </div>

            <div>
              <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Technology
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
                <li><span style={{ color: 'var(--text-secondary)' }}>MongoDB & Mongoose</span></li>
                <li><span style={{ color: 'var(--text-secondary)' }}>Express.js REST APIs</span></li>
                <li><span style={{ color: 'var(--text-secondary)' }}>React & Monaco Editor</span></li>
                <li><span style={{ color: 'var(--text-secondary)' }}>Socket.IO Real-time Engine</span></li>
              </ul>
            </div>

            <div>
              <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Security
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem' }}>
                <li><span style={{ color: 'var(--text-secondary)' }}>Sandboxed Execution</span></li>
                <li><span style={{ color: 'var(--text-secondary)' }}>Hidden Test Case Guard</span></li>
                <li><span style={{ color: 'var(--text-secondary)' }}>JWT & Role-based Access</span></li>
                <li><span style={{ color: 'var(--text-secondary)' }}>Protected Room Scopes</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>&copy; {new Date().getFullYear()} DEV COLLAB. All rights reserved.</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
            <span>Made with</span>
            <Heart size={14} color="#f43f5e" fill="#f43f5e" />
            <span>by <strong style={{ color: '#818cf8' }}>Abhishek Jain</strong></span>
          </div>

          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <a href="#github" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>GitHub</a>
            <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>About</a>
            <a href="#terms" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms</a>
            <a href="#privacy" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
