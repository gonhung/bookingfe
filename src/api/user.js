import AXIOS_CONFIG from './axios.config';

export const UserAPI = {
    async userLogin({ username, password }) {
        const response = await AXIOS_CONFIG.post('/auth/login', {
            username,
            password,
        });

        if (response.data.accessToken) {
            localStorage.setItem('accessToken', response.data.accessToken);
        }

        return response.data;
    },

    async userRegister({ firstName, lastName, username, email, password }) {
        const response = await AXIOS_CONFIG.post('/auth/register', {
            firstName,
            lastName,
            username,
            email,
            password,
        });

        return response.data;
    },

    async createRole({ roleName }) {
        const response = await AXIOS_CONFIG.post('/user_role/create-role', {
            roleName,
        });

        return response.data;
    },

    async getUserRole() {
        const response = await AXIOS_CONFIG.get('/user_role/get-user-role');

        return response.data;
    },

    async getProfile() {
        const response = await AXIOS_CONFIG.get('/user/profile');

        return response.data;
    },
};
