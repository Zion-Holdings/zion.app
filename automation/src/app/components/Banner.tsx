'use client';

import React from 'react';

export type BannerItem = {
  title?: string;
  description?: string;
  href?: string;
  badge?: string;
};

export default function Banner({ items }: { items?: BannerItem[] }) {
  const list = items && items.length > 0 ? items : [];
  if (list.length === 0) return null;

  return (
    <div className="relative w-full border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl overflow-hidden">
        <div
          className="flex w-max gap-6 whitespace-nowrap px-4 py-2"
          style={{ animation: 'marquee 36s linear infinite' }}
        >
          {[...list, ...list].map((item, idx) => (
            <span
              key={`${item.title ?? ''}-${idx}`}
              className="inline-flex items-center gap-2 text-xs text-slate-600"
            >
              {item.badge ? (
                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-800">
                  {item.badge}
                </span>
              ) : null}
              {item.title ? <span className="font-medium text-slate-800">{item.title}</span> : null}
              {item.description ? <span className="text-slate-500">{item.description}</span> : null}
              {item.href ? (
                <a href={item.href} className="text-blue-700 underline underline-offset-2">
                  View
                </a>
              ) : null}
              <span className="text-slate-300">•</span>
            </span>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
