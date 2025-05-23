declare module 'react' {
  export * from 'react/index';
  export const useRef: <T>(initialValue: T) => { current: T };
  export const useEffect: (effect: () => void | (() => void), deps?: readonly any[]) => void;
  export const useState: <T>(initialState: T | (() => T)) => [T, (newState: T | ((prevState: T) => T)) => void];
}