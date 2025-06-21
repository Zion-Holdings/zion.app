import { renderHook, act } from '@testing-library/react';
import { vi } from 'vitest';

import { useEmailAuth } from '../useEmailAuth';
import { safeStorage, safeSessionStorage } from '@/utils/safeStorage'; // Mocked in setupTests.ts
import { toast } from '@/hooks/use-toast'; // Mocked in setupTests.ts or here

// Mock toast if not already fully mocked in setupTests,
// especially if you want to assert on its calls within these specific tests.
vi.mock('@/hooks/use-toast', async (importOriginal) => {
  const actual = await importOriginal() as any;
  return {
    ...actual,
    toast: vi.fn(),
  };
});

describe('useEmailAuth', () => {
  let mockSetUser: ReturnType<typeof vi.fn>;
  let mockSetIsLoading: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.clearAllMocks();
    mockSetUser = vi.fn();
    mockSetIsLoading = vi.fn();
  });

  it('successful login with rememberMe=true stores token in localStorage', async () => {
    const { result } = renderHook(() => useEmailAuth(mockSetUser, mockSetIsLoading));

    let loginResult;
    await act(async () => {
      loginResult = await result.current.login({
        email: 'test@example.com',
        password: 'password123',
        rememberMe: true
      });
    });

    expect(mockSetIsLoading).toHaveBeenCalledWith(true);
    expect(fetch).toHaveBeenCalledWith('/auth/login', expect.any(Object));

    // from msw handler
    const expectedUser = {
        id: 'user-123',
        email: 'test@example.com',
        displayName: 'Test User',
        userType: 'test',
        profileComplete: true,
        // Omitting dates for simplicity in this part of the test, or use expect.any(String)
    };
    expect(mockSetUser).toHaveBeenCalledWith(expect.objectContaining(expectedUser));
    expect(safeStorage.setItem).toHaveBeenCalledWith('zion_token', 'mock-jwt-token');
    expect(safeSessionStorage.setItem).not.toHaveBeenCalled();
    expect(loginResult?.data?.token).toBe('mock-jwt-token');
    expect(loginResult?.data?.user).toEqual(expect.objectContaining(expectedUser));
    expect(loginResult?.error).toBeUndefined();
    expect(mockSetIsLoading).toHaveBeenCalledWith(false);
    expect(toast).not.toHaveBeenCalled();
  });

  it('successful login with rememberMe=false stores token in sessionStorage', async () => {
    const { result } = renderHook(() => useEmailAuth(mockSetUser, mockSetIsLoading));

    let loginResult;
    await act(async () => {
      loginResult = await result.current.login({
        email: 'test@example.com',
        password: 'password123',
        rememberMe: false,
      });
    });

    expect(mockSetIsLoading).toHaveBeenCalledWith(true);
    expect(fetch).toHaveBeenCalledWith('/auth/login', expect.any(Object));
    const expectedUser = { email: 'test@example.com' }; // Simplified check
    expect(mockSetUser).toHaveBeenCalledWith(expect.objectContaining(expectedUser));
    expect(safeSessionStorage.setItem).toHaveBeenCalledWith('zion_token', 'mock-jwt-token');
    expect(safeStorage.setItem).not.toHaveBeenCalled();
    expect(loginResult?.data?.token).toBe('mock-jwt-token');
    expect(mockSetIsLoading).toHaveBeenCalledWith(false);
    expect(toast).not.toHaveBeenCalled();
  });

  it('failed login (401) displays toast and returns error', async () => {
    const { result } = renderHook(() => useEmailAuth(mockSetUser, mockSetIsLoading));

    let loginResult;
    await act(async () => {
      loginResult = await result.current.login({
        email: 'fail@example.com', // This email triggers 401 in msw handler
        password: 'wrongpassword',
        rememberMe: false,
      });
    });

    expect(mockSetIsLoading).toHaveBeenCalledWith(true);
    expect(fetch).toHaveBeenCalledWith('/auth/login', expect.any(Object));
    expect(mockSetUser).not.toHaveBeenCalled();
    expect(safeStorage.setItem).not.toHaveBeenCalled();
    expect(safeSessionStorage.setItem).not.toHaveBeenCalled();
    expect(toast).toHaveBeenCalledWith({
      title: 'Login failed',
      description: 'Incorrect email or password',
      variant: 'destructive',
    });
    expect(loginResult?.error?.message).toBe('Incorrect email or password');
    expect(loginResult?.data).toBeUndefined();
    expect(mockSetIsLoading).toHaveBeenCalledWith(false);
  });

  it('handles other API errors (e.g., 500) and displays toast', async () => {
    const { result } = renderHook(() => useEmailAuth(mockSetUser, mockSetIsLoading));

    let loginResult;
    await act(async () => {
      loginResult = await result.current.login({
        email: 'servererror@example.com', // This email triggers 500 in msw handler
        password: 'password123',
        rememberMe: false,
      });
    });

    expect(mockSetIsLoading).toHaveBeenCalledWith(true);
    expect(fetch).toHaveBeenCalledWith('/auth/login', expect.any(Object));
    expect(mockSetUser).not.toHaveBeenCalled();
    expect(safeStorage.setItem).not.toHaveBeenCalled();
    expect(safeSessionStorage.setItem).not.toHaveBeenCalled();
    expect(toast).toHaveBeenCalledWith({
      title: 'Login failed',
      description: 'Internal Server Error', // Message from msw handler for 500
      variant: 'destructive',
    });
    expect(loginResult?.error?.message).toBe('Internal Server Error');
    expect(loginResult?.data).toBeUndefined();
    expect(mockSetIsLoading).toHaveBeenCalledWith(false);
  });

  // Test for cleanupAuthState being called - already part of the hook's login
  it('calls cleanupAuthState on login attempt', async () => {
    // We need to spy on cleanupAuthState.
    // Since it's imported from another module, we can vi.spyOn that module.
    const authUtils = await import('@/utils/authUtils');
    const cleanupSpy = vi.spyOn(authUtils, 'cleanupAuthState');

    const { result } = renderHook(() => useEmailAuth(mockSetUser, mockSetIsLoading));

    await act(async () => {
      await result.current.login({
        email: 'test@example.com',
        password: 'password123',
        rememberMe: true
      });
    });

    expect(cleanupSpy).toHaveBeenCalled();
    cleanupSpy.mockRestore(); // Important to restore spy
  });
});
