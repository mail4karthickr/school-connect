import { userReducer } from './user/user.reducer';
import { studentReducer } from './student/student.reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    user: userReducer,
    student: studentReducer
});