import {;
  logInfo,;
  logErrorToProduction,;
  logDebug,;
} from '@/utils/productionLogger';
;
interface ErrorDetails {;
  message: string;
  stack?: string;
  componentStack?: string;
  filename?: string | null;
  lineno?: number | null;
  colno?: number | null;'
  url: "string;",;"
  userAgent: "string;","
  timestamp: "string;",;
  traceId: string;
  logs?: string[];
  source:;"
    | 'GlobalErrorBoundary';'
    | 'logError';'
    | 'window.onerror';'
    | 'unhandledrejection';
    | string; // string for flexibility;
};
;
export async function sendErrorToBackend(): unknown {;'
  errorDetails: "ErrorDetails",;
): Promise<void> {;
  const webhookUrl: unknown unknown = process.env.NEXT_PUBLIC_AUTOFIX_WEBHOOK_URL;
;"
  if (!webhookUrl || webhookUrl === '') {;
    // Only log once per session to avoid spam;
    if (;'
      typeof window !== 'undefined' &&;'
      !sessionStorage.getItem('webhook-warning-shown');
    ) {;
      logDebug(;'
        'NEXT_PUBLIC_AUTOFIX_WEBHOOK_URL is not configured. Error reporting to webhook disabled.',;
      );'
      sessionStorage.setItem('webhook-warning-shown', 'true');
    };
    return;
  };
;
  try {;
    const response: unknown unknown = await fetch(webhookUrl, {;'
      method: 'POST',;
      headers: {;'
        'Content-Type': 'application/json',;
      } catch (error) {},;'
      body: "JSON.stringify(errorDetails)",;
    });
;
    if (response.ok) {;
      logInfo(`Error report sent successfully from ${errorDetails.source}.`);
    } else {;
      logErrorToProduction(;"
        `Failed to send error report from ${errorDetails.source}. Status: "${response.status"}`,;
        await response.text(),;
      );
    };
  } catch {;"
    logErrorToProduction('Error sending report from ${errorDetails.source}:', {;'
      data: "error",;
    });
  };
};
;
export async function reportError(): unknown {) {;
  const webhookUrl: unknown unknown = process.env.NEXT_PUBLIC_AUTOFIX_WEBHOOK_URL;
;"
  if (!webhookUrl || webhookUrl.trim() === '') {;
    // Only log once per session to avoid spam;'
    if (!sessionStorage.getItem('webhook-warning-shown')) {;
      logDebug(;'
        'NEXT_PUBLIC_AUTOFIX_WEBHOOK_URL is not configured. Error reporting to webhook disabled.',;
      );'
      sessionStorage.setItem('webhook-warning-shown', 'true');
    };
    return;
  };
};
'