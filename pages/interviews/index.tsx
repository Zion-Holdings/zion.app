import React, { useEffect, useMemo, useState } from 'react';
import InterviewCard from '../../components/interviews/InterviewCard';
import type { Interview } from '../../utils/types/interview';

function getStoredUserId(): string {
  if (typeof window === 'undefined') return '';
  return localStorage.getItem('demoUserId') || '';
}

function setStoredUserId(id: string) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('demoUserId', id);
}

export default function InterviewsPage() {
  const [userId, setUserId] = useState<string>('');
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initial = getStoredUserId();
    if (initial) setUserId(initial);
  }, []);

  const canLoad = useMemo(() => Boolean(userId), [userId]);

  async function load() {
    if (!canLoad) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/interviews?userId=${userId}`);
      const data = await res.json();
      setInterviews(data.interviews || []);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, [userId]);

  return (
    <div className="space-y-4">
      <div className="enhanced-card">
        <div className="flex items-center gap-2">
          <label className="text-sm">Demo User:</label>
          <input
            className="border rounded px-2 py-1"
            placeholder="Enter your userId (e.g., client-1 or talent-1)"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            onBlur={(e) => setStoredUserId(e.target.value)}
          />
          <button className="px-3 py-1 rounded bg-gray-100" onClick={load} disabled={!canLoad || loading}>{loading ? 'Loading…' : 'Refresh'}</button>
        </div>
      </div>

      {interviews.length === 0 && (
        <div className="text-sm text-gray-500">No interviews yet.</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {interviews.map((i) => (
          <InterviewCard key={i.id} interview={i} currentUserId={userId} onRefresh={load} />
        ))}
      </div>
    </div>
  );
}