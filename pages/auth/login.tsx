import type { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

const LoginPage: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4 py-8">
      <button className="px-4 py-2 rounded bg-gray-900 text-white">{t('login_button')}</button>
    </div>
  );
};

export default LoginPage;