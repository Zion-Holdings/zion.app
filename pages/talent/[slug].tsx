import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { TALENT_PROFILES, TalentProfile } from '../../data/talent';

type Props = { profile: TalentProfile | null };

export default function TalentProfilePage({ profile }: Props) {
  if (!profile) {
    return (
      <div className="py-12">
        <p className="text-slate-300">Profile not found.</p>
        <Link href="/talent"><a className="text-cyan-300 underline">Back to directory</a></Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center text-white font-semibold ring-1 ring-white/20 shadow-md">
            {profile.name.split(' ').map((p) => p[0]).slice(0, 2).join('')}
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-white">{profile.name}</h1>
            <p className="text-slate-300">{profile.title} • {profile.location}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-white text-xl font-semibold">${profile.hourlyRateUsd} / hr</div>
          <div className="text-slate-300 text-sm">{profile.experienceYears}+ years • Rating {profile.rating.toFixed(1)} • {profile.bookings} bookings</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h2 className="font-semibold text-white">Summary</h2>
            <p className="mt-2 text-slate-300">{profile.bio}</p>
          </section>
          <section className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h2 className="font-semibold text-white">Skills</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {profile.skills.map((s) => (
                <span key={s} className="inline-flex items-center rounded-full bg-white/10 px-2 py-1 text-xs text-slate-200 ring-1 ring-white/15">
                  {s}
                </span>
              ))}
            </div>
          </section>
        </div>
        <aside className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold text-white">Details</h3>
            <dl className="mt-2 grid grid-cols-2 gap-2 text-sm">
              <dt className="text-slate-400">Region</dt>
              <dd className="text-slate-200">{profile.region}</dd>
              <dt className="text-slate-400">Timezone</dt>
              <dd className="text-slate-200">{profile.timezone || '—'}</dd>
              <dt className="text-slate-400">Availability</dt>
              <dd className="text-slate-200">{profile.status ? profile.status : profile.availability}</dd>
              <dt className="text-slate-400">Added</dt>
              <dd className="text-slate-200">{new Date(profile.createdAt).toLocaleDateString()}</dd>
            </dl>
          </div>
          <Link href="/talent">
            <a className="block text-center rounded-lg bg-gradient-to-r from-cyan-500 to-violet-600 px-4 py-2 text-white font-medium">Back to Directory</a>
          </Link>
        </aside>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: TALENT_PROFILES.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params?.slug as string;
  const profile = TALENT_PROFILES.find((p) => p.slug === slug) || null;
  return { props: { profile } };
};