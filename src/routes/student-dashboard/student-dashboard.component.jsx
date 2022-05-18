import { StudentDashboardContainer } from './student-dashboard.styles.js';
import { useSelector } from 'react-redux';
import StudentDashboardSideNav from '../../components/student-dashboard-sidenav/student-dashboard-sidenav.component';
const StudentDashboard = () => {
    return (
        <StudentDashboardSideNav />
    );
}

export default StudentDashboard;