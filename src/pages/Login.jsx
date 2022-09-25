import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../app/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from '@mui/material';
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { fetchToken, setToken } from "../features/user/userSlice";

export const Login = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            dispatch(login());
            navigate('/dashboard');
        }
    });

    if (loading) {
        return (<p>Loading login page...</p>);
    } else {
        return <Button onClick={() => {
            signInWithGoogle().then(() => {
                const authUser = auth.currentUser;
                if (authUser) {
                    authUser.getIdToken().then((token) => {
                        sessionStorage.setItem('authToken', token);
                    });
                }
            });
        }}>LOGIN</Button>;
    }
}