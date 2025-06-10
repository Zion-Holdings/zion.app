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

export async function sendErrorToBackend(errorDetails: ErrorDetails): Promise<void> {
  try {
    const response = await fetch('/log-error', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(errorDetails),
    });

    if (response.ok) {
      console.log(`Error report sent successfully from ${errorDetails.source}.`);
    } else {
      console.error(`Failed to send error report from ${errorDetails.source}. Status: ${response.status}`, await response.text());
    }
  } catch (error) {
    console.error(`Error sending report from ${errorDetails.source}:`, error);
  }
}
