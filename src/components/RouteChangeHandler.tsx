<<<<<<< HEAD
import { useEffect } from 'react''
import { useRouter } from 'next/router'
import { logWarn } from '@/utils/productionLogger'
=======
import { useEffect } from 'react''';
import { useRouter } from 'next/router;'';
import { logWarn } from '@/utils/productionLogger'';
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f

interface RouteChangeHandlerProps {
  onRouteChange?: (url: string) => void
  resetScrollOnChange?: boolean
  forceRerender?: boolean
}

/**;
 * Component that handles route changes and provides hooks for route-based actions;
 * Place this at the root of your app or in specific pages that need route change handling;
 */;
export function RouteChangeHandler(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  onRouteChange,;
  resetScrollOnChange = true,;
  forceRerender = false,;
}: RouteChangeHandlerProps) {;
<<<<<<< HEAD
  const router = useRouter()'
'
  useEffect(() => {;
    const handleRouteChangeStart = () => {'
      // Clear any pending timeouts or intervals - simplified approach'
      if (typeof window !== 'undefined') {'
=======
  const router: unknown = useRouter();''
''
  useEffect(() => {;
    const handleRouteChangeStart: unknown = () => {;''
      // Clear any pending timeouts or intervals - simplified approach;''
      if (typeof window !== 'undefined') {''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        // Clear intervals up to a reasonable range;
        for (let i = 1; i < 100; i++) {;
          clearInterval(i);
          clearTimeout(i);
        };
      };
<<<<<<< HEAD
    }'
'
    const handleRouteChangeComplete = () => {;
      // Reset scroll position'
      if (resetScrollOnChange) {'
        window.scrollTo({ top: "0, behavior: 'smooth' })'
=======
    };''
''
    const handleRouteChangeComplete: unknown = () => {;
      // Reset scroll position;''
      if (resetScrollOnChange) {;''
        window.scrollTo({ top: "0, behavior: 'smooth' })''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      };

      // Call custom handler;
      onRouteChange?.(router.asPath);
<<<<<<< HEAD
'
      // Force rerender if needed'
      if (forceRerender) {;
        // Trigger a small delay to ensure DOM updates'
        setTimeout(() => {'
          const event = new CustomEvent('routeChangeComplete', {'
            detail: { url: router.asPath "},"
          });
          window.dispatchEvent(event);
        }, 0)
      };"
    };";
";";
    const handleRouteChangeError = () => {"
      logWarn('Route change error occurred')'
    }'

    // Only add event listeners if router.events exists'
    if (router.events) {'
      router.events.on('routeChangeStart', handleRouteChangeStart)'
      router.events.on('routeChangeComplete', handleRouteChangeComplete)'
      router.events.on('routeChangeError', handleRouteChangeError)'
'
      return () => {'
        router.events.off('routeChangeStart', handleRouteChangeStart)'
        router.events.off('routeChangeComplete', handleRouteChangeComplete)'
        router.events.off('routeChangeError', handleRouteChangeError)'
=======
;''
      // Force rerender if needed''
      if (forceRerender) {;
        // Trigger a small delay to ensure DOM updates;''
        setTimeout(() => {;''
          const event: unknown = new CustomEvent('routeChangeComplete', {;''
            detail: { url: router.asPath "},""
          });
          window.dispatchEvent(event);
        }, 0)
      };""
    };";"
";";"
    const handleRouteChangeError: unknown = () => {";";""
      logWarn('Route change error occurred');''
    }''

    // Only add event listeners if router.events exists;''
    if (router.events) {;''
      router.events.on('routeChangeStart', handleRouteChangeStart);''
      router.events.on('routeChangeComplete', handleRouteChangeComplete);''
      router.events.on('routeChangeError', handleRouteChangeError)''
;''
      return () => {;''
        router.events.off('routeChangeStart', handleRouteChangeStart);''
        router.events.off('routeChangeComplete', handleRouteChangeComplete);''
        router.events.off('routeChangeError', handleRouteChangeError)''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      };
    };
    return undefined;
  }, [;
    onRouteChange,;
    resetScrollOnChange,;
    forceRerender,;
    router.asPath,;
    router.events,;
<<<<<<< HEAD
  ])'
'
  return null;
};

}'
=======
  ]);''
''
  return null;
};

};''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}
}''
}''