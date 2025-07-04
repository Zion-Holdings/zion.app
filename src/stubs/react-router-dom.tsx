import { useRouter } from 'next/router';

export const BrowserRouter = ({ children }: { children: any }) => children;
export const Routes = ({ children }: { children: any }) => children;
export const Route = ({ element }: { element: any }) => element;
export const Link = (props: any) => { return <a {...props} />; };
export const NavLink = Link;
export const Navigate = ({ to }: { to: string }) => null;
export const MemoryRouter = BrowserRouter;
export const Outlet = () => null;

// Provide a simple shim that delegates to Next.js routing. This prevents
// "useNavigate() may be used only in the context of a <Router>" errors when
// components relying on React Router are used in the Next.js environment.
export const useNavigate = () => {
  // Provide a very lightweight navigation function that avoids relying on
  // Next.js routing internals. This prevents "useNavigate" errors in test or
  // non-router environments while still allowing simple navigation when
  // running in the browser.
  if (typeof window !== 'undefined') {
    return (url: string) => {
      if (url) window.location.assign(url);
    };
  }
  return () => {};
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
