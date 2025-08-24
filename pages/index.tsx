import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zion AI Marketplace — Autonomous Cloud Automations</title>
        <meta name="description" content="Zion AI Marketplace with autonomous cloud automations" />
      </Head>
      <main className="relative space-y-12">
        <div className="futuristic-bg" aria-hidden>
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="drift"></div>
          <div className="stars"></div>
        </div>

        <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-black to-gray-900 text-white p-10">
          <h1 className="glitch text-4xl md:text-5xl font-extrabold" data-text="Zion AI Marketplace">Zion AI Marketplace</h1>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-gray-200">Futuristic, privacy-forward, and autonomous. Zion fuses AI, Web3 identity, and decentralized backups into a marketplace that iterates itself.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/automation"><a className="rounded-md bg-white text-black px-4 py-2 text-sm shadow">Explore Automation Hub</a></Link>
            <a className="rounded-md bg-gradient-to-r from-emerald-500 to-blue-500 px-4 py-2 text-sm shadow" href="/data/reports/automation" target="_blank" rel="noreferrer">Automation Artifacts</a>
            <a className="rounded-md border border-white/60 px-4 py-2 text-sm" href="/data/reports/feedback" target="_blank" rel="noreferrer">Feedback Reports</a>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="neon-card p-5">
            <h3 className="font-semibold">Autonomous Cloud Automations</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Self-running workflows that analyze, improve, and commit changes around the clock.</p>
            <Link href="/automation"><a className="text-sm underline">View status</a></Link>
          </div>
          <div className="neon-card p-5">
            <h3 className="font-semibold">Web3 Login + DID</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Connect wallets, verify identities (ENS/Lens/Ceramic/Farcaster), and display Web3 profiles.</p>
            <Link href="/auth"><a className="text-sm underline">Try wallet sign-in</a></Link>
          </div>
          <div className="neon-card p-5">
            <h3 className="font-semibold">Decentralized Backups</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Opt-in IPFS/Arweave backups of profiles, resumes, and reviews for resilience.</p>
            <Link href="/settings/account"><a className="text-sm underline">Manage backups</a></Link>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="neon-card p-6">
            <h3 className="font-semibold mb-2">Capabilities</h3>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700 dark:text-gray-300">
              <li>End-to-end autonomous improvement cycles (design, content, marketing)</li>
              <li>Wallet-based, zero-gas verification and Web3 identity linking</li>
              <li>Decentralized, encrypted-ready backups and restore prompts</li>
              <li>Feedback-driven prompt optimization and analytics</li>
            </ul>
          </div>
          <div className="neon-card p-6">
            <h3 className="font-semibold mb-2">Benefits</h3>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700 dark:text-gray-300">
              <li>Privacy-first login without passwords</li>
              <li>Resilient data storage beyond any single vendor</li>
              <li>Continuous UX and performance enhancements</li>
              <li>Transparent reports and artifacts, committed automatically</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;