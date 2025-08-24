import fs from 'fs';
import path from 'path';

type Outdated = { name: string; current: string; latest: string; type: 'dependency' | 'devDependency' };

export async function getServerSideProps() {
  const file = path.join(process.cwd(), 'data', 'dep-radar.json');
  let outdated: Outdated[] = [];
  let generatedAt = '';
  try {
    const raw = fs.readFileSync(file, 'utf-8');
    const json = JSON.parse(raw);
    outdated = json.outdated || [];
    generatedAt = json.generatedAt || '';
  } catch {}
  return { props: { outdated, generatedAt } };
}

export default function DepRadarPage({ outdated, generatedAt }: { outdated: Outdated[]; generatedAt: string }) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">AI Automation: Dependency Radar</h1>
      <div className="text-xs text-gray-500">Last updated: {generatedAt ? new Date(generatedAt).toLocaleString() : '—'}</div>
      {outdated.length === 0 ? (
        <div className="text-sm text-gray-600">All dependencies up to date.</div>
      ) : (
        <div className="overflow-auto border rounded">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-2">Package</th>
                <th className="text-left p-2">Current</th>
                <th className="text-left p-2">Latest</th>
                <th className="text-left p-2">Type</th>
              </tr>
            </thead>
            <tbody>
              {outdated.map(o => (
                <tr key={o.name} className="border-t">
                  <td className="p-2">{o.name}</td>
                  <td className="p-2">{o.current}</td>
                  <td className="p-2">{o.latest}</td>
                  <td className="p-2">{o.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}