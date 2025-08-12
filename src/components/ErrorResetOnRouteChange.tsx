import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useToast } from '@/hooks/use-toast';
import { useError } from '@/context/ErrorContext';

export default function ErrorResetOnRouteChange() {
  const router = useRouter();
  const { resetError } = useError();
  const { dismiss } = useToast();

  useEffect(() => {
    const handleRouteChange = () => {
      resetError();
      dismiss();
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events, resetError]);

  return null;
}
