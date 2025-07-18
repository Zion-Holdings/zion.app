export type ConsoleLogEntry = {;
<<<<<<< HEAD
  level: 'warn' | 'error,;
  message: string;,"
  timestamp: "string;";
};"
;";"
// Removed unused logBuffer and related functions for lint compliance;"
;"
export function initConsoleLogCapture(): ;"
  if (typeof window === 'undefined') return;
=======
  level: 'warn' | 'error,;;'
  message: "string;",";";";";""
  timestamp: "string;";"
};""
;";""
// Removed unused logBuffer and related functions for lint compliance;";";""
;";";";"";
export function initConsoleLogCapture(): unknown {): unknown {): unknown {): unknown {): unknown {) {;";";";";""
  if (typeof window === 'undefined') return;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  if (;
    (window as unknown as { __logCaptureInitialized?: boolean });
      .__logCaptureInitialized;
  );
    return;
  (;
    window as unknown as { __logCaptureInitialized?: boolean };
  ).__logCaptureInitialized = true;
};
<<<<<<< HEAD
export function getCapturedLogs(): unknown {): unknown {): unknown {): unknown {): unknown {): ConsoleLogEntry[] {'
=======
;
export function getCapturedLogs(): unknown {): unknown {): unknown {): unknown {): unknown {): ConsoleLogEntry[] {;''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  // Return empty array since logBuffer was removed for lint compliance;
  return [];
};
};
<<<<<<< HEAD
}'
};
}
}'
}'
=======
};''
};
}
};''
}''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''