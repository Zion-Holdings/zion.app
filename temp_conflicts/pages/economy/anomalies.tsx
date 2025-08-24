import fs from 'fs';
import path from 'path';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'data', 'reports', 'economy', 'anomalies');
  let files: string[] = [];
  if (fs.existsSync(dir)) {
    files = fs.readdirSync(dir).filter((f) => f.endsWith('.md')).sort().reverse();
  }
  return { props: { files } };
}

export default function AnomaliesPage({ files }: { files: string[] }) {
  return (
    <EnhancedLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Economy Anomalies</h1>
        {files.length ? (
          <ul className="list-disc pl-5 text-sm">
            {files.map((f) => (
              <li key={f}>
                <a className="underline" href={`/reports/economy/anomalies/${f}`} target="_blank" rel="noreferrer">{f}</a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-sm opacity-80">No anomalies recorded yet.</div>
        )}
      </div>
    </EnhancedLayout>
  );
}