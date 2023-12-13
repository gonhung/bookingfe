import { createAsyncThunk } from '@reduxjs/toolkit';
import { doctorAPI } from '../../api/doctor';
export const getSpecializedActions = createAsyncThunk(
    'specialized/getSpecializedActions',
    async () => {
        const response = await doctorAPI.getSpecialized();
        return response;
    },
);
