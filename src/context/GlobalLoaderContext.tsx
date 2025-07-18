import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from 'react';
import type { ReactNode } from 'react';
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
  _setLoading: () => {},
  error: null,
  _setError: () => {},
  _showLoader: () => {},
  _hideLoader: () => {},
};

const GlobalLoaderContext =
  createContext<GlobalLoaderContextType>(defaultState);

export const useGlobalLoader = (): GlobalLoaderContextType =>
  useContext(GlobalLoaderContext);

export function AppLoaderProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  useEffect(() => {
    const onRequest = (_config: InternalAxiosRequestConfig) => {
      showLoader();
      return config;
    };
    const onResponse = (_response: AxiosResponse) => {
      hideLoader();
      return response;
    };
    const onError = (_err: unknown) => {
      hideLoader();
      setError(err);
      return Promise.reject(err);
    };

    // Type guard for axios.interceptors
    const reqInterceptors = (
      axios.interceptors as {
        request: {
          use: (...args: unknown[]) => unknown;
          eject: (...args: unknown[]) => unknown;
        };
      }
    ).request;
    const resInterceptors = (
      axios.interceptors as {
        response: {
          use: (...args: unknown[]) => unknown;
          eject: (...args: unknown[]) => unknown;
        };
      }
    ).response;
    const reqInterceptor = reqInterceptors.use(onRequest, onError);
    const resInterceptor = resInterceptors.use(onResponse, onError);

    const originalCreate = axios.create;
    axios.create = (..._args: Parameters<typeof originalCreate>) => {
      const instance = originalCreate(...args);
      if (
        instance.interceptors &&
        instance.interceptors.request &&
        typeof instance.interceptors.request.use === 'function'
      ) {
        instance.interceptors.request.use(onRequest, onError);
      }
      if (
        instance.interceptors &&
        instance.interceptors.response &&
        typeof instance.interceptors.response.use === 'function'
      ) {
        instance.interceptors.response.use(onResponse, onError);
      }
      return instance;
    };

    return () => {
      if (typeof reqInterceptors.eject === 'function')
        reqInterceptors.eject(reqInterceptor);
      if (typeof resInterceptors.eject === 'function')
        resInterceptors.eject(resInterceptor);
      axios.create = originalCreate;
    };
  }, []);

  // Hide loader when the route changes (routeChangeComplete analogue)
  // useEffect(() => {
  //   hideLoader();
  // }, [router.asPath]); // Changed to router.asPath
  // Commented _out: This was hiding the loader prematurely for pages with their own client-side data fetching.
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
