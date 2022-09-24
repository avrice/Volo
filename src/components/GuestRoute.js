import React from 'react';
import { Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

export const GuestRoute = ({children}) => {
    const auth = useSelector((state) => state.auth.value);

    return (
       auth
       ? <Navigate to='/dashboard' />
       : children
    );
}