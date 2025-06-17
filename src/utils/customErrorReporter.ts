interface ErrorDetails {
  message: string;
  stack?: string;
  componentStack?: string;
  filename?: string | null;
  lineno?: number | null;
  colno?: number | null;
  url: string;
  userAgent: string;
  timestamp: string;
  source: 'GlobalErrorBoundary' | 'logError' | 'window.onerror' | 'unhandledrejection' | string; // string for flexibility
}

const DEFAULT_ENDPOINT = 'http://localhost:3001/webhook/trigger-fix';

export async function sendErrorToBackend(errorDetails: ErrorDetails): Promise<void> {
  const endpoint =
    process.env.NEXT_PUBLIC_ERROR_REPORT_ENDPOINT ||
    (process.env.NODE_ENV === 'development' ? DEFAULT_ENDPOINT : '');

  if (!endpoint) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        'sendErrorToBackend skipped: NEXT_PUBLIC_ERROR_REPORT_ENDPOINT not set.'
      );
    }
    return;
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(errorDetails),
    });

    if (response.ok) {
      console.log(`Error report sent successfully from ${errorDetails.source}.`);
    } else {
      console.error(
        `Failed to send error report from ${errorDetails.source}. Status: ${response.status}`,
        await response.text()
      );
    }
  } catch (error) {
    console.error(`Error sending report from ${errorDetails.source}:`, error);
  }
}
