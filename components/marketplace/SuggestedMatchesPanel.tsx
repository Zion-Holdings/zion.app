import React, { useEffect, useState } from 'react';

export type SuggestedMatchRow = {
  jobId: string;
  talentSlug: string;
  score: number;
  createdAt: string;
};

export function SuggestedMatchesPanel({ jobId }: { jobId: string }) {
  const [rows, setRows] = useState<SuggestedMatchRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        const res = await fetch(`/api/suggested-matches?jobId=${encodeURIComponent(jobId)}`);
        const json = await res.json();
        if (!res.ok) throw new Error(json?.error || 'Failed');
        if (active) setRows(json.matches || []);
      } catch (e: any) {
        if (active) setError(e?.message || 'Error');
      } finally {
        if (active) setLoading(false);
      }
    }
    if (jobId) load();
    return () => { active = false; };
  }, [jobId]);

  if (loading) return <div>Loading matches…</div>;
  if (error) return <div>Error: {error}</div>;
  if (!rows.length) return <div>No suggestions yet.</div>;

  return (
    <div className="space-y-3">
      {rows.map((r) => (
        <div key={r.talentSlug} className="border rounded p-3 flex items-center justify-between">
          <div>
            <div className="font-medium">{r.talentSlug}</div>
            <div className="text-sm text-gray-500">Score: {r.score}</div>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded bg-blue-600 text-white">Invite</button>
            <button className="px-3 py-1 rounded border">Message</button>
          </div>
        </div>
      ))}
    </div>
  );
}