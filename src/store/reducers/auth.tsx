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

export default authReducer;
