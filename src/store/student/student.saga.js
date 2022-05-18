import { takeLatest, all, call, put } from 'redux-saga/effects';
import { STUDENT_ACTION_TYPES } from './student.type';
import { 
    getUserDocumentFromAuth,
    signOutUser
} from '../../utils/firebase/firebase.utils';
import { 
    GetStudentInfoFailed,
    GetStudentInfoSuccess
} from './student.action';

function* getStudentInfo({payload: {id}}) {
    yield put(GetStudentInfoSuccess({}));
}

export function* getStudentInfoStart() {
    yield takeLatest(STUDENT_ACTION_TYPES.GET_STUDENT_INFO_START, getStudentInfo);
}

export function* studentSagas() {
    yield all([
        call(getStudentInfoStart)
    ]);
}