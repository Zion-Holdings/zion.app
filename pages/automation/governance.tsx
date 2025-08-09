import { useEffect, useState } from 'react';
import Link from 'next/link';

type Metrics = { voters: number; totalPower: number; outcomes: Record<string, number> };

export default function GovernanceAutomation() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [proposals, setProposals] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/governance/metrics').then(r => r.json()).then(setMetrics);
    fetch('/api/governance/proposals').then(r => r.json()).then(d => setProposals(d.proposals || []));
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Autonomous Governance Engine</h1>
        <p className="text-gray-600 mt-2">Runs in the cloud to snapshot proposals and votes, update statuses, queue approved items into the roadmap, and publish live metrics—no human needed.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="border rounded p-4"><div className="text-sm text-gray-500">Voters</div><div className="text-2xl font-semibold">{metrics?.voters ?? '—'}</div></div>
        <div className="border rounded p-4"><div className="text-sm text-gray-500">ZION$ used</div><div className="text-2xl font-semibold">{metrics?.totalPower ?? '—'}</div></div>
        <div className="border rounded p-4"><div className="text-sm text-gray-500">Outcomes</div><div className="text-sm">{metrics ? Object.entries(metrics.outcomes).map(([k,v]) => (<div key={k}>{k}: {v}</div>)) : '—'}</div></div>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-medium">Latest Snapshots</h2>
        <ul className="space-y-2">
          {proposals.slice(0, 10).map(p => (
            <li key={p.id} className="flex items-center justify-between border rounded p-3">
              <div className="truncate"><Link href={`/governance/${p.id}`}><a className="font-medium hover:underline">{p.title}</a></Link></div>
              {p.snapshotUrl ? <a className="text-sm underline" href={p.snapshotUrl} target="_blank" rel="noreferrer">Snapshot JSON</a> : <span className="text-sm text-gray-500">Pending</span>}
            </li>
          ))}
          {proposals.length === 0 && <div className="text-gray-500">No proposals yet.</div>}
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-medium">Roadmap</h2>
        <p className="text-sm text-gray-600">Approved proposals are automatically queued into the roadmap.</p>
        <Link href="/ROADMAP.md"><a className="underline">View ROADMAP</a></Link>
      </div>
    </div>
  );
}