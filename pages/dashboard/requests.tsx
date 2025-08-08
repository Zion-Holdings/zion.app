import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

export type QuoteRequest = {
  id: string;
  name: string;
  email: string;
  budget: string;
  timeline: string;
  description: string;
  talentSlug: string | null;
  aiSummary: string;
  aiType: string;
  status: 'new' | 'in_review' | 'replied' | 'archived';
  createdAt: string;
  updatedAt: string;
};

export default function TalentRequestsDashboard() {
  const router = useRouter();
  const me = (router.query.me as string) || '';
  const [data, setData] = useState<QuoteRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<'all' | QuoteRequest['status']>('all');

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetch('/api/requests/list');
      const json = await res.json();
      setData(json.items || []);
      setLoading(false);
    })();
  }, []);

  const mine = useMemo(() => data.filter(r => (me ? r.talentSlug === me : true)), [data, me]);
  const filtered = useMemo(() => mine.filter(r => (status==='all'?true:r.status===status)), [mine, status]);

  const markReplied = async (id: string) => {
    await fetch('/api/requests/status', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, status: 'replied' }) });
    setData(prev => prev.map(r => r.id === id ? { ...r, status: 'replied', updatedAt: new Date().toISOString() } : r));
  };

  if (loading) return <div>Loading…</div>;

  if (filtered.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <h1 className="text-2xl font-semibold mb-2">No requests yet</h1>
        <p className="text-gray-600">You will see client requests routed to you here.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Requests</h1>
        <select className="border rounded px-3 py-2" value={status} onChange={(e)=>setStatus(e.target.value as any)}>
          <option value="all">All</option>
          <option value="new">New</option>
          <option value="in_review">In Review</option>
          <option value="replied">Replied</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filtered.map(r => (
          <div key={r.id} className="border rounded p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div className="font-medium">{r.name}</div>
              <div className="text-xs text-gray-500">{new Date(r.createdAt).toLocaleString()}</div>
            </div>
            <div className="text-sm text-gray-600">{r.email}</div>
            <div className="text-sm">Budget: ${r.budget} • Timeline: {r.timeline || '-'}</div>
            <div className="text-sm">Type: {r.aiType}</div>
            <div className="text-sm text-gray-700">{r.aiSummary}</div>
            <div className="flex items-center gap-2 pt-2">
              <button onClick={()=>markReplied(r.id)} className="text-sm px-2 py-1 rounded bg-green-600 text-white">Mark as replied</button>
              <a className="text-sm px-2 py-1 rounded bg-black text-white" href={`mailto:${r.email}?subject=Re:%20Your%20project%20request`}>Contact client</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}