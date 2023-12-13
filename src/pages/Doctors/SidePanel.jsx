const SidePanel = () => {
    return (
        <div className="shadow-panelShadow p-3 lg:p-5 rounded-md ">
            <div className="flex items-center justify-between">
                <p className="text__para mt-0 font-semibold">GIÁ</p>
                <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
                    500.000 VND
                </span>
            </div>

            <div className="mt-[30px]">
                <p className="text__para mt-0 font-semibold text-headingColor">
                    Thời gian trống:
                </p>

                <ul className="mt-3">
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            Chủ Nhật
                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            8:00 - 16:00
                        </p>
                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            Thứ 3
                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            8:00 - 16:00
                        </p>
                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            Thứ 5
                        </p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">
                            8:00 - 16:00
                        </p>
                    </li>
                </ul>
            </div>

            <button className="btn px-2 w-full rounded-md">Đặt Lịch Hẹn</button>
        </div>
    );
};

export default SidePanel;
