export {};

declare global {
  interface Window {
    Shoplocket?: {
      open: (...args: any[]) => void;
      close: (...args: any[]) => void;
      on: (...args: any[]) => void;
      off: (...args: any[]) => void;
    };
  }
}
