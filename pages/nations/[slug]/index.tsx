import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const NationPublicPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  const [nation, setNation] = useState<any>(null);
  const [joining, setJoining] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!slug) return;
    (async () => {
      const res = await fetch(`/api/nations/${slug}`);
      const data = await res.json();
      if (res.ok) setNation(data.nation);
    })();
  }, [slug]);

  async function handleJoin(role: 'talent' | 'client' | 'citizen') {
    if (!slug) return;
    setJoining(true);
    setError('');
    try {
      // In real app, userId would come from auth; use anonymous placeholder
      const res = await fetch(`/api/nations/${slug}/join`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: 'anonymous-user', role }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Join failed');
      setNation(data.nation);
    } catch (e: any) {
      setError(e?.message || 'Join failed');
    } finally {
      setJoining(false);
    }
  }

  return (
    <div>
      <Head>
        <title>{nation?.name ? `${nation.name} - Nation` : 'Nation'}</title>
      </Head>
      {!nation ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            {nation.flagDataUrl && <img src={nation.flagDataUrl} alt="Flag" className="h-10 w-10 rounded" />}
            <h1 className="text-2xl font-semibold">{nation.name}</h1>
            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs border">Country</span>
          </div>
          <p className="text-sm whitespace-pre-wrap">{nation.constitution}</p>

          <div className="flex gap-2">
            <button disabled={joining} onClick={() => handleJoin('citizen')} className="px-3 py-2 rounded bg-indigo-600 text-white disabled:opacity-50">Join Nation</button>
            <button disabled={joining} onClick={() => handleJoin('talent')} className="px-3 py-2 rounded border disabled:opacity-50">Join as Talent</button>
            <button disabled={joining} onClick={() => handleJoin('client')} className="px-3 py-2 rounded border disabled:opacity-50">Join as Client</button>
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}

          <div className="mt-6">
            <h2 className="font-medium mb-2">Map view</h2>
            <div className="h-48 border rounded flex items-center justify-center text-sm text-gray-500">
              Map of nations across the multiverse (placeholder)
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NationPublicPage;