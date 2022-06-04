import './staff-dashboard.styles.js';
import { useSelector } from 'react-redux';

const StaffDashboard = () => {
    const currentUser = useSelector((state) => state.user.currentUser);
    <div>{currentUser.email}</div>
}

export default StaffDashboard;