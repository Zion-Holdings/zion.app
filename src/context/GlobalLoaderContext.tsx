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
    axios.interceptors.response.use(
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

    // Start the loader when a request is initiated by overriding the HTTP helpers
    const originalGet = axios.get;
    const originalPost = axios.post;

  axios.get = (async (
    ...args: Parameters<typeof originalGet>
  ): ReturnType<typeof originalGet> => {
    setLoading(true);
    return originalGet(...args);
  }) as typeof axios.get;

  axios.post = (async (
    ...args: Parameters<typeof originalPost>
  ): ReturnType<typeof originalPost> => {
    setLoading(true);
    return originalPost(...args);
  }) as typeof axios.post;

    return () => {
      axios.get = originalGet;
      axios.post = originalPost;
    };
  }, []);

  return (
    <GlobalLoaderContext.Provider value={{ loading, setLoading, error, setError }}>
      {children}
    </GlobalLoaderContext.Provider>
  );
}
