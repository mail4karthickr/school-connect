import { createAction } from '../../utils/reducer/reducer.utils';
import { STUDENT_ACTION_TYPES } from './student.type.js';

export const ChangedSelectedTab = (selectedTab) => createAction(
    STUDENT_ACTION_TYPES.CHANGE_SELECTED_TAB,
    selectedTab
)

export const GetSubjectsStart = (className) => createAction(
    STUDENT_ACTION_TYPES.GET_SUBJECTS_START,
    className
)

export const GetSubjectsSuccess = (subjects) => createAction(
    STUDENT_ACTION_TYPES.GET_SUBJECTS_SUCCESS,
    subjects
)

export const GetSubjectsFailed = (error) => createAction(
    STUDENT_ACTION_TYPES.GET_SUBJECTS_FAILED,
    error
)