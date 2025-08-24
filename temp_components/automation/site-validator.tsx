import fs from 'fs';
import path from 'path';
import type { GetStaticProps } from 'next';

type Broken = { url: string; page: string; status: number };
interface Report { generatedAt: string; pagesScanned: number; brokenLinks: Broken[]; pagesWithOgIssues: number; ogIssues: { page: string; missing: string[] }[] }

type Props = { report: Report | null };

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const file = path.join(process.cwd(), 'public', 'automation', 'site-validator.json');
    const raw = fs.readFileSync(file, 'utf8');
    const data = JSON.parse(raw);
    return { props: { report: data }, revalidate: 21600 };
  } catch {
    return { props: { report: null }, revalidate: 21600 };
  }
};

export default function SiteValidator({ report }: Props) {
  if (!report) return <div>No validation report yet.</div>;
  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold">Site Validator</h1>
        <p className="text-gray-600 dark:text-gray-300">Broken links and Open Graph checks from exported site.</p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800"><div className="text-xs text-gray-500">Pages Scanned</div><div className="text-2xl font-semibold">{report.pagesScanned}</div></div>
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800"><div className="text-xs text-gray-500">Broken Links</div><div className="text-2xl font-semibold">{report.brokenLinks.length}</div></div>
        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-800"><div className="text-xs text-gray-500">OG Issues</div><div className="text-2xl font-semibold">{report.pagesWithOgIssues}</div></div>
      </div>
      {report.brokenLinks.length > 0 && (
        <section>
          <h2 className="font-semibold mb-2">Broken Links</h2>
          <ul className="text-sm space-y-1 max-h-96 overflow-auto border rounded p-3 border-gray-200 dark:border-gray-800">
            {report.brokenLinks.slice(0, 500).map((b, i) => (
              <li key={i} className="flex justify-between gap-4"><span className="truncate">{b.page} → {b.url}</span><span className="text-gray-500">{b.status}</span></li>
            ))}
          </ul>
        </section>
      )}
      {report.ogIssues.length > 0 && (
        <section>
          <h2 className="font-semibold mb-2">Pages Missing OG Tags</h2>
          <ul className="text-sm space-y-1 max-h-96 overflow-auto border rounded p-3 border-gray-200 dark:border-gray-800">
            {report.ogIssues.map((o, i) => (
              <li key={i} className="flex justify-between gap-4"><span className="truncate">{o.page}</span><span className="text-gray-500 truncate">{o.missing.join(', ')}</span></li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}