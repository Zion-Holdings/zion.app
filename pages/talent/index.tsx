import Link from 'next/link';
import Image from 'next/image';
import { TALENT_PROFILES } from '../../data/talent';

export default function TalentIndexPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Talent</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {TALENT_PROFILES.map((t) => (
          <div key={t.slug} className="border rounded-lg p-4 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                <Image src={`/avatars/${t.slug}.jpg`} alt={t.name} layout="fill" objectFit="cover" />
              </div>
              <div>
                <div className="font-medium">{t.name}</div>
                <div className="text-sm text-gray-500">{t.title}</div>
              </div>
            </div>
            <div className="text-sm text-gray-600 line-clamp-2">{t.bio}</div>
            <div className="flex flex-wrap gap-2">
              {t.skills.slice(0, 4).map((s) => (
                <span key={s} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">{s}</span>
              ))}
              {t.skills.length > 4 && (
                <span className="text-xs text-gray-500">+{t.skills.length - 4} more</span>
              )}
            </div>
            <div className="flex items-center justify-between pt-2">
              <div className="text-sm">${t.hourlyRateUsd}/hr • {t.availability}</div>
              <Link href={`/talent/${t.slug}`}>
                <a className="text-sm font-medium text-blue-600 hover:underline">View Profile</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}