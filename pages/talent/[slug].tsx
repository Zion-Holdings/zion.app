import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { TALENT_PROFILES, TalentProfile } from '../../data/talent';

function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const raw = localStorage.getItem('favorites');
    setFavorites(raw ? JSON.parse(raw) : []);
  }, []);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
  const toggle = (slug: string) => {
    setFavorites((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  };
  return { favorites, toggle };
}

export default function TalentProfilePage() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  const profile: TalentProfile | undefined = useMemo(
    () => TALENT_PROFILES.find((t) => t.slug === slug),
    [slug]
  );
  const { favorites, toggle } = useFavorites();

  if (!profile) return null;

  const isSaved = favorites.includes(profile.slug);

  return (
    <div className="space-y-8">
      <Head>
        <title>{profile.name} — {profile.title}</title>
      </Head>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0">
          <div className="relative h-32 w-32 rounded-full overflow-hidden bg-gray-100">
            <Image src={`/avatars/${profile.slug}.jpg`} alt={profile.name} layout="fill" objectFit="cover" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-semibold">{profile.name}</h1>
          <div className="text-gray-600">{profile.title}</div>
          <div className="text-sm text-gray-500">{profile.location}</div>
          <div className="mt-3 flex items-center gap-3">
            <span className="px-3 py-1 rounded bg-blue-50 text-blue-700 text-sm">${profile.hourlyRateUsd}/hr</span>
            <span className="px-3 py-1 rounded bg-gray-100 text-gray-700 text-sm">{profile.availability}</span>
            <button
              onClick={() => toggle(profile.slug)}
              className={`px-3 py-1 rounded text-sm border ${isSaved ? 'bg-yellow-100 border-yellow-300' : 'bg-white'}`}
            >
              {isSaved ? 'Saved to Favorites' : 'Save to Favorites'}
            </button>
            <Link href={`/request-to-hire?talent=${profile.slug}`}>
              <a className="px-3 py-1 rounded text-sm bg-black text-white">Request to Hire</a>
            </Link>
          </div>
        </div>
      </div>

      <section>
        <h2 className="text-xl font-medium mb-2">AI Summary</h2>
        <p className="text-gray-700 leading-relaxed">
          {profile.bio}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {profile.skills.map((s) => (
            <span key={s} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">{s}</span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-medium mb-2">Experience</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>Recent project highlights and roles will appear here.</li>
          <li>Timeline UI can be extended with real data.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-medium mb-2">Portfolio</h2>
        <p className="text-sm text-gray-600">Links or embedded projects can be displayed here.</p>
      </section>

      <section>
        <h2 className="text-xl font-medium mb-2">Client Reviews</h2>
        <p className="text-sm text-gray-600">Reviews and ratings coming soon.</p>
      </section>
    </div>
  );
}