import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './routes/signin/signin.component.jsx';
import StudentDashboard from './routes/student-dashboard/student-dashboard.component.jsx';
import ParentDashboard from './routes/parent-dashboard/parent-dashboard.component.jsx';
import StaffDashboard from './routes/staff-dashboard/staff-dashboard.component.jsx';
import PrivateRoute from './components/private-route/private-route.component.jsx';
import AppRoutes from './routes/app-routes.js';
import Assignments from './routes/assignments/assignments.component';
import Calendar from './routes/calendar/calendar.component';
import RequestCenter from './routes/request-center/request-center.component';
import Notifications from './routes/notifications/notifications.component';
import TimeTable from './routes/time-table/time-table.component';
import StudentInfo from './routes/student-info/student-info.component';

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
      >
        <Route 
          path={AppRoutes.ASSIGNMENTS}
          element={
            <PrivateRoute>
              <Assignments />
            </PrivateRoute>
          }
        />
        <Route 
          path={AppRoutes.CALENDAR}
          element={
            <PrivateRoute>
              <Calendar />
            </PrivateRoute>
          }
        />
        <Route 
          path={AppRoutes.REQUEST_CENTER}
          element={
            <PrivateRoute>
              <RequestCenter />
            </PrivateRoute>
          }
        />
        <Route 
          path={AppRoutes.TIME_TABLE}
          element={
            <PrivateRoute>
             <TimeTable />
            </PrivateRoute>
          }
        />
        <Route 
          path={AppRoutes.STUDENT_INFO}
          element={
            <PrivateRoute>
              <StudentInfo />
            </PrivateRoute>
          }
        />
      </Route>
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
