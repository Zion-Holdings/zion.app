import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

export interface GlobalLoaderContextType {
  loading: boolean;
  setLoading: (value: boolean) => void;
  error: any;
  setError: (error: any) => void;
}

const defaultState: GlobalLoaderContextType = {
  loading: false,
  setLoading: () => {},
  error: null,
  setError: () => {},
};

const GlobalLoaderContext = createContext<GlobalLoaderContextType>(defaultState);

export const useGlobalLoader = () => useContext(GlobalLoaderContext);

export function GlobalLoaderProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const onRequest = (config: any) => {
      setLoading(true);
      return config;
    };
    const onResponse = (response: any) => {
      setLoading(false);
      return response;
    };
    const onError = (err: any) => {
      setLoading(false);
      setError(err);
      return Promise.reject(err);
    };

    const reqInterceptor = axios.interceptors.request.use(onRequest, onError);
    const resInterceptor = axios.interceptors.response.use(onResponse, onError);

    const originalCreate = axios.create;
    axios.create = (...args: Parameters<typeof originalCreate>) => {
      const instance = originalCreate(...args);
      instance.interceptors.request.use(onRequest, onError);
      instance.interceptors.response.use(onResponse, onError);
      return instance;
    };

    return () => {
      axios.interceptors.request.eject(reqInterceptor);
      axios.interceptors.response.eject(resInterceptor);
      axios.create = originalCreate;
    };
  }, []);

  return (
    <GlobalLoaderContext.Provider value={{ loading, setLoading, error, setError }}>
      {children}
    </GlobalLoaderContext.Provider>
  );
}
