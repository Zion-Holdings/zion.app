import { useEffect, useMemo, useState } from 'react';
import TalentCard from '@/components/talent/TalentCard';
import type { TalentFilters, TalentProfile } from '@/utils/types/talent';
import { TALENT_PROFILES as LOCAL } from '@/data/talent';

function useTalentDirectory() {
  const [talent, setTalent] = useState<TalentProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const res = await fetch('/api/talent');
        if (res.ok) {
          const data = await res.json();
          if (isMounted) setTalent(data.items || []);
        } else {
          if (isMounted) setTalent(LOCAL);
        }
      } catch {
        if (isMounted) setTalent(LOCAL);
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  return { talent, loading };
}

export default function TalentDirectoryPage() {
  const { talent, loading } = useTalentDirectory();
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<TalentFilters>({});

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return talent.filter((t) => {
      const matchesQuery = !q ||
        t.name.toLowerCase().includes(q) ||
        t.title.toLowerCase().includes(q) ||
        t.skills.some((s) => s.toLowerCase().includes(q)) ||
        (t.region || '').toLowerCase().includes(q) ||
        t.location.toLowerCase().includes(q);

      const skillsOk = !filters.skills || filters.skills.length === 0 ||
        filters.skills.every((s) => t.skills.map((x) => x.toLowerCase()).includes(s.toLowerCase()));

      const availabilityOk = !filters.availability || filters.availability.length === 0 ||
        filters.availability.includes(t.availability);

      const rate = t.hourlyRateUsd ?? Infinity;
      const minRateOk = filters.minRate == null || rate >= filters.minRate;
      const maxRateOk = filters.maxRate == null || rate <= filters.maxRate;

      const regionOk = !filters.region || filters.region.length === 0 || (t.region && filters.region.includes(t.region));

      const ratingOk = filters.minRating == null || (t.rating ?? 0) >= filters.minRating;

      return matchesQuery && skillsOk && availabilityOk && minRateOk && maxRateOk && regionOk && ratingOk;
    });
  }, [talent, query, filters]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end gap-4">
        <div className="flex-1">
          <label className="text-sm font-medium">Search</label>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, skill, role, or location"
            className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 flex-1">
          <div>
            <label className="text-sm font-medium">Availability</label>
            <select
              className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2"
              onChange={(e) => setFilters((f) => ({ ...f, availability: e.target.value ? [e.target.value as any] : [] }))}
            >
              <option value="">Any</option>
              <option>Open</option>
              <option>Part-time</option>
              <option>Booked</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Min Rate</label>
            <input type="number" placeholder="$" className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" onChange={(e) => setFilters((f) => ({ ...f, minRate: e.target.value ? Number(e.target.value) : undefined }))} />
          </div>
          <div>
            <label className="text-sm font-medium">Max Rate</label>
            <input type="number" placeholder="$" className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" onChange={(e) => setFilters((f) => ({ ...f, maxRate: e.target.value ? Number(e.target.value) : undefined }))} />
          </div>
          <div>
            <label className="text-sm font-medium">Min Rating</label>
            <select className="w-full mt-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/40 px-3 py-2" onChange={(e) => setFilters((f) => ({ ...f, minRating: e.target.value ? Number(e.target.value) : undefined }))}>
              <option value="">Any</option>
              <option value="4.5">4.5+</option>
              <option value="4.7">4.7+</option>
              <option value="4.9">4.9+</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Available Talent</h2>
        <a href="/talent/new" className="text-sm text-violet-600 hover:underline">Add Talent</a>
      </div>

      {loading ? (
        <div className="text-center py-20 text-gray-500">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((t) => (
            <TalentCard key={t.slug} talent={t} />
          ))}
        </div>
      )}
    </div>
  );
}