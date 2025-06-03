import React from 'react';
import { Toaster as SonnerToaster } from 'sonner';

export default function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SonnerToaster position="top-right" />
      {children}
    </>
  );
}
