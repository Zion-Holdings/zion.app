import { describe, it, expect, beforeEach } from 'vitest';
import { parseApiError, showApiError } from '@/utils/apiErrorHandler';
import { toast } from '@/hooks/use-toast';

// Mock the toast hook
jest.mock('@/hooks/use-toast', () => ({
  toast: jest.fn(),
}));

describe('apiErrorHandler', () => {
  beforeEach(() => {
    (toast as jest.Mock).mockClear(); // Changed vi.clearAllMocks() to (toast as jest.Mock).mockClear()
  });

  describe('parseApiError', () => {
    it('should return the default error message for an unknown error structure', () => {
      const error = {};
      const parsed = parseApiError(error);
      expect(parsed.message).toBe('An unexpected error occurred. Please try again later.');
    });

    it('should use error.message if available and no response data', () => {
      const errorMessage = 'Custom error message from client';
      const error = { message: errorMessage };
      const parsed = parseApiError(error);
      expect(parsed.message).toBe(errorMessage);
    });

    it('should use error.response.data.message if available', () => {
      const backendMessage = 'Specific error from backend';
      const error = { response: { data: { message: backendMessage } } };
      const parsed = parseApiError(error);
      expect(parsed.message).toBe(backendMessage);
    });

    it('should return specific message for status 400', () => {
      const error = { response: { status: 400 } };
      const parsed = parseApiError(error);
      expect(parsed.message).toBe('There was a problem with your request. Please check the information you provided and try again.');
    });

    it('should return specific message for status 401', () => {
      const error = { response: { status: 401 } };
      const parsed = parseApiError(error);
      expect(parsed.message).toBe('Authentication failed. Please log in again.');
    });

    it('should return specific message for status 403', () => {
      const error = { response: { status: 403 } };
      const parsed = parseApiError(error);
      expect(parsed.message).toBe("You don't have permission to perform this action or access this resource.");
    });

    it('should return specific message for status 404', () => {
      const error = { response: { status: 404 } };
      const parsed = parseApiError(error);
      expect(parsed.message).toBe('The requested resource was not found. Please check the URL or try again later.');
    });

    it('should return specific message for status 500', () => {
      const error = { response: { status: 500 } };
      const parsed = parseApiError(error);
      expect(parsed.message).toBe('A server error occurred. We are working to fix it. Please try again later.');
    });

    it('should return specific message for status 503', () => {
      const error = { response: { status: 503 } };
      const parsed = parseApiError(error);
      expect(parsed.message).toBe('The service is temporarily unavailable. Please try again in a few moments.');
    });

    it('should return specific message for status 408 (Request Timeout)', () => {
      const error = { response: { status: 408 } };
      const parsed = parseApiError(error);
      expect(parsed.message).toBe('The server is taking too long to respond. Please check your internet connection or try again later.');
    });

    it('should return specific message for status 504 (Gateway Timeout)', () => {
      const error = { response: { status: 504 } };
      const parsed = parseApiError(error);
      expect(parsed.message).toBe('The server is taking too long to respond. Please check your internet connection or try again later.');
    });

    it('should return specific message for generic Network Error', () => {
      const error = { message: 'Network Error' }; // No status
      const parsed = parseApiError(error);
      expect(parsed.message).toBe('A network error occurred. Please check your internet connection and try again.');
    });

    it('should prioritize backend message even if a status code match exists', () => {
      const backendMessage = 'This is a very specific 400 error.';
      const error = { response: { status: 400, data: { message: backendMessage } } };
      const parsed = parseApiError(error);
      expect(parsed.message).toBe(backendMessage);
    });

    it('should extract status and code correctly', () => {
      const error = { response: { status: 422, data: { code: 'VALIDATION_ERROR', message: 'Invalid input.' } } };
      const parsed = parseApiError(error);
      expect(parsed.status).toBe(422);
      expect(parsed.code).toBe('VALIDATION_ERROR');
      expect(parsed.message).toBe('Invalid input.');
    });

    it('should use response.data.error as code and message if no message is provided', () => {
      const error = { response: { status: 404, data: { error: 'USER_NOT_FOUND' } } };
      const parsed = parseApiError(error);
      expect(parsed.status).toBe(404);
      expect(parsed.code).toBe('USER_NOT_FOUND');
      expect(parsed.message).toBe('USER_NOT_FOUND');
    });
  });

  describe('showApiError', () => {
    it('should call toast with parsed error message and title "Error"', () => {
      const error = { response: { status: 500 } };
      showApiError(error);
      expect(toast).toHaveBeenCalledWith({
        title: 'Error',
        description: '500: A server error occurred. We are working to fix it. Please try again later.',
        variant: 'destructive',
        onRetry: undefined,
      });
    });

    it('should include code in description if present and different from message', () => {
      const specificBackendMessage = 'Your input was not valid because X.';
      const error = { response: { status: 400, data: { code: 'VALIDATION_ERR', message: specificBackendMessage } } };
      showApiError(error);
      expect(toast).toHaveBeenCalledWith(expect.objectContaining({
        description: `VALIDATION_ERR: ${specificBackendMessage}`,
      }));
    });

    it('should surface backend error code when only error field is provided', () => {
      const error = { response: { status: 404, data: { error: 'USER_NOT_FOUND' } } };
      showApiError(error);
      expect(toast).toHaveBeenCalledWith(expect.objectContaining({
        description: 'USER_NOT_FOUND: USER_NOT_FOUND',
      }));
    });

    it('should use fallback message if error is null/undefined (no code to prepend)', () => {
        const fallback = 'Custom fallback message';
        showApiError(null, fallback);
        expect(toast).toHaveBeenCalledWith(expect.objectContaining({
            description: fallback, // No code to prepend as error is null
        }));
    });

    it('should pass retryCallback to toast function and prepend code', () => {
      const error = { response: { status: 503 } };
      const mockRetryCallback = jest.fn(); // Changed vi.fn to jest.fn
      showApiError(error, undefined, mockRetryCallback);
      expect(toast).toHaveBeenCalledWith({
        title: 'Error',
        description: '503: The service is temporarily unavailable. Please try again in a few moments.',
        variant: 'destructive',
        onRetry: mockRetryCallback,
      });
    });
  });
});
