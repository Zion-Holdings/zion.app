import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TALENT_PROFILES } from '@/data/talent';

const TalentDetail: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  const profile = TALENT_PROFILES.find((p) => p.slug === slug);

  if (!profile) {
    return (
      <div>
        <Head>
          <title>Talent Not Found — Zion</title>
        </Head>
        <main>
          <h1 className="text-2xl font-semibold">Talent not found</h1>
          <p className="mt-2 text-white/80">The requested profile doesn’t exist.</p>
          <Link href="/talent"><a className="mt-4 inline-block text-cyan-300">Back to marketplace</a></Link>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>{profile.name} — {profile.title} | Zion</title>
        <meta name="description" content={profile.bio} />
      </Head>
      <main>
        <Link href="/talent"><a className="text-cyan-300">← Back to marketplace</a></Link>
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">{profile.name}</h1>
              <p className="text-white/80">{profile.title} — {profile.location}</p>
            </div>
            <div className="text-right">
              <div className="text-sm">Rate</div>
              <div className="text-xl font-semibold">${profile.hourlyRateUsd}/hr</div>
              <div className="mt-1 text-xs bg-white/10 rounded px-2 py-1 inline-block capitalize">{profile.availability}</div>
            </div>
          </div>
          <p className="mt-5 text-white/90 leading-relaxed">{profile.bio}</p>
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((s) => (
                <span key={s} className="text-sm bg-white/10 rounded px-2 py-1">{s}</span>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <Link href={`/contact?subject=Talent%20Inquiry:%20${encodeURIComponent(profile.name)}`}>
              <a className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:shadow-[0_0_35px_rgba(34,211,238,0.55)]">Contact about {profile.name}</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TalentDetail;