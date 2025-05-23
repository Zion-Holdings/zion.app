// Minimal type declarations for offline development

// React stubs
declare module 'react' {
  export type FC<P = any> = (props: P) => any;
  export type ReactNode = any;
  export interface ChangeEvent<T = any> extends Event { target: T }
  export interface FormEvent<T = any> extends Event {}
  export interface KeyboardEvent<T = any> extends Event {}
  export function useState<S = any>(initial?: S): [S, (value: S) => void];
  export function useEffect(fn: () => any, deps?: any[]): void;
  export function useRef<T = any>(initial: T): { current: T };
  const react: any;
  export default react;
}

declare module 'react/jsx-runtime' {
  export {};
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

declare module 'zod' {
  export type infer<T> = any;
  const z: any;
  export { z };
  export default z;
}

// Fallback for other modules
declare module '*' {
  const value: any;
  export default value;
}
