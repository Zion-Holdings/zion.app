import React from 'react';
import Link from 'next/link';

type Feature = {
  title: string;
  description: string;
  cta?: { label: string; href: string };
  tags?: string[];
};

function loadFeatures(): Feature[] {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const data = require('../../data/home/auto-features.json');
    if (Array.isArray(data?.features)) return data.features as Feature[];
  } catch {}
  return [
    {
      title: 'Autonomous Cloud Automation',
      description:
        'This site continually improves itself via orchestrators, factories, and CI workflows without human intervention.',
      cta: { label: 'See automations', href: 'https://github.com/Zion-Holdings/zion.app/tree/main/automation' },
      tags: ['CI', 'Self-healing', 'Auto-discovery'],
    },
  ];
}

export default function AutoFeatures(): JSX.Element {
  const features = loadFeatures();
  return (
    <section className="py-12">
      <h2 className="text-3xl font-extrabold mb-4">What this project does for you</h2>
      <p className="text-white/70 mb-8 max-w-2xl">
        Continuously updated by cloud automations: new ideas, UI improvements, content sync, and error healing — all
        committed back to the repository.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-white/70 mb-3">{f.description}</p>
            {f.tags?.length ? (
              <div className="flex flex-wrap gap-2 mb-3">
                {f.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
            {f.cta ? (
              <Link href={f.cta.href}>
                <span className="inline-block text-cyan-300 hover:text-cyan-200 underline">{f.cta.label}</span>
              </Link>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}