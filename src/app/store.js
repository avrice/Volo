import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import coordReducer from '../features/coordinator/coordSlice';
import userReducer from '../features/user/userSlice';
import { applyMiddleware } from '@reduxjs/toolkit';

const asyncFunctionMiddleware = store => next => action => {
  // If the "action" is actually a function instead...
  console.log('Async function middleware called');
  if (typeof action === 'function') {
    // then call the function and pass `dispatch` and `getState` as arguments
    
    return action(store.dispatch, store.getState)
  }

  // Otherwise, it's a normal action - send it onwards
  return next(action)
}

export default configureStore({
  reducer: {
    auth: authReducer,
    coord: coordReducer,
    user: userReducer
  }
});