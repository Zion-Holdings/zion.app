import useSWR from 'swr';
import React, { useMemo, useState } from 'react';
import EnhancedLayout from '../../../components/layout/EnhancedLayout';
import Link from 'next/link';
import type { GetServerSideProps } from 'next';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = (req.headers.cookie || '').split(';').reduce((acc: any, part: string) => {
    const [k, v] = part.trim().split('=');
    if (k) acc[k] = decodeURIComponent(v || '');
    return acc;
  }, {} as Record<string, string>);
  let role = 'guest';
  try {
    const user = cookies['x-user'] ? JSON.parse(cookies['x-user']) : null;
    role = user?.role || 'guest';
  } catch {}
  if (role !== 'admin') {
    return { redirect: { destination: '/', permanent: false } };
  }
  return { props: {} };
};

export default function AdminDisputesDashboard() {
  const { data } = useSWR('/api/disputes', fetcher);
  const [statusFilter, setStatusFilter] = useState<'All' | 'Open' | 'Under Review' | 'Resolved'>('Open');

  const disputes = useMemo(() => {
    const list = data?.disputes || [];
    if (statusFilter === 'All') return list;
    return list.filter((d: any) => d.status === statusFilter);
  }, [data, statusFilter]);

  return (
    <EnhancedLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Dispute Resolution Center</h1>
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value as any)} className="border rounded px-2 py-1 text-sm">
            {(['Open','Under Review','Resolved','All'] as const).map(s => (<option key={s} value={s}>{s}</option>))}
          </select>
        </div>
        <div className="overflow-auto border rounded">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="text-left px-3 py-2">Case ID</th>
                <th className="text-left px-3 py-2">Talent</th>
                <th className="text-left px-3 py-2">Client</th>
                <th className="text-left px-3 py-2">Project</th>
                <th className="text-left px-3 py-2">Created At</th>
                <th className="text-left px-3 py-2">Status</th>
                <th className="text-left px-3 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {disputes.map((d: any) => (
                <tr key={d.id} className="border-t">
                  <td className="px-3 py-2 font-medium">{d.id}</td>
                  <td className="px-3 py-2">{d.talentUserId}</td>
                  <td className="px-3 py-2">{d.clientUserId}</td>
                  <td className="px-3 py-2">{d.projectId}</td>
                  <td className="px-3 py-2">{new Date(d.createdAt).toLocaleString()}</td>
                  <td className="px-3 py-2">{d.status}</td>
                  <td className="px-3 py-2 flex gap-2">
                    <Link href={`/disputes/${encodeURIComponent(d.id)}?tab=Admin%20Notes`}><a className="text-green-700 hover:underline">Resolve</a></Link>
                    <Link href={`/disputes/${encodeURIComponent(d.id)}?tab=Messages`}><a className="text-blue-700 hover:underline">Message Parties</a></Link>
                    <Link href={`/disputes/${encodeURIComponent(d.id)}?tab=Attachments`}><a className="text-gray-700 hover:underline">Download Evidence</a></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </EnhancedLayout>
  );
}