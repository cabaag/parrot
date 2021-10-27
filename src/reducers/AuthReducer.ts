import axios from '../config/axiosConfig';
import {
  AUTH_ERROR, AUTH_SUCCESS, CLEAR_AUTH_STATE, REFRESH_TOKEN, SET_UID, SIGN_OUT, VALID_TOKEN
} from '../types/Auth';

let authState
if (typeof window !== 'undefined') {
  authState = JSON.parse(localStorage.getItem('auth') ?? '{}')
}

export type AuthState = {
  uuid: string | null;
  token: string | null;
  refresh: string | null;
  error: boolean
  success: boolean
  expired: boolean;
  expiresIn: number;
  loading: boolean;
}

const INITIAL_STATE: AuthState = {
  uuid: null,
  error: false,
  success: false,
  token: authState?.token,
  refresh: authState?.refresh,
  expired: authState?.expiresIn < Date.now() || false,
  expiresIn: 0,
  loading: true,
}

const authReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case CLEAR_AUTH_STATE:
      return {
        ...state, error: false, success: false,
        loading: false,

      }
    case AUTH_ERROR:
      return {
        ...state, error: true, success: false,
        loading: false,
      }
    case AUTH_SUCCESS: case REFRESH_TOKEN:
      // eslint-disable-next-line no-case-declarations
      const expiresIn = Date.now() + 1000 * 25
      localStorage.setItem('auth', JSON.stringify({
        ...action.payload,
        token: action.payload?.access,
        expiresIn
      }))
      axios.defaults.headers.common.Authorization = `Bearer ${action.payload?.access}`;;
      return {
        ...state,
        success: true,
        error: false,
        loading: false,
        ...action.payload,
        token: action.payload?.access,
        expiresIn
      }
    case VALID_TOKEN:
      return {
        ...state,
        success: true,
        error: false,
        loading: false,
        ...action.payload
      }
    case SIGN_OUT:
      localStorage.removeItem('auth')
      return {
        ...INITIAL_STATE,
        token: null,
        refresh: null,
        expired: false
      }
    default:
      return state
  }
}

export default authReducer
