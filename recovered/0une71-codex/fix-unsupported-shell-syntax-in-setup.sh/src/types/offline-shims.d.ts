declare module 'react' {
  const React: any;
  export default React;
  export const useRef: any;
  export const useEffect: any;
  export const useState: any;
  export const createContext: any;
  export const useContext: any;
  export const useMemo: any;
  export const useCallback: any;
  export const forwardRef: any;
  export const Fragment: any;
  export const StrictMode: any;
  export const cloneElement: any;
  export type ReactNode = any;
  export type ReactElement = any;
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