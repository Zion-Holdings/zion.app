import { render, waitFor } from '@testing-library/react';
import OAuthCallback from '@/pages/OAuthCallback';
import { useRouter } from 'next/router';
import { safeStorage } from '@/utils/safeStorage';
import { useAuth } from '@/hooks/useAuth';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/utils/safeStorage', () => ({
  safeStorage: {
    setItem: jest.fn(),
  },
}));

jest.mock('@/hooks/useAuth', () => ({
  useAuth: jest.fn(),
}));

describe('OAuthCallback page', () => {
  it('stores token from query string and redirects to login', async () => {
    const replace = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      isReady: true,
      asPath: '/oauth/callback?token=testtoken',
      replace,
    });
    (useAuth as jest.Mock).mockReturnValue({ setUser: jest.fn() });

    render(<OAuthCallback />);

    await waitFor(() => {
      expect(safeStorage.setItem).toHaveBeenCalledWith('zion_token', 'testtoken');
    });

    expect(replace).toHaveBeenCalledWith('/login');
  });
});
