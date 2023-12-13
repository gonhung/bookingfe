import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileActions, loginActions } from '../redux/action/user.action';
import { ShowModal } from '../components/ShowModal';
import { Overlap } from '../components/Overlap';
import { resetSuccess } from '../redux/redux/user.slice';

const validate = Yup.object({
    username: Yup.string()
        .required('Tài khoản yêu cầu')
        .trim('Tài khoản yêu cầu'),
    password: Yup.string()
        .required('Mật khẩu yêu cầu')
        .trim('Mật khẩu yêu cầu'),
});

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validate),
    });

    const [loading, onLoading] = useState(false);
    const [overlap, setOverlap] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const success = useSelector((state) => state.user.success);

    const onLogin = async ({ username, password }) => {
        dispatch(loginActions({ username, password }));
        enableOverlap();
    };

    const enableOverlap = () => {
        setOverlap(true);
        onLoading(false);
    };

    const disableOverlap = () => {
        setOverlap(false);
        onLoading(true);
    };

    useEffect(() => {
        let overlapTimeout = null;
        const accessToken = localStorage.getItem('accessToken');

        enableOverlap();

        if (accessToken) {
            overlapTimeout = setTimeout(() => {
                setOverlap(false);
                navigate('/');
            }, 2000);
        }

        return () => {
            clearTimeout(overlapTimeout);
        };
    }, []);

    useEffect(() => {
        let overlapTimeout = null;

        if (success) {
            dispatch(resetSuccess());
            dispatch(getProfileActions());
            overlapTimeout = setTimeout(() => disableOverlap(), 2000);
        }

        overlapTimeout = setTimeout(() => setOverlap(false), 2000);
        return () => {
            clearTimeout(overlapTimeout);
        };
    }, [disableOverlap, resetSuccess, setOverlap]);

    useEffect(() => {
        let redirectPreviewRole =
            loading &&
            setTimeout(() => {
                navigate('/');
            }, 2000);

        return () => clearTimeout(redirectPreviewRole);
    }, [disableOverlap]);

    return (
        <section className="px-5 lg:px-0">
            <Overlap loading={overlap} />
            <ShowModal open={loading} title={'Đăng nhập thành công'} />
            <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
                <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
                    Xin Chào!{' '}
                    <span className="text-primaryColor">
                        Chào Mừng Bạn Quay Lại
                    </span>
                </h3>

                <form className="py-4 md:py-0" onSubmit={handleSubmit(onLogin)}>
                    <div className="mb-5">
                        <input
                            type="text"
                            placeholder="Nhập tên đăng nhập"
                            name="username"
                            {...register('username')}
                            className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                            placeholder:text-textColor  cursor-pointer"
                        />
                        {errors.username && (
                            <p className="text-red-500 text-sm mt-0">
                                {errors.username.message}
                            </p>
                        )}
                    </div>

                    <div className="mb-5">
                        <input
                            type="password"
                            placeholder="Nhập mật khẩu"
                            name="password"
                            {...register('password')}
                            className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                            placeholder:text-textColor  cursor-pointer"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-0">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div className="mt-7">
                        <button
                            type="submit"
                            className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                        >
                            <span>Đăng nhập</span>
                        </button>
                    </div>

                    <p className="mt-5 text-textColor text-center">
                        Bạn chưa có tài khoản?{' '}
                        <Link
                            to="/register"
                            className="text-primaryColor font-medium ml-1"
                        >
                            Đăng Ký
                        </Link>
                    </p>
                </form>
            </div>
        </section>
    );
};

export default Login;
