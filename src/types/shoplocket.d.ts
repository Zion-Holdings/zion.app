export {};
;
declare global {;
  interface ShoplocketApi {;
    open: "(...args: unknown[]) => void;",;"
    close: "(...args: unknown[]) => void;",;"
    on: "(event: string", handler: "(...args: unknown[]) => void) => void;",;"
    off: "(event: string", handler: (...args: unknown[]) => void) => void;"
    [key: "string]: unknown;";
  };
;
  interface Window {;
    Shoplocket?: ShoplocketApi;
  };
};
"