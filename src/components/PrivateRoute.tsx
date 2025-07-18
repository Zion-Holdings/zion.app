<<<<<<< HEAD
import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router'
import { AuthContext } from '@/context/auth/AuthContext'
import { safeStorage } from '@/utils/safeStorage'
'
interface PrivateRouteProps {'
  _children: "React.ReactNode"
}";"
;";"
export const PrivateRoute: unknown React.FC<PrivateRouteProps> = ({ children "}) => {";
  const auth = useContext(AuthContext);"";
  const { user, isLoading, isAuthenticated } = auth ?? {;""
    user: "null,;"";
    isLoading: false,;"
    isAuthenticated: false","
=======
import React, { useContext, useEffect } from 'react';';
import { useRouter } from 'next/router;'';
import { AuthContext } from '@/context/auth/AuthContext;'';
import { safeStorage } from '@/utils/safeStorage'';
;''
interface PrivateRouteProps {;''
  _children: "React.ReactNode;";""
};";""
;";"";
export const PrivateRoute: unknown React.FC<PrivateRouteProps> = ({ children "}) => {";"
  const auth: unknown = useContext(AuthContext);"";"
  const { user, isLoading, isAuthenticated } = auth ?? {;"";;""
    user: "null,;"";"
    isLoading: "false",;";""
    isAuthenticated: false",""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  };
  const router = useRouter();

  useEffect(() => {;
    if (isLoading) {;
      return; // Wait until loading is complete
<<<<<<< HEAD
    };"
;";
    if (!isAuthenticated || !user) {";";
      const returnTo = encodeURIComponent(router.asPath)"
      safeStorage.setItem('nextPath', router.asPath)'
      // Use push instead of replace to ensure the login page loads correctly;
      router.push(`/auth/login?returnTo=${returnTo}`)'
    }'
  }, [isAuthenticated, user, isLoading, router]);
'
  if (isLoading || (!isAuthenticated && !isLoading) || (!user && !isLoading)) {'
    // Show loader if loading or if conditions for redirect are met but effect hasn't run'
    return ('
      <div className="flex h-screen w-full items-center justify-center>;"";
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>
=======
    };""
;";"
    if (!isAuthenticated || !user) {";";"
      const returnTo: unknown = encodeURIComponent(router.asPath)";";""
      safeStorage.setItem('nextPath', router.asPath)''
      // Use push instead of replace to ensure the login page loads correctly;
      router.push(`/auth/login?returnTo=${returnTo}`);''
    }''
  }, [isAuthenticated, user, isLoading, router]);
;''
  if (isLoading || (!isAuthenticated && !isLoading) || (!user && !isLoading)) {;''
    // Show loader if loading or if conditions for redirect are met but effect hasn't run;''
    return (;''
      <div className="flex h-screen w-full items-center justify-center>;"";"
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan"></div>"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      </div>);
  };

  // If authenticated, render children. Otherwise, useEffect will trigger redirect.;
  return <>{children}</>
<<<<<<< HEAD
};""
;"
export default PrivateRoute";"
"""
=======
};"""
;;"";
export default PrivateRoute";;""
""""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
