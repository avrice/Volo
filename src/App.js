import logo from './logo.svg';
import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { GuestRoute } from './components/GuestRoute';

// Pages
import './App.css';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { NoMatch } from './pages/NoMatch';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/dashboard' />} />
        <Route path='/login' element={<GuestRoute><Login /></GuestRoute>} />
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
