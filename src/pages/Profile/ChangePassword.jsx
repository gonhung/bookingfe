import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const schemaValidation = Yup.object({
    password: Yup.string()
        .required('Mật khẩu yêu cầu')
        .trim('Mật khẩu yêu cầu')
        .max(20, ' Quá dài')
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g,
            {
                message:
                    'Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt',
            },
        ),
    passwordCurrent: Yup.string()
        .required('Mật khẩu mới yêu cầu')
        .trim('Mật khẩu mới yêu cầu')
        .max(20, ' Quá dài')
        .matches(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g,
            {
                message:
                    'Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt',
            },
        ),
    rePassword: Yup.string()
        .required('Mật khẩu nhập lại yêu cầu')
        .trim('Mật khẩu nhập lại yêu cầu')
        .oneOf([Yup.ref('passwordCurrent')], 'Mật khẩu không trùng'),
});

export default function ChangePassword() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemaValidation),
    });
    const { id } = useParams();
    console.log('const { id } = useParams();', id);

    const handleResetPassword = (data) => {};

    return (
        <div className="w-full ">
            <div className="container mx-auto px-4 relative">
                <div className="bg-white w-full mt-6 p-4 rounded-lg shadow-xl">
                    <h1 className="text-2xl my-3 font-medium ">
                        Change Password
                    </h1>
                    <form
                        className="space-x-3"
                        onSubmit={handleSubmit(handleResetPassword)}
                    >
                        <div>
                            <div className="space-y-5">
                                <div className="flex flex-col text-black">
                                    <label htmlFor="password" className="">
                                        Nhập Mật khẩu hiện tại
                                    </label>
                                    <input
                                        type="password"
                                        {...register('password')}
                                        id="password"
                                        className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                            placeholder:text-textColor  cursor-pointer"
                                    />
                                    {errors.password && (
                                        <p className="text-red-500 text-sm">
                                            {errors.password.message}
                                        </p>
                                    )}
                                </div>
                                <div className="flex flex-col text-black">
                                    <label
                                        htmlFor="passwordCurrent"
                                        className=""
                                    >
                                        Nhập Mật khẩu mới
                                    </label>
                                    <input
                                        type="password"
                                        {...register('passwordCurrent')}
                                        id="passwordCurrent"
                                        className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                            placeholder:text-textColor  cursor-pointer"
                                    />
                                    {errors.passwordCurrent && (
                                        <p className="text-red-500 text-sm">
                                            {errors.passwordCurrent.message}
                                        </p>
                                    )}
                                </div>
                                <div className="flex flex-col text-black">
                                    <label htmlFor="rePassword">
                                        Nhập lại mật khẩu
                                    </label>
                                    <input
                                        type="password"
                                        {...register('rePassword')}
                                        id="rePassword"
                                        className="w-full  py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                            focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                            placeholder:text-textColor  cursor-pointer"
                                    />
                                    {errors.rePassword && (
                                        <p className="text-red-500 text-sm">
                                            {errors.rePassword.message}
                                        </p>
                                    )}
                                </div>

                                <div className="flex flex-col">
                                    <button type="submit">
                                        <span className="text-sm font-normal text-white bg-primary rounded-md px-4 py-3 ">
                                            Change password
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-7">
                            <button
                                type="submit"
                                className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                            >
                                Xác nhận
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
