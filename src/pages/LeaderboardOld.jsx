import React, { useEffect } from 'react';
import { LeaderboardPanel } from '../components/LeaderboardPanel';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../app/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from '../features/auth/authSlice';

export const Leaderboard = () => {
    return (
        <div>
            <LeaderboardPanel />
        </div>
    )
}