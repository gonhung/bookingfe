import { createAsyncThunk } from '@reduxjs/toolkit';
import { ConversationAPI } from '../../api/conversation';

export const getConversationByUserActions = createAsyncThunk(
    'conversation/getConversation',
    async () => {
        const response = await ConversationAPI.getConversationByUser();
        return response;
    },
);
