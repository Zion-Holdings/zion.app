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
      <main className="space-y-10">
        <section className="rounded-2xl bg-gradient-to-r from-black to-gray-800 text-white p-8">
          <h1 className="text-3xl font-bold">Autonomous Cloud Automations</h1>
          <p className="mt-2 max-w-2xl text-sm text-gray-200">Our AI-driven automations run continuously in the cloud—no servers to manage, no humans in the loop. They optimize UX, generate insights, and evolve the marketplace.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/automation"><a className="rounded-md bg-white text-black px-4 py-2 text-sm">Explore Automation Hub</a></Link>
            <a className="rounded-md border border-white px-4 py-2 text-sm" href="/data/reports/feedback" target="_blank" rel="noreferrer">Feedback Reports</a>
            <a className="rounded-md border border-white px-4 py-2 text-sm" href="/data/reports/automation" target="_blank" rel="noreferrer">Automation Artifacts</a>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Weekly Feedback Intelligence</h3>
            <p className="text-sm text-gray-600">Automatically mines low-rated answers and proposes prompt improvements.</p>
            <Link href="/automation"><a className="text-sm underline">View status</a></Link>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Automation Ideas Generator</h3>
            <p className="text-sm text-gray-600">Continuously invents and logs new, practical automations tailored to Zion.</p>
            <a className="text-sm underline" href="/data/reports/automation" target="_blank" rel="noreferrer">See ideas</a>
          </div>
          <div className="rounded-xl border p-5">
            <h3 className="font-semibold">Design & Content Upkeep</h3>
            <p className="text-sm text-gray-600">Leverages our script fleet to improve layout, content and performance autonomously.</p>
            <Link href="/automation"><a className="text-sm underline">Explore</a></Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;