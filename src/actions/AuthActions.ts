import {
  Dispatch
} from 'redux'
import AuthService from '../services/AuthService'
import {
  CLEAR_AUTH_STATE, SIGN_OUT
} from '../types/Auth'

const authService = new AuthService()

export const clearAuthState = (dispatch: Dispatch): void => {
  dispatch({
    type: CLEAR_AUTH_STATE
  })
}

export const clearUser = {
  type: SIGN_OUT,
}

export const refreshToken = (refresh: string) =>
  (dispatch: Dispatch): void => {
    dispatch(authService.refreshToken(refresh))
  }

export const login = (email: string, password: string) => (
  dispatch: Dispatch
): void => {
  clearAuthState(dispatch)
  dispatch(authService.login(email, password))
}

export const logout = (dispatch: Dispatch): void => {
  dispatch({
    type: SIGN_OUT
  })
}