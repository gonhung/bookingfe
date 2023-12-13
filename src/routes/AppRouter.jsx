import Home from '../pages/Home';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import { Routes, Route } from 'react-router-dom';
import ProfileDetail from '../pages/Profile/ProfileDetail';
import ChangePassword from '../pages/Profile/ChangePassword';
import Appointment from '../pages/Profile/Appointment';
import Message from '../pages/Profile/Message';
import EditProfile from '../pages/Profile/EditProfile';
import ChatApp from '../components/Chat/ChatApp';
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:id" element={<DoctorDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/profile" element={<ProfileDetail />}>
                <Route path="change_password" element={<ChangePassword />} />
                <Route path="appointment" element={<Appointment />} />
                <Route path="message" element={<Message />}>
                    <Route path=":id" element={<ChatApp />} />
                </Route>
                <Route path="edit_profile" element={<EditProfile />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
