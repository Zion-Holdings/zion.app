import React, { useMemo, useState } from 'react';
import EnhancedTalentCard from '../../components/EnhancedTalentCard';
import TalentFilters, { TalentFilterState } from '../../components/filters/TalentFilters';
import { TALENT_PROFILES, TalentProfile } from '../../data/talent';

const PAGE_SIZE = 12;

function applyFilters(data: TalentProfile[], filters: TalentFilterState): TalentProfile[] {
  const queryLower = filters.query.trim().toLowerCase();
  return data.filter((p) => {
    const matchesQuery = queryLower
      ? p.name.toLowerCase().includes(queryLower) ||
        p.skills.some((s) => s.toLowerCase().includes(queryLower))
      : true;

    const matchesSkills = filters.skills.length
      ? filters.skills.every((s) => p.skills.map((x) => x.toLowerCase()).includes(s.toLowerCase()))
      : true;

    const availabilityStatus = p.status ?? (p.availability === 'part-time' ? 'part-time' : 'available');
    const matchesAvailability = filters.availability.length
      ? filters.availability.includes(availabilityStatus as any) || filters.availability.includes(p.availability as any)
      : true;

    const matchesExperience =
      (filters.minExperience == null || p.experienceYears >= filters.minExperience) &&
      (filters.maxExperience == null || p.experienceYears <= filters.maxExperience);

    const matchesRegion = filters.region ? p.region === filters.region : true;

    const matchesRate =
      (filters.minRate == null || p.hourlyRateUsd >= filters.minRate) &&
      (filters.maxRate == null || p.hourlyRateUsd <= filters.maxRate);

    return matchesQuery && matchesSkills && matchesAvailability && matchesExperience && matchesRegion && matchesRate;
  });
}

function applySort(data: TalentProfile[], sortBy: TalentFilterState['sortBy']): TalentProfile[] {
  const sorted = [...data];
  if (sortBy === 'newest') {
    sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } else if (sortBy === 'top-rated') {
    sorted.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'most-booked') {
    sorted.sort((a, b) => b.bookings - a.bookings);
  }
  return sorted;
}

export default function TalentDirectoryPage() {
  const [filters, setFilters] = useState<TalentFilterState>({
    query: '',
    skills: [],
    availability: [],
    minExperience: undefined,
    maxExperience: undefined,
    region: undefined,
    minRate: undefined,
    maxRate: undefined,
    sortBy: 'newest',
  });
  const [page, setPage] = useState(1);

  const allSkills = useMemo(() => {
    const set = new Set<string>();
    TALENT_PROFILES.forEach((p) => p.skills.forEach((s) => set.add(s)));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => applyFilters(TALENT_PROFILES, filters), [filters]);
  const sorted = useMemo(() => applySort(filtered, filters.sortBy), [filtered, filters.sortBy]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageData = sorted.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const resetPagination = () => setPage(1);

  return (
    <div className="space-y-6">
      <div className="pt-2">
        <h1 className="text-2xl md:text-3xl font-semibold text-white">Talent Directory</h1>
        <p className="text-slate-300 mt-1">Discover AI‑enhanced professionals ready to accelerate your projects.</p>
      </div>

      <TalentFilters
        value={filters}
        onChange={(next) => {
          setFilters(next);
          resetPagination();
        }}
        allSkills={allSkills}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {pageData.map((profile) => (
          <EnhancedTalentCard key={profile.slug} profile={profile} />
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 py-4 border-t border-white/10">
        <div className="text-sm text-slate-300">
          Showing {(currentPage - 1) * PAGE_SIZE + 1}-{Math.min(currentPage * PAGE_SIZE, sorted.length)} of {sorted.length}
        </div>
        <div className="flex items-center gap-2">
          <button
            className="rounded-lg px-3 py-1.5 text-sm bg-white/10 text-white disabled:opacity-40"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="text-sm text-slate-300">Page {currentPage} / {totalPages}</div>
          <button
            className="rounded-lg px-3 py-1.5 text-sm bg-white/10 text-white disabled:opacity-40"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}