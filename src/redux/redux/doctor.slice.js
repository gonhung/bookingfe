import { createSlice } from '@reduxjs/toolkit';
import { getSpecializedActions } from '../action/doctor.action';

const initState = {
    listSpecialized: [],
};

const doctorReduce = createSlice({
    name: 'doctor',
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSpecializedActions.fulfilled, (state, action) => {
            state.listSpecialized = action.payload;
        });
    },
});

export default doctorReduce.reducer;
