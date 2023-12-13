import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import signupImg from '../../assets/signup.gif';
import { useDispatch, useSelector } from 'react-redux';
import { registerActions } from '../../redux/action/user.action';
import { Overlap } from '../Overlap';
import { ShowModal } from '../ShowModal';

const validate = Yup.object({
    firstName: Yup.string()
        .required('Họ yêu cầu')
        .trim('Họ yêu cầu')
        .max(50, 'Tên to long'),
    lastName: Yup.string()
        .required('Tên yêu cầu')
        .trim('Tên yêu cầu')
        .max(50, 'Tên to long'),
    username: Yup.string()
        .required('tên đăng nhập yêu cầu')
        .trim('tên đăng nhập yêu cầu')
        .max(50, 'tên đăng nhập to long'),
    email: Yup.string()
        .required('Email yêu cầu')
        .trim('Email yêu cầu')
        .max(50, 'Email quá dài')
        .matches(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm, {
            message: 'Email sai định dạng',
        }),
    password: Yup.string()
        .required('Mật khẩu yêu cầu')
        .trim('Mật khẩu yêu cầu')
        .max(20, 'Mật khẩu quá dài')
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g,
            {
                message:
                    'Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt',
            },
        ),
});

export function FormRegister({ onNext }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validate),
    });

    const [loading, onLoading] = useState(false);
    const [overlap, setOverlap] = useState(false);
    const dispatch = useDispatch();

    const success = useSelector((state) => state.user.success);
    const user = useSelector((state) => state.user.user);

    const onRegister = async ({
        firstName,
        lastName,
        username,
        email,
        password,
    }) => {
        dispatch(
            registerActions({ firstName, lastName, username, email, password }),
        );
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
        let overlapTimeout =
            overlap && setTimeout(() => disableOverlap(), 1000);

        return () => {
            clearTimeout(overlapTimeout);
        };
    }, [disableOverlap]);

    useEffect(() => {
        let redirectPreviewRole =
            loading &&
            setTimeout(() => {
                onNext();
            }, 2000);

        return () => clearTimeout(redirectPreviewRole);
    }, [disableOverlap]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <Overlap loading={overlap} />
            <ShowModal open={loading} title={'Tài khoản tạo mới thành công'} />
            <div className="hidden lg:block bg-primaryColor rounded-l-lg">
                <figure className="rounded-l-lg">
                    <img
                        src={signupImg}
                        alt=""
                        className="w-full rounded-l-lg"
                    />
                </figure>
            </div>

            <div className="rounded-l-lg lg:pl-16 py-10">
                <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
                    Đăng ký{' '}
                    <span className="text-primaryColor"> tài khoản</span>
                </h3>

                <form onSubmit={handleSubmit(onRegister)}>
                    <div className="inline-flex space-x-2 w-full">
                        <div className="mb-5 w-1/2">
                            <input
                                type="text"
                                placeholder="Họ"
                                {...register('firstName')}
                                className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                placeholder:text-textColor  cursor-pointer"
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-sm mt-0">
                                    {errors.firstName.message}
                                </p>
                            )}
                        </div>
                        <div className="mb-5 w-1/2">
                            <input
                                type="text"
                                placeholder="Tên"
                                {...register('lastName')}
                                className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                placeholder:text-textColor  cursor-pointer"
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-sm mt-0">
                                    {errors.lastName.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="mb-5">
                        <input
                            type="email"
                            placeholder="Nhập Email"
                            name="email"
                            {...register('email')}
                            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                placeholder:text-textColor  cursor-pointer"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-0">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className="mb-5">
                        <input
                            type="text"
                            placeholder="Nhập tài khoản"
                            name="username"
                            {...register('username')}
                            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
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
                            placeholder="Nhập Mật Khẩu"
                            name="password"
                            {...register('password')}
                            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
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
                            Đăng Ký
                        </button>
                    </div>

                    <p className="mt-5 text-textColor text-center">
                        Bạn đã có tài khoản?{' '}
                        <Link
                            to="/login"
                            className="text-primaryColor font-medium ml-1"
                        >
                            Đăng nhập
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
