'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumb({
  items,
  className = '',
}: {
  items: Array<{ label: string; href?: string }>;
  className?: string;
}) {
  if (!items || items.length <= 1) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-2 text-sm text-slate-400 mb-6 ${className}`}
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <ChevronRight className="w-4 h-4 text-slate-600" />}
          {item.href && i < items.length - 1 ? (
            <Link
              href={item.href}
              className="hover:text-slate-300 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-400/60">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
