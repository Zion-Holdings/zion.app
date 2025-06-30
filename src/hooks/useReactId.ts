import * as React from "react"

/**
 * React 18 introduced `useId` for generating unique IDs. If an older
 * React version is used where `useId` is unavailable, this hook provides
 * a small fallback that mimics the API using `useRef`.
 */
export function useReactId(): string {
  const idRef = React.useRef<string | null>(null)

  // If the built-in useId is available (React 18+), prefer it for
  // consistency with React's own identifier generation.
  if (typeof (React as any).useId === "function") {
    return (React as any).useId()
  }

  // Fallback for React < 18 – generate a persistent random id once per hook
  if (idRef.current === null) {
    idRef.current = Math.random().toString(36).slice(2)
  }

  return idRef.current
}
