import type { NextPage } from 'next';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';

type Status = {
  updatedAt: string;
  automations: string[];
  note?: string;
};

export async function getStaticProps() {
  const statusPath = path.join(process.cwd(), 'data', 'reports', 'automation', 'status.json');
  let status: Status = { updatedAt: '', automations: [] };
  try {
    const raw = fs.readFileSync(statusPath, 'utf8');
    status = JSON.parse(raw);
  } catch {}
  return { props: { status } };
}

const AutomationHub: NextPage<{ status: Status }> = ({ status }) => {
  return (
    <div>
      <Head>
        <title>Automation Hub — Zion</title>
        <meta name="description" content="Autonomous cloud automations running for Zion" />
      </Head>
      <main className="space-y-6">
        <h1 className="text-2xl font-semibold">Automation Hub</h1>
        <p className="text-sm text-gray-600">Autonomous cloud automations, continuously improving the marketplace.</p>
        <div className="rounded-lg border p-4">
          <div className="text-sm">Last run: <span className="font-mono">{status.updatedAt || '—'}</span></div>
          {status.note && <div className="text-xs text-gray-500">{status.note}</div>}
        </div>
        <section className="space-y-3">
          <h2 className="font-medium">Available automations</h2>
          <ul className="list-disc pl-5">
            {status.automations?.map((a) => (
              <li key={a} className="text-sm">{a}</li>
            ))}
            {(!status.automations || status.automations.length === 0) && <li className="text-sm text-gray-500">No automations detected yet.</li>}
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="font-medium">Reports</h2>
          <ul className="list-disc pl-5 text-sm">
            <li><a className="underline" href="/data/reports/feedback" target="_blank" rel="noreferrer">Feedback analyses</a></li>
            <li><a className="underline" href="/data/reports/automation" target="_blank" rel="noreferrer">Automation status & ideas</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AutomationHub;