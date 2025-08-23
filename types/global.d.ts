// Global type definitions for browser APIs
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }

  interface EventTarget {
    addEventListener(type: string, listener: EventListener | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener | null, options?: boolean | EventListenerOptions): void;
    dispatchEvent(event: Event): boolean;
  }

  interface EventListener {
    (evt: Event): void;
  }

  interface AddEventListenerOptions {
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
    signal?: AbortSignal;
  }

  interface EventListenerOptions {
    capture?: boolean;
  }

  interface AbortSignal {
    aborted: boolean;
    addEventListener(type: string, listener: EventListener | null, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener | null, options?: boolean | EventListenerOptions): void;
    dispatchEvent(event: Event): boolean;
  }

  interface ErrorEvent extends Event {
    error?: Error;
    message?: string;
    filename?: string;
    lineno?: number;
    colno?: number;
  }

  interface PromiseRejectionEvent extends Event {
    reason?: unknown;
    promise?: Promise<unknown>;
  }
}

export {};