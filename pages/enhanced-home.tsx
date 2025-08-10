import Link from 'next/link';
import FuturisticHero from '../components/ui/FuturisticHero';
import FeatureGrid from '../components/ui/FeatureGrid';

export default function EnhancedHome() {
  return (
    <div className="py-8 space-y-12">
      <FuturisticHero />
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Capabilities Built for Speed</h2>
        <p className="text-gray-600 dark:text-gray-300">Hire smarter, ship faster. Zion’s platform accelerates AI delivery from idea to outcome.</p>
        <FeatureGrid />
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Autonomous Cloud Automations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <h3 className="font-medium">Performance Audits</h3>
            <Link href="/reports/performance/"><a className="text-blue-600 dark:text-blue-400 text-sm mt-2 inline-block">See mobile performance reports →</a></Link>
          </div>
          <div className="p-4 rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <h3 className="font-medium">Security Monitoring</h3>
            <Link href="/reports/security/"><a className="text-blue-600 dark:text-blue-400 text-sm mt-2 inline-block">View security reports →</a></Link>
          </div>
        </div>
      </section>
    </div>
  );
}