import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useRef,
} from 'react';
import { useRouter } from 'next/router'; // Changed from useLocation
import axios from 'axios';

export interface GlobalLoaderContextType {
  loading: boolean;
  setLoading: (value: boolean) => void;
  error: any;
  setError: (error: any) => void;
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

export const useGlobalLoader = () => useContext(GlobalLoaderContext);

export function AppLoaderProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const router = useRouter(); // Changed from useLocation
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  useEffect(() => {
    const onRequest = (config: any) => {
      showLoader();
      return config;
    };
    const onResponse = (response: any) => {
      hideLoader();
      return response;
    };
    const onError = (err: any) => {
      hideLoader();
      setError(err);
      return Promise.reject(err);
    };

    const reqInterceptor = (axios.interceptors as any).request.use(onRequest, onError);
    const resInterceptor = axios.interceptors.response.use(onResponse, onError);

    const originalCreate = axios.create;
    axios.create = (...args: Parameters<typeof originalCreate>) => {
      const instance = originalCreate(...args);
      (instance.interceptors as any).request.use(onRequest, onError);
      instance.interceptors.response.use(onResponse, onError);
      return instance;
    };

    return () => {
      ((axios.interceptors as any).request as any).eject(reqInterceptor);
      (axios.interceptors.response as any).eject(resInterceptor);
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
