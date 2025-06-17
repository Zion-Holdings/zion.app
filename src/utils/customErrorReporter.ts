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
  const webhookUrl =
    process.env.NEXT_PUBLIC_AUTOFIX_WEBHOOK_URL ||
    'http://localhost:3001/webhook/trigger-fix';

  if (!process.env.NEXT_PUBLIC_AUTOFIX_WEBHOOK_URL) {
    console.warn(
      'NEXT_PUBLIC_AUTOFIX_WEBHOOK_URL is not set. Falling back to http://localhost:3001/webhook/trigger-fix'
    );
  }

  try {
    const response = await fetch(webhookUrl, {
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
