import { useMemo, useState } from 'react';
import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import { Download, Eye, Trash2, MoreHorizontal, ChevronDown, CheckCircle2, CircleAlert, CircleDot, CircleCheckBig } from 'lucide-react';
import { QUOTE_REQUESTS } from '../../data/quote-requests';
import type { AdminQuoteStatus, QuoteFilters, QuoteRequest } from '../../utils/types/quote';
import { TALENT_PROFILES } from '../../data/talent';

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString();
}

const ADMIN_STATUSES: AdminQuoteStatus[] = ['New', 'In Review', 'Responded', 'Accepted', 'Closed'];

function statusIcon(status: AdminQuoteStatus) {
  const base = 'inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium';
  switch (status) {
    case 'New':
      return <span className={`${base} bg-blue-50 text-blue-700 border border-blue-200`}><CircleDot size={12} /> New</span>;
    case 'In Review':
      return <span className={`${base} bg-violet-50 text-violet-700 border border-violet-200`}><CircleAlert size={12} /> In Review</span>;
    case 'Responded':
      return <span className={`${base} bg-teal-50 text-teal-700 border border-teal-200`}><CheckCircle2 size={12} /> Responded</span>;
    case 'Accepted':
      return <span className={`${base} bg-emerald-50 text-emerald-700 border border-emerald-200`}><CircleCheckBig size={12} /> Accepted</span>;
    case 'Closed':
      return <span className={`${base} bg-gray-100 text-gray-700 border border-gray-200`}>Closed</span>;
  }
}

function exportToCsv(filename: string, rows: QuoteRequest[]) {
  const headers = ['Talent Name','Requester Name','Summary','Budget','Status','Date'];
  const csvRows = [headers.join(',')];
  for (const r of rows) {
    const data = [r.talentName, r.requesterName, r.summary.replace(/,/g, ';'), `$${r.budgetUsd}`, r.adminStatus, formatDate(r.createdAt)];
    csvRows.push(data.join(','));
  }
  const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

type ServerProps = { role: 'admin' | 'talent' | 'guest'; userId?: string | null };

export const getServerSideProps: GetServerSideProps<ServerProps> = async ({ req }) => {
  const cookies = (req.headers.cookie || '').split(';').reduce<Record<string,string>>((acc, cur) => {
    const [k, v] = cur.trim().split('=');
    if (k && v) acc[k] = decodeURIComponent(v);
    return acc;
  }, {});
  const role = (cookies['role'] as ServerProps['role']) || 'guest';
  const userId = cookies['userId'] || null;
  return { props: { role, userId } };
};

export default function AdminQuotesPage({ role }: ServerProps) {
  const [filters, setFilters] = useState<QuoteFilters>({ status: 'All', startDate: null, endDate: null, talentSlug: 'All', search: '' });
  const [rows, setRows] = useState<QuoteRequest[]>(QUOTE_REQUESTS);
  const [selected, setSelected] = useState<QuoteRequest | null>(null);

  const newCount = rows.filter(r => r.adminStatus === 'New' && !r.archived).length;
  const unreadCount = rows.filter(r => r.unread && !r.archived).length;

  const visibleRows = useMemo(() => {
    return rows.filter(r => {
      if (r.archived) return false;
      if (filters.status && filters.status !== 'All' && r.adminStatus !== filters.status) return false;
      if (filters.talentSlug && filters.talentSlug !== 'All' && r.talentSlug !== filters.talentSlug) return false;
      if (filters.startDate && new Date(r.createdAt) < new Date(filters.startDate)) return false;
      if (filters.endDate && new Date(r.createdAt) > new Date(filters.endDate)) return false;
      if (filters.search) {
        const s = filters.search.toLowerCase();
        if (!(`${r.talentName} ${r.requesterName} ${r.summary}`.toLowerCase().includes(s))) return false;
      }
      return true;
    });
  }, [rows, filters]);

  if (role !== 'admin') {
    return (
      <div className="max-w-5xl mx-auto py-12">
        <Head>
          <title>Admin • Quote Requests</title>
        </Head>
        <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-xl p-6 mb-6">
          <h1 className="text-xl font-semibold">Admin access required</h1>
          <p className="opacity-90 mt-1 text-sm">Please sign in with an admin account to manage quote requests.</p>
        </div>
        <div className="border rounded-lg p-6">
          <p className="text-sm">Not authorized. Go to <a className="text-blue-600 underline" href="/auth">Login</a>.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-8">
      <Head>
        <title>Admin • Quote Requests</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white rounded-2xl p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Quote Request Manager</h1>
            <p className="text-white/80 text-sm">Review, triage, and respond to incoming requests</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs bg-white/10 px-2 py-1 rounded-full">New: <b>{newCount}</b></span>
            <span className="text-xs bg-white/10 px-2 py-1 rounded-full">Unread: <b>{unreadCount}</b></span>
            <button onClick={() => exportToCsv('quote-requests.csv', visibleRows)} className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium">
              <Download size={16} /> Export CSV
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
            <div className="md:col-span-2">
              <input
                placeholder="Search by name or keyword"
                value={filters.search || ''}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
              />
            </div>
            <div>
              <select
                value={filters.status || 'All'}
                onChange={(e) => setFilters({ ...filters, status: e.target.value as any })}
                className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
              >
                <option value="All">All Statuses</option>
                {ADMIN_STATUSES.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={filters.talentSlug || 'All'}
                onChange={(e) => setFilters({ ...filters, talentSlug: e.target.value as any })}
                className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
              >
                <option value="All">All Talent</option>
                {TALENT_PROFILES.map(t => (
                  <option key={t.slug} value={t.slug}>{t.name}</option>
                ))}
              </select>
            </div>
            <div>
              <input type="date" value={filters.startDate || ''} onChange={(e) => setFilters({ ...filters, startDate: e.target.value || null })}
                className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900" />
            </div>
            <div>
              <input type="date" value={filters.endDate || ''} onChange={(e) => setFilters({ ...filters, endDate: e.target.value || null })}
                className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900" />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900/40">
              <tr className="text-left">
                <th className="px-4 py-3 font-medium">Talent Name</th>
                <th className="px-4 py-3 font-medium">Requester Name</th>
                <th className="px-4 py-3 font-medium">Summary</th>
                <th className="px-4 py-3 font-medium">Budget</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visibleRows.map(row => (
                <tr key={row.id} className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50/60 dark:hover:bg-gray-900/40">
                  <td className="px-4 py-3">{row.talentName}</td>
                  <td className="px-4 py-3">{row.requesterName}</td>
                  <td className="px-4 py-3 max-w-lg truncate" title={row.summary}>{row.summary}</td>
                  <td className="px-4 py-3">${row.budgetUsd.toLocaleString()}</td>
                  <td className="px-4 py-3">{statusIcon(row.adminStatus)}</td>
                  <td className="px-4 py-3">{formatDate(row.createdAt)}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 justify-end">
                      <button className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-gray-300 dark:border-gray-700" onClick={() => setSelected(row)}>
                        <Eye size={14} /> Details
                      </button>
                      <div className="relative inline-block">
                        <details>
                          <summary className="list-none inline-flex items-center gap-1 px-2 py-1 rounded-md border border-gray-300 dark:border-gray-700 cursor-pointer select-none">
                            <MoreHorizontal size={14} /> Status <ChevronDown size={14} />
                          </summary>
                          <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-10">
                            {ADMIN_STATUSES.map(s => (
                              <button key={s} onClick={() => setRows(prev => prev.map(r => r.id === row.id ? { ...r, adminStatus: s, unread: false } : r))} className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                                {s}
                              </button>
                            ))}
                          </div>
                        </details>
                      </div>
                      <button className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-red-300 text-red-600 hover:bg-red-50" onClick={() => setRows(prev => prev.map(r => r.id === row.id ? { ...r, archived: true } : r))}>
                        <Trash2 size={14} /> Archive
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {visibleRows.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-8 text-center text-gray-500">No requests match your filters.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-950 w-full max-w-2xl rounded-xl border border-gray-200 dark:border-gray-800 shadow-xl">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
              <h3 className="font-semibold">{selected.requesterName} → {selected.talentName}</h3>
              <button onClick={() => setSelected(null)} className="text-sm px-2 py-1 border rounded-md">Close</button>
            </div>
            <div className="p-4 space-y-3">
              <div><span className="text-xs uppercase text-gray-500">Summary</span><p className="mt-1">{selected.summary}</p></div>
              {selected.details && <div><span className="text-xs uppercase text-gray-500">Details</span><p className="mt-1 whitespace-pre-wrap">{selected.details}</p></div>}
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-3 rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">Budget: <b>${selected.budgetUsd.toLocaleString()}</b></div>
                <div className="p-3 rounded-md bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">Timeline: <b>{selected.timeline || '—'}</b></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}