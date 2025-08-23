import React from 'react';

type Props = {
  title: string;
  description: string;
  cta?: { href: string; label: string }[];
};

export default function FuturisticCard({ title, description, cta }: Props) {
  return (
    <div className="relative rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)]">
      <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition bg-gradient-to-r from-cyan-400/10 via-fuchsia-400/10 to-emerald-400/10 blur-md" />
      <div className="relative p-5">
        <h3 className="text-lg font-semibold text-white/90">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{description}</p>
        {cta && cta.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {cta.map((c) => (
              <a key={c.href} href={c.href} className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-sm border border-white/20 transition">
                {c.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}