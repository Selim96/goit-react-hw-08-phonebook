import { createSlice } from "@reduxjs/toolkit";
import { register } from "./auth-operations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.reducerPath.fulfild]: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        }
    },
});

export default authSlice.reducer;