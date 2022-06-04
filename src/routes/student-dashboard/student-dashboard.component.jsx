import { StudentDashboardContainer } from './student-dashboard.styles.js';
import { useSelector } from 'react-redux';
import { Outlet, Routes, Route} from 'react-router-dom';
import StudentDashboardSideNav from '../../components/student-dashboard-sidenav/student-dashboard-sidenav.component';
import StudentSideNavOptions from '../../components/student-sidenav-options';
import Assignments from '../../routes/assignments/assignments.component';
import AppRoutes from '../app-routes.js';

const StudentDashboard = () => {
    const selectedTab = useSelector((state) => state.student.selectedTab);

    return (
        <StudentDashboardContainer>
            <StudentDashboardSideNav />
            <Outlet />
        </StudentDashboardContainer>
    );
}

export default StudentDashboard;