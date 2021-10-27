import {
  Dispatch
} from 'redux'
import AuthService from '../services/AuthService'
import {
  AUTH_ERROR,
  AUTH_SUCCESS,
  CLEAR_AUTH_STATE, REFRESH_TOKEN, SIGN_OUT, VALID_TOKEN
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

export const login = (email: string, password: string) => (
  dispatch: Dispatch
): void => {
  clearAuthState(dispatch)
  authService.login(email, password)
    .then((res: any) => {
      dispatch({
        type: AUTH_SUCCESS,
        payload: res
      })
    }).catch(() => {
      dispatch({
        type: AUTH_ERROR,
        payload: false
      })
    })
}

export const refreshToken = (refresh: string) =>
  (dispatch: Dispatch): void => {
    authService.refreshToken(refresh)
      .then((res: any) => {
        dispatch({
          type: REFRESH_TOKEN,
          payload: res
        })
      }).catch(() => {
        dispatch({
          type: AUTH_ERROR,
          payload: false
        })
      })
  }

export const isValidToken = () => (
  (dispatch: Dispatch) =>
    authService.isValidToken()
      .then((res: any) => {
        dispatch({
          type: VALID_TOKEN,
          payload: res
        })
      }).catch(() => {
        dispatch({
          type: AUTH_ERROR,
        })
      })

)

export const logout = (dispatch: Dispatch): void => {
  dispatch({
    type: SIGN_OUT
  })
}