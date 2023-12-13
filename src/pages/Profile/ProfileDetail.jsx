import LayoutProfile from '../../layout/LayoutProfile';
import { Outlet } from 'react-router-dom';

export default function ProfileDetail() {
    return (
        <LayoutProfile>
            <div className="w-full mt-0 relative bg-white py-4 shadow-xl">
                <Outlet />
            </div>
        </LayoutProfile>
    );
}
