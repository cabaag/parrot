import AuthService from './AuthService';

jest.mock('./AuthService');
const service = new AuthService();

describe('AuthService', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('should login', async () => {
    const result = await service.login('email@email.com', 'password')
    expect(result?.token).toBe('token')
    expect(result?.refresh).toBe('refresh')
  });

  it('should throw error on login', async () => {
    service.login = jest.fn().mockRejectedValue(new Error('not logged'))
    expect(async () => {
      await service.login('email@email.com', 'password')
    }).rejects.toThrow()
  });

  it('should refresh token', async () => {
    const result = await service.refreshToken('newToken')
    expect(result?.token).toBe('newToken')
    expect(result?.refresh).toBe('refresh')
  });
});