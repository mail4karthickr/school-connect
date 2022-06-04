import './parent-dashboard.styles.js';
import { useSelector } from 'react-redux';

const ParentDashboard = () => {
    const currentUser = useSelector((state) => state.user.currentUser);
    <div>{`${currentUser.email}${currentUser.type}`}</div>
}

export default ParentDashboard;