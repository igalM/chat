import * as actionTypes from './actionTypes';
import { typedAction } from '../../shared/utility';
import { User } from '../../types';

export const signInWithUsername = (user: User) => {
    return typedAction(actionTypes.SIGN_IN_USERNAME, user);
}

export const signInWithUsernameStart = () => {
    return typedAction(actionTypes.SIGN_IN_USERNAME_START);
}

export const signInWithUsernameSuccess = (user: User) => {
    return typedAction(actionTypes.SIGN_IN_USERNAME_SUCCESS, user);
}


export type AuthActions =
    ReturnType<
        typeof signInWithUsername |
        typeof signInWithUsernameSuccess |
        typeof signInWithUsernameStart
    >;