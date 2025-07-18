import { Center } from '@chakra-ui/react';
import { NextSeo } from '@/components/NextSeo';
import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { captureException } from '@/utils/sentry';
import { useTranslation } from 'react-i18next';
;
export default function Custom403() {
  const { user } = useAuth();
  const { t } = useTranslation();

  useEffect(() => {
    const err = new Error('403 - Forbidden');'
    captureException(err, {
      user: user ? { id: user.id, email: user.email } : undefined,
      extra: { path: window.location.pathname },
    });
  }, [user]);

  return (
    <>
      <NextSeo title="403 - Forbidden" />"
      <Center minH="100vh" flexDirection="column">"
        <h1 className="text-4xl font-bold mb-4">403 - Forbidden</h1>"
        <p className="text-lg mb-8">{t('error.403.message')}</p>'
        <button
          onClick={() => window.history.back()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600""
        >
          {t('error.goBack')}'
        </button>
      </Center>
    </>
  );
}