export default function Input({ register, data, isError, errorMessage, type, placeholder }) {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                {...register('lastName')}
                className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                placeholder:text-textColor  cursor-pointer"
            />
            {isError && (
                <p className="text-red-500 text-sm mt-0">
                    {errors.lastName.message}
                </p>
            )}
        </>
    );
}
