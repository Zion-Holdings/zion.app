import fs from 'fs';
import path from 'path';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'data', 'reports', 'economy', 'optimizer');
  let latest: string | null = null;
  let top: any[] = [];
  if (fs.existsSync(dir)) {
    const latestPath = path.join(dir, 'latest.json');
    if (fs.existsSync(latestPath)) {
      try { latest = JSON.parse(fs.readFileSync(latestPath, 'utf8')).latest; } catch {}
    }
    if (latest) {
      const p = path.join(dir, `${latest}.json`);
      if (fs.existsSync(p)) {
        try { top = JSON.parse(fs.readFileSync(p, 'utf8'))?.top || []; } catch {}
      }
    }
  }
  return { props: { latest, top } };
}

export default function OptimizerPage({ latest, top }: any) {
  return (
    <EnhancedLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Economy Optimizer</h1>
        {latest ? (
          <div className="text-sm opacity-80">Latest: {latest}</div>
        ) : (
          <div className="text-sm opacity-80">No optimizer runs yet.</div>
        )}
        {top?.length ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-200 dark:border-gray-800">
                  <th className="py-2 pr-3">Burn%</th>
                  <th className="py-2 pr-3">Schedule</th>
                  <th className="py-2 pr-3">Monthly Δ%</th>
                  <th className="py-2 pr-3">Score</th>
                  <th className="py-2 pr-3">Avg Infl%</th>
                  <th className="py-2 pr-3">End Treasury</th>
                </tr>
              </thead>
              <tbody>
                {top.slice(0, 20).map((s: any, idx: number) => (
                  <tr key={idx} className="border-b border-gray-100 dark:border-gray-900">
                    <td className="py-1 pr-3">{s.burnTaxPercent}%</td>
                    <td className="py-1 pr-3">{s.emissionSchedule}</td>
                    <td className="py-1 pr-3">{s.emissionMonthlyChangePct}%</td>
                    <td className="py-1 pr-3">{Number(s.score).toFixed(3)}</td>
                    <td className="py-1 pr-3">{Number(s.avgInflationPct).toFixed(2)}%</td>
                    <td className="py-1 pr-3">{Math.round(s.endingTreasury).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </EnhancedLayout>
  );
}