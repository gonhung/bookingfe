const Contact = () => {
    return (
        <section>
            <div className="px-4 mx-auto max-w-screen-md">
                <h2 className="heading text-center">Liên hệ với chúng tôi</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text__para">
                    Có sự cố kỹ thuật? Muốn gửi phản hồi về một tính năng beta?
                    Hãy cho chúng tôi biết.
                </p>

                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="form__label">
                            {' '}
                            Email của bạn
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="nhunghth.21it@vku.udn"
                            className="form__input mt-1"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="form__label">
                            {' '}
                            Mô tả
                        </label>
                        <input
                            type="text"
                            id="subject"
                            placeholder="Hãy cho chúng tôi biết làm thế nào chúng tôi có thể giúp bạn."
                            className="form__input mt-1"
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="form__label">
                            {' '}
                            Tin nhắn
                        </label>
                        <textarea
                            rows="6"
                            type="text"
                            id="message"
                            placeholder="Để lại bình luận của bạn..."
                            className="form__input mt-1"
                        />
                    </div>
                    <button type="submit" className="btn rounded sm:w-fit">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
