// eslint-disable-next-line @typescript-eslint/no-require-imports
// tests/__mocks__/next-auth/react.js
const mockSession = {
  data: {
    user: {
      name: 'Mock User',
      email: 'test@example.com',
      // id: 'mock-user-id', // if your app uses user IDs from the session
      // Add any other user properties your components might expect
    },
    expires: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // Mock session to expire in 2 hours
  },
  status: 'authenticated', // 'loading', 'unauthenticated'
};

const useSession = jest.fn(() => ({ ...mockSession, update: jest.fn() }));
const signIn = jest.fn(() => Promise.resolve({ ok: true, error: null, url: null }));
const signOut = jest.fn(() => Promise.resolve());
const getSession = jest.fn(() => Promise.resolve(mockSession.status === 'authenticated' ? mockSession : null));

// Helper functions to update the mock session for specific tests
let customMockImplementation = null;

useSession.mockImplementation((options) => {
  if (customMockImplementation) {
    const customSessionResult = customMockImplementation(options);
    return {
      data: customSessionResult.data,
      status: customSessionResult.status,
      update: jest.fn() // Add mock for update function if used
    };
  }
  return { ...mockSession, update: jest.fn() }; // Default mock
});

useSession.setMockSession = (newSession) => {
  customMockImplementation = () => newSession;
};

useSession.clearMockSession = () => {
  customMockImplementation = null; // Revert to default mockSession behavior
};

// Initialize with default behavior
useSession.clearMockSession();


module.exports = {
  useSession,
  signIn,
  signOut,
  getSession,
  // SessionProvider: ({ children }) => <>{children}</>, // Basic mock for SessionProvider if needed
};
