import { Center } from '@chakra-ui/react';
import Link from 'next/link';
import { NextSeo } from '@/components/NextSeo';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { captureException } from '@/utils/sentry';
import { Button } from '@/components/ui/button';

export default function Custom404() {
  const { user } = useAuth();

  useEffect(() => {
    const err = new Error('404 - Page Not Found');
    const eventId = captureException(err, {
      user: user ? { id: user.id, email: user.email } : undefined,
      extra: { path: window.location.pathname },
    });
    console.log('Reported 404 error. Error ID:', eventId);
  }, [user]);

  return (
    <>
      <NextSeo
        title="Page Not Found"
        description="The requested page could not be found."
      />
      <Center minH="100vh" flexDirection="column" gap={4} textAlign="center">
        <h1>404 – Page Not Found</h1>
        <p>
          Sorry, the page you are looking for could not be found.
          Please check the URL or use the search bar above.
        </p>
        <Button asChild>
          <Link href="/">Return to Home</Link>
        </Button>
        <Button asChild>
          <Link href="/sitemap">View Sitemap</Link>
        </Button>
      </Center>
    </>
  );
}
