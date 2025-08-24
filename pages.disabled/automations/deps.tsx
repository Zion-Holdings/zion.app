import Head from 'next/head';
import deps from '../../data/automation/deps.json';

export default function DependencyHealth() {
  const o = deps.summary?.outdated || { total: 0, byType: {}, items: [] } as any;
  const v = deps.summary?.vulnerabilities || { total: 0, critical: 0, high: 0, moderate: 0, low: 0 };
  return (
    <div>
      <Head>
        <title>Dependency Health Auditor</title>
      </Head>
      <h1 className="text-2xl font-semibold mb-2">Dependency Health Auditor</h1>
      <p className="text-sm opacity-80 mb-4">Updated {new Date(deps.updatedAt).toLocaleString()}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="enhanced-card border border-gray-100 dark:border-gray-800">
          <div className="font-medium mb-2">Vulnerabilities</div>
          <div className="text-sm space-y-1">
            <div className="flex justify-between"><span>Total</span><span className="tabular-nums">{v.total}</span></div>
            <div className="flex justify-between"><span>Critical</span><span className="tabular-nums">{v.critical}</span></div>
            <div className="flex justify-between"><span>High</span><span className="tabular-nums">{v.high}</span></div>
            <div className="flex justify-between"><span>Moderate</span><span className="tabular-nums">{v.moderate}</span></div>
            <div className="flex justify-between"><span>Low</span><span className="tabular-nums">{v.low}</span></div>
          </div>
        </div>
        <div className="enhanced-card border border-gray-100 dark:border-gray-800">
          <div className="font-medium mb-2">Outdated Dependencies</div>
          <div className="text-sm space-y-1">
            <div className="flex justify-between"><span>Total</span><span className="tabular-nums">{o.total}</span></div>
            {o.items?.slice(0, 10).map((it: any, i: number) => (
              <div key={i} className="flex justify-between">
                <span className="opacity-80">{it.name}</span>
                <span className="tabular-nums">{it.current} → {it.latest}</span>
              </div>
            ))}
            {o.total === 0 && <div className="opacity-60">All dependencies are up to date.</div>}
          </div>
        </div>
      </div>
    </div>
  );
}