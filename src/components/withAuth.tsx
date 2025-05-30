import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export default function withAuth<P>(Wrapped: React.ComponentType<P>) {
  return function AuthenticatedComponent(props: P) {
    const { user, isLoading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      if (!isLoading && !user) {
        const next = encodeURIComponent(location.pathname + location.search);
        navigate(`/login?next=${next}`);
      }
    }, [isLoading, user, navigate, location]);

    if (isLoading || (!user && !isLoading)) {
      return (
        <div className="flex h-screen w-full items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-zion-cyan" />
        </div>
      );
    }

    return <Wrapped {...props} />;
  };
}
