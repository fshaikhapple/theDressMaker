import { all, fork } from 'redux-saga/effects';
import { loginSaga } from "./loginSaga";
// import { offersLookSaga } from '../../home/pages/dashboard/saga';

export function* rootSaga() {
    // yield all([fork(loginSaga),fork(offersLookSaga)]);
    yield all([fork(loginSaga)]);
}