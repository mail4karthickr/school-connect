import { STUDENT_ACTION_TYPES } from './student.action';
import SideNavOptions from '../../components/student-sidenav-options';

const INITIAL_STATE = {
    subjects: [],
    isLoading: false,
    error: null,
    selectedTab: SideNavOptions.ASSIGNMENTS,
    isSideNavOpen: false
}

export const studentReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case STUDENT_ACTION_TYPES.CHANGE_SELECTED_TAB:
            return { ...state, selectedTab: payload, isSideNavOpen: false }
        case STUDENT_ACTION_TYPES.IS_SIDE_NAV_OPEN:
            return { ...state, isSideNavOpen: payload }
        default:
            return state
    }
}