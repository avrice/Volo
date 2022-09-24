import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import coordReducer from '../features/coordinator/coordSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    coord: coordReducer
  },
})