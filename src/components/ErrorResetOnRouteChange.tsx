<<<<<<< HEAD
import { useEffect } from 'react''';
import { useRouter } from 'next/router;'';
import { useToast } from '@/hooks/use-toast;'';
import { useError } from '@/context/ErrorContext'';
;
export default function ErrorResetOnRouteChange(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const router: unknown = useRouter();
=======
import { useEffect } from 'react''
import { useRouter } from 'next/router'
import { useToast } from '@/hooks/use-toast'
import { useError } from '@/context/ErrorContext'

export default function ErrorResetOnRouteChange(): ;
  const router = useRouter();
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  const { _resetError } = useError();
  const { _dismiss } = useToast();
  useEffect(() => {;
<<<<<<< HEAD
    if (!router.events) return;''
    const handleRouteChange: unknown = () => {''
      resetError();
      dismiss();''
    };''
    router.events.on('routeChangeStart', handleRouteChange);''
    return () => {;''
      router.events?.off('routeChangeStart', handleRouteChange)''
    };
  }, [router.events, resetError, dismiss]);''
''
  return null;
};

};''
}
}''
}''
=======
    if (!router.events) return'
    const handleRouteChange = () => {'
      resetError();
      dismiss()'
    }'
    router.events.on('routeChangeStart', handleRouteChange)'
    return () => {'
      router.events?.off('routeChangeStart', handleRouteChange)'
    };
  }, [router.events, resetError, dismiss])'
'
  return null;
};

}'

}'
}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
