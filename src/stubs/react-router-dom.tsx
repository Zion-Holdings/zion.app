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

export const Route = ({ path, element }: { path: string; element: React.ReactNode }) => {
  return <>{element}</>;
};

export const MemoryRouter = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const Link = ({ to, children, ...props }: { to: string; children: React.ReactNode; [key: string]: any }) => {
  const router = useRouter();
  return (
    <a href={to} onClick={(e) => { e.preventDefault(); router.push(to); }} {...props}>
      {children}
    </a>
  );
};

export const NavLink = ({ to, children, ...props }: { to: string; children: React.ReactNode; [key: string]: any }) => {
  const router = useRouter();
  const isActive = router.pathname === to;
  return (
    <a 
      href={to} 
      onClick={(e) => { e.preventDefault(); router.push(to); }} 
      className={isActive ? 'active' : ''}
      {...props}
    >
      {children}
    </a>
  );
};

export const useSearchParams = () => {
  const router = useRouter();
  const search = router.asPath.split('?')[1] || '';
  const params = new URLSearchParams(search);
  return [params, (newParams: URLSearchParams) => {
    const newSearch = newParams.toString();
    const newPath = router.pathname + (newSearch ? `?${newSearch}` : '');
    router.push(newPath);
  }] as const;
};

export const useOutlet = () => {
  return null;
};

export const Outlet = () => {
  return null;
};

export const Navigate = ({ to }: { to: string }) => {
  const router = useRouter();
  useEffect(() => {
    router.push(to);
  }, [to, router]);
  return null;
};

export const useOutletContext = () => {
  return {};
};

export const useHref = (to: string) => {
  return to;
};

export const useResolvedPath = (to: string) => {
  return { pathname: to, search: '', hash: '' };
};

export const useMatch = (pattern: string) => {
  const router = useRouter();
  return router.pathname === pattern ? { pathname: router.pathname, params: router.query } : null;
};

export const useBlocker = () => {
  return false;
};

export const usePrompt = () => {
  return false;
};

export const useBeforeUnload = () => {
  return false;
};

export const useFetcher = () => {
  return {
    Form: ({ children, ...props }: { children: React.ReactNode; [key: string]: any }) => (
      <form {...props}>{children}</form>
    ),
    submit: () => {},
    load: () => {},
    data: null,
    state: 'idle',
  };
};

export const useFetchers = () => {
  return [];
};

export const useRevalidator = () => {
  return {
    revalidate: () => {},
    state: 'idle',
  };
};

export const useRouteLoaderData = () => {
  return null;
};

export const useActionData = () => {
  return null;
};

export const useLoaderData = () => {
  return null;
};

export const useNavigation = () => {
  return {
    state: 'idle',
    location: null,
    formData: null,
  };
};

export const useSubmit = () => {
  return () => {};
};

export const useFormAction = () => {
  return '';
};

export const useFormMethod = () => {
  return 'get';
};

export const useFormEncType = () => {
  return 'application/x-www-form-urlencoded';
};

export const useFormData = () => {
  return null;
};

export const useShouldRevalidate = () => {
  return false;
};

export const useRevalidatePath = () => {
  return () => {};
};

export const useRevalidateSearchParams = () => {
  return () => {};
};

export const useOptimisticUI = () => {
  return null;
};

export const useDeferredValue = (value: any) => {
  return value;
};

export const useTransition = () => {
  return [false, () => {}] as const;
};

export const useId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const useSyncExternalStore = (subscribe: any, getSnapshot: any) => {
  return getSnapshot();
};

export const useInsertionEffect = (effect: any, deps: any) => {
  useEffect(effect, deps);
};

export const useLayoutEffect = (effect: any, deps: any) => {
  useEffect(effect, deps);
};

export const useImperativeHandle = (ref: any, createHandle: any, deps: any) => {
  useEffect(() => {
    if (ref) {
      ref.current = createHandle();
    }
  }, deps);
};

export const useDebugValue = (value: any) => {
  // No-op in production
};

export const useCallback = (callback: any, deps: any) => {
  return callback;
};

export const useMemo = (factory: any, deps: any) => {
  return factory();
};

export const useRef = (initialValue: any) => {
  return { current: initialValue };
};

export const useState = (initialState: any) => {
  return [initialState, () => {}] as const;
};

export const useReducer = (reducer: any, initialState: any) => {
  return [initialState, () => {}] as const;
};

export const useContext = (context: any) => {
  return context._currentValue;
};

export const useSyncExternalStore = (subscribe: any, getSnapshot: any) => {
  return getSnapshot();
};

export const useInsertionEffect = (effect: any, deps: any) => {
  useEffect(effect, deps);
};

export const useLayoutEffect = (effect: any, deps: any) => {
  useEffect(effect, deps);
};

export const useImperativeHandle = (ref: any, createHandle: any, deps: any) => {
  useEffect(() => {
    if (ref) {
      ref.current = createHandle();
    }
  }, deps);
};

export const useDebugValue = (value: any) => {
  // No-op in production
};

export const useCallback = (callback: any, deps: any) => {
  return callback;
};

export const useMemo = (factory: any, deps: any) => {
  return factory();
};

export const useRef = (initialValue: any) => {
  return { current: initialValue };
};

export const useState = (initialState: any) => {
  return [initialState, () => {}] as const;
};

export const useReducer = (reducer: any, initialState: any) => {
  return [initialState, () => {}] as const;
};

export const useContext = (context: any) => {
  return context._currentValue;
};