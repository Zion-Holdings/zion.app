import * as React from "react";

// Fallback ID generator using useRef, itself a valid custom hook.
const useIdFallback = (): string => {
  const idRef = React.useRef<string | null>(null);
  if (idRef.current === null) {
    // Generate a simple random string for fallback
    // This is not cryptographically secure, but fine for unique IDs in React.
    idRef.current = `fallback-id-${Math.random().toString(36).slice(2)}`;
  }
  return idRef.current;
};

// Determine which ID generation function to use.
// This check happens once when the module is loaded.
const useActualId = typeof React.useId === "function" ? React.useId : useIdFallback;

/**
 * React 18 introduced `useId` for generating unique IDs. If an older
 * React version is used where `useId` is unavailable, this hook provides
 * a fallback.
 */
export function useReactId(): string {
  // This now calls either React.useId() or useIdFallback() directly.
  // Both of these functions adhere to the rules of hooks internally.
  return useActualId();
}
