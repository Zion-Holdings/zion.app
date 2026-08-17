'use client';

import Link from 'next/link';

export default function Breadcrumb({ items, className }: { items: Array<{ label: string; href?: string }>; className?: string }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={`flex flex-wrap items-center gap-2 text-xs text-slate-400 ${className || ''}`}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <span className="text-slate-600">/</span>}
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-purple-300 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? 'text-slate-200 font-medium' : ''}>{item.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
