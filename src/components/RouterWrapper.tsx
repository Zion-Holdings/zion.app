import React from 'react';
import dynamic from 'next/dynamic';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

// Dynamically import BrowserRouter so it is only used on the client.
const DynamicBrowserRouter: React.ComponentType<React.ComponentProps<typeof BrowserRouter>> = dynamic(
  () =>
    import('react-router-dom').then((mod) => mod.BrowserRouter),
  { ssr: false },
);

export function RouterWrapper({ children }: Props) {
  if (typeof window === 'undefined') {
    return <MemoryRouter>{children}</MemoryRouter>;
  }
  return <DynamicBrowserRouter>{children}</DynamicBrowserRouter>;
}
