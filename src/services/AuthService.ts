import axios from '../config/axiosConfig';

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

  login = (email: string, password: string): Promise<any> =>
    axios.post('api/auth/token', {
      username: email,
      password
    })

  refreshToken = (refresh: string): any =>
    axios.post('/api/auth/token/refresh', {
      refresh
    })

  isValidToken = (): any =>
    axios.get('api/auth/token/test')
}

if (typeof window !== 'undefined') {
  const AUTH_TOKEN = authState.token;
  AuthService.token = AUTH_TOKEN;
}