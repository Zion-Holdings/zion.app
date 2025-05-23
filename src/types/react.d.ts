declare module 'react' {
  export type ReactNode = any;
  export interface ReactElement {}
  export const Fragment: any;
  const React: any;
  export default React;
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
  export type SetStateAction<S> = S | ((prevState: S) => S);
  export function useState<S>(initialState: S | (() => S)): [S, (value: SetStateAction<S>) => void];
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useRef<T>(initialValue: T): { current: T };
  export function createContext<T>(initialValue: T): { Provider: any; Consumer: any };
  export function useContext<T>(ctx: any): T;
  export function forwardRef<T, P = {}>(fn: (props: P, ref: any) => any): any;
}
