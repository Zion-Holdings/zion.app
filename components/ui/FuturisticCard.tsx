import React from 'react';

export type FuturisticCardProps = {
  title: string;
  description: string;
  href?: string;
};

export default function FuturisticCard({ title, description, href }: FuturisticCardProps) {
  const inner = (
    <div className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/5 dark:bg-black/20 backdrop-blur p-5 hover:shadow-neon-purple transition-shadow">
      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 animate-shimmer" />
      <div className="relative z-10">
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm opacity-80">{description}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="group block">{inner}</a>
    );
  }
  return inner;
}