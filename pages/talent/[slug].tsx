import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { TALENT_PROFILES } from '../../data/talent';

export default function TalentPublicProfile() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  const profile = TALENT_PROFILES.find((t) => t.slug === slug);

  return (
    <div className="min-h-screen p-6">
      <Head>
        <title>{profile ? `${profile.name} | Zion` : 'Talent | Zion'}</title>
      </Head>
      {!profile ? (
        <div>
          <p className="text-zinc-600">Profile not found.</p>
          <Link href="/talent"><a className="text-indigo-600 underline">Back</a></Link>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto space-y-4">
          <div>
            <h1 className="text-2xl font-bold">{profile.name}</h1>
            <div className="text-zinc-600">{profile.title} • {profile.location}</div>
          </div>
          <p className="text-sm whitespace-pre-line">{profile.bio}</p>
          <div>
            <h3 className="font-semibold">Skills</h3>
            <div className="flex flex-wrap gap-1 mt-1">
              {profile.skills.map((s) => (
                <span key={s} className="text-xs bg-zinc-100 px-2 py-1 rounded-md border border-zinc-200">{s}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}