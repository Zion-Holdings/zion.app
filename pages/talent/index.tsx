import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { TALENT_PROFILES } from '@/data/talent';

const TalentIndex: NextPage = () => {
  return (
    <div>
      <Head>
        <title>AI Talent Marketplace — Zion</title>
        <meta name="description" content="Discover vetted AI and cloud talent for your next project." />
      </Head>

      <main>
        <h1 className="text-3xl font-bold mb-4">AI Talent Marketplace</h1>
        <p className="text-neutral-600 dark:text-neutral-300 mb-8">Vetted experts in LLMs, cloud, data, and security. Browse profiles and connect directly.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TALENT_PROFILES.map((p) => (
            <Link key={p.slug} href={`/talent/${p.slug}`}>
              <a className="group block rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="text-sm text-white/70">{p.title} — {p.location}</p>
                  </div>
                  <span className="text-sm font-medium bg-white/10 rounded-md px-2 py-1">${p.hourlyRateUsd}/hr</span>
                </div>
                <p className="mt-3 text-white/80 line-clamp-2">{p.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.skills.slice(0,6).map((s) => (
                    <span key={s} className="text-xs bg-white/10 rounded px-2 py-1">{s}</span>
                  ))}
                </div>
                <div className="mt-5 text-cyan-300 group-hover:underline">View profile →</div>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TalentIndex;