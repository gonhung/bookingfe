import { ToastContainer } from 'react-toastify';
export default function ToastProvide() {
    return (
        <ToastContainer
            className={`rounded-3xl`}
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    );
}
