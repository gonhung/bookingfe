import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const ServiceCard = ({ item, index }) => {
    const { id, name, description, bgColor, textColor } = item;

    return (
        <div key={id} className="py-[30px] px-3 lg:px-5">
            <div className="my-2">
                <h2 className="text-2xl max-w-xs truncate leading-9 text-headingColor font-[700px]">
                    {name}
                </h2>
            </div>
            <p className="text-[16px] leading-7 font-[400px] text-textColor mt-4">
                {description}
            </p>

            <div className="flex items-center justify-between mt-[30px]">
                <Link
                    to="/doctors"
                    className="w-[44px] h-[44px] rounded-full border-solid border-[#181A1E]
                                flex items-center justify-center hover:bg-primaryColor hover:border-none"
                >
                    <BsArrowRightCircle className="group-hover:text-white w-8 h-9" />
                </Link>
                <span
                    className="w-[44px] h-[44px] flex items-center
                    justify-center text-[18px] leading-[30] font-[600]"
                    style={{
                        background: `${bgColor}`,
                        color: `${textColor}`,
                        borderRadius: '6px 0 0 6px',
                    }}
                >
                    {index + 1}
                </span>
            </div>
        </div>
    );
};

export default ServiceCard;
