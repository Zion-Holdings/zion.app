declare module '@sentry/types' {
  export interface Scope {
    setTag(key: string, value: string): void;
    setExtra(key: string, value: unknown): void;
    setUser(user: unknown): void;
    setLevel(level: string): void;
    setContext(key: string, context: unknown): void;
  }
}
