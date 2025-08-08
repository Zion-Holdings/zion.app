import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TALENT_PROFILES } from '../data/talent';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<string[]>([]);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const raw = localStorage.getItem('favorites');
    setFavorites(raw ? JSON.parse(raw) : []);
  }, []);

  const saved = useMemo(
    () => TALENT_PROFILES.filter((t) => favorites.includes(t.slug)),
    [favorites]
  );

  if (saved.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <h1 className="text-2xl font-semibold mb-2">No favorites yet</h1>
        <p className="text-gray-600 mb-6">Save profiles to quickly access them later.</p>
        <Link href="/talent"><a className="px-4 py-2 rounded bg-black text-white">Explore Talent</a></Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Your Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {saved.map((t) => (
          <div key={t.slug} className="border rounded-lg p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                <Image src={`/avatars/${t.slug}.jpg`} alt={t.name} layout="fill" objectFit="cover" />
              </div>
              <div>
                <div className="font-medium">{t.name}</div>
                <div className="text-sm text-gray-500">{t.title}</div>
              </div>
            </div>
            <div className="text-sm">${t.hourlyRateUsd}/hr • {t.availability}</div>
            <div className="flex items-center gap-2">
              <Link href={`/talent/${t.slug}`}><a className="text-sm font-medium text-blue-600 hover:underline">View Profile</a></Link>
              <Link href={`/request-to-hire?talent=${t.slug}`}><a className="text-sm px-2 py-1 rounded bg-black text-white">Request to Hire</a></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}