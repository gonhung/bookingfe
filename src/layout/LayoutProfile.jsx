/* eslint-disable react/prop-types */
import MessageIcon from '@mui/icons-material/Message';
import { MdChangeCircle } from 'react-icons/md';
import PersonIcon from '@mui/icons-material/Person';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import ChangePassword from '../pages/Profile/ChangePassword';
import EditProfile from '../pages/Profile/EditProfile';
import Appointment from '../pages/Profile/Appointment';
import Message from '../pages/Profile/Message';
import { Link } from 'react-router-dom';
export default function LayoutProfile({ children }) {
    const menuItems = [
        {
            icon: <MdChangeCircle size={25} className="mr-4" />,
            text: 'Change Password',
            component: <ChangePassword />,
            path: 'change_password',
        },
        {
            icon: <PersonIcon size={25} className="mr-4" />,
            text: 'Profile Detail',
            component: <EditProfile />,
            path: 'edit_profile',
        },
        {
            icon: <BookOnlineIcon size={25} className="mr-4" />,
            text: 'Appointment',
            component: <Appointment />,
            path: 'appointment',
        },
        {
            icon: <MessageIcon size={25} className="mr-4" />,
            text: 'Message',
            component: <Message />,
            path: 'message',
        },
    ];

    return (
        <div className="mx-auto flex justify-between  p-4 shadow-sm ">
            <div
                className={
                    'w-[300px] h-screen  bg-white z-10 duration-300 border-r-2'
                }
            >
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        {menuItems.map(({ icon, text, path }, index) => {
                            return (
                                <div key={index} className=" py-4">
                                    <Link
                                        to={path}
                                        className="text-base flex cursor-pointer rounded-full mx-auto p-2 hover:text-white hover:bg-black"
                                    >
                                        {icon} {text}
                                    </Link>
                                </div>
                            );
                        })}
                    </ul>
                </nav>
            </div>
            <>{children}</>
        </div>
    );
}
