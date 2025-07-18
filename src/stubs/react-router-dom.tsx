import React, { createContext, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

// Minimal router context so React Router hooks don't throw errors
const RouterContext = createContext<{ navigate: (url: string) => void }>({
  navigate: () => {},
});

export const useNavigate = () => {
  const router = useRouter();
  return (url: string) => router.push(url);
};

export const useLocation = () => {
  const router = useRouter();
  return {
    pathname: router.pathname,
    search: router.asPath.split('?')[1] || '',
    hash: '',
  };
};

export const useParams = () => {
  const router = useRouter();
  return router.query;
};

export const BrowserRouter = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const Routes = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const Route = ({
  path,
  element,
}: {
  path: string;
  element: React.ReactNode;
}) => {
  return <>{element}</>;
};

export const MemoryRouter = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const Link = ({
  to,
  children,
  ...props
}: {
  to: string;
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <a href={to} {...props}>
      {children}
    </a>
  );
};

export const NavLink = ({
  to,
  children,
  ...props
}: {
  to: string;
  children: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <a href={to} {...props}>
      {children}
    </a>
  );
};
