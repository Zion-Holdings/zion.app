import React, { useMemo, useState } from 'react';
import EnhancedLayout from '../../../components/layout/EnhancedLayout';
import type { BoardName, FormattedJob, JobInput } from '../../../utils/types/jobs';

const ALL_BOARDS: BoardName[] = ['LinkedIn', 'Indeed', 'StackOverflow', 'RemoteOK', 'HackerNews', 'AngelList'];

export default function JobSyndicationAdminPage() {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [selectedBoards, setSelectedBoards] = useState<Record<BoardName, boolean>>({
    LinkedIn: true,
    Indeed: true,
    StackOverflow: false,
    RemoteOK: false,
    HackerNews: false,
    AngelList: false,
  });
  const [job, setJob] = useState<JobInput>({ internalDescription: '', internalTitle: '', employmentType: 'Full-time', remote: true, applyUrl: '' });
  const [formatted, setFormatted] = useState<FormattedJob | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [publishResults, setPublishResults] = useState<any>(null);
  const [health, setHealth] = useState<any>(null);
  const [adminSecret, setAdminSecret] = useState<string>('');

  const selectedBoardList = useMemo(() => ALL_BOARDS.filter((b) => selectedBoards[b]), [selectedBoards]);

  async function fetchHealth() {
    const res = await fetch('/api/jobs/syndication/health');
    setHealth(await res.json());
  }

  async function formatWithAI() {
    setLoading(true);
    try {
      const res = await fetch('/api/jobs/syndication/format', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-secret': adminSecret,
        },
        body: JSON.stringify({ job }),
      });
      const data = await res.json();
      setFormatted(data.formatted);
    } finally {
      setLoading(false);
    }
  }

  async function publish() {
    setLoading(true);
    try {
      const res = await fetch('/api/jobs/syndication/publish', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-secret': adminSecret,
        },
        body: JSON.stringify({
          job,
          boards: selectedBoardList,
          formatted,
          utm: { campaign: 'job_syndication', medium: 'jobs' },
          autoRefresh: { enabled: true, cadence: 'weekly' },
        }),
      });
      const data = await res.json();
      setPublishResults(data);
    } finally {
      setLoading(false);
    }
  }

  return (
    <EnhancedLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Job Syndication</h1>
          <span className="text-sm text-gray-500">Admin • /jobs/syndication</span>
        </div>

        <div className="rounded-lg border p-4 space-y-3">
          <div className="flex items-center gap-3">
            <input
              id="enable"
              type="checkbox"
              className="h-4 w-4"
              checked={enabled}
              onChange={(e) => setEnabled(e.target.checked)}
            />
            <label htmlFor="enable" className="font-medium">Promote this job across partner networks</label>
            <span className="ml-auto text-xs text-gray-500">Badge: {selectedBoardList.length ? `Syndicated to ${selectedBoardList.length} platforms` : 'Not syndicated'}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {ALL_BOARDS.map((b) => (
              <label key={b} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={!!selectedBoards[b]}
                  onChange={(e) => setSelectedBoards((s) => ({ ...s, [b]: e.target.checked }))}
                />
                {b}
              </label>
            ))}
          </div>
        </div>

        <div className="rounded-lg border p-4 space-y-3">
          <div className="flex items-center gap-2">
            <h2 className="font-medium">AI-Powered Formatting</h2>
            <span className="text-xs text-gray-500">Operator prompt:</span>
          </div>
          <pre className="text-xs bg-gray-50 rounded p-3 overflow-auto">
{`Convert this internal job description into a format suitable for external job boards. Strip company-specific terms and optimize for performance.

- Extract title, skills, summary, tags
- Ensure job post meets board-specific requirements (character count, tone, tech tags)`}
          </pre>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <input
                className="w-full border rounded p-2 text-sm"
                placeholder="Internal Title"
                value={job.internalTitle || ''}
                onChange={(e) => setJob((j) => ({ ...j, internalTitle: e.target.value }))}
              />
              <input
                className="w-full border rounded p-2 text-sm"
                placeholder="Apply URL (for UTM)"
                value={job.applyUrl || ''}
                onChange={(e) => setJob((j) => ({ ...j, applyUrl: e.target.value }))}
              />
              <textarea
                rows={12}
                className="w-full border rounded p-2 text-sm"
                placeholder="Paste internal job description here..."
                value={job.internalDescription}
                onChange={(e) => setJob((j) => ({ ...j, internalDescription: e.target.value }))}
              />

              <div className="flex items-center gap-2 text-sm">
                <input
                  className="border rounded p-2 flex-1"
                  placeholder="Admin Secret Header (optional during dev)"
                  value={adminSecret}
                  onChange={(e) => setAdminSecret(e.target.value)}
                />
                <button disabled={loading} className="px-3 py-2 rounded bg-black text-white text-sm disabled:opacity-50" onClick={formatWithAI}>Format</button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Share preview</h3>
                {publishResults?.syndicatedCount ? (
                  <span className="text-xs rounded-full bg-indigo-50 text-indigo-700 px-2 py-1">Syndicated to {publishResults.syndicatedCount} platforms</span>
                ) : null}
              </div>
              {formatted ? (
                <div className="border rounded p-3 text-sm">
                  <div className="font-semibold">{formatted.title}</div>
                  <div className="text-gray-600 text-xs">{formatted.summary}</div>
                  <div className="mt-2">
                    <div className="text-xs font-medium">Tags:</div>
                    <div className="text-xs text-gray-700">{formatted.tags.join(', ')}</div>
                  </div>
                  <div className="mt-3 prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: formatted.markdown.replace(/\n/g, '<br/>') }} />
                </div>
              ) : (
                <div className="text-xs text-gray-500">No preview yet.</div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button disabled={!enabled || !selectedBoardList.length || !formatted || loading} className="px-3 py-2 rounded bg-black text-white text-sm disabled:opacity-50" onClick={publish}>Publish</button>
            <button className="px-3 py-2 rounded border text-sm" onClick={fetchHealth}>Check Board Status</button>
          </div>
        </div>

        {publishResults?.results?.length ? (
          <div className="rounded-lg border p-4 space-y-2">
            <div className="font-medium">Tracking & Share Links</div>
            <div className="grid grid-cols-1 gap-2">
              {publishResults.results.map((r: any) => (
                <div key={r.board} className="flex items-center justify-between text-sm border rounded p-2">
                  <div className="flex items-center gap-2"><span className="font-medium">{r.board}</span><span className="text-xs text-gray-500">{r.status}</span></div>
                  <a className="text-indigo-600 underline" href={r.shareUrl || '#'} target="_blank" rel="noreferrer">Share Preview</a>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {health?.status ? (
          <div className="rounded-lg border p-4 space-y-2">
            <div className="font-medium">Board API Health</div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {health.status.map((h: any) => (
                <div key={h.board} className="flex items-center justify-between border rounded p-2">
                  <span>{h.board}</span>
                  <span className="text-green-600">{h.status}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </EnhancedLayout>
  );
}