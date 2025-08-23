import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { AuthContext } from '@/context/auth/AuthContext';
import { loginUser } from '@/services/authService';
import { useAuthOperations } from '@/hooks/useAuthOperations';
import { safeStorage } from '@/utils/safeStorage';

jest.mock('@/services/authService');
jest.mock('@/hooks/useAuthOperations');
jest.mock('@/utils/safeStorage', () => ({
  safeStorage: { setItem: jest.fn(), getItem: jest.fn(), removeItem: jest.fn() },
  safeSessionStorage: { setItem: jest.fn(), getItem: jest.fn(), removeItem: jest.fn() }
}));

const mockReplace = jest.fn();
jest.mock('next/router', () => ({
  useRouter: () => ({ replace: mockReplace, asPath: '/', isReady: true })
}));

describe('AuthContext login', () => {
  it('stores token and redirects on successful login', async () => {
    (loginUser as jest.Mock).mockResolvedValue({
      res: { status: 200 },
      data: { accessToken: 'jwt', user: { id: '1', email: 'a@b.c' } }
    });

    (useAuthOperations as jest.Mock).mockReturnValue({
      login: jest.fn().mockResolvedValue({ data: {}, error: null }),
      signup: jest.fn(),
      logout: jest.fn(),
      resetPassword: jest.fn(),
      updateProfile: jest.fn(),
      loginWithGoogle: jest.fn(),
      loginWithFacebook: jest.fn(),
      loginWithTwitter: jest.fn(),
      loginWithWeb3: jest.fn(),
    });

    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {({ login }) => <button onClick={() => login('a@b.c', 'pw')}>LoginBtn</button>}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    fireEvent.click(screen.getByText('LoginBtn'));

    await waitFor(() => {
      expect(safeStorage.setItem).toHaveBeenCalledWith('zion_token', 'jwt');
    });
    expect(mockReplace).toHaveBeenCalledWith('/dashboard');
  });
});
