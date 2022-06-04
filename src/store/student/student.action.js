import { createAction } from '../../utils/reducer/reducer.utils';

 export const STUDENT_ACTION_TYPES = {
    CHANGE_SELECTED_TAB: 'student/changeSelectedTab',
    IS_SIDE_NAV_OPEN: 'student/isSideNavOpen'
}

export const ChangedSelectedTab = (selectedTab) => createAction(
    STUDENT_ACTION_TYPES.CHANGE_SELECTED_TAB,
    selectedTab
)

export const IsSideNavOpen = (isOpen) => createAction(
    STUDENT_ACTION_TYPES.IS_SIDE_NAV_OPEN,
    isOpen
)