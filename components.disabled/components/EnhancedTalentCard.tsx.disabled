import Link from 'next/link';
import React from 'react';
import type { TalentProfile } from '../data/talent';

export type EnhancedTalentCardProps = {
  profile: TalentProfile;
};

function AvailabilityBadge({ status }: { status?: 'available' | 'booked' | 'part-time' }) {
  const map: Record<string, string> = {
    available: 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30',
    booked: 'bg-rose-500/15 text-rose-300 ring-1 ring-rose-500/30',
    'part-time': 'bg-amber-500/15 text-amber-300 ring-1 ring-amber-500/30',
  };
  const cls = status ? map[status] : 'bg-slate-500/15 text-slate-300 ring-1 ring-slate-500/30';
  const label = status ? (status === 'part-time' ? 'Part-time' : status.charAt(0).toUpperCase() + status.slice(1)) : 'Unknown';
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${cls}`}>{label}</span>
  );
}

export default function EnhancedTalentCard({ profile }: EnhancedTalentCardProps) {
  const displayedSkills = profile.skills.slice(0, 4);
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 dark:bg-black/40 backdrop-blur hover:bg-white/10 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/10">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="p-4 flex gap-4">
        <div className="shrink-0">
          <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white font-semibold ring-1 ring-white/20 shadow-md">
            {profile.name.split(' ').map((p) => p[0]).slice(0, 2).join('')}
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="truncate font-semibold text-base text-white">{profile.name}</h3>
              <p className="truncate text-sm text-slate-300">{profile.title}</p>
            </div>
            <AvailabilityBadge status={profile.status} />
          </div>
          <p className="mt-2 text-sm text-slate-300" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as any, overflow: 'hidden' }}>{profile.bio}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {displayedSkills.map((skill) => (
              <span key={skill} className="inline-flex items-center rounded-full bg-white/10 px-2 py-1 text-xs text-slate-200 ring-1 ring-white/15">
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-slate-300">${profile.hourlyRateUsd} / hr • {profile.experienceYears}+ yrs</div>
            <Link href={`/talent/${profile.slug}`}>
              <a className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 px-3 py-1.5 text-sm font-medium text-white shadow hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-400">
                View Profile
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}