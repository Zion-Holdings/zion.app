// Temporary type declarations for offline development

declare namespace JSX {
  interface Element {}
  interface IntrinsicElements { [elemName: string]: any }
}

declare module 'react' {
  export type ReactNode = any;
  export interface ReactElement {}
  export interface FC<P = {}> {
    (props: P & { children?: ReactNode }): ReactElement | null;
  }
  export interface SyntheticEvent<T = Element> { target: T; preventDefault(): void; }
  export interface ChangeEvent<T = Element> extends SyntheticEvent<T> {}
  export interface KeyboardEvent<T = Element> extends SyntheticEvent<T> {}
  export interface MouseEvent<T = Element> extends SyntheticEvent<T> {}
  export interface FormEvent<T = Element> extends SyntheticEvent<T> {}
  export type LegacyRef<T> = any;
  export type Ref<T> = any;
  export type ElementRef<T> = any;
  export type ComponentPropsWithoutRef<T> = any;
  export function useState<S>(initialState: S | (() => S)): [S, (value: S) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useRef<T = any>(initial: T): { current: T };
  const react: any;
  export default react;
}

declare module 'react/jsx-runtime' {
  export function jsx(...args: any[]): any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'react-dom' {
  export function render(...args: any[]): any;
  const reactDom: any;
  export default reactDom;
}

declare module 'react-router-dom' {
  export function useParams<T = any>(): T;
  export function useNavigate(): any;
  export const Link: any;
  export const Route: any;
  export const Routes: any;
  export const Navigate: any;
  const rr: any;
  export default rr;
}

declare module 'react-hook-form' {
  export function useForm<T extends Record<string, any>>(options?: any): any;
}

declare module '@hookform/resolvers/zod' {
  export function zodResolver(...args: any[]): any;
}

declare module '@tanstack/react-query' {
  export function useQuery<T = any>(...args: any[]): any;
  export function useMutation<T = any>(...args: any[]): any;
  const rq: any;
  export default rq;
}

declare module 'zod' {
  export namespace z {
    type infer<T> = any;
  }
  export = z;
}

declare module 'class-variance-authority' {
  export type VariantProps<T> = any;
}

declare module 'jspdf' {
  export default class jsPDF {}
}

// Fallback for other modules
declare module '*' {
  const value: any;
  export default value;
}
