import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import EnhancedLayout from '@/components/layout/EnhancedLayout';

const Home: NextPage = () => {
  return (
    <EnhancedLayout>
      <Head>
        <title>Zion Tech Solutions – Autonomous Cloud Automations</title>
        <meta name="description" content="Intelligent, autonomous automations running in the cloud. No humans. No servers to manage." />
      </Head>

      <section className="py-8">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800 p-8">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">Autonomous Cloud Automations</h1>
          <p className="text-sm md:text-base opacity-80 max-w-2xl">
            Always-on automation agents analyze your marketplace, audit content health, and publish reports to the cloud repository—fully unattended.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/automation"><a className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">View Automation Dashboard</a></Link>
            <Link href="/automation/marketplace-insights"><a className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">Marketplace Insights</a></Link>
            <Link href="/automation/content-health"><a className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700">Content Health</a></Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/services"><a className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-md transition-shadow">
          <div className="font-medium mb-1">Services</div>
          <div className="text-sm opacity-70">Hire us to deliver AI, cloud, and data solutions.</div>
        </a></Link>
        <Link href="/talent"><a className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-md transition-shadow">
          <div className="font-medium mb-1">Talents</div>
          <div className="text-sm opacity-70">Find top independent experts for your projects.</div>
        </a></Link>
        <Link href="/products"><a className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-md transition-shadow">
          <div className="font-medium mb-1">Equipment</div>
          <div className="text-sm opacity-70">Rent gear and kits to accelerate delivery.</div>
        </a></Link>
        <Link href="/automation"><a className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-md transition-shadow">
          <div className="font-medium mb-1">Automation Dashboard</div>
          <div className="text-sm opacity-70">Live reports and status of autonomous agents.</div>
        </a></Link>
      </section>
    </EnhancedLayout>
  );
};

export default Home;