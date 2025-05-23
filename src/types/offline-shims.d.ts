// Temporary type declarations for offline development

declare namespace JSX {
  interface Element {}
  interface IntrinsicElements { [elemName: string]: any }
}

declare module 'react' {
  const React: any;
  export default React;
  export as namespace React;

  // Commonly used hooks and utilities
  export function useState<S>(initialState: S | (() => S)): [S, (value: S | ((prev: S) => S)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useRef<T>(initialValue: T | null): { current: T | null };
  export function createContext<T>(defaultValue: T): any;
  export function useContext<T>(context: any): T;
  export function useCallback<F extends (...args: any[]) => any>(fn: F, deps: any[]): F;
  export function useMemo<T>(factory: () => T, deps: any[]): T;
  export function forwardRef<T, P = {}>(render: (props: P, ref: any) => any): any;

  export type LegacyRef<T> = any;
  export type Ref<T> = any;
  export type ElementRef<T> = any;
  export type ComponentPropsWithoutRef<T> = any;

  // JSX runtime fragments and helpers
  export const Fragment: any;
  export const StrictMode: any;
  export function cloneElement(element: any, props?: any, ...children: any[]): any;
}

declare module 'react/jsx-runtime' {
  export function jsx(...args: any[]): any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'react-router-dom' {
  export function useParams<Params extends Record<string, string | undefined> = {}>(): Partial<Params>;
}

declare module 'react-hook-form' {
  export function useForm<T extends Record<string, any>>(options?: any): any;
}

declare module 'zod' {
  export const z: any;
}

declare module 'class-variance-authority' {
  export type VariantProps<T> = any;
}

declare module 'jspdf' {
  export class jsPDF {
    constructor(...args: any[]);
    [key: string]: any;
  }
  export default jsPDF;
}
