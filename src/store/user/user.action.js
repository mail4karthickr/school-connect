import { createAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES } from './user.type';

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
