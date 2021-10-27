

export default class AuthService {
  public static token: string;

  login = () => Promise.resolve({
    token: 'token',
    refresh: 'refresh',
  })

  refreshToken = (token: string) =>Promise.resolve({
    token,
    refresh: 'refresh',
  })

}