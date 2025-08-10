import Link from 'next/link';
import { useEffect, useState } from 'react';

type HomeContent = {
  generatedAt: string;
  headline: string;
  subhead: string;
  highlights: { title: string; desc: string }[];
  benefits: string[];
  ctas: { label: string; href: string }[];
};

export default function HomePage() {
  const [content, setContent] = useState<HomeContent | null>(null);

  useEffect(() => {
    fetch('/autonomy/HOMEPAGE_CONTENT.json')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => setContent(d))
      .catch(() => setContent(null));
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{content?.headline || 'Welcome to Zion OS'}</h1>
      <p className="text-gray-600 dark:text-gray-300">{content?.subhead || 'Launch a full Zion OS instance from a single control panel.'}</p>
      <div className="flex items-center gap-3 flex-wrap">
        {(content?.ctas || [
          { label: 'Deploy Genesis', href: '/zion/init' },
          { label: 'Autonomous Cloud', href: '/automation/cloud' },
        ]).map((cta) => (
          <Link key={cta.href} href={cta.href}>
            <a className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">{cta.label}</a>
          </Link>
        ))}
      </div>

      {content?.highlights && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.highlights.map((h) => (
            <div key={h.title} className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
              <h3 className="font-semibold">{h.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{h.desc}</p>
            </div>
          ))}
        </div>
      )}

      <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
        <h2 className="font-semibold">New: Autonomous Cloud Automation</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Fully autonomous, runs in the cloud via scheduled workflows, writes insights and commits directly—no servers, no humans.</p>
        <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300">
          <li>Market intelligence & docs refresh cycles</li>
          <li>Roadmap and whitepaper synthesis suggestions</li>
          <li>Agent observability and health signals</li>
        </ul>
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <a href="/autonomy/ROADMAP.md" className="underline text-indigo-600 dark:text-indigo-400">Roadmap (live)</a>
          <a href="/autonomy/LINK_HEALTH.md" className="underline text-indigo-600 dark:text-indigo-400">Link Health (live)</a>
          <a href="/autonomy/INTELLIGENCE_DIGEST.md" className="underline text-indigo-600 dark:text-indigo-400">Intelligence Digest (live)</a>
          <a href="/autonomy/SEO_AUDIT.md" className="underline text-indigo-600 dark:text-indigo-400">SEO Audit (live)</a>
          <a href="/autonomy/CHANGELOG_AUTONOMY.md" className="underline text-indigo-600 dark:text-indigo-400">Autonomy Changelog (live)</a>
        </div>
      </div>
    </div>
  );
}