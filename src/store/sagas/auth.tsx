import { call, delay, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { getUserFromLocalStorageSuccess, logoutUserSuccess, signInWithUsernameStart, signInWithUsernameSuccess } from '../actions/auth';


function* signInUsernameSaga(action: ReturnType<typeof signInWithUsernameSuccess>) {
    yield put(signInWithUsernameStart());
    yield call([localStorage, 'setItem'], 'currentUser', JSON.stringify(action.payload));
    yield delay(1500);
    yield put(signInWithUsernameSuccess(action.payload));
}

function* logoutUserSaga() {
    yield call([localStorage, 'removeItem'], 'currentUser');
    yield delay(300);
    yield put(logoutUserSuccess());
}

function* getUserFromLocalStorageSaga() {
    const user = yield call([localStorage, 'getItem'], 'currentUser');
    yield put(getUserFromLocalStorageSuccess(JSON.parse(user)));
}


export default [
    takeEvery(actionTypes.SIGN_IN_USERNAME, signInUsernameSaga),
    takeEvery(actionTypes.LOGOUT_USER, logoutUserSaga),
    takeEvery(actionTypes.GET_USER_LOCAL_STORAGE, getUserFromLocalStorageSaga)

]
