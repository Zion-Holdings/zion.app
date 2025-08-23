import React from 'react';

export type FuturisticCardProps = {
  title: string;
  description: string;
  action?: React.ReactNode;
  icon?: React.ReactNode;
};

export default function FuturisticCard({ title, description, action, icon }: FuturisticCardProps) {
  return (
    <div className="relative rounded-2xl border border-white/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur-md p-6 overflow-hidden group">
      <div className="absolute inset-px rounded-[1rem] pointer-events-none" style={{ boxShadow: 'inset 0 0 0 1px rgba(99,102,241,0.25)' }} />
      <div className="absolute -inset-40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden>
        <div className="h-full w-full bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-teal-400/10 blur-2xl" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-3">
          {icon && <div className="text-indigo-400">{icon}</div>}
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-6">{description}</p>
        {action && <div className="mt-4">{action}</div>}
      </div>
    </div>
  );
}