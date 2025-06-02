import { getEnqueueSnackbar } from '@/context/SnackbarContext';

/**
 * Display a toast for API errors using a consistent style.
 * Falls back to a generic message when the error has no message.
 */
export function showApiError(error: unknown, fallback = "Something went wrong") {
  const message =
    typeof error === "string"
      ? error
      : error instanceof Error && error.message
      ? error.message
      : fallback;

  try {
    const enqueueSnackbar = getEnqueueSnackbar();
    enqueueSnackbar(message, { variant: 'error' });
  } catch {
    // ignore if snackbar not ready
  }
}
