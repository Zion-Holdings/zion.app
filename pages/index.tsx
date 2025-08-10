import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>Zion AI Marketplace</title>
        <meta name="description" content="Zion AI Marketplace" />
      </Head>
      <main className="space-y-8">
        <section className="space-y-4">
          <h1 className="text-2xl font-bold">Zion AI Marketplace</h1>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded bg-blue-600 text-white">{t('cta.post_job')}</button>
            <button className="px-4 py-2 rounded border border-blue-600 text-blue-600">{t('cta.create_profile')}</button>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Autonomous Cloud Agents</h2>
          <p className="text-gray-600">Intelligent, innovative automations that run 24/7 in the cloud and sync changes back to this repository.</p>
          <ul className="grid md:grid-cols-3 gap-4">
            <li className="border rounded p-4">
              <h3 className="font-semibold"><Link href="/auto/language-sync">Global Language Sync Agent</Link></h3>
              <p className="text-sm text-gray-600">Backfills missing translations and keeps locale files fresh.</p>
            </li>
            <li className="border rounded p-4">
              <h3 className="font-semibold"><Link href="/auto/market-signals">AI Market Signals Agent</Link></h3>
              <p className="text-sm text-gray-600">Curates AI/tech trends daily and stores reports.</p>
            </li>
            <li className="border rounded p-4">
              <h3 className="font-semibold"><Link href="/auto/seo-audit">Autonomous SEO Auditor</Link></h3>
              <p className="text-sm text-gray-600">Finds SEO gaps and generates actionable reports.</p>
            </li>
            <li className="border rounded p-4">
              <h3 className="font-semibold"><Link href="/auto/release-notes-agent">AI Release Notes Agent</Link></h3>
              <p className="text-sm text-gray-600">Summarizes daily commits into readable release notes.</p>
            </li>
            <li className="border rounded p-4">
              <h3 className="font-semibold"><Link href="/auto/taxonomy-agent">AI Taxonomy Tagger</Link></h3>
              <p className="text-sm text-gray-600">Suggests page tags to improve discovery.</p>
            </li>
            <li className="border rounded p-4">
              <h3 className="font-semibold"><Link href="/public/hreflang.xml">Hreflang Generator</Link></h3>
              <p className="text-sm text-gray-600">Keeps alternate language hreflang links up to date.</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Home;