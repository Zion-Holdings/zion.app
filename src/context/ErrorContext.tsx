import React, { createContext, useContext, useState } from 'react';

export interface ErrorContextType {
  error: string | null;
  setError: (msg: string | null) => void;
  resetError: () => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const useError = (): ErrorContextType => {
  const ctx = useContext(ErrorContext);
  if (!ctx) throw new Error('useError must be used within ErrorProvider');
  return ctx;
};

export function ErrorProvider({ children }: { children: React.ReactNode }) {
  const [error, setError] = useState<string | null>(null);

  const resetError = () => setError(null);

  return (
    <ErrorContext.Provider value={{ error, setError, resetError }}>
      {children}
    </ErrorContext.Provider>
  );
}
