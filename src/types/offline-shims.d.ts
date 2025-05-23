// Minimal type declarations for offline development

// React stubs
declare module 'react' {
  export type FC<P = any> = (props: P) => any;
  export type ReactNode = any;
  export interface ChangeEvent<T = any> { target: T }
  export interface FormEvent<T = any> {}
  export interface KeyboardEvent<T = any> {}
  export interface RefObject<T> { current: T }
  export type RefCallback<T> = (value: T) => void;
  export type Ref<T> = RefObject<T> | RefCallback<T> | null;
  export type LegacyRef<T> = Ref<T>;
  export function useState<S = any>(initial?: S): [S, (value: S) => void];
  export function useEffect(fn: () => any, deps?: any[]): void;
  export function useRef<T = any>(initial: T): { current: T };
  const react: any;
  export default react;
}

declare module 'react/jsx-runtime' {
  export {};
}

declare namespace JSX {
  interface Element {}
  interface IntrinsicElements {
    [elemName: string]: any;
  }
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
  export function useForm<T = any>(...args: any[]): any;
  const rhf: any;
  export default rhf;
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

declare module 'jspdf' {
  export class jsPDF {
    constructor(...args: any[]);
    [key: string]: any;
  }
}

declare module 'path' {
  const path: any;
  export default path;
}

declare module 'jspdf-autotable' {
  const autotable: any;
  export default autotable;
}

declare module 'zod' {
  export type infer<T> = any;
  const z: any;
  export { z };
  export default z;
}

