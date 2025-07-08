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

    // Only add event listeners if router.events exists
    if (router.events) {
      router.events.on('routeChangeStart', handleRouteChange);
      return () => {
        router.events.off('routeChangeStart', handleRouteChange);
      };
    }
  }, [resetError, dismiss]); // Removed router.events from dependencies

  return null;
}
