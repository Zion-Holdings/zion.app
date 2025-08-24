import fs from 'fs';
import path from 'path';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export async function getServerSideProps() {
  const dir = path.join(process.cwd(), 'data', 'reports', 'i18n-ux');
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).sort().reverse() : [];
  const latestMd = files.find(f=>f.endsWith('.md'));
  const latestCsv = files.find(f=>f.endsWith('.csv'));
  const mdContent = latestMd ? fs.readFileSync(path.join(dir, latestMd),'utf8').slice(0,20000) : '';
  const csvContent = latestCsv ? fs.readFileSync(path.join(dir, latestCsv),'utf8').slice(0,20000) : '';
  return { props: { latestMd, latestCsv, mdContent, csvContent } };
}

export default function I18nUxReports({ latestMd, latestCsv, mdContent, csvContent }: any) {
  return (
    <EnhancedLayout>
      <h1 className="text-2xl font-semibold mb-4">i18n SEO & UX Reports</h1>
      {latestMd ? (
        <div className="mb-6">
          <h2 className="font-medium">Latest Markdown Report ({latestMd})</h2>
          <pre className="mt-2 whitespace-pre-wrap text-sm">{mdContent}</pre>
        </div>
      ) : <p className="text-gray-500">No markdown report yet.</p>}
      {latestCsv ? (
        <div>
          <h2 className="font-medium">Latest CSV Report ({latestCsv})</h2>
          <pre className="mt-2 whitespace-pre text-xs overflow-auto max-h-96">{csvContent}</pre>
        </div>
      ) : <p className="text-gray-500">No CSV report yet.</p>}
    </EnhancedLayout>
  );
}