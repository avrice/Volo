import React from 'react';
import { Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { auth } from '../app/firebase';
import { useAuthState } from "react-firebase-hooks/auth";

export const LoginRoute = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    console.log(loading);
    
    if (loading) {
        return <p>Loading...</p>;
    } else if (user) {
        return children;
    } else if (error) {
       return <p>Authentication error</p>;
    } else {
       return <Navigate to='/login' />
    }
}