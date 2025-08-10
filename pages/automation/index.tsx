import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import EnhancedLayout from '@/components/layout/EnhancedLayout';
import status from '@/data/reports/automation-status.json';

const AutomationIndex: NextPage = () => {
  const records = Object.entries((status as any).automations || {}) as [string, any][];

  return (
    <EnhancedLayout>
      <Head>
        <title>Autonomous Automations - Zion Tech Solutions</title>
        <meta name="description" content="Live automation dashboards and reports" />
      </Head>

      <h1 className="text-xl font-semibold mb-4">Autonomous Automations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {records.map(([slug, rec]) => (
          <Link key={slug} href={`/automation/${slug}`}>
            <a className="group rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-zinc-900 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{rec.name || slug}</div>
                  <div className="text-sm opacity-70">Last run: {rec.lastRunAt || '—'}</div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full border border-gray-200 dark:border-zinc-700">{rec.status || 'unknown'}</span>
              </div>
            </a>
          </Link>
        ))}
      </div>

      <div className="text-sm opacity-70 mt-6">Last updated: {(status as any).lastUpdatedAt || '—'}</div>
    </EnhancedLayout>
  );
};

export default AutomationIndex;