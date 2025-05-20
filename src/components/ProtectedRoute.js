import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  // ⏳ Wait until loading is done (important on page refresh)
  if (loading) {
    return <div>Loading...</div>; // Or a spinner
  }

  // 🚫 Not logged in → redirect to login (preserve location for redirect-back)
  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // 🚫 Logged in, but not allowed role → redirect to homepage
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // ✅ All checks passed → allow access
  return children;
};

export default ProtectedRoute;
