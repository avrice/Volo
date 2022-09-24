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
import FrameTwentyThree from "pages/FrameTwentyThree";
import FrameThirtyFour from "pages/FrameThirtyFour";
import Home1 from "pages/Home1";
import Slide169Six from "pages/Slide169Six";
import Slide169Four from "pages/Slide169Four";
import Slide169Two from "pages/Slide169Two";
import Slide169One from "pages/Slide169One";
import FrameEighteen from "pages/FrameEighteen";
import Slide169Three from "pages/Slide169Three";
import Home from "pages/Home1";
import NotFound from "pages/NoMatch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Slide169Three />} />
        <Route path='/dashboard' element={<LoginRoute><Dashboard /></LoginRoute>} />
        <Route path='/leaderboard' element={<LoginRoute><FrameEighteen /></LoginRoute>} />
        <Route path='/coordinate' element={<LoginRoute><FrameTwentyThree /></LoginRoute>} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
