import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TALENT_PROFILES, TalentProfile } from '../../data/talent';

function findTalent(slug: string | string[] | undefined): TalentProfile | null {
  if (!slug || Array.isArray(slug)) return null;
  return TALENT_PROFILES.find((t) => t.slug === slug) || null;
}

function useFavorites() {
  const storageKey = 'zion_favorites';
  const [favorites, setFavorites] = useState<string[]>([]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setFavorites(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(favorites));
    } catch {}
  }, [favorites]);
  const toggle = (slug: string) => {
    setFavorites((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));
  };
  const has = (slug: string) => favorites.includes(slug);
  return { favorites, toggle, has };
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

export default function TalentProfilePage() {
  const router = useRouter();
  const { slug, hire } = router.query;
  const talent = useMemo(() => findTalent(slug), [slug]);
  const { toggle, has } = useFavorites();
  const [showHireModal, setShowHireModal] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitOk, setSubmitOk] = useState<boolean>(false);

  useEffect(() => {
    if (hire === '1') setShowHireModal(true);
  }, [hire]);

  if (!talent) {
    return (
      <div>
        <Head>
          <title>Talent Not Found — Zion</title>
        </Head>
        <p className="text-sm text-gray-600 dark:text-gray-300">We could not find this talent profile.</p>
        <div className="mt-4"><Link href="/talent"><a className="underline">Back to directory</a></Link></div>
      </div>
    );
  }

  const onSubmitHire = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    setSubmitting(true);
    setSubmitOk(false);
    try {
      const res = await fetch('/api/request-to-hire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ talentSlug: talent.slug, ...payload }),
      });
      setSubmitOk(res.ok);
      if (res.ok) {
        setTimeout(() => setShowHireModal(false), 1200);
      }
    } catch {
      setSubmitOk(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Head>
        <title>{talent.name} — {talent.title} | Zion AI Marketplace</title>
        <meta name="description" content={`Profile for ${talent.name}, ${talent.title}.`} />
      </Head>

      <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 flex-wrap">
            <li><Link href="/"><a className="hover:underline">Home</a></Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/talent"><a className="hover:underline">Talent</a></Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-900 dark:text-gray-100" aria-current="page">{talent.name}</li>
          </ol>
        </nav>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-black/40">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3">
              <div aria-hidden className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white grid place-items-center font-semibold">
                {getInitials(talent.name)}
              </div>
              <div>
                <h1 className="text-2xl font-semibold">{talent.name}</h1>
                <div className="text-gray-600 dark:text-gray-300">{talent.title}</div>
                <div className="text-xs mt-1 text-gray-500">{talent.location}</div>
              </div>
            </div>
            <button
              aria-label={has(talent.slug) ? 'Remove from favorites' : 'Save to favorites'}
              onClick={() => toggle(talent.slug)}
              className={`text-sm px-3 py-1.5 rounded-md border transition ${has(talent.slug) ? 'bg-pink-600 text-white border-pink-600' : 'border-pink-600 text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-950'}`}
            >
              {has(talent.slug) ? '♥ Saved' : '♡ Save'}
            </button>
          </div>

          <p className="mt-4 text-sm leading-6">{talent.bio}</p>

          <div className="mt-4 p-4 rounded-lg border border-indigo-500/30 bg-indigo-500/5">
            <div className="text-xs tracking-wide uppercase text-indigo-500">AI‑generated summary</div>
            <div className="mt-2 text-sm text-gray-800 dark:text-gray-200">
              {talent.bio} This is an extended AI summary placeholder elaborating on experience, impact, and strengths.
            </div>
          </div>

          <div className="mt-6">
            <h2 className="font-medium">Key Skills</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {talent.skills.map((s) => (
                <span key={s} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">{s}</span>
              ))}
            </div>
          </div>

          <details className="mt-6 group">
            <summary className="cursor-pointer select-none text-sm text-gray-700 dark:text-gray-300">Experience timeline</summary>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">Detailed experience coming soon.</div>
          </details>

          <div className="mt-6">
            <h2 className="font-medium">Portfolio</h2>
            <ul className="mt-2 list-disc list-inside text-sm text-indigo-600 dark:text-indigo-400">
              <li><a href="#" onClick={(e) => e.preventDefault()} className="hover:underline">Sample project link</a></li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="font-medium">Client Reviews</h2>
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">No reviews yet.</div>
          </div>
        </section>

        <aside className="lg:col-span-1 rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white/70 dark:bg-black/40 space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-sm">Rate</div>
            <div className="font-semibold">${talent.hourlyRateUsd}/hr</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">Availability</div>
            <div className="text-xs px-2 py-1 rounded-full bg-emerald-600/10 text-emerald-700 dark:text-emerald-300 border border-emerald-700/20">
              {talent.availability}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">Timezone/Region</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">{talent.location}</div>
          </div>
          <div className="flex items-center gap-3 text-gray-500">
            <a href="#" onClick={(e) => e.preventDefault()} aria-label="LinkedIn" className="hover:text-gray-900">in</a>
            <a href="#" onClick={(e) => e.preventDefault()} aria-label="X" className="hover:text-gray-900">X</a>
            <a href="#" onClick={(e) => e.preventDefault()} aria-label="Website" className="hover:text-gray-900">🌐</a>
          </div>
          <button onClick={() => setShowHireModal(true)} className="w-full mt-2 px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500">Request to Hire</button>
        </aside>
      </div>

      {showHireModal && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowHireModal(false)} />
          <div className="relative w-full max-w-lg rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-6">
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-semibold">Request to hire {talent.name}</h3>
              <button onClick={() => setShowHireModal(false)} aria-label="Close" className="text-gray-500 hover:text-gray-900">✕</button>
            </div>
            <form className="mt-4 space-y-4" onSubmit={onSubmitHire}>
              <div>
                <label className="block text-sm mb-1">Your name</label>
                <input name="requesterName" required className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40 px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm mb-1">Your email</label>
                <input name="requesterEmail" type="email" required className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40 px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm mb-1">Project details</label>
                <textarea name="projectInfo" required rows={4} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-black/40 px-3 py-2" />
              </div>
              <button disabled={submitting} className="w-full px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 disabled:opacity-60">{submitting ? 'Submitting...' : 'Submit Request'}</button>
              {submitOk && (
                <div className="text-sm text-emerald-600">Thanks! Your request has been submitted.</div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}