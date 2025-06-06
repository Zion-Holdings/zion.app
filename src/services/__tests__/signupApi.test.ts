import { signup } from '../signupApi';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('signup service', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('returns data on 201 response', async () => {
    mockedAxios.post.mockResolvedValueOnce({ status: 201, data: { token: 't' } });
    await expect(signup({ email: 'a@b.c', password: 'pass' })).resolves.toEqual({ token: 't' });
    expect(mockedAxios.post).toHaveBeenCalledWith('/api/auth/register', { email: 'a@b.c', password: 'pass' });
  });

  test('throws on 400 response', async () => {
    mockedAxios.post.mockResolvedValueOnce({ status: 400, data: { message: 'bad' } });
    await expect(signup({ email: 'a@b.c', password: 'pass' })).rejects.toThrow('bad');
  });

  test('throws on 409 response', async () => {
    mockedAxios.post.mockResolvedValueOnce({ status: 409, data: { message: 'Email already exists' } });
    await expect(signup({ email: 'a@b.c', password: 'pass' })).rejects.toThrow('Email already exists');
  });

  test('throws on network error', async () => {
    mockedAxios.post.mockRejectedValueOnce(new Error('server down'));
    await expect(signup({ email: 'a@b.c', password: 'pass' })).rejects.toThrow('server down');
  });
});