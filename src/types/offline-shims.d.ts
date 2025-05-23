// Temporary type declarations for offline development

declare namespace JSX {
  interface Element {}
  interface IntrinsicElements { [elemName: string]: any }
}

declare module 'react' {
  const React: any
  export default React

  // hooks
  export function useState<S>(initialState: S | (() => S)): [S, (value: S | ((prev: S) => S)) => void]
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void
  export function useRef<T>(initialValue?: T): { current: T }
  export function useMemo<T>(factory: () => T, deps: any[]): T
  export function useCallback<T extends (...args: any[]) => any>(fn: T, deps: any[]): T
  export function createContext<T>(defaultValue?: T): any
  export function useContext<T>(context: any): T
  export function forwardRef<T, P = {}>(render: (props: P, ref: any) => ReactElement | null): (props: P & { ref?: any }) => ReactElement | null
  export const Fragment: any
  export const StrictMode: any
  export function cloneElement(element: ReactElement, props?: any, ...children: ReactNode[]): ReactElement
  export const Children: {
    toArray(children: ReactNode): ReactNode[]
    map(children: ReactNode, fn: (child: ReactNode, index: number) => ReactNode): ReactNode[]
  }
  export function isValidElement(object: any): object is ReactElement

  // basic types
  export type ReactNode = any
  export type ReactElement = any
  export interface FC<P = {}> { (props: P & { children?: ReactNode }): ReactElement | null }
  export type ComponentProps<T = any> = any
  export type ComponentPropsWithoutRef<T = any> = any
  export type ComponentPropsWithRef<T = any> = any
  export type HTMLAttributes<T = any> = any
  export type ButtonHTMLAttributes<T = any> = any
  export type SVGProps<T = any> = any
  export type ChangeEvent<T = any> = any
  export type MouseEvent<T = any> = any
  export type DragEvent<T = any> = any
  export type FormEvent<T = any> = any
  export type KeyboardEvent<T = any> = any
  export type SyntheticEvent<T = any> = any
  export type Ref<T = any> = any
  export type LegacyRef<T = any> = any
  export type ElementRef<T = any> = any
  export type TextareaHTMLAttributes<T = any> = any
  export type ThHTMLAttributes<T = any> = any
  export type TdHTMLAttributes<T = any> = any
}

declare module 'react-dom' {
  export * from 'react-dom/index'
}

declare module 'react/jsx-runtime' {
  export function jsx(...args: any[]): any
  export const jsxs: any
  export const Fragment: any
}

declare module 'react-router-dom' {
  export function useParams<Params extends Record<string, string | undefined> = {}>(): Partial<Params>
}

declare module 'react-hook-form' {
  export function useForm<T extends Record<string, any>>(options?: any): any
}

declare module 'zod' {
  export namespace z {
    function object(schema: any): any
    function string(): any
    function boolean(): any
    function number(): any
    function array(item: any): any
    type infer<T> = any
  }
  export = z
}

declare module 'class-variance-authority' {
  export type VariantProps<T> = any
}

declare module 'jspdf' {
  export class jsPDF {}
  export default jsPDF
}
