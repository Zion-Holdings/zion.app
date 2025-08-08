import fs from 'fs';
import path from 'path';
import Head from 'next/head';

type Step = { name: string; status?: string; command?: string; exitCode?: number };

export async function getStaticProps() {
  const root = process.cwd();
  const logsDir = path.join(root, 'automation_logs');
  const cloudPath = path.join(logsDir, 'cloud-autopilot-status.json');
  const fundPath = path.join(logsDir, 'fundraising-autopilot-status.json');
  let cloud = null as any;
  let fundraising = null as any;
  try { cloud = JSON.parse(fs.readFileSync(cloudPath, 'utf-8')); } catch {}
  try { fundraising = JSON.parse(fs.readFileSync(fundPath, 'utf-8')); } catch {}
  return { props: { cloud: cloud || null, fundraising: fundraising || null } };
}

export default function Automations({ cloud, fundraising }: { cloud: any; fundraising: any }) {
  const cloudSteps: Step[] = cloud?.steps || [];
  const investorReport = fundraising?.reportFile ? `https://github.com/Zion-Holdings/zion.app/blob/main/${fundraising.reportFile}` : null;
  return (
    <>
      <Head>
        <title>Automations | Zion</title>
      </Head>
      <div className="space-y-8 py-6">
        <header>
          <h1 className="text-2xl font-semibold">Automations</h1>
          <p className="text-sm text-gray-500">Autonomous cloud agents keeping your site fresh, healthy, and investor-ready.</p>
        </header>

        <section className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="font-medium mb-2">Cloud Autopilot</h2>
          <p className="text-xs text-gray-500 mb-3">Last run: {cloud?.ranAt || '—'}</p>
          <ul className="text-sm space-y-1">
            {cloudSteps.map((s, idx) => (
              <li key={idx} className="flex items-center justify-between">
                <span>{s.name}</span>
                <span className={s.status === 'ok' ? 'text-green-600' : s.status === 'error' ? 'text-red-600' : 'text-gray-500'}>
                  {s.status || '—'}
                </span>
              </li>
            ))}
            {!cloudSteps.length && <li className="text-gray-500">No data yet.</li>}
          </ul>
        </section>

        <section className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="font-medium mb-2">Fundraising Autopilot</h2>
          <p className="text-xs text-gray-500 mb-3">Decks generated: {fundraising?.generatedDecks ?? 0} | Last run: {fundraising?.ranAt || '—'}</p>
          {investorReport ? (
            <a className="underline" href={investorReport} target="_blank" rel="noreferrer">View latest investor report</a>
          ) : (
            <p className="text-gray-500 text-sm">No report available yet.</p>
          )}
        </section>
      </div>
    </>
  );
}