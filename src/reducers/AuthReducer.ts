import {
  AUTH_ERROR, AUTH_SUCCESS, SET_UID, SIGN_OUT
} from '../types/Auth'

export type AuthState = {
  uid: string | null;
  error: boolean
  success: boolean
  isLogged: boolean;
}

const INITIAL_STATE: AuthState = {
  uid: null,
  error: false,
  success: false,
  isLogged: false,
}

const authReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case AUTH_ERROR:
      return {
        ...state, error: action.payload, success: false
      }
    case AUTH_SUCCESS:
      return {
        ...state, success: action.payload, error: false
      }
    case SET_UID:
      localStorage.setItem('@uid', action.payload)
      return { ...state, uid: action.payload }
    case SIGN_OUT:
      localStorage.remove('@uid')
      return { ...state, uid: null }
    default:
      return state
  }
}

export default authReducer
