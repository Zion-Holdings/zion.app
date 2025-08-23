import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {logErrorToProduction} from '@/utils/productionLogger';


const NotFound = () => {
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    logErrorToProduction(
      "404 Error: User attempted to access non-existent route:",
      router.asPath
    );
  }, [router.asPath]);

  return (
    <div className="flex flex-1 items-center justify-center bg-gray-100">
      <div className="text-center p-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">404</h1>
        <p className="text-xl text-gray-700 mb-4">{t('errors.page_not_found')}</p>
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
        >
          {t('errors.return_home')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;