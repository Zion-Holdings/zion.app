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
  // Return a simple navigation function that delegates to Next.js router
  // when available. In test environments where `useRouter` isn't mounted,
  // fall back to a no-op to avoid context errors.
  try {
    const router = useRouter();
    return (url: string) => {
      if (url) router.push(url);
    };
  } catch {
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
