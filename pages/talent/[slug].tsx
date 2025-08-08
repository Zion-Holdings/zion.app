import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import type { TalentProfile } from '@/utils/types/talent';
import { TALENT_PROFILES as LOCAL } from '@/data/talent';

export default function TalentProfilePage() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  const [talent, setTalent] = useState<TalentProfile | null>(null);

  useEffect(() => {
    if (!slug) return;
    let isMounted = true;
    (async () => {
      try {
        const res = await fetch(`/api/talent/${slug}`);
        if (res.ok) {
          const data = await res.json();
          if (isMounted) setTalent(data.item || null);
        } else {
          const fallback = LOCAL.find((t) => t.slug === slug) || null;
          if (isMounted) setTalent(fallback);
        }
      } catch {
        const fallback = LOCAL.find((t) => t.slug === slug) || null;
        if (isMounted) setTalent(fallback);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [slug]);

  if (!talent) return <div className="py-10 text-gray-500">Loading...</div>;

  const rateLabel = talent.requestQuote
    ? 'Request Quote'
    : talent.hourlyRateUsd
    ? `$${talent.hourlyRateUsd}/hr`
    : 'Request Quote';

  return (
    <div className="max-w-4xl mx-auto">
      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/40 shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex items-start gap-6">
            <img src={talent.profileImageUrl || 'https://i.pravatar.cc/300'} alt={talent.name} className="h-24 w-24 rounded-2xl object-cover ring-2 ring-white/70 dark:ring-gray-800" />
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold">{talent.name}</h1>
                {talent.verified && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200">Verified</span>
                )}
                {talent.rating && talent.rating >= 4.8 && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-violet-100 text-violet-700 border border-violet-200">Top Rated</span>
                )}
                {talent.createdAt && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-700 border border-cyan-200">New</span>
                )}
              </div>
              <p className="mt-1 text-gray-600 dark:text-gray-300">{talent.title} {talent.category ? `• ${talent.category}` : ''}</p>
              <div className="mt-1 text-sm text-gray-500">{talent.location} {talent.timezone ? `• ${talent.timezone}` : ''}</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">{talent.availability}</div>
              <div className="mt-2 font-semibold">{rateLabel}</div>
              <a href={`mailto:hello@zion.app?subject=Hire ${encodeURIComponent(talent.name)}`} className="mt-3 inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 text-white shadow hover:opacity-90">Hire Now</a>
            </div>
          </div>

          <p className="mt-6 text-gray-800 dark:text-gray-100 leading-relaxed">{talent.summary}</p>

          {talent.skills?.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {talent.skills.map((s) => (
                <span key={s} className="text-xs px-2 py-1 rounded-full border bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/30 dark:text-cyan-300 dark:border-cyan-900">{s}</span>
              ))}
            </div>
          ) : null}

          {talent.videoUrl && (
            <div className="mt-8">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                <iframe src={talent.videoUrl} className="w-full h-80" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </div>
          )}

          {talent.portfolio && talent.portfolio.length > 0 && (
            <div className="mt-8">
              <h3 className="font-semibold">Portfolio</h3>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {talent.portfolio.map((p, idx) => (
                  <li key={idx} className="rounded-xl border border-gray-200 dark:border-gray-800 p-3 hover:border-violet-300/60 transition">
                    <a href={p.url} target="_blank" rel="noreferrer" className="text-violet-600 hover:underline">{p.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {typeof talent.rating === 'number' && (
            <div className="mt-8 text-sm text-gray-600 dark:text-gray-300">Rating: ⭐ {talent.rating.toFixed(1)} {talent.reviewsCount ? `(${talent.reviewsCount} reviews)` : ''}</div>
          )}
        </div>
      </div>
    </div>
  );
}