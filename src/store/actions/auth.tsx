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

export const logoutUser = () => {
    return typedAction(actionTypes.LOGOUT_USER);
}

export const logoutUserSuccess = () => {
    return typedAction(actionTypes.LOGOUT_USER_SUCCESS);
}

export const getUserFromLocalStorage = () => {
    return typedAction(actionTypes.GET_USER_LOCAL_STORAGE);
}

export const getUserFromLocalStorageSuccess = (user: User | null) => {
    return typedAction(actionTypes.GET_USER_LOCAL_STORAGE_SUCCESS, user);
}


export type AuthActions =
    ReturnType<
        typeof signInWithUsername |
        typeof signInWithUsernameSuccess |
        typeof signInWithUsernameStart |
        typeof logoutUser |
        typeof logoutUserSuccess |
        typeof getUserFromLocalStorage |
        typeof getUserFromLocalStorageSuccess
    >;