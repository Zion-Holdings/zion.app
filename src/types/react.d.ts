declare module 'react' {
  export const useState: any;
  export const useEffect: any;
  export const useContext: any;
  export const useRef: any;
  export const useMemo: any;
  export const useCallback: any;
  export const createContext: any;
  export const forwardRef: any;
  export const memo: any;
  export const Fragment: any;
  export const createElement: any;
  export type FC<P = {}> = (props: P & { children?: any }) => any;
  const React: any;
  export default React;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
    interface IntrinsicAttributes {
      [attr: string]: any;
    }
  }
}
