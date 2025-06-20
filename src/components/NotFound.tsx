import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import { useTranslation } from 'react-i18next';

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-1 items-center justify-center bg-gray-100">
      <div className="text-center p-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">404</h1>
        <p className="text-xl text-gray-700 mb-4">{t('errors.page_not_found')}</p>
        <p className="text-lg text-gray-600 mb-4">
          {t('errors.forgot_password_prompt')}
        </p>
        <Link
          href="/forgot-password" // Changed to href
          className="text-blue-600 hover:text-blue-800 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
        >
          {t('errors.reset_password')}
        </Link>
        <p className="mt-4">
          <Link
            href="/" // Changed to href
            className="text-sm text-gray-500 hover:text-gray-700 underline"
          >
            {t('errors.or_return_home')}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
