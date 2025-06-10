import React from 'react';
import dynamic from 'next/dynamic';
import { MemoryRouter } from 'react-router-dom';
import type { BrowserRouter } from 'react-router-dom';
type BrowserRouterProps = React.ComponentProps<typeof BrowserRouter>;

interface Props {
  children: React.ReactNode;
}

// Dynamically import BrowserRouter so it is only used on the client.
const DynamicBrowserRouter = dynamic<BrowserRouterProps>(
  () => import('react-router-dom').then((mod) => mod.BrowserRouter),
  { ssr: false },
);

export function RouterWrapper({ children }: Props) {
  if (typeof window === 'undefined') {
    return <MemoryRouter>{children}</MemoryRouter>;
  }
  return <DynamicBrowserRouter>{children}</DynamicBrowserRouter>;
}
