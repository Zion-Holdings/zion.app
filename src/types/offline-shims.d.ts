declare module 'react' {
  export * from 'react/index';
  export const useRef: <T>(initialValue: T) => { current: T };
  export const useEffect: (effect: () => void | (() => void), deps?: readonly any[]) => void;
  export const useState: <T>(initialState: T | (() => T)) => [T, (newState: T | ((prevState: T) => T)) => void];
  export const createContext: <T>(defaultValue: T) => any;
  export const useContext: <T>(ctx: any) => T;
  export const useMemo: <T>(factory: () => T, deps: readonly any[]) => T;
  export const useCallback: <T extends (...args: any[]) => any>(callback: T, deps: readonly any[]) => T;
  export const Fragment: any;
  export const StrictMode: any;
  export const cloneElement: (element: any, props?: any, ...children: any[]) => any;
  export type ReactNode = any;
  export type ReactElement = any;
  export type FC<P = {}> = (props: P) => any;
  export interface ComponentPropsWithoutRef<T> {}
  export type ChangeEvent<T = any> = any;
  export type FormEvent<T = any> = any;
  export type KeyboardEvent<T = any> = any;
  export interface LegacyRef<T> {}
  export type Ref<T> = any;
}

declare module 'react-dom' {
  export * from 'react-dom/index';
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}