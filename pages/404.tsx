import React from 'react';
import { Center, Button, VStack, Heading, Text } from '@chakra-ui/react';
import { NextSeo } from '@/components/NextSeo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { captureException } from '@/utils/sentry';
import { Home, Search, Users, ArrowLeft, ExternalLink } from '@/components/ui/icons';
import { ShoppingCart } from 'lucide-react';
import { logInfo } from '@/utils/productionLogger';

export default function Custom404() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    const err = new Error('404 - Page Not Found');
    captureException(err);
    logInfo('404 page accessed', { path: router.asPath });
  }, [router.asPath]);

  return (
    <>
      <NextSeo title="404 - Page Not Found" description="Page not found" />
      <Center minH="100vh" flexDirection="column">
        <VStack spacing={6}>
          <Heading size="2xl">404 - Page Not Found</Heading>
          <Text>Sorry, the page you are looking for does not exist.</Text>
          <Button onClick={() => router.push('/')} leftIcon={<Home />}>
            Go Home
          </Button>
        </VStack>
      </Center>
    </>
  );
}