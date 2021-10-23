import { Dispatch } from 'redux'
import {
  AUTH_ERROR, AUTH_SUCCESS, SET_UID, SIGN_OUT
} from '../types/Auth'

export const clearAuthState = (dispatch: Dispatch): void => {
  dispatch({
    type: AUTH_ERROR,
    payload: false,
  })
  dispatch({
    type: AUTH_SUCCESS,
    payload: false,
  })
}

export const clearUser = { type: SIGN_OUT, }

export const login = (email: string, password: string) => (
  dispatch: Dispatch
): void => {
  clearAuthState(dispatch)
  setTimeout(() => {
    const logged = Math.round(Math.random())
    if (logged) {
      dispatch({
        type: AUTH_SUCCESS,
        payload: true,
      })
      dispatch({
        type: SET_UID,
        payload: Math.round(Math.random() * 100),
      })
    } else {
      dispatch({
        type: AUTH_ERROR,
        payload: false,
      })
    }
  }, 1000)
}

