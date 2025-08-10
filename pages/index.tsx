import Link from 'next/link';
import FuturisticHero from '../components/ui/FuturisticHero';
import FeatureGrid from '../components/ui/FeatureGrid';

export default function Home() {
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
        <p className="text-gray-600 dark:text-gray-300">These systems run in the cloud, continuously improving the product and syncing changes back to the repository without human intervention.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <h3 className="font-medium">UI Evolution</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Analyzes and beautifies the UI automatically.</p>
            <Link href="/automation">
              <a className="text-blue-600 dark:text-blue-400 text-sm mt-2 inline-block">View automation dashboard →</a>
            </Link>
          </div>
          <div className="p-4 rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <h3 className="font-medium">Responsive Content</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Continuously aligns content and components for mobile-first UX.</p>
            <Link href="/automation">
              <a className="text-blue-600 dark:text-blue-400 text-sm mt-2 inline-block">View automation dashboard →</a>
            </Link>
          </div>
          <div className="p-4 rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <h3 className="font-medium">Performance Audits</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Automated Lighthouse Mobile. Latest reports published for transparency.</p>
            <Link href="/reports/performance/">
              <a className="text-blue-600 dark:text-blue-400 text-sm mt-2 inline-block">See mobile performance reports →</a>
            </Link>
          </div>
          <div className="p-4 rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <h3 className="font-medium">Security Monitoring</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Automated npm audits with reports synced to the repo.</p>
            <Link href="/reports/security/">
              <a className="text-blue-600 dark:text-blue-400 text-sm mt-2 inline-block">View security reports →</a>
            </Link>
          </div>
          <div className="p-4 rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <h3 className="font-medium">Image Size Audit</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Find largest images in `public/` to improve mobile performance.</p>
            <Link href="/reports/images/">
              <a className="text-blue-600 dark:text-blue-400 text-sm mt-2 inline-block">View image audit reports →</a>
            </Link>
          </div>
          <div className="p-4 rounded-lg border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <h3 className="font-medium">Broken Link Checker</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Crawls the exported site to detect broken links.</p>
            <Link href="/reports/links/">
              <a className="text-blue-600 dark:text-blue-400 text-sm mt-2 inline-block">View link check reports →</a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}