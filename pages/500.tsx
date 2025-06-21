import { Center } from '@chakra-ui/react';
import Link from 'next/link';
import { NextSeo } from '@/components/NextSeo';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { captureException } from '@/utils/sentry';
import { Button } from '@/components/ui/button';

export default function Custom500() {
  const { user } = useAuth();

  useEffect(() => {
    const err = new Error('500 - Server Error');
    const eventId = captureException(err, {
      user: user ? { id: user.id, email: user.email } : undefined,
      extra: { path: window.location.pathname },
    });
    console.log('Reported 500 error. Error ID:', eventId);
  }, [user]);

  return (
    <>
      <NextSeo
        title="Server Error"
        description="An unexpected error occurred."
      />
      <Center minH="100vh" flexDirection="column" gap={4}>
        <h1>500 – Server Error</h1>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
      </Center>
    </>
  );
}
