export {};

declare global {
  interface Window {
    gtag?: (type: string, eventName: string, params?: Record<string, unknown>) => void;
  }
}
