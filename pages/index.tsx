import type { NextPage } from 'next';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>Zion AI Marketplace</title>
        <meta name="description" content="Zion AI Marketplace" />
      </Head>
      <main className="space-y-4">
        <h1 className="text-2xl font-bold">Zion AI Marketplace</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded bg-blue-600 text-white">{t('cta.post_job')}</button>
          <button className="px-4 py-2 rounded border border-blue-600 text-blue-600">{t('cta.create_profile')}</button>
        </div>
      </main>
    </div>
  );
};

export default Home;