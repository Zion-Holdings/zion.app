import axios from 'axios';
import fetchMock from 'jest-fetch-mock';
import { safeStorage } from '@/utils/safeStorage';

jest.mock('@/utils/safeStorage', () => ({
  safeStorage: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
  },
}));

describe('custom axios auth token handling', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    jest.clearAllMocks();
    document.cookie = '';
  });

  it('adds Authorization header from safeStorage zion_token', async () => {
    (safeStorage.getItem as jest.Mock).mockImplementation((key: string) => {
      return key === 'zion_token' ? 'jwt123' : null;
    });

    fetchMock.mockResolvedValueOnce(new Response('{}', { status: 200 }));

    await axios.get('/secure');

    const [, options] = fetchMock.mock.calls[0];
    expect(options?.headers).toEqual(
      expect.objectContaining({ Authorization: 'Bearer jwt123' })
    );
  });
});
