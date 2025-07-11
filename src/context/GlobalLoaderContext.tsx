import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from 'react';
import type { ReactNode } from 'react';
import { useRouter } from 'next/router'; // Changed from useLocation
import axios from 'axios';
import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios';

export interface GlobalLoaderContextType {
  loading: boolean;
  setLoading: (value: boolean) => void;
  error: unknown;
  setError: (error: unknown) => void;
  showLoader: () => void;
  hideLoader: () => void;
}

const defaultState: GlobalLoaderContextType = {
  loading: false,
  setLoading: () => {},
  error: null,
  setError: () => {},
  showLoader: () => {},
  hideLoader: () => {},
};

const GlobalLoaderContext = createContext<GlobalLoaderContextType>(defaultState);

export const useGlobalLoader = (): GlobalLoaderContextType => useContext(GlobalLoaderContext);

export function AppLoaderProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const router = useRouter(); // Changed from useLocation
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  useEffect(() => {
    const onRequest = (config: InternalAxiosRequestConfig) => {
      showLoader();
      return config;
    };
    const onResponse = (response: AxiosResponse) => {
      hideLoader();
      return response;
    };
    const onError = (err: any) => {
      hideLoader();
      setError(err);
      return Promise.reject(err);
    };

    // Type guard for axios.interceptors
    const reqInterceptors = (axios.interceptors as { request: { use: Function; eject: Function } }).request;
    const resInterceptors = (axios.interceptors as { response: { use: Function; eject: Function } }).response;
    const reqInterceptor = reqInterceptors.use(onRequest, onError);
    const resInterceptor = resInterceptors.use(onResponse, onError);

    const originalCreate = axios.create;
    axios.create = (...args: Parameters<typeof originalCreate>) => {
      const instance = originalCreate(...args);
      if (instance.interceptors && instance.interceptors.request && typeof instance.interceptors.request.use === 'function') {
        instance.interceptors.request.use(onRequest, onError);
      }
      if (instance.interceptors && instance.interceptors.response && typeof instance.interceptors.response.use === 'function') {
        instance.interceptors.response.use(onResponse, onError);
      }
      return instance;
    };

    return () => {
      if (typeof reqInterceptors.eject === 'function') reqInterceptors.eject(reqInterceptor);
      if (typeof resInterceptors.eject === 'function') resInterceptors.eject(resInterceptor);
      axios.create = originalCreate;
    };
  }, []);

  // Hide loader when the route changes (routeChangeComplete analogue)
  // useEffect(() => {
  //   hideLoader();
  // }, [router.asPath]); // Changed to router.asPath
  // Commented out: This was hiding the loader prematurely for pages with their own client-side data fetching.
  // The loader should now primarily be hidden by the Axios interceptor or manually.

  // Auto-dismiss loader after 15 seconds
  useEffect(() => {
    if (loading) {
      const timeout = setTimeout(hideLoader, 15000);
      timeoutRef.current = timeout;
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [loading]);

  return (
    <GlobalLoaderContext.Provider
      value={{ loading, setLoading, error, setError, showLoader, hideLoader }}
    >
      {children}
    </GlobalLoaderContext.Provider>
  );
}

// Backwards compatibility
export { AppLoaderProvider as GlobalLoaderProvider };
