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
    captureException(err, {
      user: user ? { id: user.id, email: user.email } : undefined,
      extra: { path: window.location.pathname },
    });
  }, [user]);

  return (
    <>
      <NextSeo title={t('errors.access_denied')} description={t('errors.no_permission')} />
      <Center minH="100vh">
        <h1>{t('errors.forbidden_title')}</h1>
      </Center>
    </>
  );
}
