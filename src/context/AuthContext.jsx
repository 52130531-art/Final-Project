import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const signUp = (userData) => {
    // In a real app, this would make an API call
    // For now, we'll just store in localStorage
    const newUser = {
      id: Date.now().toString(),
      email: userData.email,
      name: userData.name,
      createdAt: new Date().toISOString()
    };
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
    return Promise.resolve(newUser);
  };

  const login = (email, password) => {
    // In a real app, this would make an API call
    // For now, we'll check if user exists in localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = storedUsers.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const userData = { ...foundUser };
      delete userData.password; // Don't store password in user state
      localStorage.setItem('user', JSON.stringify(userData));
      setUser(userData);
      return Promise.resolve(userData);
    } else {
      return Promise.reject(new Error('Invalid email or password'));
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const value = {
    user,
    signUp,
    login,
    logout,
    loading,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

