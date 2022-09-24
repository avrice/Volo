import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { auth, signInWithEmailAndPassword, signInWithGoogle, signOutFromGoogle } from "../app/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

export const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) {
            navigate('/login');
            dispatch(logout())
        }
    })

    return (
        <div>
            <h1>Dashboard</h1>
            <Button onClick={() => signOutFromGoogle()}>
                Sign Out
            </Button>
        </div>
    )
}