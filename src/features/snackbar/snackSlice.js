import { createSlice } from "@reduxjs/toolkit";

export const snackSlice = createSlice({
    name: 'auth',
    initialState: {
        isOpen: false,
        message: ""
    },
    reducers: {
        displaySnackbar: (state, message) => {
            console.log("dispatched snackbar")
            state.message = message;
            state.isOpen = true
        },
        clearSnackbar: (state) => {
            state.isOpen = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { displaySnackbar, clearSnackbar } = snackSlice.actions

export default snackSlice.reducer