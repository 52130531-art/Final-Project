import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { AuthProvider, useAuth } from './context/AuthContext';

import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import NeedyRequests from './pages/NeedyRequests';
import DonorRequests from './pages/DonorRequests';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';

import ProofUpload from "./pages/ProofUpload";
import DonatePage from "./pages/DonatePage";
import FoodDonation from "./pages/FoodDonation";
import ClothesDonation from "./pages/ClothesDonation";
import MoneyDonation from "./pages/MoneyDonation";

function AppRoutes() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <Routes>

      {/* Public routes */}
      <Route 
        path="/login" 
        element={isAuthenticated ? <Navigate to="/" replace /> : <Login />} 
      />

      <Route 
        path="/signup" 
        element={isAuthenticated ? <Navigate to="/" replace /> : <SignUp />} 
      />

      {/* Protected Routes */}
      <Route 
        path="/" 
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/services" 
        element={
          <ProtectedRoute>
            <Services />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/contact" 
        element={
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/about" 
        element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/needy-requests" 
        element={
          <ProtectedRoute>
            <NeedyRequests />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/donor-requests" 
        element={
          <ProtectedRoute>
            <DonorRequests />
          </ProtectedRoute>
        } 
      />

      {/* 🔥 Pages you added: MUST be protected too */}
      <Route 
        path="/proof-upload" 
        element={
          <ProtectedRoute>
            <ProofUpload />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/donate-page" 
        element={
          <ProtectedRoute>
            <DonatePage />
          </ProtectedRoute>
        } 
      />

      {/* Redirect unknown paths */}
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/donate-food" element={<FoodDonation />} />
  <Route path="/donate-clothes" element={<ClothesDonation />} />
  <Route path="/donate-money" element={<MoneyDonation />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;

