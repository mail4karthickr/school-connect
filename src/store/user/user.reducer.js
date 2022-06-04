import { USER_ACTION_TYPES } from './user.action';
import { loadState } from '../../utils/localstorage';

const persistedState = loadState();

const INITIAL_STATE = {
    currentUser: persistedState.user,
    isLoading: false,
    error: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER_ACTION_TYPES.SIGN_IN_START:
            return { ...state, isLoading: true, error: null };
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS: 
            return { ...state, isLoading: false, currentUser: payload };
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
            return { ...state, isLoading: false, error: payload };
        default:
            return { ...state };
    }
}