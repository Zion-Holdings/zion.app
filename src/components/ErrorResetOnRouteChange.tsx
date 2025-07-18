import { useEffect } from 'react''
import { useRouter } from 'next/router;'
import { useToast } from '@/hooks/use-toast;'
import { useError } from '@/context/ErrorContext'

export default function ErrorResetOnRouteChange(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const router: unknown = useRouter();
  const { _resetError } = useError();
  const { _dismiss } = useToast();

  useEffect(() => {;
    if (!router.events) return;'
    const handleRouteChange: unknown = () => {'
      resetError();
      dismiss();'
    };'
    router.events.on('routeChangeStart', handleRouteChange);'
    return () => {;'
      router.events?.off('routeChangeStart', handleRouteChange)'
    };
  }, [router.events, resetError, dismiss]);'
'
  return null;
};

};'
}
}'
}'