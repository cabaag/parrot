import {
  Dispatch
} from 'redux';
import axios from '../config/axiosConfig';
import {
  AUTH_ERROR, AUTH_SUCCESS, VALID_TOKEN, REFRESH_TOKEN
} from '../types/Auth';

let authState: any;
if (typeof window !== 'undefined') {
  authState = JSON.parse(localStorage.getItem('auth') ?? '{}')
  const AUTH_TOKEN = authState.token;
  axios.defaults.headers.common.Authorization = `Bearer ${AUTH_TOKEN}`;
}
export default class AuthService {
  public static token: string;

  constructor() {
    AuthService.token = authState?.token;
  }

  login = (email: string, password: string): any =>
    (dispatch: Dispatch) =>
      axios.post('api/auth/token', {
        username: email,
        password
      }).then((res: any) => {
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

  refreshToken = (refresh: string): any =>
    (dispatch: Dispatch) =>
      axios.post('/api/auth/token/refresh', {
        refresh
      }).then((res: any) => {
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

  isValidToken = (token: string): any =>
    (dispatch: Dispatch) =>
      axios.get('api/auth/token/test')
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

}

if (typeof window !== 'undefined') {
  const AUTH_TOKEN = authState.token;
  AuthService.token = AUTH_TOKEN;
}