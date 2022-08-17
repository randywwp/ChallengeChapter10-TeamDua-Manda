import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../services/firebase"
import * as types from "./actionTypes"

const registerStart = () => ({
    type: types.REGISTER_START,
})

const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user,
})

const registerFail = (error) => ({
    type: types.REGISTER_FAIL,
    payload: error,
})

const loginStart = () => ({
    type: types.LOGIN_START,
})

const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user,
})

const loginFail = (error) => ({
    type: types.LOGIN_FAIL,
    payload:error
})

const logoutStart = () => ({
    type: types.LOGOUT_START,
})

const logoutSuccess = (user) => ({
    type: types.LOGOUT_SUCCESS,
    payload: user,
})

const logoutFail = (error) => ({
    type: types.LOGOUT_FAIL,
    payload: error,
})

export const setUser = (user) => ({
    type: types.SET_USER,
    payload: user
})

const googleSignInStart = () => ({
    type: types.GOOGLE_SIGNIN_START,
})

const googleSignInSuccess = (user) => ({
    type: types.GOOGLE_SIGNIN_SUCCESS,
    payload: user,
})

const googleSignInFail = (error) => ({
    type: types.GOOGLE_SIGNIN_FAIL,
    payload:error
})

export const registerInitiate = (email, password, displayName) => {
    return function (dispatch) {
        dispatch(registerStart())
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                user.updateProfile({
                    displayName
                })
                dispatch(registerSuccess(user))
            })
            .catch((error) => dispatch(registerFail(error.message)))
    }
}

export const loginInitiate = (email, password) => {
    return function (dispatch) {
        dispatch(loginStart())
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(loginSuccess(user))
            })
            .catch((error) => dispatch(loginFail(error.message)))  
    }
}