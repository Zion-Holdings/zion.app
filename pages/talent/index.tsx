import Link from 'next/link';
import Head from 'next/head';
import { TALENT_PROFILES } from '../../data/talent';
import { useEffect, useState } from 'react';

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

export default function TalentDirectoryPage() {
  const { toggle, has } = useFavorites();
  return (
    <div>
      <Head>
        <title>Talent Directory — Zion AI Marketplace</title>
        <meta name="description" content="Browse top AI talent available for hire. View profiles, skills, rates, and availability." />
      </Head>
      <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2">
            <li><Link href="/"><a className="hover:underline">Home</a></Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-900 dark:text-gray-100" aria-current="page">Talent</li>
          </ol>
        </nav>
      </div>

      <h1 className="text-2xl font-semibold mb-4">Talent Directory</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">Handpicked experts ready to join your project.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TALENT_PROFILES.map((t) => (
          <div key={t.slug} className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white/70 dark:bg-black/40 backdrop-blur">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div aria-hidden className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white grid place-items-center font-semibold">
                  {getInitials(t.name)}
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{t.name}</h2>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{t.title}</div>
                  <div className="text-xs mt-1 text-gray-500">{t.location}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  aria-label={has(t.slug) ? 'Remove from favorites' : 'Save to favorites'}
                  onClick={() => toggle(t.slug)}
                  className={`text-sm px-2 py-1 rounded-md border transition ${has(t.slug) ? 'bg-pink-600 text-white border-pink-600' : 'border-pink-600 text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-950'}`}
                >
                  {has(t.slug) ? '♥' : '♡'}
                </button>
                <div className="text-xs px-2 py-1 rounded-full bg-emerald-600/10 text-emerald-700 dark:text-emerald-300 border border-emerald-700/20">
                  {t.availability}
                </div>
              </div>
            </div>

            <p className="text-sm mt-3 line-clamp-3">{t.bio}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {t.skills.slice(0, 6).map((s) => (
                <span key={s} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">{s}</span>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <div className="font-medium">${t.hourlyRateUsd}/hr</div>
              <div className="flex items-center gap-3">
                <Link href={`/talent/${t.slug}`}>
                  <a className="px-3 py-1.5 rounded-md bg-indigo-600 text-white hover:bg-indigo-500 transition">View Profile</a>
                </Link>
                <Link href={`/talent/${t.slug}?hire=1`}>
                  <a className="px-3 py-1.5 rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition">Request to Hire</a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}