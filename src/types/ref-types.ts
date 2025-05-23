
// A type that safely handles all possible reference types
export type SafeRef<T> =
  | { current: T | null }
  | ((instance: T | null) => void)
  | null;
