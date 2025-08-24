import React, { useEffect, useState } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

type ProposalListItem = {
  id: string;
  title: string;
  targetInstitution: string;
  regionalScope: string;
  type: string;
  status: 'Draft' | 'Submitted' | 'Under Review' | 'Accepted';
  createdAt: string;
};

export default function InternationalProposalsPage() {
  const [items, setItems] = useState<ProposalListItem[]>([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetch('/api/proposals')
      .then((r) => r.json())
      .then((d) => setItems(d.items || []))
      .catch(() => setItems([]));
  }, []);

  const filtered = items.filter((i) => (filter === 'All' ? true : i.regionalScope === filter));

  return (
    <EnhancedLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">International Proposals</h1>
        <div className="flex items-center gap-2 text-sm">
          <span>Filter by region:</span>
          <select className="border rounded px-2 py-1" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option>All</option>
            <option>Global</option>
            <option>Africa</option>
            <option>LATAM</option>
            <option>APAC</option>
            <option>EU</option>
          </select>
        </div>
        <div className="divide-y border rounded">
          {filtered.map((i) => (
            <div key={i.id} className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <div className="font-medium">{i.title}</div>
                <div className="text-sm text-gray-600">{i.targetInstitution} • {i.type} • {i.regionalScope}</div>
                <div className="text-xs text-gray-500">Created {new Date(i.createdAt).toLocaleString()}</div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">{i.status}</span>
                <a className="text-blue-600 underline" href={`/api/proposals?id=${i.id}`} target="_blank" rel="noreferrer">JSON</a>
                <a className="text-blue-600 underline" href={`/proposals/${i.id}.md`} target="_blank" rel="noreferrer">Markdown</a>
                <a className="text-blue-600 underline" href={`/proposals/${i.id}.pdf`} target="_blank" rel="noreferrer">PDF</a>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <div className="p-4 text-sm text-gray-600">No proposals yet.</div>}
        </div>
        <div className="text-sm text-gray-600">Community commentary per region coming next. For now, proposals expose a comments API endpoint.</div>
      </div>
    </EnhancedLayout>
  );
}