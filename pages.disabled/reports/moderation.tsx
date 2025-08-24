import fs from 'fs';
import path from 'path';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export async function getServerSideProps() {
  const dir = path.join(process.cwd(), 'data', 'reports', 'moderation');
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f=>f.endsWith('.json')).sort().reverse() : [];
  const items = files.slice(0,50).map(f=> ({ name: f, content: fs.readFileSync(path.join(dir,f),'utf8').slice(0,1500) }));
  return { props: { items } };
}

export default function ModerationReports({ items }: any) {
  return (
    <EnhancedLayout>
      <h1 className="text-2xl font-semibold mb-4">AI Moderation Reports</h1>
      <ul className="space-y-4">
        {items.map((it: any) => (
          <li key={it.name} className="p-4 rounded border border-gray-200 dark:border-gray-800">
            <div className="font-mono text-sm text-gray-500">{it.name}</div>
            <pre className="mt-2 whitespace-pre-wrap text-sm">{it.content}</pre>
          </li>
        ))}
        {!items.length && <li className="text-gray-500">No reports yet.</li>}
      </ul>
    </EnhancedLayout>
  );
}