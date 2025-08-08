import React, { useEffect, useMemo, useState } from 'react';
import type { NextPage } from 'next';
import { TALENT_PROFILES, TalentProfile } from '../../data/talent';
import TalentCard from '../../components/talent/TalentCard';
import FilterSidebar, { Filters } from '../../components/talent/FilterSidebar';
import SearchSortBar from '../../components/talent/SearchSortBar';
import HireRequestModal from '../../components/talent/HireRequestModal';
import Link from 'next/link';

const TalentDirectoryPage: NextPage = () => {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [filters, setFilters] = useState<Filters>({ skills: [], availability: '', experienceMin: undefined, experienceMax: undefined, region: '', rateMin: undefined, rateMax: undefined });
  const [favorites, setFavorites] = useState<string[]>([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [hireOpen, setHireOpen] = useState(false);
  const [selectedTalent, setSelectedTalent] = useState<TalentProfile | null>(null);

  const isAuthed = useMemo(() => {
    if (typeof window === 'undefined') return false;
    try {
      return !!localStorage.getItem('authUser');
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem('favoriteTalentSlugs');
      if (raw) setFavorites(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('favoriteTalentSlugs', JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  const allSkills = useMemo(() => TALENT_PROFILES.flatMap((t) => t.skills), []);

  const filtered = useMemo(() => {
    let list = [...TALENT_PROFILES];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((t) =>
        t.name.toLowerCase().includes(q) ||
        t.title.toLowerCase().includes(q) ||
        t.skills.some((s) => s.toLowerCase().includes(q))
      );
    }

    if (filters.skills.length) {
      list = list.filter((t) => filters.skills.every((s) => t.skills.includes(s)));
    }

    if (filters.availability) {
      list = list.filter((t) => t.availability === filters.availability);
    }

    if (filters.region) {
      list = list.filter((t) => (t.timezone ?? '').toLowerCase() === filters.region.toLowerCase());
    }

    if (typeof filters.experienceMin === 'number') {
      list = list.filter((t) => (t.experienceYears ?? 0) >= filters.experienceMin!);
    }
    if (typeof filters.experienceMax === 'number') {
      list = list.filter((t) => (t.experienceYears ?? 0) <= filters.experienceMax!);
    }

    if (typeof filters.rateMin === 'number') {
      list = list.filter((t) => t.hourlyRateUsd >= filters.rateMin!);
    }
    if (typeof filters.rateMax === 'number') {
      list = list.filter((t) => t.hourlyRateUsd <= filters.rateMax!);
    }

    switch (sortBy) {
      case 'mostBooked':
        list.sort((a, b) => (b.bookings ?? 0) - (a.bookings ?? 0));
        break;
      case 'topRated':
        list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        break;
      case 'priceAsc':
        list.sort((a, b) => a.hourlyRateUsd - b.hourlyRateUsd);
        break;
      case 'priceDesc':
        list.sort((a, b) => b.hourlyRateUsd - a.hourlyRateUsd);
        break;
      case 'newest':
      default:
        list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return list;
  }, [search, filters, sortBy]);

  function handleToggleFavorite(talent: TalentProfile) {
    if (!isAuthed) {
      alert('Please log in to save favorites. Redirecting to sign-in…');
      window.location.href = '/auth';
      return;
    }
    setFavorites((prev) => (prev.includes(talent.slug) ? prev.filter((s) => s !== talent.slug) : [...prev, talent.slug]));
  }

  function handleRequestHire(talent: TalentProfile) {
    setSelectedTalent(talent);
    setHireOpen(true);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold">Talent Directory</h1>
        <Link href="/join-talent" className="text-sm text-blue-600 hover:underline">Join as Talent</Link>
      </div>

      <SearchSortBar search={search} onSearch={setSearch} sortBy={sortBy} onSortBy={setSortBy} />

      <div className="flex gap-6">
        <div className="hidden sm:block">
          <FilterSidebar
            allSkills={allSkills}
            filters={filters}
            onChange={setFilters}
            onClear={() => setFilters({ skills: [], availability: '', experienceMin: undefined, experienceMax: undefined, region: '', rateMin: undefined, rateMax: undefined })}
          />
        </div>

        <div className="flex-1">
          {filtered.length === 0 ? (
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-10 text-center text-gray-600 dark:text-gray-300">No talent matches your criteria.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((t) => (
                <TalentCard
                  key={t.slug}
                  profile={t}
                  isFavorited={favorites.includes(t.slug)}
                  onToggleFavorite={handleToggleFavorite}
                  onRequestHire={handleRequestHire}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter button */}
      <button
        onClick={() => setMobileFiltersOpen(true)}
        className="sm:hidden fixed bottom-5 right-5 rounded-full bg-blue-600 text-white shadow-lg px-4 py-3 flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6A1.5 1.5 0 019 7.5v9A1.5 1.5 0 0010.5 18h9.75M10.5 6V4.5A1.5 1.5 0 0112 3h6.75A1.5 1.5 0 0120.25 4.5V6m0 12V19.5A1.5 1.5 0 0018.75 18H12a1.5 1.5 0 01-1.5-1.5V18m9.75 0H21" />
        </svg>
        Filters
      </button>

      {mobileFiltersOpen && (
        <div className="sm:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-900 rounded-t-2xl p-4 shadow-2xl max-h-[80vh] overflow-y-auto">
            <FilterSidebar
              allSkills={allSkills}
              filters={filters}
              onChange={setFilters}
              onClear={() => setFilters({ skills: [], availability: '', experienceMin: undefined, experienceMax: undefined, region: '', rateMin: undefined, rateMax: undefined })}
            />
            <div className="mt-3 flex justify-end">
              <button onClick={() => setMobileFiltersOpen(false)} className="enhanced-button enhanced-button-primary">Done</button>
            </div>
          </div>
        </div>
      )}

      <HireRequestModal open={hireOpen} onClose={() => setHireOpen(false)} selectedTalent={selectedTalent} />
    </div>
  );
};

export default TalentDirectoryPage;