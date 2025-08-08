import React, { useMemo, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { TALENT_PROFILES, TalentProfile } from '../../data/talent';
import HireRequestModal from '../../components/talent/HireRequestModal';

const TalentProfilePage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  const profile = useMemo(() => TALENT_PROFILES.find((t) => t.slug === slug), [slug]);

  const [hireOpen, setHireOpen] = useState(false);

  if (!profile) {
    return (
      <div className="space-y-4">
        <p>Talent not found.</p>
        <Link href="/talent" className="text-blue-600 hover:underline">Back to directory</Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">{profile.name}</h1>
          <p className="text-gray-600 dark:text-gray-300">{profile.title} • {profile.location} • {profile.timezone ?? '—'}</p>
        </div>
        <button onClick={() => setHireOpen(true)} className="enhanced-button enhanced-button-primary">Request to Hire</button>
      </div>

      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700 dark:text-gray-200">
          <span className="rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-200 px-2 py-0.5 capitalize">{profile.availability}</span>
          <span>${profile.hourlyRateUsd}/hr</span>
          {typeof profile.experienceYears === 'number' && <span>{profile.experienceYears} yrs</span>}
          {typeof profile.bookings === 'number' && <span>{profile.bookings} bookings</span>}
          {typeof profile.rating === 'number' && <span>⭐ {profile.rating.toFixed(2)}</span>}
        </div>

        <p className="mt-4 text-gray-800 dark:text-gray-100">{profile.bio}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <span key={skill} className="inline-block rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 px-2.5 py-1 text-xs text-blue-700 dark:text-blue-200 border border-blue-200/60 dark:border-blue-700/40">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <Link href="/talent" className="text-blue-600 hover:underline">Back to directory</Link>

      <HireRequestModal open={hireOpen} onClose={() => setHireOpen(false)} selectedTalent={profile as TalentProfile} />
    </div>
  );
};

export default TalentProfilePage;