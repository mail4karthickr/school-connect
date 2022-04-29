import { USER_ACTION_TYPES } from './user.type';

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_ACTION_TYPES.SIGN_IN_START:
            return { ...state, isLoading: true };
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS: 
            return { ...state, isLoading: false, user: payload };
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
            return { ...state, isLoading: false, error: payload };
        default:
            return { ...state };
    }
}