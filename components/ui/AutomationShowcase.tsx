import Link from 'next/link';

const workflows = [
  {
    name: 'Autonomous Cloud Bot',
    yml: 'autonomous-cloud-bot.yml',
    desc: 'Runs every 2 hours to enhance SEO, fix links, regenerate navigation, update sitemap & changelog, and open PRs.',
  },
  {
    name: 'Lighthouse Performance Audits',
    yml: 'lighthouse-performance.yml',
    desc: 'Scheduled performance audits against production URLs; artifacts and assertions maintained.',
  },
  {
    name: 'Nightly Link Checker',
    yml: 'link-check.yml',
    desc: 'Scans for broken links across the repo and content nightly, to maintain link integrity.',
  },
  {
    name: 'UI Evolution (Weekly)',
    yml: 'ui-evolution-weekly-beautify.yml',
    desc: 'Continuous UI improvements and beautification pipeline.',
  },
];

export default function AutomationShowcase() {
  return (
    <section className="enhanced-card">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-semibold">Autonomous Cloud Automations</h2>
        <Link href="/automation"><a className="text-blue-600 hover:underline">Learn more</a></Link>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {workflows.map((wf) => (
          <div key={wf.yml} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="font-medium">{wf.name}</div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{wf.desc}</p>
                <div className="mt-2 text-xs">
                  <a
                    className="text-blue-600 hover:underline"
                    href={`https://github.com/Zion-Holdings/zion.app/actions/workflows/${wf.yml}`}
                    target="_blank"
                    rel="noreferrer"
                  >View workflow →</a>
                </div>
              </div>
              <img
                alt={`${wf.name} status`}
                className="h-5"
                src={`https://github.com/Zion-Holdings/zion.app/actions/workflows/${wf.yml}/badge.svg`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}