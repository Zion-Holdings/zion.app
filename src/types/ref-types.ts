// A type that safely handles all possible reference types without relying on React
export type SafeRef<T> =
  | { current: T | null }
  | ((instance: T | null) => void)
  | null;

