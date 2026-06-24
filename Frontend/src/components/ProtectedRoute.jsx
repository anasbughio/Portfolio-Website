import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute() {
  const { user, loading } = useAuth(); // Tip: If your context uses 'isAuthenticated', grab that instead

  // 1. While Axios is checking the token in the background, hold the screen
  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B0F17] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#7B88FF] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // 2. If no user is detected, instantly teleport them to login
  // 3. If user exists, <Outlet /> acts as an open door to let them pass
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}