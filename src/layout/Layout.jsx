import { useEffect, useCallback } from 'react';
// import { handleTokenValidation } from '../utils/validateToken';
import jwt from 'jwt-decode';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AppRouter from '../routes/AppRouter';
import ToastProvide from '../provide/ToastProvide';
import { useNavigate } from 'react-router-dom';
const Layout = () => {
    const navigate = useNavigate();

    const isTokenExpired = (token) => {
        const decodedToken = jwt(token);
        const currentTime = Date.now() / 1000;

        return decodedToken.exp < currentTime;
    };

    const handleTokenValidation = (token) => {
        return isTokenExpired(token) ? true : false;
    };

    const handleTokenValidations = useCallback((token) => {
        return handleTokenValidation(token);
    }, []);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');

        const checkTokenExpired =
            accessToken && handleTokenValidations(accessToken);

        if (checkTokenExpired) {
            localStorage.removeItem('accessToken');
            navigate('/login');
        }
    }, [handleTokenValidations]);

    return (
        <div className="scroll-smooth">
            <Header />
            <main>
                <AppRouter />
            </main>
            <Footer />
            <ToastProvide />
        </div>
    );
};

export default Layout;
