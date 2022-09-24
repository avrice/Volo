import React from 'react';
import { Route, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

export const LoginRoute = ({children}) => {
    const auth = useSelector((state) => state.auth.value);

    return (
       auth
       ? children
       : <Navigate to='/login' />
    );
}