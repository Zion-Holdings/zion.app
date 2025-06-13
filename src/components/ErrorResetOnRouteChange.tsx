import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { useError } from '@/context/ErrorContext';

export default function ErrorResetOnRouteChange() {
  const location = useLocation();
  const { resetError } = useError();

  useEffect(() => {
    resetError();
    toast.dismiss();
  }, [location.pathname, resetError]);

  return null;
}
