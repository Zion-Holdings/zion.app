import useSWR from 'swr';
import Link from 'next/link';
import { TALENT_PROFILES } from '../../data/talent';
import { useMemo, useState } from 'react';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function TalentDashboard() {
  const [selectedTalentSlug, setSelectedTalentSlug] = useState<string>(TALENT_PROFILES[0]?.slug || '');
  const talent = useMemo(() => TALENT_PROFILES.find((t) => t.slug === selectedTalentSlug), [selectedTalentSlug]);

  const { data } = useSWR('/api/jobs', fetcher);
  const jobs = (data?.jobs as any[]) || [];

  const suggestions = useMemo(() => {
    if (!talent) return [] as any[];
    const skillSet = new Set(talent.skills.map((s) => s.toLowerCase()));
    return jobs
      .map((job) => {
        const overlap = (job.requiredSkills || []).filter((s: string) => skillSet.has(String(s).toLowerCase()));
        const score = overlap.length;
        return { job, score, overlap };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
  }, [jobs, talent]);

  async function act(jobId: string, action: 'apply' | 'skip') {
    await fetch('/api/applications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jobId, talentSlug: selectedTalentSlug, action }),
    });
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Talent Dashboard</h1>
        <Link href="/messages"><a className="text-sm underline">Go to Messages</a></Link>
      </div>

      <div className="flex items-center gap-3">
        <label className="text-sm">Viewing as</label>
        <select
          className="border rounded p-2 text-sm"
          value={selectedTalentSlug}
          onChange={(e) => setSelectedTalentSlug(e.target.value)}
        >
          {TALENT_PROFILES.map((t) => (
            <option key={t.slug} value={t.slug}>{t.name} — {t.title}</option>
          ))}
        </select>
      </div>

      <section>
        <h2 className="text-lg font-medium mb-2">AI‑Match Suggestions</h2>
        <div className="grid gap-3">
          {suggestions.length === 0 && <p className="text-sm text-gray-600">No suggestions yet. Check back later.</p>}
          {suggestions.map(({ job, score, overlap }) => (
            <div key={job.id} className="border rounded p-4 bg-white dark:bg-gray-900">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium">{job.title}</h3>
                  <p className="text-xs text-gray-500">Category: {job.category} • Match score: {score}</p>
                  {overlap.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {overlap.map((s: string) => (
                        <span key={s} className="px-2 py-0.5 text-xs rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">{s}</span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <button className="px-2 py-1 text-sm border rounded" onClick={() => act(job.id, 'apply')}>Apply Now</button>
                  <button className="px-2 py-1 text-sm border rounded" onClick={() => act(job.id, 'skip')}>Skip</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}