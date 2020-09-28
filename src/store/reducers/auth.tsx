import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
import { AuthActions } from '../actions/auth';
import { User } from '../../types';

interface AuthState {
    user: User | null;
    loading: boolean;
}

const initialState: AuthState = {
    user: null,
    loading: false
}

const authReducer = (state = initialState, action: AuthActions) => {
    switch (action.type) {
        case actionTypes.SIGN_IN_USERNAME_START:
            return signInWithUsernameStartHelper(state);
        case actionTypes.SIGN_IN_USERNAME_SUCCESS:
            return signInWithUsernameSuccessHelper(state, action.payload);
        case actionTypes.LOGOUT_USER_SUCCESS:
            return logoutUserSuccessHelper(state);
        case actionTypes.GET_USER_LOCAL_STORAGE_SUCCESS:
            return getUserFromLocalStorage(state, action.payload && action.payload);
        default:
            return state;
    }
}

const signInWithUsernameStartHelper = (state: AuthState): AuthState => {
    return updateObject(state, { loading: true });
}

const signInWithUsernameSuccessHelper = (state: AuthState, payload: User): AuthState => {
    return updateObject(state, { user: payload, loading: false });
}

const logoutUserSuccessHelper = (state: AuthState): AuthState => {
    return updateObject(state, { user: null });
}

const getUserFromLocalStorage = (state: AuthState, payload: User | null): AuthState => {
    return updateObject(state, { user: payload });
}

export default authReducer;
