import { createAction } from '../../utils/reducer/reducer.utils';

export const USER_ACTION_TYPES = {
    SIGN_IN_START: 'user/SIGN_IN_START',
    SIGN_IN_SUCCESS: 'user/SIGN_IN_SUCCESS',
    SIGN_IN_FAILED: 'user/SIGN_IN_FAILED',
    SIGN_OUT_START: 'user/SIGN_OUT_START',
    SIGN_OUT_SUCCESS: 'user/SIGN_OUT_SUCCESS',
    SIGN_OUT_FAILED: 'user/SIGN_OUT_FAILED',
}

export const SignInStart = (email, password) => createAction(
    USER_ACTION_TYPES.SIGN_IN_START, 
    { email, password }
);

export const SignInSuccess = (user) => createAction(
    USER_ACTION_TYPES.SIGN_IN_SUCCESS,
    user
);

export const SignInFailed = (error) => createAction(
    USER_ACTION_TYPES.SIGN_IN_FAILED,
    error
);

export const signOutStart = () => createAction(
    USER_ACTION_TYPES.SIGN_OUT_START
);

export const signOutSuccess = () => 
    createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (error) => 
    createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
