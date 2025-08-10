import type { NextPage } from 'next';
import Head from 'next/head';

const rows = [
  {
    title: 'Autonomous Cloud Bot',
    yml: 'autonomous-cloud-bot.yml',
    details: 'Runs every 2 hours: navigation, SEO, links, sitemap, sync health, changelog, PR.',
  },
  {
    title: 'Lighthouse Performance Audits',
    yml: 'lighthouse-performance.yml',
    details: '6-hour cadence performance audits with artifact uploads and assertions.',
  },
  {
    title: 'Nightly Link Checker',
    yml: 'link-check.yml',
    details: 'Scans for broken links across markdown and code; reports via job logs.',
  },
  {
    title: 'UI Evolution (Weekly)',
    yml: 'ui-evolution-weekly-beautify.yml',
    details: 'Automated UX/UI beautification pipeline.',
  },
];

const AutomationPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Autonomous Cloud Automations – Zion</title>
        <meta name="description" content="Autonomous cloud workflows that continuously improve and maintain the platform." />
      </Head>
      <div className="space-y-4">
        <div className="enhanced-card">
          <h1 className="text-2xl font-bold">Autonomous Cloud Automations</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            The following workflows run in the cloud on a schedule—no servers to manage, no manual steps required.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {rows.map((r) => (
            <div key={r.yml} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{r.title}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{r.details}</div>
                  <div className="text-xs mt-2">
                    <a className="text-blue-600 hover:underline" href={`https://github.com/Zion-Holdings/zion.app/actions/workflows/${r.yml}`} target="_blank" rel="noreferrer">View workflow →</a>
                  </div>
                </div>
                <img alt={`${r.title} status`} className="h-5" src={`https://github.com/Zion-Holdings/zion.app/actions/workflows/${r.yml}/badge.svg`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AutomationPage;
