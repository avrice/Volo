import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../app/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from '@mui/material';
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

export const Login = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        
        if (user) {
            navigate('/dashboard');
            dispatch(login());
        }
    });

    return (
        <Button onClick={() => signInWithGoogle()}>LOGIN</Button>
    )
}