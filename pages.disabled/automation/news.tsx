import { useEffect, useState } from 'react';
import Link from 'next/link';

type Digest = { slug: string; route: string; createdAt: number; items: number };

export default function NewsAutomation() {
  const [digests, setDigests] = useState<Digest[]>([]);

  useEffect(() => {
    fetch('/api/news/digests').then(r => r.json()).then(setDigests).catch(() => setDigests([]));
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Autonomous News Digest</h1>
        <p className="text-gray-600 mt-2">Fetches trending tech stories and publishes a curated digest. Runs on a schedule and commits changes automatically.</p>
      </div>
      <div className="space-y-2">
        <h2 className="text-lg font-medium">Recent Digests</h2>
        <ul className="space-y-2">
          {digests.map(d => (
            <li key={d.slug} className="flex items-center justify-between border rounded p-3 text-sm">
              <Link href={d.route}><a className="underline font-medium">{d.slug.replace('digest-','')}</a></Link>
              <span className="text-gray-600">{d.items} items</span>
            </li>
          ))}
          {digests.length === 0 && <div className="text-gray-500 text-sm">No digests yet.</div>}
        </ul>
      </div>
    </div>
  );
}