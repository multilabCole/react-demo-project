import * as types from './actionTypes';
import * as userApi from '../../api/userApi';

// Action Creator

export function userLogggedInSuccess(user) {
    return {type: types.LOGIN_USER, user}
}

export function userCreatedSuccess(user) {
    return {type: types.CREATE_USER, user}
}

// Thunk
export function loginUser() {
    // every thunk returns a function
    // that accepts dispatch as an argument.
    // Redux thunk injects dispatch so we don't have to
    return function (dispatch) {
        return userApi
            .loginUser()
            .then(response => {
                dispatch(userLogggedInSuccess(response))
            })
            .catch(error => {
                throw error
            });
    }
}

export function createUser(user) {
    return function (dispatch) {
        return userApi
            .createUser(user)
            .then(savedUser => {
                dispatch(userCreatedSuccess(savedUser))
            })
            .catch(error => {
                throw error
            })
    }
}