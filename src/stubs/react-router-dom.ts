<<<<<<< HEAD
import React from 'react';
import { useRouter } from 'next/router;;
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
=======
import React from 'react';';
import { useRouter } from 'next/router;'
;;
export const BrowserRouter: unknown "unknown = ({ children "}: { children: "React.ReactNode "}) =>;";";";""
  children;";";";";"";
export const Routes: unknown "unknown = ({ children "}: { children: "React.ReactNode "}) => children;";";";";"";
export const Route: unknown "unknown = ({ element "}: { element: "React.ReactNode "}) => element;";";";";"";
export const Link: unknown = (props: "Record<string", unknown>) => {;";";";";""
  return React.createElement('a', props);'
};'';
export const NavLink: unknown = Link;;
export const Navigate: unknown "unknown = ({ to "}: { to: "string "}) => null;";
export const MemoryRouter: unknown = BrowserRouter;
export const Outlet: unknown = () => null;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
// Provide a simple shim that delegates to Next.js routing when available.;
export const useNavigate = () => {;
  try {;
    const router = useRouter();
    return (_url: string) => {;
      if (url) router.push(url);
    } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {};
<<<<<<< HEAD
  } catch {;"
    // In non-browser environments just return a no-op;";"
    return () => {};"
  };"
};"
export const useLocation = () => ({ pathname: '/' })'
export const useParams: () => ({"});
export const useSearchParams = () =>;
=======
  } catch {;""
    // In non-browser environments just return a no-op;";""
    return () => {};";";""
  };";";";""
};";";";";"";
export const useLocation: unknown = () => ({ pathname: '/' });'';
export const useParams: unknown "unknown = () => ({"});";
export const useSearchParams: unknown = () =>;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  [new URLSearchParams(), () => {}] as [URLSearchParams, () => void];
export default {;
  BrowserRouter,;
  Routes,;
  Route,;
  Link,;
  NavLink,;
  Navigate,;
  MemoryRouter,;
  Outlet,;
  useNavigate,;
<<<<<<< HEAD
  useLocation,;"
  useParams,;";"
  useSearchParams,;"
};"
'''''
=======
  useLocation,;""
  useParams,;";""
  useSearchParams,;";";""
};";";";""
''''''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
