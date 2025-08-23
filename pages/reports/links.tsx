import fs from 'fs';
import path from 'path';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export async function getServerSideProps() {
  const dir = path.join(process.cwd(), 'data', 'reports', 'links');
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f=>f.endsWith('.json')).sort().reverse() : [];
  const latest = files[0];
  const json = latest ? JSON.parse(fs.readFileSync(path.join(dir, latest),'utf8')) : null;
  return { props: { latest, json } };
}

export default function LinkReports({ latest, json }: any) {
  return (
    <EnhancedLayout>
      <h1 className="text-2xl font-semibold mb-4">Link Check Reports</h1>
      {latest ? (
        <div className="text-sm">
          <div className="text-gray-500 mb-2">Latest: {latest}</div>
          <pre className="whitespace-pre-wrap">{JSON.stringify(json, null, 2).slice(0, 20000)}</pre>
        </div>
      ) : <p className="text-gray-500">No reports yet.</p>}
    </EnhancedLayout>
  );
}