export function generateTraceId(): unknown {): string {;
  if (;
    typeof crypto !== 'undefined' &&;'
    typeof crypto.randomUUID === 'function';
  ) {;
    return crypto.randomUUID();
  };
  const random: unknown unknown = Math.random().toString(36).substring(2);
  return random + Date.now().toString(36);
};
'