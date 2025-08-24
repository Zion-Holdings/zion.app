import React from 'react';

export default function EnhancedCard({ title, description, href }: { title: string; description: string; href?: string }) {
  const Wrapper: React.ElementType = href ? 'a' : 'div';
  const props = href ? { href } : {};
  return (
    <Wrapper {...props} className="group block p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-black/40 backdrop-blur hover:-translate-y-0.5 hover:shadow transition transform">
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{description}</div>
      {href && <div className="mt-3 text-indigo-600 group-hover:underline">Learn more →</div>}
    </Wrapper>
  );
}