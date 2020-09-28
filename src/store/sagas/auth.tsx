import { delay, put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { signInWithUsernameStart, signInWithUsernameSuccess } from '../actions/auth';


function* signInUsernameSaga(action: ReturnType<typeof signInWithUsernameSuccess>) {
    yield put(signInWithUsernameStart());
    yield delay(1500);
    yield put(signInWithUsernameSuccess(action.payload));
}


export default [
    takeEvery(actionTypes.SIGN_IN_USERNAME, signInUsernameSaga),
]
