import { takeLatest, call, put } from "redux-saga/effects";

export const cartSaga = [takeLatest('PRODUCT_ADD_TO_CART', cartWorkerSaga)]

function* cartWorkerSaga(action) {
    try {
        console.log("accccc", action);
        yield put({ type: 'PRODUCT_ADD_TO_CART_START', payload: action?.product })
    }
    catch (error) {
        console.log("err", error)
    }
}
