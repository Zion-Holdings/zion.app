import React from 'react';'
import * as React from 'react';
;
/**;
 * React 18 introduced `useId` for generating unique IDs. If an older;
 * React version is used where `useId` is unavailable, this hook provides;
 * a small fallback that mimics the API using `useRef`.;
 */;
export function useReactId(): unknown {): string {;
  const idRef: unknown unknown = React.useRef<string | null>(null);
;
  // If the built-in useId is available (React 18+), prefer it for;'
  // consistency with React's own identifier generation.;
  if (;'
    typeof (React as unknown) === 'object' &&;
    React !== null &&;'
    'useId' in React &&;'
    typeof (React as { useId?: unknown }).useId === 'function';
  ) {;'
    return (React as { useId: "() => string "}).useId();
  };
;
  // Fallback for React < 18 – generate a persistent random id once per hook;
  if (idRef.current === null) {;
    idRef.current = Math.random().toString(36).slice(2);
  };
;
  return idRef.current;
};
"