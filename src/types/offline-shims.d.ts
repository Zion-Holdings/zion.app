// Temporary type declarations for offline development

declare namespace JSX {
  interface Element {}
  interface IntrinsicElements { [elemName: string]: any }
}

declare module 'react' {
  // Basic placeholders to satisfy TypeScript when node modules are not installed
  export type ReactNode = any;
  export type ReactElement = any;
  export interface FC<P = {}> {
    (props: P & { children?: ReactNode }): ReactElement | null;
  }
  export interface SyntheticEvent<T = Element> { target: T; preventDefault(): void; }
  export interface ChangeEvent<T = Element> extends SyntheticEvent<T> {}
  export interface KeyboardEvent<T = Element> extends SyntheticEvent<T> {
    key?: string;
    shiftKey?: boolean;
  }
  export interface MouseEvent<T = Element> extends SyntheticEvent<T> {}
  export interface FormEvent<T = Element> extends SyntheticEvent<T> {}
  export type LegacyRef<T> = any;
  export type Ref<T> = any;
  export type ElementRef<T> = any;
  export type ComponentPropsWithoutRef<T> = any;
  export function useState<S>(initialState: S | (() => S)): [
    S,
    (value: S | ((prev: S) => S)) => void
  ];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  // JSX runtime fragments
  export const Fragment: any;
  export const StrictMode: any;
  export function cloneElement(element: ReactElement, props?: any, ...children: ReactNode[]): ReactElement;
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
  export namespace z {
    function object(schema: any): any;
    function string(): any;
    function boolean(): any;
    function number(): any;
    function array(item: any): any;
    type infer<T> = any;
  }
  export = z;
}

declare module 'class-variance-authority' {
  export type VariantProps<T> = any;
}

declare module 'jspdf' {
  export class jsPDF {}
  export default jsPDF;
}
