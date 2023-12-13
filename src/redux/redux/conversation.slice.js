import { createSlice } from '@reduxjs/toolkit';
import { getConversationByUserActions } from '../action/conversation.action';

const initState = {
    conversation: [],
};

const conversationReduce = createSlice({
    name: 'conversation',
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            getConversationByUserActions.fulfilled,
            (state, action) => {
                console.log(action.payload);
                state.conversation = action.payload;
            },
        );
    },
});

export default conversationReduce.reducer;
