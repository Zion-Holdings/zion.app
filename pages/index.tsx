import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zion</title>
      </Head>
      <div className="py-16">
        <h1 className="text-3xl font-bold text-white">Welcome to Zion</h1>
        <p className="mt-2 text-white/80">Explore our AI Marketplace of curated IT services.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/services"><a className="inline-block rounded-full px-5 py-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white">Browse Services</a></Link>
          <Link href="/automation"><a className="inline-block rounded-full px-5 py-2 border border-white/20 text-white/90 hover:bg-white/10">See Autonomous Automations</a></Link>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Link href="/automation/marketplace-enrichment"><a className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
            <div className="text-white font-medium">Marketplace Enrichment</div>
            <div className="text-white/70 text-sm mt-1">AI summaries, tags and tiers for services</div>
          </a></Link>
          <Link href="/automation/quote-requests"><a className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
            <div className="text-white font-medium">Quote Requests Log</div>
            <div className="text-white/70 text-sm mt-1">Auto-synced requests with AI analysis</div>
          </a></Link>
          <Link href="/automation/autodocs"><a className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
            <div className="text-white font-medium">Autodocs</div>
            <div className="text-white/70 text-sm mt-1">Documentation generated from code</div>
          </a></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;