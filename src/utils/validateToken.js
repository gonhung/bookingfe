import jwt_decode from 'jwt-decode';

const isTokenExpired = (token) => {
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000;

    return decodedToken.exp < currentTime;
};

export const handleTokenValidation = (token) => {
    return isTokenExpired(token) ? true : false;
};
