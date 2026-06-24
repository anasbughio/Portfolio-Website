import React, { createContext, useState, useContext, useEffect } from 'react';
import API from '../api/axios';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Auto-Login: If the user refreshes the page, look in the browser's memory for their saved token
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

 // ================= SIGNUP (AXIOS REFACTOR) =================
  const signup = async (name, email, password) => {
    setLoading(true);
    setError(null);
    try {
      // Look how clean this is! No JSON.stringify(), no manual headers
      const response = await API.post('/auth/signup', { name, email, password });
      
      const data = response.data; // Axios puts the payload inside .data automatically

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data));

      setToken(data.token);
      setUser(data);
      setLoading(false);
      return { success: true };
    } catch (err) {
      setLoading(false);
      // Axios stores backend error messages inside err.response.data.message
      const errorMessage = err.response?.data?.message || err.message;
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  // ================= LOGIN (AXIOS REFACTOR) =================
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await API.post('/auth/login', { email, password });
      const data = response.data;

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data));

      setToken(data.token);
      setUser(data);
      setLoading(false);
      return { success: true };
    } catch (err) {
      setLoading(false);
      const errorMessage = err.response?.data?.message || 'Login failed';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    }
  };
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, error, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);