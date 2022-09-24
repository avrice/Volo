import { createSlice } from "@reduxjs/toolkit";
import { auth } from '../../app/firebase';

const initUser = {
    uid: '',
    authToken: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initUser,
    reducers: {
        setToken: (state, action) => {
            state.authToken = action.payload;
            state.authToken = 'placeholder';
            
        },

        refreshUser: (state) => {
            state = initUser;
        }
    },
});




  
// Action creators are generated for each case reducer function
export const { setToken, refreshUser } = userSlice.actions;
  
export default userSlice.reducer;

export const fetchToken = async (dispatch, getState) => {
    console.log('Middleware called');
    const user = auth.currentUser();
    if (!user) {
        dispatch(refreshUser);
    } else {
        dispatch(setToken(await user.getIdToken()));
    }
}