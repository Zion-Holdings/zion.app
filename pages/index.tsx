import Link from 'next/link';
import FuturisticHero from '../components/ui/FuturisticHero';
import InteractiveStats from '../components/ui/InteractiveStats';
import EnhancedCard from '../components/ui/EnhancedCard';

export default function Home() {
  return (
    <div className="space-y-16">
      <FuturisticHero />

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Capabilities</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <EnhancedCard title="AI Talent Marketplace" description="Find vetted AI engineers, data scientists, and ML experts." href="/talent" />
          <EnhancedCard title="Project Accelerators" description="Launch with prebuilt templates and accelerators." href="/services/landing-page-generator" />
          <EnhancedCard title="Secure Contracts" description="Built-in engagements with transparent pricing and payouts." href="/services" />
          <EnhancedCard title="Growth Partnerships" description="Earn by referring your audience." href="/partners" />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Featured Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <EnhancedCard title="AI Model Development" description="Custom LLMs, fine-tuning, and evaluation." href="/services/ai-model-development-chat" />
          <EnhancedCard title="Data Pipeline Engineering" description="Robust ETL/ELT with modern data stack." href="/services/data-pipeline-engineering-chat" />
          <EnhancedCard title="Web App Development" description="High-performance, scalable web apps." href="/services/web-application-development-chat" />
          <EnhancedCard title="Cloud Migration" description="Move to cloud securely and efficiently." href="/services/cloud-migration-services-chat" />
          <EnhancedCard title="Security Auditing" description="Harden systems and meet compliance." href="/services/security-auditing-chat" />
          <EnhancedCard title="Performance Optimization" description="Speed up apps, reduce costs." href="/services/performance-optimization-chat" />
        </div>
        <div>
          <Link href="/services"><a className="inline-block mt-2 text-indigo-600 underline">View all services →</a></Link>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Impact</h2>
        <InteractiveStats />
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 backdrop-blur">
          <h3 className="text-xl font-semibold">For Companies</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Source elite AI talent and deliver projects faster with our marketplace.</p>
          <Link href="/talent"><a className="inline-block mt-3 px-4 py-2 rounded bg-indigo-600 text-white">Browse Talent</a></Link>
        </div>
        <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 backdrop-blur">
          <h3 className="text-xl font-semibold">For Creators & Influencers</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Invite your audience and earn when they get hired.</p>
          <Link href="/partners"><a className="inline-block mt-3 px-4 py-2 rounded border">Join Partners</a></Link>
        </div>
      </section>
    </div>
  );
}