import { takeLatest, all, call, put } from 'redux-saga/effects';
import { USER_ACTION_TYPES } from './user.type';
import { 
    signInUserWithEmailAndPassword, 
    getUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
    try {
        const userSnapshot = yield call(
            getUserDocumentFromAuth,
            userAuth, 
            additionalDetails
        );
        console.log(`userSnapshot -- ${userSnapshot}`)
        // yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data}));
    } catch (error) {
        // yield put(signInFailed(error));
        console.log(`getSnapshotFromUserAuth error -- ${error}`)
    }
}

function* signInWithEmail({payload: { email, password }}) {
    try {
        const user = yield call(
            signInUserWithEmailAndPassword, 
            email, 
            password
        );
        console.log(user);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        console.log(`SignInError - ${error}`);
    }
}

export function* onSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
    yield all([
        call(onSignInStart)
    ]);
}