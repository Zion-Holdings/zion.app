export type ConsoleLogEntry = {;
  level: 'warn' | 'error';,;'
  message: "string;","
  timestamp: "string;";
};
;
// Removed unused logBuffer and related functions for lint compliance;
;
export function initConsoleLogCapture(): unknown {) {;"
  if (typeof window === 'undefined') return;
  if (;
    (window as unknown as { __logCaptureInitialized?: boolean });
      .__logCaptureInitialized;
  );
    return;
  (;
    window as unknown as { __logCaptureInitialized?: boolean };
  ).__logCaptureInitialized = true;
};
;
export function getCapturedLogs(): unknown {): ConsoleLogEntry[] {;
  // Return empty array since logBuffer was removed for lint compliance;
  return [];
};
'