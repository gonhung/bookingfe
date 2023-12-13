import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const FeedbackForm = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [reviewText, setReviewText] = useState('');

    const handleSubmitReview = async (e) => {
        e.preventDefault();

        // later we will use our api
    };
    return (
        <form action="">
            <div>
                <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
                    Hãy đánh giá trải nghiệm của bạn tại đây nhé!
                </h3>

                <div>
                    {[...Array(5).keys()].map((_, index) => {
                        index += 1;
                        return (
                            <button
                                key={index}
                                type="button"
                                className={`${
                                    index <= ((rating && hover) || hover)
                                        ? 'text-yellowColor'
                                        : 'text-gray-400'
                                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                                onClick={() => setRating(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(index)}
                                onDoubleClick={() => {
                                    setHover(0);
                                    setRating(0);
                                }}
                            >
                                <span>
                                    <AiFillStar />
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="mt-[30px]">
                <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
                    Hãy chia sẻ ý kiến hoặc đề xuất của bạn.
                </h3>

                <textarea
                    className="border border-solid border-[#0066ff34] focus:out line outline-primaryColor w-full px-4 py-3 rounded-md"
                    rows="5"
                    placeholder="write your message"
                    onChange={(e) => setReviewText(e.target.va)}
                ></textarea>
            </div>

            <button type="submit" onClick={handleSubmitReview} className="btn">
                Submit Feedback
            </button>
        </form>
    );
};

export default FeedbackForm;
