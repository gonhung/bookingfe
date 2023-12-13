import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { UserAPI } from '../../api/user';

export const loginActions = createAsyncThunk(
    'UserAPI/loginActions',
    async ({ username, password }) => {
        try {
            const response = await UserAPI.userLogin({ username, password });
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },
);

export const registerActions = createAsyncThunk(
    'UserAPI/registerActions',
    async ({ firstName, lastName, username, email, password }) => {
        try {
            const response = await UserAPI.userRegister({
                firstName,
                lastName,
                username,
                email,
                password,
            });

            return response;
        } catch (error) {
            toast.error(error);
        }
    },
);

export const getProfileActions = createAsyncThunk(
    'userAPI/profile',
    async () => {
        try {
            const response = await UserAPI.getProfile();
            return response;
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },
);
