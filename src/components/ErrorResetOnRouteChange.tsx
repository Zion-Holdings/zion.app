import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from '@/hooks/use-toast';
import { useError } from '@/context/ErrorContext';

export default function ErrorResetOnRouteChange() {
  const router = useRouter();
  const { resetError } = useError();

  useEffect(() => {
    resetError();
    toast.dismiss();
  }, [router.pathname, resetError]);

  return null;
}
