import fs from 'fs';
import path from 'path';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export async function getServerSideProps() {
  const dir = path.join(process.cwd(), 'data', 'reports', 'lighthouse');
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f=>f.endsWith('.json')).sort().reverse() : [];
  const latest = files[0];
  let summary = null;
  if (latest) {
    try { summary = JSON.parse(fs.readFileSync(path.join(dir, latest),'utf8')); } catch {}
  }
  return { props: { latest, summary } };
}

export default function LighthouseReports({ latest, summary }: any) {
  const cats = summary?.lhr?.categories || {};
  return (
    <EnhancedLayout>
      <h1 className="text-2xl font-semibold mb-4">Lighthouse Reports</h1>
      {latest ? (
        <div className="text-sm">
          <div className="text-gray-500 mb-2">Latest: {latest}</div>
          {cats.performance && <div>Performance: {Math.round(cats.performance.score * 100)}</div>}
          {cats.seo && <div>SEO: {Math.round(cats.seo.score * 100)}</div>}
          <pre className="mt-3 whitespace-pre-wrap">{JSON.stringify(summary, null, 2).slice(0, 15000)}</pre>
        </div>
      ) : <p className="text-gray-500">No reports yet.</p>}
    </EnhancedLayout>
  );
}