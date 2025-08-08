import React from 'react';
import { TalentProfile } from '../../data/talent';

export type TalentCardProps = {
  profile: TalentProfile;
  isFavorited: boolean;
  onToggleFavorite: (profile: TalentProfile) => void;
  onRequestHire: (profile: TalentProfile) => void;
};

export default function TalentCard({ profile, isFavorited, onToggleFavorite, onRequestHire }: TalentCardProps) {
  return (
    <div className="relative group rounded-2xl bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/30 dark:via-gray-900 dark:to-purple-950/30 p-1 shadow-sm hover:shadow-xl transition-shadow">
      <div className="relative rounded-2xl bg-white dark:bg-gray-900 p-5 h-full">
        {profile.featured && (
          <span className="absolute -top-3 left-4 z-10 inline-block rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-3 py-1 text-xs font-semibold text-white shadow">Featured Talent</span>
        )}

        <button
          aria-label={isFavorited ? 'Remove from favorites' : 'Save to favorites'}
          onClick={() => onToggleFavorite(profile)}
          className={`absolute -top-3 right-4 z-10 rounded-full p-2 shadow bg-white/80 dark:bg-gray-800/80 backdrop-blur ${
            isFavorited ? 'text-rose-500' : 'text-gray-500'
          } hover:scale-105 transition`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isFavorited ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 8.438 11.317 9 11.317.563 0 9-4.098 9-11.317z" />
          </svg>
        </button>

        <div className="flex items-start gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">{profile.name}</h3>
              {typeof profile.rating === 'number' && (
                <div className="flex items-center gap-1 text-amber-500 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.2 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.987 20.54a.562.562 0 01-.84-.61l1.285-5.385a.563.563 0 00-.182-.557l-4.2-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/></svg>
                  <span>{profile.rating.toFixed(2)}</span>
                </div>
              )}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{profile.title}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{profile.location} • {profile.timezone ?? '—'}</p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {profile.skills.slice(0, 6).map((skill) => (
            <span key={skill} className="inline-block rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 px-2.5 py-1 text-xs text-blue-700 dark:text-blue-200 border border-blue-200/60 dark:border-blue-700/40">
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
            <span className="rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-200 px-2 py-0.5 capitalize">{profile.availability}</span>
            <span>${profile.hourlyRateUsd}/hr</span>
            {typeof profile.experienceYears === 'number' && <span>{profile.experienceYears} yrs</span>}
            {typeof profile.bookings === 'number' && <span>{profile.bookings} bookings</span>}
          </div>
          <button onClick={() => onRequestHire(profile)} className="enhanced-button enhanced-button-primary">
            Request to Hire
          </button>
        </div>

        <div className="hidden lg:block">
          <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 dark:ring-white/10 pointer-events-none" />
          <div className="mt-3 text-sm text-gray-700 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity">
            {profile.bio}
          </div>
        </div>
      </div>
    </div>
  );
}