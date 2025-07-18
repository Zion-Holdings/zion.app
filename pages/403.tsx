import { Center } from '@chakra-ui/react';
import { NextSeo } from '@/components/NextSeo';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { captureException } from '@/utils/sentry';
import { useTranslation } from 'react-i18next';

export default function Custom403() {
  const { user } = useAuth();
  const { t } = useTranslation();

  useEffect(() => {
    const err = new Error('403 - Forbidden');
    captureException(err);
  }, []);

  return (
    <>
      <NextSeo title="403 - Forbidden" description="Access denied" />
      <Center minH="100vh" flexDirection="column">
        <h1>403 - {t('forbidden')}</h1>
        <p>{t('access_denied')}</p>
      </Center>
    </>
  );
}