/*
  Minimal React type declarations.
  ---------------------------------------------------------------------------
  These definitions are **not** a replacement for `@types/react` – they only
  exist so that isolated compilation of individual files (e.g., in CI or code
  review bots) will not fail when full React type declarations are not
  present.  They purposefully model just enough surface-area used throughout
  the code-base.  If you have `@types/react` available in `node_modules`,
  TypeScript will prefer those and ignore this file, because paths declared in
  `typeRoots` are merged with normal type resolution.
*/

declare module "react" {
  // Basic ReactElement stub (JSX trees ultimately compile into this).
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface ReactElement<P = any, T extends string | React.JSXElementConstructor<any> = any> {
    type: T;
    props: P;
    key: React.Key | null;
  }

  // Function Component (very trimmed-down).
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface FC<P = Record<string, unknown>> {
    (props: P): ReactElement | null;
  }

  // Common hooks we rely on.
  export function useMemo<T>(factory: () => T, deps: readonly unknown[]): T;

  export type Key = string | number;

  // Default export so `import React from 'react'` keeps working even without
  // the real react package being installed.
  const React: {
    useMemo: typeof useMemo;
  } & Record<string, unknown>;

  export default React;
}

declare namespace React {
  // Keep JSX namespace for intrinsic elements – this prevents "JSX.IntrinsicElements"
  // errors when `@types/react` is not present.
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  export interface IntrinsicElements {
    [elemName: string]: any;
  }
}