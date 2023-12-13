import AXIOS_CONFIG from './axios.config';

export const ConversationAPI = {
    async getConversationByUser() {
        const response = await AXIOS_CONFIG.get('/conversation/get-all');

        return response.data;
    },
};
