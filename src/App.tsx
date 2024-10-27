import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import { useAuthStore } from './store/authStore';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/:tenantDomain" element={!isAuthenticated ? <LoginForm /> : <Navigate to="/:tenantDomain/dashboard" />} />
        <Route path="/:tenantDomain/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/:tenantDomain" />} />
        <Route path="/" element={<Navigate to="/ten1" />} />
      </Routes>
    </Router>
  );
}

export default App;