import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  // Update label states when inputs have values
  useEffect(() => {
    if (email) {
      const label = document.getElementById('email-label');
      label?.classList.add('active');
    }
    if (password) {
      const label = document.getElementById('password-label');
      label?.classList.add('active');
    }
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.message || 'Failed to login. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (setter, labelId) => (e) => {
    setter(e.target.value);
    const label = document.getElementById(labelId);
    if (e.target.value) {
      label?.classList.add('active');
    } else {
      label?.classList.remove('active');
    }
  };

  return (
    <div className="auth-container">
      {/* Animated Background */}
      <div className="auth-background">
        <div className="auth-bubble"></div>
        <div className="auth-bubble"></div>
        <div className="auth-bubble"></div>
        <div className="auth-bubble"></div>
        <div className="auth-bubble"></div>
        <div className="auth-particle"></div>
        <div className="auth-particle"></div>
        <div className="auth-particle"></div>
        <div className="auth-particle"></div>
        <div className="auth-particle"></div>
      </div>

      {/* Login Card */}
      <div className="auth-card">
        <div className="auth-header">
          <svg className="auth-logo" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="20" r="8" fill="none" stroke="#80d8da" strokeWidth="2"/>
            <path d="M 50 28 Q 40 35 38 45 Q 35 50 38 55 Q 40 60 45 62" fill="none" stroke="#80d8da" strokeWidth="2"/>
            <path d="M 50 28 Q 60 35 62 45 Q 65 50 62 55 Q 60 60 55 62" fill="none" stroke="#80d8da" strokeWidth="2"/>
            <path d="M 45 62 Q 48 70 50 75 Q 52 70 55 62" fill="none" stroke="#80d8da" strokeWidth="2"/>
            <path d="M 50 75 Q 50 85 48 92 Q 46 95 50 98 Q 54 95 52 92 Q 50 85 50 75" fill="none" stroke="#80d8da" strokeWidth="2"/>
          </svg>
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to continue to Helping Hands</p>
        </div>

        {error && (
          <div className="auth-error" role="alert">
            {error}
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-form-group">
            <input
              type="email"
              className="auth-input"
              id="email"
              value={email}
              onChange={handleInputChange(setEmail, 'email-label')}
              required
              placeholder=" "
            />
            <label htmlFor="email" className="auth-label" id="email-label">
              Email Address
            </label>
          </div>

          <div className="auth-form-group">
            <input
              type="password"
              className="auth-input"
              id="password"
              value={password}
              onChange={handleInputChange(setPassword, 'password-label')}
              required
              placeholder=" "
            />
            <label htmlFor="password" className="auth-label" id="password-label">
              Password
            </label>
          </div>

          <button
            type="submit"
            className="auth-submit-btn"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="auth-spinner"></span>
                Logging in...
              </>
            ) : (
              'Login'
            )}
          </button>
        </form>

        <div className="auth-link-section">
          <p className="auth-link-text">
            Don't have an account?{' '}
            <Link to="/signup" className="auth-link">Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;

