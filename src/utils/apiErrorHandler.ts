import { getEnqueueSnackbar } from '@/context/SnackbarContext';

export interface ParsedApiError {
  status?: number;
  code?: string | number;
  message: string;
}

export function parseApiError(error: any): ParsedApiError {
  const status = error?.response?.status ?? error?.status;
  const code = error?.response?.data?.code ?? status ?? error?.code;
  const msg =
    error?.response?.data?.message ??
    error?.message ??
    'Unexpected error – please try again later.';
  return { status, code, message: msg };
}

export function showApiError(error: unknown, fallback = 'Unexpected error – please try again later.') {
  const { code, message } = parseApiError(error ?? { message: fallback });
  const text = code ? `${code}: ${message}` : message;

  try {
    const enqueueSnackbar = getEnqueueSnackbar();
    enqueueSnackbar(text, { variant: 'error' });
  } catch {
    // ignore if snackbar not ready
  }
}
