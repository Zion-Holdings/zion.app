export type ConsoleLogEntry = {
  level: 'warn' | 'error';
  message: string;
  timestamp: string;
};

const logBuffer: ConsoleLogEntry[] = [];
const MAX_LOGS = 50;

function pushLog(entry: ConsoleLogEntry) {
  logBuffer.push(entry);
  if (logBuffer.length > MAX_LOGS) {
    logBuffer.shift();
  }
}

export function initConsoleLogCapture() {
  if (typeof window === 'undefined') return;
  if ((window as unknown as { __logCaptureInitialized?: boolean }).__logCaptureInitialized) return;
  (window as unknown as { __logCaptureInitialized?: boolean }).__logCaptureInitialized = true;
}

export function getCapturedLogs(): ConsoleLogEntry[] {
  return [...logBuffer];
}

export function clearCapturedLogs() {
  logBuffer.length = 0;
}
