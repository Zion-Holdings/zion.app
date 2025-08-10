import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import EnhancedLayout from '@/components/layout/EnhancedLayout';
import FuturisticHero from '@/components/ui/FuturisticHero';
import FuturisticCard from '@/components/ui/FuturisticCard';

const Home: NextPage = () => {
  return (
    <EnhancedLayout>
      <Head>
        <title>Zion Tech Solutions – Autonomous Cloud Automations</title>
        <meta name="description" content="Intelligent, autonomous automations running in the cloud. No humans. No servers to manage." />
      </Head>

      <FuturisticHero />

      <section className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <FuturisticCard title="Autonomous Agents" description="Always‑on, scheduled via the cloud to keep your data and insights fresh." href="/automation" />
        <FuturisticCard title="Marketplace Insights" description="Real‑time pricing medians, category distribution, and top skills analysis." href="/automation/marketplace-insights" />
        <FuturisticCard title="Content Health" description="Detects shallow content and missing metadata to improve SEO and UX." href="/automation/content-health" />
      </section>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/services"><a className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-neon-blue transition-shadow">
          <div className="font-medium mb-1">Services</div>
          <div className="text-sm opacity-70">Hire us to deliver AI, cloud, and data solutions.</div>
        </a></Link>
        <Link href="/talent"><a className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-neon-purple transition-shadow">
          <div className="font-medium mb-1">Talents</div>
          <div className="text-sm opacity-70">Find top independent experts for your projects.</div>
        </a></Link>
        <Link href="/products"><a className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-neon-pink transition-shadow">
          <div className="font-medium mb-1">Equipment</div>
          <div className="text-sm opacity-70">Rent gear and kits to accelerate delivery.</div>
        </a></Link>
        <Link href="/automation"><a className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 hover:shadow-neon-green transition-shadow">
          <div className="font-medium mb-1">Automation Dashboard</div>
          <div className="text-sm opacity-70">Live reports and status of autonomous agents.</div>
        </a></Link>
      </section>
    </EnhancedLayout>
  );
};

export default Home;