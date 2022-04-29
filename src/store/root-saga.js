import { userSagas } from './user/user.saga';
import { all, call } from 'redux-saga/effects';

export function* rootSaga() {
    yield all([
        call(userSagas)
    ]);
}