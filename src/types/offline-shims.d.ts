// Temporary type declarations for offline development

declare namespace JSX {
  interface Element {}
  interface IntrinsicElements { [elemName: string]: any }
}

declare module 'react' {
  export as namespace React;

  namespace React {
    type ReactNode = any;
    interface ReactElement {}

    interface FC<P = {}> {
      (props: P & { children?: ReactNode }): ReactElement | null;
    }

    interface SyntheticEvent<T = Element> { target: T; preventDefault(): void; }
    interface ChangeEvent<T = Element> extends SyntheticEvent<T> {}
    interface KeyboardEvent<T = Element> extends SyntheticEvent<T> {}
    interface MouseEvent<T = Element> extends SyntheticEvent<T> {}
    interface FormEvent<T = Element> extends SyntheticEvent<T> {}

    type LegacyRef<T> = any;
    type Ref<T> = any;
    type ElementRef<T> = any;
    type ComponentPropsWithoutRef<T> = any;
    type Dispatch<A> = (value: A) => void;
    type SetStateAction<S> = S | ((prev: S) => S);
    type MutableRefObject<T> = { current: T };

    function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
    function useEffect(effect: () => void | (() => void), deps?: any[]): void;
    function useRef<T>(initialValue: T | null): MutableRefObject<T | null>;
    function createContext<T>(defaultValue: T): any;
    function useContext<T>(context: any): T;

    const Fragment: any;
  }

  export import ReactNode = React.ReactNode;
  export import ReactElement = React.ReactElement;
  export import FC = React.FC;
  export import SyntheticEvent = React.SyntheticEvent;
  export import ChangeEvent = React.ChangeEvent;
  export import KeyboardEvent = React.KeyboardEvent;
  export import MouseEvent = React.MouseEvent;
  export import FormEvent = React.FormEvent;
  export import LegacyRef = React.LegacyRef;
  export import Ref = React.Ref;
  export import ElementRef = React.ElementRef;
  export import ComponentPropsWithoutRef = React.ComponentPropsWithoutRef;
  export import Dispatch = React.Dispatch;
  export import SetStateAction = React.SetStateAction;
  export import MutableRefObject = React.MutableRefObject;
  export import useState = React.useState;
  export import useEffect = React.useEffect;
  export import useRef = React.useRef;
  export import createContext = React.createContext;
  export import useContext = React.useContext;
  export import Fragment = React.Fragment;

  export = React;
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
  export type infer<T> = any;
  const z: any;
  export = z;
}

declare module 'class-variance-authority' {
  export type VariantProps<T> = any;
}

declare module 'jspdf' {
  export class jsPDF {}
  export default jsPDF;
}
