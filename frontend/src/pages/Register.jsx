import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, Code2, Lock, Mail, User, Shield, Users, Loader2 } from 'lucide-react';
import useAuth from '../hooks/useAuth';

export default function Register() {
  const navigate = useNavigate();
  const { register, loading, authError } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('USER');
  const [localError, setLocalError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password) {
      setLocalError('Please fill in all required fields');
      return;
    }
    if (password.length < 6) {
      setLocalError('Password must be at least 6 characters');
      return;
    }

    setLocalError(null);
    const result = await register({ name: name.trim(), email: email.trim(), password, role });
    if (result.success) {
      navigate('/dashboard', { replace: true });
    } else {
      setLocalError(result.message || 'Registration failed');
    }
  };

  return (
    <div style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1.5rem' }}>
      <div className="card card-glow" style={{ width: '100%', maxWidth: '480px', padding: '2.25rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="logo-icon-box" style={{ margin: '0 auto 1rem', width: '48px', height: '48px', background: 'linear-gradient(135deg, #10b981, #06b6d4)' }}>
            <UserPlus size={26} />
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.4rem' }}>Create Account</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Join DEV COLLAB for real-time collaborative coding
          </p>
        </div>

        {(localError || authError) && (
          <div style={{ background: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.3)', color: '#fda4af', padding: '0.75rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
            {localError || authError}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                className="form-input"
                style={{ paddingLeft: '2.5rem' }}
                placeholder="e.g. Abhishek Jain"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <User 
                size={16} 
                style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} 
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div style={{ position: 'relative' }}>
              <input
                type="email"
                className="form-input"
                style={{ paddingLeft: '2.5rem' }}
                placeholder="developer@devcollab.io"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Mail 
                size={16} 
                style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} 
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type="password"
                className="form-input"
                style={{ paddingLeft: '2.5rem' }}
                placeholder="At least 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Lock 
                size={16} 
                style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} 
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Account Role</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
              <button
                type="button"
                onClick={() => setRole('USER')}
                style={{
                  padding: '0.75rem 0.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: role === 'USER' ? '1px solid #6366f1' : '1px solid var(--border-subtle)',
                  background: role === 'USER' ? 'rgba(99, 102, 241, 0.15)' : 'var(--bg-input)',
                  color: role === 'USER' ? '#ffffff' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontWeight: 600, fontSize: '0.8rem', marginBottom: '0.15rem' }}>Developer</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Solve & Practice</div>
              </button>

              <button
                type="button"
                onClick={() => setRole('RECRUITER')}
                style={{
                  padding: '0.75rem 0.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: role === 'RECRUITER' ? '1px solid #10b981' : '1px solid var(--border-subtle)',
                  background: role === 'RECRUITER' ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-input)',
                  color: role === 'RECRUITER' ? '#ffffff' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontWeight: 600, fontSize: '0.8rem', marginBottom: '0.15rem' }}>Recruiter</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Interviews</div>
              </button>

              <button
                type="button"
                onClick={() => setRole('ADMIN')}
                style={{
                  padding: '0.75rem 0.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: role === 'ADMIN' ? '1px solid #f59e0b' : '1px solid var(--border-subtle)',
                  background: role === 'ADMIN' ? 'rgba(245, 158, 11, 0.15)' : 'var(--bg-input)',
                  color: role === 'ADMIN' ? '#ffffff' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontWeight: 600, fontSize: '0.8rem', marginBottom: '0.15rem' }}>Admin</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Manage System</div>
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '0.75rem', padding: '0.75rem' }}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 size={16} className="spin" />
                Creating Account...
              </>
            ) : (
              <>
                <UserPlus size={16} />
                Sign Up
              </>
            )}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
