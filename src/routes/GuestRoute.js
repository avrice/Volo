import React from 'react';
import { Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../app/firebase';
import { useAuthState } from "react-firebase-hooks/auth";

export const GuestRoute = ({children}) => {
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <p>Loading...</p>;
    } else if (user) {
        return <Navigate to='/dashboard' />;
    } else if (error) {
       return <p>Authentication error</p>;
    } else {
       return children
    }
}