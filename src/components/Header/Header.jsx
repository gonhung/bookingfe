import { useEffect, useRef, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/react.svg';
import userImg from '../../assets/Dr-Truong-Hieu-Nghia.jpg';
import { BiMenu } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileActions } from '../../redux/action/user.action';
import LogoutIcon from '@mui/icons-material/Logout';
import { cleanUser } from '../../redux/redux/user.slice';
const navLink = [
    {
        path: '/home',
        display: 'Home',
    },
    {
        path: '/doctors',
        display: 'Find a Doctor',
    },

    {
        path: '/services',
        display: 'Services',
    },
    {
        path: '/contact',
        display: 'Contact',
    },
];

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    const user = useSelector((state) => state.user.user);
    const success = useSelector((state) => state.user.success);

    const dispatch = useDispatch();

    const [data, setData] = useState(null);

    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                headerRef.current?.classList.add('sticky_header');
            } else {
                headerRef.current?.classList.remove('sticky_header');
            }
        });
    };

    useEffect(() => {
        user ? setData(user) : setData(null);
    }, [user]);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            dispatch(getProfileActions());
        }
    }, []);

    const handleLogout = () => {
        dispatch(cleanUser());

        localStorage.removeItem('accessToken');
        navigate('/');
    };

    useEffect(() => {
        handleStickyHeader();

        return () => window.removeEventListener('scroll', handleStickyHeader);
    }, []);

    const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

    return (
        <header className="header items-center" ref={headerRef}>
            <div className="container">
                <div className="flex items-center justify-between ">
                    {/* //logo */}
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    {/* menu */}
                    <div
                        className="navigation"
                        ref={menuRef}
                        onClick={toggleMenu}
                    >
                        <ul className="menu flex items-center gap-[2.7rem]">
                            {navLink.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={link.path}
                                        className={(navClass) =>
                                            navClass.isActive
                                                ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                                                : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'
                                        }
                                    >
                                        {link.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* nav right */}

                    <div className="flex items-center gap-4">
                        {data ? (
                            <>
                                <Link to="/profile/edit_profile">
                                    <div className="inline-flex items-center space-x-2">
                                        <span>{data?.username}</span>
                                        <figure className="w-5 h-5 rounded-full cursor-pointer">
                                            <img
                                                src={userImg}
                                                className="w-full rounded-full object-contain"
                                                alt=""
                                            />
                                        </figure>
                                    </div>
                                </Link>
                                <div onClick={handleLogout}>
                                    <LogoutIcon className="w-5 h-5 hover:cursor-pointer" />
                                </div>
                            </>
                        ) : (
                            <>
                                <Link to="/login">
                                    <button
                                        className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex 
                        items-center rounded-[50px]"
                                    >
                                        Login
                                    </button>
                                </Link>
                            </>
                        )}

                        <span className="md:hidden" onClick={toggleMenu}>
                            <BiMenu className="w-6 h-6 cursor-pointer" />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
