import React from 'react';
import { Center, Button, VStack, Heading, Text } from '@chakra-ui/react';
import { NextSeo } from '@/components/NextSeo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { captureException } from '@/utils/sentry';
import { logInfo } from '@/utils/productionLogger';

export default function Custom500() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    const err = new Error('500 - Internal Server Error');
    captureException(err);
    logInfo('500 page accessed', { path: router.asPath });
  }, [router.asPath]);

  return (
    <>
      <NextSeo title="500 - Internal Server Error" description="Server error" />
      <Center minH="100vh" flexDirection="column">
        <VStack spacing={6}>
          <Heading size="2xl">500 - Internal Server Error</Heading>
          <Text>Sorry, something went wrong on our end.</Text>
          <Button onClick={() => router.push('/')}>
            Go Home
          </Button>
        </VStack>
      </Center>
    </>
  );
}