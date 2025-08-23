declare module 'react-hot-toast' {
  export interface Toast {
    id: string
  }
  export const toast: {
    error: (msg: string, opts?: { id?: string }) => void;
    isActive?: (id: string | number) => boolean;
  };
}
