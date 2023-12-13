import { createSlice } from '@reduxjs/toolkit';
import {
    getProfileActions,
    loginActions,
    registerActions,
} from '../action/user.action';

const initState = {
    success: false,
    user: null,
};

const userReduce = createSlice({
    name: 'user',
    initialState: initState,
    reducers: {
        resetSuccess: (state, action) => {
            state.success = false;
        },
        cleanUser: (state, action) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerActions.pending, (state, action) => {
                state.success = false;
            })
            .addCase(registerActions.fulfilled, (state, action) => {
                state.user = action.payload?.user[0];
                state.success = user && true;
            });
        builder.addCase(loginActions.fulfilled, (state, action) => {
            state.success = action.payload && true;
        });
        builder.addCase(getProfileActions.fulfilled, (state, action) => {
            state.user = action.payload[0];
        });
    },
});

export const { resetSuccess, cleanUser } = userReduce.actions;

export default userReduce.reducer;
