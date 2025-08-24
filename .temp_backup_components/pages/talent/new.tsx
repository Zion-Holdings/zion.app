import { FormEvent, useState } from 'react';
import type { TalentProfile } from '@/utils/types/talent';

export default function NewTalentPage() {
  const [form, setForm] = useState({
    name: '',
    title: '',
    location: '',
    timezone: '',
    region: '',
    bio: '',
    experience: '',
    skills: '',
    hourlyRateUsd: '',
    availability: 'Open',
    requestQuote: false,
    portfolio: '',
    videoUrl: '',
  });
  const [generated, setGenerated] = useState<Partial<TalentProfile> | null>(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onGenerate = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/talent/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          title: form.title,
          bio: form.bio,
          experience: form.experience,
          skills: form.skills,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Generation failed');
      setGenerated(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const onSave = async () => {
    if (!generated) return;
    setSaving(true);
    setError(null);
    try {
      const payload: Partial<TalentProfile> = {
        ...generated,
        name: form.name || generated.name,
        title: form.title || generated.title,
        location: form.location,
        timezone: form.timezone,
        region: form.region,
        bio: form.bio,
        hourlyRateUsd: form.requestQuote ? undefined : Number(form.hourlyRateUsd) || undefined,
        requestQuote: form.requestQuote,
        availability: form.availability as any,
        portfolio: form.portfolio
          ? form.portfolio.split('\n').map((line) => {
              const [title, url] = line.split('|').map((s) => s.trim());
              return { title: title || url, url };
            })
          : [],
        videoUrl: form.videoUrl || undefined,
      };

      const res = await fetch('/api/talent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Save failed');
      window.location.href = `/talent/${data.slug}`;
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">Add Talent</h1>
      <p className="text-gray-600 dark:text-gray-300 mt-1">Provide the basics. We will generate a professional summary and standardized skills.</p>

      <form onSubmit={onGenerate} className="mt-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} required />
          </div>
          <div>
            <label className="text-sm font-medium">Professional Title (optional)</label>
            <input className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium">Location</label>
            <input className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={form.location} onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))} required />
          </div>
          <div>
            <label className="text-sm font-medium">Timezone</label>
            <input className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={form.timezone} onChange={(e) => setForm((f) => ({ ...f, timezone: e.target.value }))} placeholder="e.g., America/New_York" />
          </div>
          <div>
            <label className="text-sm font-medium">Region</label>
            <input className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={form.region} onChange={(e) => setForm((f) => ({ ...f, region: e.target.value }))} placeholder="e.g., North America" />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Short Bio</label>
          <textarea className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" rows={3} value={form.bio} onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))} placeholder="Background, focus areas, impact" />
        </div>

        <div>
          <label className="text-sm font-medium">Experience Highlights</label>
          <textarea className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" rows={3} value={form.experience} onChange={(e) => setForm((f) => ({ ...f, experience: e.target.value }))} placeholder="Key roles, projects, outcomes" />
        </div>

        <div>
          <label className="text-sm font-medium">Skills (comma-separated)</label>
          <input className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={form.skills} onChange={(e) => setForm((f) => ({ ...f, skills: e.target.value }))} placeholder="Python, DevOps, AI/ML, Azure" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="text-sm font-medium">Hourly Rate (USD)</label>
            <input type="number" className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={form.hourlyRateUsd} onChange={(e) => setForm((f) => ({ ...f, hourlyRateUsd: e.target.value }))} placeholder="Leave empty for quote" />
          </div>
          <div>
            <label className="text-sm font-medium">Availability</label>
            <select className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={form.availability} onChange={(e) => setForm((f) => ({ ...f, availability: e.target.value }))}>
              <option>Open</option>
              <option>Part-time</option>
              <option>Booked</option>
            </select>
          </div>
          <div className="flex items-end gap-2">
            <input id="rq" type="checkbox" checked={form.requestQuote} onChange={(e) => setForm((f) => ({ ...f, requestQuote: e.target.checked }))} />
            <label htmlFor="rq" className="text-sm">Request Quote instead</label>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Portfolio (one per line: title | url)</label>
          <textarea className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" rows={3} value={form.portfolio} onChange={(e) => setForm((f) => ({ ...f, portfolio: e.target.value }))} placeholder="RAG Starter | https://example.com/rag" />
        </div>

        <div>
          <label className="text-sm font-medium">Video URL (optional)</label>
          <input className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" value={form.videoUrl} onChange={(e) => setForm((f) => ({ ...f, videoUrl: e.target.value }))} placeholder="https://www.youtube.com/embed/..." />
        </div>

        <div className="flex items-center gap-3">
          <button type="submit" disabled={loading} className="inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 text-white shadow hover:opacity-90 disabled:opacity-60">{loading ? 'Generating…' : 'Generate Summary & Skills'}</button>
          {generated && (
            <button type="button" onClick={onSave} disabled={saving} className="inline-flex items-center px-4 py-2 rounded-lg border border-violet-300 text-violet-700 hover:bg-violet-50 dark:hover:bg-violet-950/20 disabled:opacity-60">{saving ? 'Saving…' : 'Save Profile'}</button>
          )}
          {error && <div className="text-sm text-rose-600">{error}</div>}
        </div>
      </form>

      {generated && (
        <div className="mt-8 rounded-2xl border border-gray-200 dark:border-gray-800 p-4">
          <h2 className="font-semibold">Preview</h2>
          <div className="mt-2 text-sm text-gray-700 dark:text-gray-200 whitespace-pre-wrap">{generated.summary}</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {(generated.skills || []).map((s) => (
              <span key={s} className="text-xs px-2 py-1 rounded-full border bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/30 dark:text-cyan-300 dark:border-cyan-900">{s}</span>
            ))}
          </div>
          <div className="mt-3 text-sm text-gray-600">Suggested Title: <span className="font-medium">{generated.title}</span> {generated.category ? `• ${generated.category}` : ''}</div>
        </div>
      )}
    </div>
  );
}