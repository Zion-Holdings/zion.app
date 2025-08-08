import React, { useMemo, useState } from 'react';
import { Application, ApplicationStatus } from '../../data/applications';
import ResumeModal from './ResumeModal';

export type ApplicationsTableProps = {
  applications: Application[];
};

const statusColors: Record<ApplicationStatus, string> = {
  New: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200',
  Viewed: 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200',
  Interviewed: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-200',
  Hired: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200',
};

const ApplicationsTable: React.FC<ApplicationsTableProps> = ({ applications }) => {
  const [filter, setFilter] = useState<'All' | ApplicationStatus>('All');
  const [sort, setSort] = useState<'newest' | 'relevance'>('newest');
  const [items, setItems] = useState<Application[]>(applications);
  const [preview, setPreview] = useState<{ open: boolean; app?: Application }>({ open: false });

  const filteredSorted = useMemo(() => {
    let arr = [...items];
    if (filter !== 'All') {
      arr = arr.filter((a) => a.status === filter);
    }
    if (sort === 'newest') {
      arr.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
    } else {
      arr.sort((a, b) => (b.aiScore || 0) - (a.aiScore || 0));
    }
    return arr;
  }, [items, filter, sort]);

  const markReviewed = (id: string) => {
    setItems((prev) => prev.map((a) => (a.id === id ? { ...a, status: 'Viewed' } : a)));
  };

  const shortlist = (id: string) => {
    setItems((prev) => prev.map((a) => (a.id === id ? { ...a, status: 'Interviewed' } : a)));
  };

  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40">
        <div className="flex items-center gap-2">
          <label className="text-sm text-neutral-600 dark:text-neutral-300">Filter</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value as any)} className="text-sm border rounded px-2 py-1 bg-white dark:bg-neutral-900">
            <option value="All">All</option>
            <option value="New">New</option>
            <option value="Viewed">Viewed</option>
            <option value="Interviewed">Interviewed</option>
            <option value="Hired">Hired</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm text-neutral-600 dark:text-neutral-300">Sort</label>
          <select value={sort} onChange={(e) => setSort(e.target.value as any)} className="text-sm border rounded px-2 py-1 bg-white dark:bg-neutral-900">
            <option value="newest">Newest</option>
            <option value="relevance">Most Relevant</option>
          </select>
        </div>
      </div>

      <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {filteredSorted.map((app) => (
          <div key={app.id} className="p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-sm font-semibold">
                {app.talentName
                  .split(' ')
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join('')}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="truncate font-medium">{app.talentName}</div>
                  {app.status === 'New' ? (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-600 text-white">NEW</span>
                  ) : null}
                  {typeof app.aiScore === 'number' ? (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-200">AI {app.aiScore}</span>
                  ) : null}
                  {app.resumeVersionLabel ? (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">{app.resumeVersionLabel}</span>
                  ) : null}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-300 truncate">{app.title}</div>
                <div className="text-xs text-neutral-500">Submitted {new Date(app.submittedAt).toLocaleString()}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <span className={`text-xs px-2 py-1 rounded ${statusColors[app.status]}`}>{app.status}</span>
              <button onClick={() => setPreview({ open: true, app })} className="text-xs px-2 py-1 rounded border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                Preview
              </button>
              <button onClick={() => markReviewed(app.id)} className="text-xs px-2 py-1 rounded bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90">
                Mark as Reviewed
              </button>
              <button onClick={() => shortlist(app.id)} className="text-xs px-2 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-500">
                Shortlist
              </button>
              <a href={`/messages?to=${encodeURIComponent(app.talentSlug)}`} className="text-xs px-2 py-1 rounded border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                Message
              </a>
              {app.resumeUrl ? (
                <a className="text-xs px-2 py-1 rounded border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800" href={app.resumeUrl} download>
                  Download
                </a>
              ) : null}
            </div>
          </div>
        ))}
        {filteredSorted.length === 0 ? (
          <div className="p-6 text-sm text-neutral-500">No applications match your filters.</div>
        ) : null}
      </div>

      <ResumeModal
        open={preview.open}
        onClose={() => setPreview({ open: false })}
        talentName={preview.app?.talentName || ''}
        resumeUrl={preview.app?.resumeUrl}
        resumeVersionLabel={preview.app?.resumeVersionLabel}
        summaryFallback={preview.app?.summary}
        skillsFallback={preview.app?.skills}
      />
    </div>
  );
};

export default ApplicationsTable;