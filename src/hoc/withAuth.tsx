import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';

function withAuth<P>(Component: React.ComponentType<P>) {
  const Wrapped = (props: P) => {
    const router = useRouter();
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

    useEffect(() => {
      if (!isLoggedIn) {
        router.push('/login?next=/community/new');
      }
    }, [isLoggedIn, router]);

    if (!isLoggedIn) {
      return null;
    }

    return <Component {...props} />;
  };

  return Wrapped;
}

export default withAuth;
