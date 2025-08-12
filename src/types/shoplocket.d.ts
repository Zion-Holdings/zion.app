export {};

declare global {
  interface ShoplocketApi {
    open: (...args: any[]) => void;
    close: (...args: any[]) => void;
    on: (event: string, handler: (...args: any[]) => void) => void;
    off: (event: string, handler: (...args: any[]) => void) => void;
    [key: string]: any;
  }

  interface Window {
    Shoplocket?: ShoplocketApi;
  }
}
