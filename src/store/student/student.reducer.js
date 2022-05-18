import { STUDENT_ACTION_TYPES } from './student.type';

const INITIAL_STATE = {
    studentInfo: null,
    isLoading: false,
    error: null
}

export const studentReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case STUDENT_ACTION_TYPES.GET_STUDENT_INFO_START:
            return { ...state, studentInfo: payload, isLoading: true }
        case STUDENT_ACTION_TYPES.GET_STUDENT_INFO_SUCCESS:
            return { ...state, studentInfo: payload, isLoading: false }
        case STUDENT_ACTION_TYPES.GET_STUDENT_INFO_FAILED:
            return { ...state, error: payload, isLoading: false }
        default:
            return state
    }
}