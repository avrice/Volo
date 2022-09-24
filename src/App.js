import logo from './logo.svg';
import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { LoginRoute } from './routes/LoginRoute';
import { GuestRoute } from './routes/GuestRoute';

// Pages
import './App.css';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { NoMatch } from './pages/NoMatch';
import { Leaderboard } from './pages/Leaderboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/dashboard' />} />
        <Route path='/login' element={<GuestRoute><Login /></GuestRoute>} />
        <Route path='/dashboard' element={<LoginRoute><Dashboard /></LoginRoute>} />
        <Route path='/leaderboard' element={<LoginRoute><Leaderboard /></LoginRoute>} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
