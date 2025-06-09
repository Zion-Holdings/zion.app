import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

export function RouterWrapper({ children }: Props) {
  if (typeof window === 'undefined') {
    return <MemoryRouter>{children}</MemoryRouter>;
  }
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || '/'}>
      {children}
    </BrowserRouter>
  );
}
