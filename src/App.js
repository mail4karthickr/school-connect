import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './routes/signin/signin.component.jsx';
import StudentDashboard from './routes/student-dashboard/student-dashboard.component.jsx';
import ParentDashboard from './routes/parent-dashboard/parent-dashboard.component.jsx';
import StaffDashboard from './routes/staff-dashboard/staff-dashboard.component.jsx';
import PrivateRoute from './components/private-route/private-route.component.jsx';
import AppRoutes from './routes/app-routes.js';
function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route 
        path={AppRoutes.STUDENT_DASHBOARD}
        element={
          <PrivateRoute>
            <StudentDashboard />
          </PrivateRoute>
        }
      />
      <Route 
        path={AppRoutes.PARENT_DASHBOARD}
        element={
          <PrivateRoute>
            <ParentDashboard />
          </PrivateRoute>
        }
      />
      <Route 
      path={AppRoutes.STAFF_DASHBOARD}
      element={
        <PrivateRoute>
          <StaffDashboard />
        </PrivateRoute>
      }
    />
    </Routes>
  );
}

export default App;
