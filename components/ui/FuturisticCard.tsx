import React from 'react';

type Props = {
  title: string;
  description: string;
  cta?: { href: string; label: string };
  icon?: React.ReactNode;
};

export default function FuturisticCard({ title, description, cta, icon }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-md p-5 transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2)] hover:-translate-y-0.5">
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity" aria-hidden />
      <div className="relative z-10">
        <div className="flex items-start gap-3">
          {icon ? <div className="text-indigo-400">{icon}</div> : null}
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{description}</p>
          </div>
        </div>
        {cta ? (
          <a href={cta.href} className="inline-flex items-center mt-3 text-sm text-indigo-500 hover:text-indigo-400 underline">
            {cta.label}
          </a>
        ) : null}
      </div>
    </div>
  );
}