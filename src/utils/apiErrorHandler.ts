import { toast } from '@/hooks/use-toast';

export interface ParsedApiError {
  status?: number | undefined;
  code?: string | number | undefined;
  message: string;
}

export function parseApiError(error: unknown): ParsedApiError {
  // Type guard for error shape
  function isApiError(obj: unknown): obj is {
    response?: {
      status?: number;
      data?: { code?: string | number; error?: string; message?: string };
    };
    status?: number;
    code?: string | number;
    message?: string;
  } {
    return typeof obj === 'object' && obj !== null;
  }
  if (!isApiError(error)) {
    return { message: 'An unexpected error occurred.' };
  }
  const status: number | undefined = typeof error?.response?.status === 'number' ? error.response.status : (typeof error?.status === 'number' ? error.status : undefined);
  const backendCode = error?.response?.data?.code ?? error?.response?.data?.error ?? error?.code;
  const code: string | number | undefined = backendCode !== undefined ? backendCode : status;

  // Prioritize backend message first
  let msg = error?.response?.data?.message;
  if (!msg && typeof error?.response?.data?.error === 'string') {
    msg = error.response.data.error;
  }

  if (!msg) {
    // If no backend message, try status-specific messages
    switch (status) {
      case 400:
        msg = 'There was a problem with your request. Please check the information you provided and try again.';
        break;
      case 401:
        msg = 'Authentication failed. Please log in again.';
        break;
      case 403:
        msg = "You don't have permission to perform this action or access this resource.";
        break;
      case 404:
        msg = 'The requested resource was not found. Please check the URL or try again later.';
        break;
      case 408: // Request Timeout
      case 504: // Gateway Timeout
        msg = 'The server is taking too long to respond. Please check your internet connection or try again later.';
        break;
      case 500:
        msg = 'A server error occurred. We are working to fix it. Please try again later.';
        break;
      case 502: // Bad Gateway
        msg = 'The server received an invalid response. Please try again later.';
        break;
      case 503:
        msg = 'The service is temporarily unavailable. Please try again in a few moments.';
        break;
      default:
        // Fallback to client-side error message or a generic one
        if (error?.message && error.message !== 'Network Error') {
          msg = error.message;
        } else if (!status && error?.message === 'Network Error') {
          msg = 'A network error occurred. Please check your internet connection and try again.';
        } else {
          msg = 'An unexpected error occurred. Please try again later.';
        }
        break;
    }
  }

  // If a specific error code is provided by the API (and it's not the HTTP status), append it for context if desired,
  // but the primary message `msg` should be user-friendly.
  // For now, we'll rely on `text` in `showApiError` to combine them if `code` is present.
  const result: ParsedApiError = { message: msg };
  if (typeof status === 'number') result.status = status;
  if (code !== undefined) result.code = code;
  return result;
}

export function showApiError(
  error: unknown,
  fallback = 'Unexpected error – please try again later.',
  retryCallback?: () => void
) {
  const { code, message } = parseApiError(error ?? { message: fallback });
  const text = code ? `${code}: ${message}` : message;

  toast({
    title: 'Error',
    description: text,
    variant: 'destructive',
    ...(retryCallback ? { onRetry: retryCallback } : {}),
  });
}
