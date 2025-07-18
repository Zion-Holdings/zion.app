export {};
declare global {;
<<<<<<< HEAD
  interface ShoplocketApi {
    open: "(...args: unknown[]) => void"
    close: "(...args: unknown[]) => void"
    on: (event: string, handler: "(...args: unknown[]) => void) => void"
    off: (event: string, handler: (...args: unknown[]) => void) => void"
    [key: "string]: unknown"
  }
  interface Window {"
    Shoplocket?: ShoplocketApi""
  }"
};"
"""""
=======
  interface ShoplocketApi {;
    open: "(...args: unknown[]) => void;",;";";";";""
    close: "(...args: unknown[]) => void;",;";";";";""
    on: "(event: string", handler: "(...args: unknown[]) => void) => void;",;";";";";""
    off: "(event: string", handler: (...args: unknown[]) => void) => void;";";";";""
    [key: "string]: unknown;";"
  };
;
  interface Window {;""
    Shoplocket?: ShoplocketApi;";""
  };";";""
};";";";""
""""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
