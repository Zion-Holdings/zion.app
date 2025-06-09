import React from 'react';
import dynamic from 'next/dynamic';
import { MemoryRouter } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

// Dynamically import BrowserRouter so it is only used on the client.
const BrowserRouter = dynamic(
  () =>
    import('react-router-dom').then((mod) => ({
      default: mod.BrowserRouter,
    })),
  { ssr: false },
);

export function RouterWrapper({ children }: Props) {
  if (typeof window === 'undefined') {
    return <MemoryRouter>{children}</MemoryRouter>;
  }
  return <BrowserRouter>{children}</BrowserRouter>;
}
