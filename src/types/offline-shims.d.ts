// Temporary type declarations for offline development

// Basic JSX namespace to allow JSX usage
declare namespace JSX {
  interface Element {}
  interface IntrinsicElements { [elemName: string]: any }
}

// Minimal React typings using a namespace export
declare namespace React {
  export type ReactNode = any
  export interface ReactElement {}

  export interface FC<P = {}> {
    (props: P & { children?: ReactNode }): ReactElement | null
  }

  export interface SyntheticEvent<T = Element> { target: T; preventDefault(): void }
  export interface ChangeEvent<T = Element> extends SyntheticEvent<T> {}
  export interface KeyboardEvent<T = Element> extends SyntheticEvent<T> { key: string; shiftKey: boolean }
  export interface MouseEvent<T = Element> extends SyntheticEvent<T> {}
  export interface FormEvent<T = Element> extends SyntheticEvent<T> {}

  export type LegacyRef<T> = any
  export type Ref<T> = any
  export type ElementRef<T> = any
  export type ComponentPropsWithoutRef<T> = any

  export function useState<S>(initialState: S | (() => S)): [S, (value: S) => void]
  export function useRef<T>(initialValue: T | null): { current: T | null }
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void

  export const Fragment: any
  const React: { createElement: any }
  export default React
}

declare module 'react' {
  export = React
}

// JSX runtime for React 17+
declare module 'react/jsx-runtime' {
  export function jsx(type: any, props: any, key?: any): any
  export const jsxs: typeof jsx
  export const Fragment: any
}

// react-router-dom hooks
declare module 'react-router-dom' {
  export function useParams<Params extends Record<string, string | undefined> = {}>(): Partial<Params>
}

// react-hook-form
declare module 'react-hook-form' {
  export function useForm<T extends Record<string, any>>(options?: any): any
}

// zod utility
declare module 'zod' {
  const z: any
  namespace z {
    type infer<T> = any
  }
  export = z
}

// class-variance-authority helper
declare module 'class-variance-authority' {
  export type VariantProps<T> = any
}

// jspdf minimal class
declare module 'jspdf' {
  export class jsPDF {}
  export default jsPDF
}

// Fallback for other modules
declare module '*' {
  const value: any;
  export default value;
}
