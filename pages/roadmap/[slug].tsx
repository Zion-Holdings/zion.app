import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Feature } from '../../types/roadmap';

export default function FeatureDetailsPage() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  const [data, setData] = useState<Feature | null>(null);

  useEffect(() => {
    async function load() {
      if (!slug) return;
      const res = await fetch(`/api/roadmap?id=${slug}`);
      const json = await res.json();
      setData(json);
    }
    load();
  }, [slug]);

  if (!data) return <main className="min-h-screen bg-zinc-950 text-white p-8">Loading…</main>;

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <button onClick={() => router.back()} className="text-sm text-zinc-400 hover:text-zinc-200">← Back</button>
        <h1 className="mt-3 text-3xl font-bold">{data.title}</h1>
        <div className="mt-2 text-zinc-400 text-sm">
          <span className="mr-3">Status: <span className="text-zinc-200">{data.status}</span></span>
          {data.etaQuarter && <span>ETA: <span className="text-zinc-200">{data.etaQuarter}</span></span>}
        </div>

        {data.previewImageUrl && (
          <img src={data.previewImageUrl} alt={data.title} className="mt-6 rounded-xl border border-zinc-800" />
        )}
        {data.previewEmbedUrl && (
          <div className="mt-6 aspect-video rounded-xl overflow-hidden border border-zinc-800">
            <iframe src={data.previewEmbedUrl} className="w-full h-full" allowFullScreen />
          </div>
        )}

        {data.description && (
          <p className="mt-6 text-zinc-300">{data.description}</p>
        )}

        {data.links?.length ? (
          <div className="mt-6">
            <div className="text-sm text-zinc-400">Resources</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {data.links.map((l) => (
                <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="px-3 py-1.5 text-sm rounded bg-zinc-800 hover:bg-zinc-700">{l.label}</a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}