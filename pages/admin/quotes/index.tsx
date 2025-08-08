import { useEffect, useMemo, useState } from 'react';

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

export default function AdminQuotesPage() {
  const [data, setData] = useState<QuoteRequest[]>([]);
  const [q, setQ] = useState('');
  const [status, setStatus] = useState<'all' | QuoteRequest['status']>('all');
  const [talent, setTalent] = useState('all');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetch('/api/requests/list');
      const json = await res.json();
      setData(json.items || []);
      setLoading(false);
    })();
  }, []);

  const filtered = useMemo(() => {
    return data.filter((r) => {
      if (status !== 'all' && r.status !== status) return false;
      if (talent !== 'all' && r.talentSlug !== talent) return false;
      if (q) {
        const hay = `${r.name} ${r.email} ${r.description} ${r.aiSummary}`.toLowerCase();
        if (!hay.includes(q.toLowerCase())) return false;
      }
      if (dateFrom && new Date(r.createdAt) < new Date(dateFrom)) return false;
      if (dateTo && new Date(r.createdAt) > new Date(dateTo)) return false;
      return true;
    });
  }, [data, q, status, talent, dateFrom, dateTo]);

  const exportCsv = () => {
    const header = ['id','name','email','budget','timeline','talentSlug','aiType','status','createdAt'];
    const rows = filtered.map(r => [r.id,r.name,r.email,r.budget,r.timeline,r.talentSlug||'',r.aiType,r.status,r.createdAt]);
    const csv = [header.join(','), ...rows.map(r => r.map(v => `"${String(v).replace(/"/g,'""')}"`).join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quotes.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const changeStatus = async (id: string, status: QuoteRequest['status']) => {
    await fetch('/api/requests/status', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, status }) });
    setData(prev => prev.map(r => r.id === id ? { ...r, status, updatedAt: new Date().toISOString() } : r));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Quote Requests</h1>
        <div className="flex items-center gap-2">
          <button onClick={exportCsv} className="px-3 py-1 rounded bg-gray-100">Export CSV</button>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
        <input placeholder="Search" className="border rounded px-3 py-2" value={q} onChange={(e)=>setQ(e.target.value)} />
        <select className="border rounded px-3 py-2" value={status} onChange={(e)=>setStatus(e.target.value as any)}>
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="in_review">In Review</option>
          <option value="replied">Replied</option>
          <option value="archived">Archived</option>
        </select>
        <input type="date" className="border rounded px-3 py-2" value={dateFrom} onChange={(e)=>setDateFrom(e.target.value)} />
        <input type="date" className="border rounded px-3 py-2" value={dateTo} onChange={(e)=>setDateTo(e.target.value)} />
        <select className="border rounded px-3 py-2" value={talent} onChange={(e)=>setTalent(e.target.value)}>
          <option value="all">All Talent</option>
          <option value="ava-chen">Ava Chen</option>
          <option value="marco-silva">Marco Silva</option>
          <option value="nina-patel">Nina Patel</option>
          <option value="kenji-yamada">Kenji Yamada</option>
          <option value="lena-mueller">Lena Müller</option>
        </select>
      </div>

      {loading ? (
        <div>Loading…</div>
      ) : (
        <div className="overflow-auto border rounded">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left p-2">ID</th>
                <th className="text-left p-2">Name</th>
                <th className="text-left p-2">Email</th>
                <th className="text-left p-2">Budget</th>
                <th className="text-left p-2">Talent</th>
                <th className="text-left p-2">Type</th>
                <th className="text-left p-2">Status</th>
                <th className="text-left p-2">Created</th>
                <th className="text-left p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(r => (
                <tr key={r.id} className="border-t">
                  <td className="p-2 whitespace-nowrap">{r.id}</td>
                  <td className="p-2">{r.name}</td>
                  <td className="p-2">{r.email}</td>
                  <td className="p-2">{r.budget}</td>
                  <td className="p-2">{r.talentSlug || '-'}</td>
                  <td className="p-2">{r.aiType}</td>
                  <td className="p-2">
                    <span className="px-2 py-1 rounded bg-gray-100">{r.status}</span>
                  </td>
                  <td className="p-2">{new Date(r.createdAt).toLocaleDateString()}</td>
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <button onClick={()=>changeStatus(r.id,'in_review')} className="text-xs px-2 py-1 rounded bg-blue-100">In Review</button>
                      <button onClick={()=>changeStatus(r.id,'replied')} className="text-xs px-2 py-1 rounded bg-green-100">Replied</button>
                      <button onClick={()=>changeStatus(r.id,'archived')} className="text-xs px-2 py-1 rounded bg-gray-200">Archive</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}