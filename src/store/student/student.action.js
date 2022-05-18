import { createAction } from '../../utils/reducer/reducer.utils';
import { STUDENT_ACTION_TYPES } from './student.type.js';

export const GetStudentInfoStart = (id) => createAction(
    STUDENT_ACTION_TYPES.GET_STUDENT_INFO_START,
    {id}
)

export const GetStudentInfoSuccess = (studentInfo) => createAction(
    STUDENT_ACTION_TYPES.GET_STUDENT_INFO_SUCCESS,
    studentInfo
)

export const GetStudentInfoFailed = (error) => createAction(
    STUDENT_ACTION_TYPES.GET_STUDENT_INFO_FAILED,
    error
)
