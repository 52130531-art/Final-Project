import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  
  const getActivePage = () => {
    const path = location.pathname;
    if (path === '/') return 'Home';
    if (path === '/services') return 'Services';
    if (path === '/contact') return 'Contact';
    if (path === '/about') return 'About';
    if (path === '/needy-requests') return 'Needy Requests';
    if (path === '/donate-page') return 'Donor Page';
    if (path === '/donate-food') return 'Donate Food';
    if (path === '/donate-clothes') return 'Donate Clothes';
    if (path === '/donor-requests') return 'Donate Money';
    return 'Home';
  };
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  const activePage = getActivePage();
  return (
    <header className="header-section">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <div className="logo-container">
                <svg className="logo-svg" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="20" r="8" fill="none" stroke="#80d8da" strokeWidth="2"/>
                  <path d="M 50 28 Q 40 35 38 45 Q 35 50 38 55 Q 40 60 45 62" fill="none" stroke="#80d8da" strokeWidth="2"/>
                  <path d="M 50 28 Q 60 35 62 45 Q 65 50 62 55 Q 60 60 55 62" fill="none" stroke="#80d8da" strokeWidth="2"/>
                  <path d="M 45 62 Q 48 70 50 75 Q 52 70 55 62" fill="none" stroke="#80d8da" strokeWidth="2"/>
                  <path d="M 50 75 Q 50 85 48 92 Q 46 95 50 98 Q 54 95 52 92 Q 50 85 50 75" fill="none" stroke="#80d8da" strokeWidth="2"/>
                  <path d="M 50 15 Q 40 5 30 10" fill="none" stroke="#80d8da" strokeWidth="1.5"/>
                  <path d="M 50 15 Q 60 5 70 10" fill="none" stroke="#80d8da" strokeWidth="1.5"/>
                  <path d="M 50 12 Q 45 0 35 5" fill="none" stroke="#80d8da" strokeWidth="1.5"/>
                  <path d="M 50 12 Q 55 0 65 5" fill="none" stroke="#80d8da" strokeWidth="1.5"/>
                  <path d="M 45 18 Q 35 8 25 12" fill="none" stroke="#80d8da" strokeWidth="1.5"/>
                  <path d="M 55 18 Q 65 8 75 12" fill="none" stroke="#80d8da" strokeWidth="1.5"/>
                  <path d="M 48 16 Q 38 3 28 8" fill="none" stroke="#80d8da" strokeWidth="1.5"/>
                  <path d="M 52 16 Q 62 3 72 8" fill="none" stroke="#80d8da" strokeWidth="1.5"/>
                </svg>
                <span className="logo-text">HELPING HANDS</span>
              </div>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              {isAuthenticated ? (
                <>
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link className={`nav-link ${activePage === 'Home' ? 'active' : ''}`} to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${activePage === 'Services' ? 'active' : ''}`} to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${activePage === 'Contact' ? 'active' : ''}`} to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${activePage === 'About' ? 'active' : ''}`} to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${activePage === 'Needy Requests' ? 'active' : ''}`} to="/needy-requests">Needy Requests</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${activePage === 'Donate Page' ? 'active' : ''}`} to="/donate-page">Donate Page</Link>
                    </li>
                  </ul>
                  <div className="d-flex align-items-center ms-3">
                    <span className="text-light me-3">{user?.name || user?.email}</span>
                    <button className="btn btn-outline-light btn-sm" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
      </div>
      <div className="header-border"></div>
    </header>
  );
}

export default Header;

