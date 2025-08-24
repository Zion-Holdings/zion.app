import React, { useEffect, useMemo, useState } from 'react';
import RoadmapBoard from '../../components/roadmap/RoadmapBoard';
import { Feature, UserRole } from '../../types/roadmap';
import { v4 as uuidv4 } from 'uuid';
import Link from 'next/link';

export default function RoadmapPage() {
  const [data, setData] = useState<Feature[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [role, setRole] = useState<UserRole>('Talent');
  const userId = useMemo(() => {
    if (typeof window === 'undefined') return '';
    const key = 'zion_user_id';
    let id = window.localStorage.getItem(key) || '';
    if (!id) {
      id = `anon-${uuidv4()}`;
      window.localStorage.setItem(key, id);
    }
    return id;
  }, []);

  async function load() {
    setLoading(true);
    try {
      const res = await fetch('/api/roadmap');
      const json = await res.json();
      setData(json);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const savedRole = window.localStorage.getItem('zion_user_role') as UserRole | null;
    if (savedRole) setRole(savedRole);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('zion_user_role', role);
  }, [role]);

  async function handleUpvote(feature: Feature) {
    await fetch('/api/roadmap/upvote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ featureId: feature.id, voterId: userId, role }),
    });
    load();
  }

  async function handleFollow(feature: Feature) {
    await fetch('/api/roadmap/follow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ featureId: feature.id, followerId: userId }),
    });
    load();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Zion Roadmap</h1>
            <p className="text-zinc-400 mt-1">Transparent, community-driven roadmap. View, follow, and vote on upcoming features.</p>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm text-zinc-300">Your role</label>
            <select className="bg-zinc-900 border border-zinc-800 rounded px-2 py-1 text-sm" value={role} onChange={(e) => setRole(e.target.value as UserRole)}>
              <option>Talent</option>
              <option>Client</option>
              <option>ZION$ staker</option>
            </select>
            <Link href="/roadmap/suggest"><a className="px-3 py-1.5 text-sm rounded bg-emerald-600 hover:bg-emerald-500">Suggest a Feature</a></Link>
          </div>
        </div>

        <div className="mt-8">
          {loading || !data ? (
            <div className="text-zinc-400">Loading roadmap…</div>
          ) : (
            <RoadmapBoard features={data} onUpvote={handleUpvote} onFollow={handleFollow} />
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-zinc-300">
          <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/40">
            <div className="font-semibold text-zinc-200">Voting Heat</div>
            <div className="mt-2 h-24 bg-gradient-to-r from-amber-500/30 via-rose-500/30 to-indigo-500/30 rounded" />
          </div>
          <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/40">
            <div className="font-semibold text-zinc-200">Milestones</div>
            <div className="mt-2 text-zinc-400">GitHub-style milestones coming soon.</div>
          </div>
          <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/40">
            <div className="font-semibold text-zinc-200">Changelogs</div>
            <div className="mt-2 text-zinc-400">Admin can publish roadmap version releases.</div>
          </div>
        </div>
      </div>
    </main>
  );
}