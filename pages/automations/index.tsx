import fs from 'fs';
import path from 'path';
import Head from 'next/head';

type Step = { name: string; status?: string; command?: string; exitCode?: number };

type ContentStatus = { ranAt: string; topics: { title: string; link: string }[]; drafts: { file: string; source: string }[] };

type SecurityStatus = { ranAt: string; summary: { highs: number; criticals: number } };

type SeoStatus = { ranAt: string; totalPages: number; hasSitemap: boolean; recommendations: string[] };

export async function getStaticProps() {
  const root = process.cwd();
  const logsDir = path.join(root, 'automation_logs');
  const cloudPath = path.join(logsDir, 'cloud-autopilot-status.json');
  const fundPath = path.join(logsDir, 'fundraising-autopilot-status.json');
  const contentPath = path.join(logsDir, 'content-intelligence-status.json');
  const securityPath = path.join(logsDir, 'security-autopilot-status.json');
  const seoPath = path.join(logsDir, 'seo-reporter-status.json');
  let cloud = null as any;
  let fundraising = null as any;
  let content = null as ContentStatus | null;
  let security = null as SecurityStatus | null;
  let seo = null as SeoStatus | null;
  try { cloud = JSON.parse(fs.readFileSync(cloudPath, 'utf-8')); } catch {}
  try { fundraising = JSON.parse(fs.readFileSync(fundPath, 'utf-8')); } catch {}
  try { content = JSON.parse(fs.readFileSync(contentPath, 'utf-8')); } catch {}
  try { security = JSON.parse(fs.readFileSync(securityPath, 'utf-8')); } catch {}
  try { seo = JSON.parse(fs.readFileSync(seoPath, 'utf-8')); } catch {}
  return { props: { cloud: cloud || null, fundraising: fundraising || null, content: content || null, security: security || null, seo: seo || null } };
}

export default function Automations({ cloud, fundraising, content, security, seo }: { cloud: any; fundraising: any; content: ContentStatus | null; security: SecurityStatus | null; seo: SeoStatus | null }) {
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

        <section className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="font-medium mb-2">Content Intelligence</h2>
          <p className="text-xs text-gray-500 mb-3">Last run: {content?.ranAt || '—'}</p>
          <ul className="text-sm list-disc pl-5">
            {content?.topics?.map((t, i) => (
              <li key={i}><a className="underline" href={t.link} target="_blank" rel="noreferrer">{t.title}</a></li>
            )) || null}
          </ul>
          {content?.drafts?.length ? (
            <div className="text-sm mt-2">
              Drafts: {content.drafts.length}
            </div>
          ) : null}
        </section>

        <section className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="font-medium mb-2">Security</h2>
          <p className="text-xs text-gray-500 mb-3">Last run: {security?.ranAt || '—'}</p>
          <p className="text-sm">High: {security?.summary?.highs ?? 0} | Critical: {security?.summary?.criticals ?? 0}</p>
        </section>

        <section className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="font-medium mb-2">SEO Reporter</h2>
          <p className="text-xs text-gray-500 mb-3">Last run: {seo?.ranAt || '—'}</p>
          <p className="text-sm">Pages: {seo?.totalPages ?? 0} | Sitemap: {seo?.hasSitemap ? 'yes' : 'no'}</p>
          {seo?.recommendations?.length ? (
            <ul className="text-sm list-disc pl-5 mt-2">
              {seo.recommendations.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          ) : null}
        </section>
      </div>
    </>
  );
}