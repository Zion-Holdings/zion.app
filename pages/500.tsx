import { Center } from '@chakra-ui/react';
import Link from 'next/link';
import { NextSeo } from '@/components/NextSeo';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { captureException } from '@/utils/sentry';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { logInfo } from '@/utils/productionLogger';

export default function Custom500() {
  const { user } = useAuth();
  const { t } = useTranslation();

  useEffect(() => {
    const err = new Error('500 - Server Error');
    const eventId = captureException(err, {
      user: user ? { id: user.id, email: user.email } : undefined,
      extra: { path: window.location.pathname },
    });
    logInfo('Reported 500 error', { data:  { errorId: eventId } });
  }, [user]);

  return (
    <>
      <NextSeo
        title={t('errors.server_error')}
        description="An unexpected error occurred."
      />
      <Center minH="100vh" flexDirection="column" gap={4}>
        <h1>{t('errors.server_error_title')}</h1>
        <Button asChild>
          <Link href="/">{t('errors.return_home')}</Link>
        </Button>
      </Center>
    </>
  );
}
