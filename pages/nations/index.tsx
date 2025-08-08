import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NationsIndexPage: NextPage = () => {
  const [nations, setNations] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/nations');
      const data = await res.json();
      if (res.ok) setNations(data.nations || []);
    })();
  }, []);

  return (
    <div>
      <Head>
        <title>Nations - Zion OS</title>
      </Head>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Nations</h1>
        <Link href="/nation-builder"><a className="px-3 py-2 rounded bg-indigo-600 text-white">Create Nation</a></Link>
      </div>

      <div className="h-56 border rounded flex items-center justify-center text-sm text-gray-500 mb-4">Map of nations across the multiverse (placeholder)</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {nations.map((n) => (
          <Link key={n.id} href={`/nations/${n.slug}`}>
            <a className="p-3 border rounded hover:shadow">
              <div className="flex items-center gap-2 mb-2">
                {n.flagDataUrl && <img src={n.flagDataUrl} alt="Flag" className="h-6 w-6 rounded" />}
                <p className="font-medium">{n.name}</p>
              </div>
              <p className="text-xs text-gray-500">Governance: {n.governanceStyle}</p>
              <p className="text-xs text-gray-500">Currency: {n.currency}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NationsIndexPage;