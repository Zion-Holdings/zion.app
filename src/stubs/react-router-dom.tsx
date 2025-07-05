import React, { createContext, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

// Minimal router context so React Router hooks don't throw errors
const RouterContext = createContext<{ navigate: (url: string) => void }>({
  navigate: () => {},
});

export const BrowserRouter = ({ children }: { children: any }) => {
  const nextRouter = useRouter();
  const navigate = (url: string) => {
    if (url) nextRouter.push(url);
  };
  return (
    <RouterContext.Provider value={{ navigate }}>
      {children}
    </RouterContext.Provider>
  );
};
export const Routes = ({ children }: { children: any }) => children;
export const Route = ({ element }: { element: any }) => element;
export const Link = (props: any) => { return <a {...props} />; };
export const NavLink = Link;
export const Navigate = ({ to }: { to: string }) => {
  const nextRouter = useRouter();
  useEffect(() => {
    if (to) nextRouter.push(to);
  }, [to, nextRouter]);
  return null;
};
export const MemoryRouter = BrowserRouter;
export const Outlet = () => null;

// Provide a simple shim that delegates to Next.js routing. This prevents
// "useNavigate() may be used only in the context of a <Router>" errors when
// components relying on React Router are used in the Next.js environment.
export const useNavigate = () => {
  const context = useContext(RouterContext);
  return context.navigate;
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
