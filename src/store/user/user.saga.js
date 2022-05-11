import { takeLatest, all, call, put } from 'redux-saga/effects';
import { USER_ACTION_TYPES } from './user.type';
import { 
    signInUserWithEmailAndPassword, 
    getUserDocumentFromAuth,
    signOutUser
} from '../../utils/firebase/firebase.utils';
import { 
    SignInSuccess, 
    SignInFailed,
    signOutSuccess,
    signOutFailed
} from './user.action';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(
            getUserDocumentFromAuth,
            userAuth, 
            additionalDetails
        );
        console.log(userSnapshot)
        yield put(SignInSuccess({id: userSnapshot.id, ...userSnapshot.data()}));
    } catch (error) {
        yield put(SignInFailed(error));
    }
}

function* signInWithEmail({payload: { email, password }}) {
    try {
        if (email === "" || password === "") {
            yield put(SignInFailed("Username or Password is empty"));
            return
        }
        const user = yield call(
            signInUserWithEmailAndPassword, 
            email, 
            password
        );
        console.log(user);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        console.log(`SignInError - ${error}`);
        yield put(SignInFailed("Incorrect username or password"));
    }
}

export function* onSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_IN_START, signInWithEmail);
}

export function* signOut() {
    try {
        yield call(signOutUser);
        yield put(signOutSuccess());
     } catch(error) {
         yield put(signOutFailed(error));
     }
}

export function* userSagas() {
    yield all([
        call(onSignInStart)
    ]);
}