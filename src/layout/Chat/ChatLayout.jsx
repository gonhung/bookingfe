import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getConversationByUserActions } from '../../redux/action/conversation.action';
export default function ChatLayout({ children }) {
    const [conversation, setConversation] = useState([]);

    const listConversation = useSelector(
        (state) => state.conversation.conversation,
    );

    const dispatch = useDispatch();

    useEffect(() => {
        listConversation.length > 0 && setConversation(listConversation);
    }, [listConversation]);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');

        accessToken && dispatch(getConversationByUserActions());
    }, []);

    return (
        <div className="mx-auto flex justify-between  p-2 shadow-sm">
            <div
                className={
                    'w-[200px] h-screen border-r-2 bg-white z-10 duration-300'
                }
            >
                <nav>
                    <ul className="flex flex-col p-2 text-gray-800">
                        {conversation &&
                            conversation.map(({ name }, index) => {
                                return (
                                    <div key={index} className=" py-4">
                                        <Link
                                            to={name}
                                            className="text-base flex cursor-pointer rounded-full mx-auto p-2 hover:text-white hover:bg-black"
                                        >
                                            {name}
                                        </Link>
                                    </div>
                                );
                            })}
                    </ul>
                </nav>
            </div>
            <>{children}</>
            {/* <div className=" w-full ">
                <ChatApp /> */}
            {/* </div> */}
        </div>
    );
}
