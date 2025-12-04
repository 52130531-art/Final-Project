import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/auth.css';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);

    try {
      // Store user with password for login (in real app, password would be hashed)
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = users.find(u => u.email === email);

      const response = await fetch("http://localhost:5000/auth/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });
      const data = await response.json();
      console.log(data);

      if (existingUser) {
        setError('Email already registered. Please login instead.');
        setLoading(false);
        return;
      }

      // Add user to users list
      const newUser = {
        name,
        email,
        password, // In production, this should be hashed
        createdAt: new Date().toISOString()
      };
      users.push(newUser);


      localStorage.setItem('users', JSON.stringify(users));

      // Sign up the user
      await signUp({ name, email });
      navigate('/');
    } catch (err) {
      setError(err.message || 'Failed to sign up. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Update label states when inputs have values
  useEffect(() => {
    if (name) {
      const label = document.getElementById('name-label');
      label?.classList.add('active');
    }
    if (email) {
      const label = document.getElementById('email-label');
      label?.classList.add('active');
    }
    if (password) {
      const label = document.getElementById('password-label');
      label?.classList.add('active');
    }
    if (confirmPassword) {
      const label = document.getElementById('confirmPassword-label');
      label?.classList.add('active');
    }
  }, [name, email, password, confirmPassword]);

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

      {/* Sign Up Card */}
      <div className="auth-card">
        <div className="auth-header">
          <svg className="auth-logo" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="20" r="8" fill="none" stroke="#80d8da" strokeWidth="2"/>
            <path d="M 50 28 Q 40 35 38 45 Q 35 50 38 55 Q 40 60 45 62" fill="none" stroke="#80d8da" strokeWidth="2"/>
            <path d="M 50 28 Q 60 35 62 45 Q 65 50 62 55 Q 60 60 55 62" fill="none" stroke="#80d8da" strokeWidth="2"/>
            <path d="M 45 62 Q 48 70 50 75 Q 52 70 55 62" fill="none" stroke="#80d8da" strokeWidth="2"/>
            <path d="M 50 75 Q 50 85 48 92 Q 46 95 50 98 Q 54 95 52 92 Q 50 85 50 75" fill="none" stroke="#80d8da" strokeWidth="2"/>
          </svg>
          <h1 className="auth-title">Join Us</h1>
          <p className="auth-subtitle">Create your account to get started</p>
        </div>

        {error && (
          <div className="auth-error" role="alert">
            {error}
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-form-group">
            <input
              type="text"
              className="auth-input"
              id="name"
              value={name}
              onChange={handleInputChange(setName, 'name-label')}
              required
              placeholder=" "
            />
            <label htmlFor="name" className="auth-label" id="name-label">
              Full Name
            </label>
          </div>

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
              minLength={6}
            />
            <label htmlFor="password" className="auth-label" id="password-label">
              Password (min 6 characters)
            </label>
          </div>

          <div className="auth-form-group">
            <input
              type="password"
              className="auth-input"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange(setConfirmPassword, 'confirmPassword-label')}
              required
              placeholder=" "
              minLength={6}
            />
            <label htmlFor="confirmPassword" className="auth-label" id="confirmPassword-label">
              Confirm Password
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
                Signing up...
              </>
            ) : (
              'Sign Up'
            )}
          </button>
        </form>

        <div className="auth-link-section">
          <p className="auth-link-text">
            Already have an account?{' '}
            <Link to="/login" className="auth-link">Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

