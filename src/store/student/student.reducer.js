import { STUDENT_ACTION_TYPES } from './student.type';
import SideNavOptions from '../../components/StudentSideNavOptions';

const INITIAL_STATE = {
    subjects: [],
    isLoading: false,
    error: null,
    selectedTab: SideNavOptions.ASSIGNMENTS
}

export const studentReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case STUDENT_ACTION_TYPES.CHANGE_SELECTED_TAB:
            return { ...state, selectedTab: payload }
        case STUDENT_ACTION_TYPES.GET_SUBJECTS_START:
            return { ...state, isLoading: true };
        case STUDENT_ACTION_TYPES.GET_SUBJECTS_SUCCESS:
            return { ...state, isLoading: false, subjects: payload.subjects };
        case STUDENT_ACTION_TYPES.GET_SUBJECTS_ERROR:
            return { ...state, isLoading: false, error: payload };
        default:
            return state
    }
}