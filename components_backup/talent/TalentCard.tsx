import Link from 'next/link';
import { TalentProfile } from '@/utils/types/talent';

export type TalentCardProps = {
  talent: TalentProfile;
};

export default function TalentCard({ talent }: TalentCardProps) {
  const rateLabel = talent.requestQuote
    ? 'Request Quote'
    : talent.hourlyRateUsd
    ? `$${talent.hourlyRateUsd}/hr`
    : 'Request Quote';

  const availabilityColor =
    talent.availability === 'Open'
      ? 'bg-emerald-100 text-emerald-700 border-emerald-200'
      : talent.availability === 'Part-time'
      ? 'bg-amber-100 text-amber-700 border-amber-200'
      : 'bg-rose-100 text-rose-700 border-rose-200';

  return (
    <Link href={`/talent/${talent.slug}`}>
      <a className="group block rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/40 hover:bg-white/90 dark:hover:bg-gray-900/60 shadow-sm hover:shadow-xl hover:shadow-violet-500/10 transition overflow-hidden">
        <div className="p-5">
          <div className="flex items-start gap-4">
            <img
              src={talent.profileImageUrl || 'https://i.pravatar.cc/300'}
              alt={talent.name}
              className="h-16 w-16 rounded-xl object-cover ring-2 ring-white/70 dark:ring-gray-800"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold truncate">{talent.name}</h3>
                {talent.verified && (
                  <span title="Verified" className="inline-flex items-center text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200">Verified</span>
                )}
                {talent.rating && talent.rating >= 4.8 && (
                  <span title="Top Rated" className="inline-flex items-center text-xs px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 border border-violet-200">Top Rated</span>
                )}
              </div>
              <p className="mt-0.5 text-sm text-gray-600 dark:text-gray-300 truncate">{talent.title}</p>
              <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                <span>{talent.location}</span>
                {talent.timezone && <span>• {talent.timezone}</span>}
              </div>
            </div>
            <div className={`text-xs px-2 py-1 rounded-full border ${availabilityColor}`}>{talent.availability}</div>
          </div>

          <p className="mt-4 text-sm text-gray-700 dark:text-gray-200 line-clamp-3">{talent.summary}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {talent.skills.slice(0, 6).map((skill) => (
              <span key={skill} className="text-xs px-2 py-1 rounded-full border bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/30 dark:text-cyan-300 dark:border-cyan-900">{skill}</span>
            ))}
            {talent.skills.length > 6 && (
              <span className="text-xs px-2 py-1 rounded-full border bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700">+{talent.skills.length - 6}</span>
            )}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <div className="text-sm font-medium">{rateLabel}</div>
            {talent.rating && (
              <div className="text-xs text-gray-600 dark:text-gray-300">
                ⭐ {talent.rating.toFixed(1)} {talent.reviewsCount ? `(${talent.reviewsCount})` : ''}
              </div>
            )}
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition" />
      </a>
    </Link>
  );
}