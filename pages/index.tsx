import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zion — Intelligent Autonomous Automations</title>
        <meta name="description" content="Autonomous cloud automations running continuously" />
      </Head>
      
      <main className="space-y-10">
        <section>
          <h1 className="text-3xl font-bold mb-2">Welcome to Zion</h1>
          <p className="text-gray-600">We build intelligent, autonomous systems that run in the cloud with zero human intervention.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Autonomous Automations</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/automations/top-talents">
              <div className="enhanced-card hover:shadow-lg cursor-pointer">
                <h3 className="text-xl font-semibold">Top Talents (Auto)</h3>
                <p className="text-sm text-gray-600">Aggregated weekly from approved reviews.</p>
              </div>
            </Link>
            <Link href="/automations/sitemap-status">
              <div className="enhanced-card hover:shadow-lg cursor-pointer">
                <h3 className="text-xl font-semibold">Sitemap Status (Auto)</h3>
                <p className="text-sm text-gray-600">Nightly sitemap generation and search engine pings.</p>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;