import { takeLatest, all, call, put } from 'redux-saga/effects';
import { STUDENT_ACTION_TYPES } from './student.type';
import { 
    getUserDocumentFromAuth,
    signOutUser,
    getSubjectsAsync
} from '../../utils/firebase/firebase.utils';
import {
    GetStudentInfoFailed,
    GetStudentInfoSuccess,
    GetSubjectsSuccess,
    GetSubjectsFailed
} from './student.action';
import {
    getStudentDocument
 } from '../../utils/firebase/firebase.utils';

function* getSubjects(action) {
    try {
       const snapShot = yield call(getSubjectsAsync, action.payload);
       if (snapShot.exists()) {
           const data = snapShot.data();
           console.log("Subjects:", data);
           yield put(GetSubjectsSuccess(data));
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    } catch(error) {
        console.log("getSubjects error" + error);
        yield put(GetSubjectsFailed(error));
    }
}

export function* getSubjectsStart() {
    yield takeLatest(STUDENT_ACTION_TYPES.GET_SUBJECTS_START, getSubjects);
}

export function* studentSagas() {
    yield all([
        call(getSubjectsStart)
    ]);
}