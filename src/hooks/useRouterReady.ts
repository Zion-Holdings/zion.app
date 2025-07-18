<<<<<<< HEAD
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react;;
/**'
 * Hook that ensures router is ready before returning router data;
 * Prevents accessing router.query before it's populated;
=======
import { useRouter } from 'next/router;'';
import { useEffect, useState } from 'react;'
;
/**;''
 * Hook that ensures router is ready before returning router data;;
 * Prevents accessing router.query before it's populated;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
 */;
export function useRouterReady(): ;
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {;
    if (router.isReady) {;
      setIsReady(true);
    };
<<<<<<< HEAD
  }, [router.isReady])'
;
  return {;
    ...router,'
    isReady,;
    query: "isReady ? router.query : {"},;"
    asPath: isReady ? router.asPath : '',;
=======
  }, [router.isReady]);''
;
  return {;
    ...router,;''
    isReady,;;
    query: "isReady ? router.query : {"},;";";";";""
    asPath: isReady ? router.asPath : '',;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
  };
};
/**;
 * Hook that forces re-render when route changes;
 * Useful for components that need to reset state on navigation;
 */;
export function useRouteChange(): unknown {): unknown {): unknown {): unknown {): unknown {callback?: () => void) {;
  const router = useRouter();
  const [routeKey, setRouteKey] = useState(0);
  useEffect(() => {;
    const handleRouteChange = () => {;
      setRouteKey((prev) => prev + 1);
<<<<<<< HEAD
      callback?.()'
    };
    // Only add event listeners if router.events exists'
    if (router.events) {;
      router.events.on('routeChangeComplete', handleRouteChange)'
      return () => {;
        router.events.off('routeChangeComplete', handleRouteChange);
=======
      callback?.();''
    };
;
    // Only add event listeners if router.events exists;''
    if (router.events) {;;
      router.events.on('routeChangeComplete', handleRouteChange);''
      return () => {;;
        router.events.off('routeChangeComplete', handleRouteChange);'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      };
    };
    return undefined;
  }, [callback]); // Removed router.events from dependencies;
  return routeKey;
};
<<<<<<< HEAD
'
/**;
 * Hook that provides query parameters with proper typing and ready state;
 */'
export function useRouterQuery<T extends Record<string, string | string[]>>(): {;
  query: "Partial<T>;"
  isReady: boolean;,"
  router: "ReturnType<typeof useRouter>;"
} {;";"
  const router = useRouter();"
;"
  return {;"
    query: "router.isReady ? (router.query as Partial<T>) : {"},;"
    isReady: router.isReady,;"
    router,;";"
  };"
};"
"
};"
=======
;''
/**;
 * Hook that provides query parameters with proper typing and ready state;
 */;'';
export function useRouterQuery<T extends Record<string, string | string[]>>(): {;;
  query: "Partial<T>;",;";";";";""
  isReady: "boolean;",";";";";""
  router: "ReturnType<typeof useRouter>;";""
} {;";""
  const router: unknown = useRouter();";";""
;";";";""
  return {;";";";";""
    query: "router.isReady ? (router.query as Partial<T>) : {"},;";";";";""
    isReady: "router.isReady",;""
    router,;";""
  };";";""
};";";";""
";";""
};";";""
}";""
};";""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}";"
};""
}""
}
}""