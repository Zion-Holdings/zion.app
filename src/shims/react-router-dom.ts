export const BrowserRouter = ({ children }: { children?: any }) => children || null;
export const Routes = ({ children }: { children?: any }) => children || null;
export const Route = () => null;
export const Link = ({ children }: { children?: any }) => children || null;
export const NavLink = ({ children }: { children?: any }) => children || null;
export const Navigate = () => null;
export const MemoryRouter = ({ children }: { children?: any }) => children || null;
export const Outlet = () => null;
export const useNavigate = () => () => {};
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
