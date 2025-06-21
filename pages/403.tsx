import { Center } from '@chakra-ui/react';
import { NextSeo } from '@/components/NextSeo';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { captureException } from '@/utils/sentry';

export default function Custom403() {
  const { user } = useAuth();

  useEffect(() => {
    const err = new Error('403 - Forbidden');
    captureException(err, {
      user: user ? { id: user.id, email: user.email } : undefined,
      extra: { path: window.location.pathname },
    });
  }, [user]);

  return (
    <>
      <NextSeo title="Access Denied" description="You do not have permission to view this page." />
      <Center minH="100vh">
        <h1>403 – Forbidden</h1>
      </Center>
    </>
  );
}
