import axios from 'axios';

// =================================================================
// RUNTIME BROWSER CHECK (Bypasses Vite compiler bugs 100%)
// =================================================================
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' || 
  window.location.hostname === '127.0.0.1'
);

const API = axios.create({
  // Agar browser ka address bar 'localhost' hai toh 5000 par jao, warna cloud '/api' use karo:
  baseURL: isLocalhost ? 'http://localhost:5000/api' : '/api',
  withCredentials: true,
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;