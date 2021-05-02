import { takeLatest, call, put } from "redux-saga/effects";

export function* loginSaga() {
	yield takeLatest('LOGIN', loginWorkerSaga);
}

function* loginWorkerSaga(action) {
	try {
		if (action.payload.userName === 'a' && action.payload.password === 'a') {
			yield put({ type: 'LOGIN_SUCCESS', payload: { userName: action.userName, password: action.password } })
		} else {
			yield put({ type: 'LOGIN_FAILED' })
		}
		console.log("action in saga", action);
	}
	catch (error) {
		console.log("err", error)
	}
}
