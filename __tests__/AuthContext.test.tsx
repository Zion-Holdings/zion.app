import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { AuthContext } from '@/context/auth/AuthContext';
import { loginUser } from '@/services/authService';
import { useAuthOperations } from '@/hooks/useAuthOperations';
import { safeStorage } from '@/utils/safeStorage';
import { vi } from 'vitest';

vi.mock('@/services/authService');
vi.mock('@/hooks/useAuthOperations');
vi.mock('@/utils/safeStorage', () => ({
  safeStorage: { setItem: vi.fn(), getItem: vi.fn(), removeItem: vi.fn() },
  safeSessionStorage: { setItem: vi.fn(), getItem: vi.fn(), removeItem: vi.fn() }
}));

const mockReplace = vi.fn();
vi.mock('next/router', () => ({
  useRouter: () => ({ replace: mockReplace, asPath: '/', isReady: true })
}));

describe('AuthContext login', () => {
  it('stores token and redirects on successful login', async () => {
    (loginUser as vi.Mock).mockResolvedValue({
      res: { status: 200 },
      data: { accessToken: 'jwt', user: { id: '1', email: 'a@b.c' } }
    });

    (useAuthOperations as vi.Mock).mockReturnValue({
      login: vi.fn().mockResolvedValue({ data: {}, error: null }),
      signup: vi.fn(),
      logout: vi.fn(),
      resetPassword: vi.fn(),
      updateProfile: vi.fn(),
      loginWithGoogle: vi.fn(),
      loginWithFacebook: vi.fn(),
      loginWithTwitter: vi.fn(),
      loginWithWeb3: vi.fn(),
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
