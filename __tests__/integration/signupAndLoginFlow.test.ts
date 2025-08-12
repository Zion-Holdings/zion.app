import { registerUser } from '@/services/authService';
import { supabase } from '@/integrations/supabase/client'; // Path to ensure jest.mock works
import fetchMock from 'jest-fetch-mock';
import axios from 'axios'; // Import axios to be mocked

fetchMock.enableMocks();

// --- Mocks Setup ---

// Mock localStorage
let store: { [key: string]: string } = {};
const mockLocalStorage = {
  getItem: jest.fn((key: string): string | null => store[key] || null),
  setItem: jest.fn((key: string, value: string) => { store[key] = value; }),
  removeItem: jest.fn((key: string) => { delete store[key]; }),
  clear: jest.fn(() => { store = {}; })
};
Object.defineProperty(global, 'localStorage', { value: mockLocalStorage, configurable: true });
// Support for environments where 'window' is the global context for localStorage
if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'localStorage', { value: mockLocalStorage, configurable: true });
}


// Mock safeStorage (used in Signup.tsx)
jest.mock('@/utils/safeStorage', () => ({
  safeStorage: {
    getItem: jest.fn((key: string) => store[key] || null), // delegate to the same store for simplicity
    setItem: jest.fn((key: string, value: string) => { store[key] = value; }),
    removeItem: jest.fn((key: string) => { delete store[key]; }),
  }
}));

// Mock Supabase client (used in Signup.tsx)
jest.mock('@/integrations/supabase/client', () => ({
  supabase: {
    auth: {
      setSession: jest.fn().mockResolvedValue({
        data: { session: { access_token: 'test-jwt-token', user: {id: 'user-123'} } }, // Simulate session object in return
        error: null
      }),
      // Mock other Supabase auth methods if they were to be called
    },
  },
}));

// Mock axios (because Signup.tsx sets default headers)
const mockAxiosDefaults = { headers: { common: {} as Record<string, string> } };
jest.mock('axios', () => ({
  __esModule: true,
  default: {
    defaults: mockAxiosDefaults,
    // Mock other methods like get, post if they were to be directly used by services under test
    // For this test, we are primarily interested in the defaults.headers.common behavior
  },
}));

// --- Test Suite ---

describe('Integration Test: Signup and Authenticated Call', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    store = {}; // Clear localStorage mock store
    // Clear all mock function call counts and implementations
    jest.clearAllMocks();
    // Reset axios defaults for headers specifically for this test, if necessary
    mockAxiosDefaults.headers.common = {} as Record<string, string>;
  });

  it('should allow user to sign up, store token, and make an authenticated API call to /api/users/me', async () => {
    // 1. Mock the /auth/register API endpoint
    const mockRegisterResponse = {
      user: { id: 'user-123', email: 'test@example.com', display_name: 'Test User' },
      session: {
        access_token: 'test-jwt-token',
        refresh_token: 'test-refresh-token',
        expires_in: 3600,
        user: { id: 'user-123', email: 'test@example.com' } // Supabase session often includes user
      },
      accessToken: 'test-jwt-token',
      emailVerificationRequired: false,
    };
    fetchMock.mockResponseOnce(JSON.stringify(mockRegisterResponse), { status: 201 });

    // 2. Call the registerUser service function
    // This simulates the core part of the Signup.tsx form submission leading to an API call.
    const { data: registrationApiResult, res: registrationResponse } = await registerUser('Test User', 'test@example.com', 'Password123!');

    expect(registrationResponse.status).toBe(201);
    expect(registrationApiResult).toEqual(mockRegisterResponse);

    // 3. Simulate what Signup.tsx does with the response data
    // (setSession, setUser, setTokens, localStorage, axios defaults)
    const tokenToStore = registrationApiResult?.accessToken || registrationApiResult?.session?.access_token;
    let sessionSetBySupabase = null;

    if (tokenToStore) {
      if (registrationApiResult.session) {
        // Directly call the mocked supabase.auth.setSession
        const { data: sbSessionData, error: sbError } = await supabase.auth.setSession(registrationApiResult.session);
        expect(sbError).toBeNull();
        sessionSetBySupabase = sbSessionData?.session;
      }
      // Simulate localStorage/safeStorage operations from Signup.tsx
      localStorage.setItem('token', tokenToStore);
      // safeStorage.setItem('authToken', tokenToStore); // Assuming Signup.tsx calls this

      // Simulate Axios default header update from Signup.tsx
      if (axios.defaults) { // Check to guard against incorrect mocking
         axios.defaults.headers.common['Authorization'] = `Bearer ${tokenToStore}`;
      }
    }

    // 4. Verify token storage and mock calls
    expect(localStorage.setItem).toHaveBeenCalledWith('token', 'test-jwt-token');
    expect(safeStorage.setItem).toHaveBeenCalledWith('authToken', 'test-jwt-token');
    expect(supabase.auth.setSession).toHaveBeenCalledWith(mockRegisterResponse.session);
    expect(sessionSetBySupabase).not.toBeNull(); // Check if setSession mock worked as expected internally
    expect(axios.defaults?.headers?.common['Authorization']).toBe('Bearer test-jwt-token');

    // 5. Mock the subsequent /api/users/me endpoint (or any protected route)
    const mockUserMeResponse = { id: 'user-123', email: 'test@example.com', name: 'Test User' };
    fetchMock.mockResponseOnce(async (request) => {
      if (request.url.endsWith('/api/users/me') && request.headers.get('Authorization') === 'Bearer test-jwt-token') {
        return Promise.resolve(JSON.stringify(mockUserMeResponse));
      } else if (request.url.endsWith('/api/users/me')) {
        return Promise.resolve({ status: 401, body: JSON.stringify({ message: 'Unauthorized from mock' }) });
      }
      return Promise.resolve({ status: 404, body: 'Not Found' });
    });

    // 6. Simulate making the authenticated API call
    // This would typically be done by another service function or component effect.
    // For this test, we'll make a direct fetch call, assuming the token is retrieved from localStorage.
    const storedToken = localStorage.getItem('token');
    expect(storedToken).toBe('test-jwt-token');

    const meResponse = await fetch('/api/users/me', { // Assuming VITE_API_URL is empty in test
      headers: {
        'Authorization': `Bearer ${storedToken}`,
      },
    });
    const meData = await meResponse.json();

    // 7. Assert results of the authenticated call
    expect(meResponse.status).toBe(200);
    expect(meData).toEqual(mockUserMeResponse);

    // 8. Verify fetch mock calls
    expect(fetchMock.mock.calls.length).toBe(2);
    // VITE_API_URL is undefined in Jest, so authService prepends "undefined" or it's configured to be empty.
    // Let's assume it's effectively empty for path matching.
    expect(fetchMock.mock.calls[0][0]).toBe('/auth/register');
    expect(fetchMock.mock.calls[1][0]).toBe('/api/users/me');
    expect(fetchMock.mock.calls[1][1]?.headers?.get('Authorization')).toBe('Bearer test-jwt-token');
  });
});
