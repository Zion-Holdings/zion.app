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
    const req = axios.interceptors.request.use((config) => {
      setLoading(true);
      setError(null);
      return config;
    });
    const res = axios.interceptors.response.use(
      (response) => {
        setLoading(false);
        return response;
      },
      (err) => {
        setLoading(false);
        setError(err);
        return Promise.reject(err);
      }
    );
    return () => {
      axios.interceptors.request.eject(req);
      axios.interceptors.response.eject(res);
    };
  }, []);

  return (
    <GlobalLoaderContext.Provider value={{ loading, setLoading, error, setError }}>
      {children}
    </GlobalLoaderContext.Provider>
  );
}
