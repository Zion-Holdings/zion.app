import { useState } from 'react';

type Partner = {
  name: string;
  category: 'University' | 'Bank' | 'DAO' | 'Enterprise';
  description: string;
  url: string;
};

export default function PartnerBooths({ partners }: { partners: Partner[] }) {
  const [active, setActive] = useState<Partner | null>(null);
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {partners.map(p => (
          <button key={p.name} onClick={() => setActive(p)} className="p-4 border rounded-lg text-left hover:bg-gray-50 dark:hover:bg-gray-900">
            <div className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 inline-block mb-2">{p.category}</div>
            <div className="font-medium">{p.name}</div>
            <div className="text-sm opacity-70 line-clamp-2">{p.description}</div>
          </button>
        ))}
      </div>
      {active && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setActive(null)}>
          <div className="bg-white dark:bg-black max-w-lg w-full rounded-lg p-6 border" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-3">
              <div className="font-semibold">{active.name}</div>
              <button onClick={() => setActive(null)} className="opacity-70">✕</button>
            </div>
            <p className="opacity-80 mb-4">{active.description}</p>
            <a className="px-3 py-1 rounded bg-black text-white dark:bg-white dark:text-black" href={active.url} target="_blank" rel="noreferrer">Open Showcase</a>
          </div>
        </div>
      )}
    </>
  );
}