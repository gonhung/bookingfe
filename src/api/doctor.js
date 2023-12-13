import { toast } from 'react-toastify';
import AXIOS_CONFIG from './axios.config';

export const doctorAPI = {
    async getSpecialized() {
        try {
            const response = await AXIOS_CONFIG.get('/specialized/get-all');
            return response.data;
        } catch (error) {
            toast.error(error);
        }
    },

    async createDoctor({
        userId,
        phone,
        certification,
        email,
        timeBegin,
        timeEnd,
    }) {},
};
