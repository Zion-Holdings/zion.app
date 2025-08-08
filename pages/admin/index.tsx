import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

const authKey = 'zion.isAuthenticated';
const recruiterKey = 'zion.isRecruiter';

const AdminIndex: NextPage = () => {
  const [authed, setAuthed] = useState(false);
  const [recruiter, setRecruiter] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    setAuthed(localStorage.getItem(authKey) === 'true');
    setRecruiter(localStorage.getItem(recruiterKey) === 'true');
  }, []);

  const toggle = (key: string, v: boolean) => {
    localStorage.setItem(key, v ? 'true' : 'false');
    if (key === authKey) setAuthed(v);
    if (key === recruiterKey) setRecruiter(v);
  };

  return (
    <div>
      <Head>
        <title>Admin</title>
      </Head>
      <main className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold">Admin Flags</h1>
        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <span>Authenticated user</span>
            <button
              className="rounded-md border border-zinc-300 px-3 py-1 hover:bg-zinc-50"
              onClick={() => toggle(authKey, !authed)}
            >
              {authed ? 'Disable' : 'Enable'}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span>Recruiter mode</span>
            <button
              className="rounded-md border border-zinc-300 px-3 py-1 hover:bg-zinc-50"
              onClick={() => toggle(recruiterKey, !recruiter)}
            >
              {recruiter ? 'Disable' : 'Enable'}
            </button>
          </div>
        </div>
        <p className="mt-6 text-sm text-zinc-600">Use this to simulate auth and recruiter access for demo purposes.</p>
      </main>
    </div>
  );
};

export default AdminIndex;