declare module 'react' {
  const React: any;
  export default React;
  export function useRef<T>(initialValue: T | null): { current: T | null };
  export const useEffect: any;
  export function useState<T>(
    initialState: T | (() => T)
  ): [T, (value: T | ((prev: T) => T)) => void];
  export function createContext<T>(defaultValue: T): any;
  export function useContext<T>(context: any): T;
  export const useMemo: any;
  export const useCallback: any;
  // Generic definition to allow usage like forwardRef<HTMLDivElement, Props>()
  export function forwardRef<T, P = {}>(
    render: (props: P, ref: Ref<T>) => ReactElement | null
  ): any;
  export const Fragment: any;
  export const StrictMode: any;
  export const cloneElement: any;
  export type ReactNode = any;
  export type ReactElement = any;
  export type ComponentType<P = {}> = (props: P) => any;
  export type FC<P = {}> = (props: P) => any;
  export type ComponentProps<T = any> = any;
  export type ComponentPropsWithoutRef<T = any> = any;
  export type ComponentPropsWithRef<T = any> = any;
  export type HTMLAttributes<T = any> = any;
  export type ButtonHTMLAttributes<T = any> = any;
  export type SVGProps<T = any> = any;
  export type ChangeEvent<T = any> = any;
  export type MouseEvent<T = any> = any;
  export type DragEvent<T = any> = any;
  export type FormEvent<T = any> = any;
  export type KeyboardEvent<T = any> = any;
  export type SyntheticEvent<T = any> = any;
  export type Ref<T = any> = any;
  export type LegacyRef<T = any> = any;
  export type ElementRef<T = any> = any;
}

declare module 'react-dom' {
  export * from 'react-dom/index';
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}