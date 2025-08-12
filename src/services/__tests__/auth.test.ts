import { resetPassword, register } from '../auth'; // Assuming register is also in this file

// Mock global fetch
global.fetch = jest.fn();

const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

describe('Auth Service', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  describe('resetPassword', () => {
    it('should call fetch with correct parameters and return data on success', async () => {
      const mockToken = 'test-token';
      const mockPassword = 'newPassword123';
      const mockResponseData = { message: 'Password reset successfully' };

      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponseData,
      });

      const result = await resetPassword(mockToken, mockPassword);

      expect(fetch).toHaveBeenCalledWith(`${API_URL}/auth/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: mockToken, newPassword: mockPassword }),
      });
      expect(result.data).toEqual(mockResponseData);
    });

    it('should throw an error if the fetch call is not ok', async () => {
      const mockToken = 'test-token';
      const mockPassword = 'newPassword123';
      const mockErrorResponse = { message: 'Invalid token' };

      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 400,
        json: async () => mockErrorResponse,
      });

      await expect(resetPassword(mockToken, mockPassword))
        .rejects
        .toThrow('Invalid token');
    });

    it('should throw a generic error if the response is not ok and no message is present', async () => {
      const mockToken = 'test-token';
      const mockPassword = 'newPassword123';

      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        status: 500,
        json: async () => ({}), // No message in response
      });

      await expect(resetPassword(mockToken, mockPassword))
        .rejects
        .toThrow('Error 500: Failed to reset password');
    });

    it('should handle non-JSON error responses gracefully', async () => {
        const mockToken = 'test-token';
        const mockPassword = 'newPassword123';

        (fetch as jest.Mock).mockResolvedValueOnce({
          ok: false,
          status: 503,
          json: async () => { throw new Error('Network error'); } // Simulate non-JSON response by throwing during .json()
        });

        await expect(resetPassword(mockToken, mockPassword))
          .rejects
          .toThrow('Error 503: Failed to reset password'); // Falls back to generic error
      });
  });

  // Optional: Add tests for the existing 'register' function if they don't exist
  // describe('register', () => {
  //   it('should call fetch for register and return data', async () => {
  //     // ... test implementation for register
  //   });
  // });
});
