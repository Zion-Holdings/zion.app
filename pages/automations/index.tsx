import fs from 'fs';
import path from 'path';
import Head from 'next/head';

type Step = { name: string; status?: string; command?: string; exitCode?: number };

type ContentStatus = { ranAt: string; topics: { title: string; link: string }[]; drafts: { file: string; source: string }[] };

type SecurityStatus = { ranAt: string; summary: { highs: number; criticals: number } };

type SeoStatus = { ranAt: string; totalPages: number; hasSitemap: boolean; recommendations: string[] };

type RoadmapStatus = { ranAt: string; openIssues: number; openPRs: number; file: string };

type ChangelogStatus = { ranAt: string; file: string; entries: number };

type LocalizationStatus = { ranAt: string; keys: number; file: string };

type BrokenLinksStatus = { ranAt: string; checked: number; broken: string[] };

type PagespeedStatus = { ranAt: string; site?: string; score?: number; metrics?: { fcp?: string; lcp?: string; tbt?: string }; error?: string };

export async function getStaticProps() {
  const root = process.cwd();
  const logsDir = path.join(root, 'automation_logs');
  const cloudPath = path.join(logsDir, 'cloud-autopilot-status.json');
  const fundPath = path.join(logsDir, 'fundraising-autopilot-status.json');
  const contentPath = path.join(logsDir, 'content-intelligence-status.json');
  const securityPath = path.join(logsDir, 'security-autopilot-status.json');
  const seoPath = path.join(logsDir, 'seo-reporter-status.json');
  const roadmapPath = path.join(logsDir, 'roadmap-autopilot-status.json');
  const changelogPath = path.join(logsDir, 'changelog-autopilot-status.json');
  const localizationPath = path.join(logsDir, 'localization-autopilot-status.json');
  const brokenLinksPath = path.join(logsDir, 'broken-links-status.json');
  const pagespeedPath = path.join(logsDir, 'pagespeed-status.json');
  const readJson = (p: string) => { try { return JSON.parse(fs.readFileSync(p, 'utf-8')); } catch { return null; } };
  return {
    props: {
      cloud: readJson(cloudPath),
      fundraising: readJson(fundPath),
      content: readJson(contentPath),
      security: readJson(securityPath),
      seo: readJson(seoPath),
      roadmap: readJson(roadmapPath),
      changelog: readJson(changelogPath),
      localization: readJson(localizationPath),
      brokenLinks: readJson(brokenLinksPath),
      pagespeed: readJson(pagespeedPath),
    }
  };
}

export default function Automations({ cloud, fundraising, content, security, seo, roadmap, changelog, localization, brokenLinks, pagespeed }: {
  cloud: any; fundraising: any; content: ContentStatus | null; security: SecurityStatus | null; seo: SeoStatus | null; roadmap: RoadmapStatus | null; changelog: ChangelogStatus | null; localization: LocalizationStatus | null; brokenLinks: BrokenLinksStatus | null; pagespeed: PagespeedStatus | null;
}) {
  const cloudSteps: Step[] = cloud?.steps || [];
  const investorReport = fundraising?.reportFile ? `https://github.com/Zion-Holdings/zion.app/blob/main/${fundraising.reportFile}` : null;
  const roadmapLink = roadmap?.file ? `https://github.com/Zion-Holdings/zion.app/blob/main/${roadmap.file}` : null;
  const changelogLink = changelog?.file ? `https://github.com/Zion-Holdings/zion.app/blob/main/${changelog.file}` : null;
  const localizationLink = localization?.file ? `https://github.com/Zion-Holdings/zion.app/blob/main/${localization.file}` : null;
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

        <section className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="font-medium mb-2">Roadmap</h2>
          <p className="text-xs text-gray-500 mb-3">Last run: {roadmap?.ranAt || '—'} | Open Issues: {roadmap?.openIssues ?? 0} | Open PRs: {roadmap?.openPRs ?? 0}</p>
          {roadmapLink ? <a className="underline" target="_blank" rel="noreferrer" href={roadmapLink}>View auto roadmap</a> : <p className="text-sm text-gray-500">No roadmap yet.</p>}
        </section>

        <section className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="font-medium mb-2">Changelog</h2>
          <p className="text-xs text-gray-500 mb-3">Last run: {changelog?.ranAt || '—'} | Entries: {changelog?.entries ?? 0}</p>
          {changelogLink ? <a className="underline" target="_blank" rel="noreferrer" href={changelogLink}>View latest changelog</a> : <p className="text-sm text-gray-500">No changelog yet.</p>}
        </section>

        <section className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="font-medium mb-2">Localization</h2>
          <p className="text-xs text-gray-500 mb-3">Last run: {localization?.ranAt || '—'} | Keys: {localization?.keys ?? 0}</p>
          {localizationLink ? <a className="underline" target="_blank" rel="noreferrer" href={localizationLink}>View base catalog</a> : <p className="text-sm text-gray-500">No catalog yet.</p>}
        </section>

        <section className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="font-medium mb-2">Broken Links</h2>
          <p className="text-xs text-gray-500 mb-3">Last run: {brokenLinks?.ranAt || '—'} | Checked: {brokenLinks?.checked ?? 0}</p>
          {brokenLinks?.broken?.length ? (
            <ul className="text-sm list-disc pl-5">
              {brokenLinks.broken.slice(0, 10).map((l, i) => <li key={i}>{l}</li>)}
              {brokenLinks.broken.length > 10 ? <li>…and {brokenLinks.broken.length - 10} more</li> : null}
            </ul>
          ) : <p className="text-sm text-gray-500">No broken links detected.</p>}
        </section>

        <section className="p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="font-medium mb-2">PageSpeed Insights</h2>
          <p className="text-xs text-gray-500 mb-3">Last run: {pagespeed?.ranAt || '—'}</p>
          {pagespeed?.error ? (
            <p className="text-sm text-red-600">{pagespeed.error}</p>
          ) : (
            <div className="text-sm">
              Site: {pagespeed?.site || '—'} | Score: {pagespeed?.score ?? '—'} | FCP: {pagespeed?.metrics?.fcp || '—'} | LCP: {pagespeed?.metrics?.lcp || '—'} | TBT: {pagespeed?.metrics?.tbt || '—'}
            </div>
          )}
        </section>
      </div>
    </>
  );
}