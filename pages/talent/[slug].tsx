import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import EnhancedLayout from '@/components/layout/EnhancedLayout';
import { TALENT_PROFILES } from '@/data/talent';

const TalentDetail: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  const talent = TALENT_PROFILES.find((t) => t.slug === slug);

  if (!talent) {
    return (
      <EnhancedLayout>
        <Head>
          <title>Talent Not Found - Zion Tech Solutions</title>
        </Head>
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">Talent not found</h1>
          <Link href="/talent"><a className="text-blue-600 hover:underline">Back to Talents</a></Link>
        </div>
      </EnhancedLayout>
    );
  }

  return (
    <EnhancedLayout>
      <Head>
        <title>{talent.name} - Zion Tech Solutions</title>
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <img src={`https://picsum.photos/seed/${encodeURIComponent(talent.slug)}/1200/600`} alt={talent.name} className="w-full rounded-lg border border-gray-200 dark:border-gray-800" />
          <div>
            <h1 className="text-2xl font-semibold">{talent.name}</h1>
            <p className="opacity-80">{talent.title} • {talent.location}</p>
          </div>
          <p className="leading-relaxed">{talent.bio}</p>
          <div className="flex flex-wrap gap-2">
            {[talent.availability, ...talent.skills].map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700">{tag}</span>
            ))}
          </div>
        </div>
        <aside className="md:col-span-1 space-y-3 p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 h-max">
          <div className="text-sm opacity-70">Hourly Rate</div>
          <div className="text-xl font-semibold">${talent.hourlyRateUsd}/hr</div>
          <Link href={`/contact?subject=${encodeURIComponent('Talent request: ' + talent.name)}`}>
            <a className="inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Request Quote</a>
          </Link>
          <Link href="/talent"><a className="text-sm text-blue-600 hover:underline">Back to Talents</a></Link>
        </aside>
      </div>
    </EnhancedLayout>
  );
};

export default TalentDetail;