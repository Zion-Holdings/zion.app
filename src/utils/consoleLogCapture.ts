export type ConsoleLogEntry = {
  level: 'log' | 'warn' | 'error';
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

function wrap(level: 'log' | 'warn' | 'error') {
  const original = console[level] as (...args: any[]) => void;
  console[level] = (...args: any[]) => {
    try {
      const message = args
        .map((a) => {
          if (typeof a === 'string') return a;
          try {
            return JSON.stringify(a);
          } catch {
            return String(a);
          }
        })
        .join(' ');
      pushLog({ level, message, timestamp: new Date().toISOString() });
    } catch {
      // ignore
    }
    original.apply(console, args);
  };
}

export function initConsoleLogCapture() {
  if (typeof window === 'undefined') return;
  if ((window as any).__logCaptureInitialized) return;
  (window as any).__logCaptureInitialized = true;
  wrap('log');
  wrap('warn');
  wrap('error');
}

export function getCapturedLogs(): ConsoleLogEntry[] {
  return [...logBuffer];
}

export function clearCapturedLogs() {
  logBuffer.length = 0;
}
