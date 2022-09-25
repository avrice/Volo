import logo from './logo.svg';
import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { LoginRoute } from './routes/LoginRoute';
import { GuestRoute } from './routes/GuestRoute';

// Pages
import './App.css';
import { NoMatch } from './pages/NoMatch';
import NotFound from "pages/NoMatch";
import CoordinatorScreenPage from 'pages/CoordinatorScreen';
import DashboardPage from 'pages/Dashboard';
import HomeLoggedInPage from 'pages/HomeLoggedIn';
import HomeNotLoggedInPage from 'pages/HomeNotLoggedIn';
import LeaderboardPage from 'pages/Leaderboard';
import OverlayPage from 'pages/Overlay';
import OverlayOnePage from 'pages/OverlayOne';
import OverlayTwoPage from 'pages/OverlayTwo';
import OverlayThreePage from 'pages/OverlayThree';
import AppSnackbar from "./components/Snackbar";

function App() {
  return (
      <>
        <AppSnackbar/>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<HomeNotLoggedInPage />} />
            <Route path='/dashboard' element={<LoginRoute><DashboardPage /></LoginRoute>} />
            <Route path='/leaderboard' element={<LoginRoute><LeaderboardPage /></LoginRoute>} />
            <Route path='/coordinate' element={<LoginRoute><CoordinatorScreenPage /></LoginRoute>} />
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
