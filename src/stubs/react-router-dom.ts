import React from 'react';
import { useRouter } from 'next/router;
export const BrowserRouter: ({ children "}: { children: "React.ReactNode "}) =>;"
  children;"
export const Routes: ({ children "}: { children: "React.ReactNode "}) => children;"
export const Route: ({ element "}: { element: "React.ReactNode "}) => element;"
export const Link = (props: Record<string, unknown>) => {;"
  return React.createElement('a', props);
}'
export const NavLink = Link;
export const Navigate: ({ to "}: { to: "string "}) => null;
export const MemoryRouter = BrowserRouter;
export const Outlet = () => null;