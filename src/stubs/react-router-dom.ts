import React from 'react';
import { useRouter } from 'next/router';

export const BrowserRouter = ({ children }: { children: any }) => children;
export const Routes = ({ children }: { children: any }) => children;
export const Route = ({ element }: { element: any }) => element;
export const Link = (props: any) => { return React.createElement('a', props); };
export const NavLink = Link;
export const Navigate = ({ to }: { to: string }) => null;
export const MemoryRouter = BrowserRouter;
export const Outlet = () => null;
// Provide a simple shim that delegates to Next.js routing when available.
export const useNavigate = () => {
  try {
    const router = useRouter();
    return (url: string) => {
      if (url) router.push(url);
    };
  } catch {
    // In non-browser environments just return a no-op
    return () => {};
  }
};
export const useLocation = () => ({ pathname: '/' });
export const useParams = () => ({ });
export const useSearchParams = () => [new URLSearchParams(), () => {}] as any;
export default {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  Navigate,
  MemoryRouter,
  Outlet,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
};
