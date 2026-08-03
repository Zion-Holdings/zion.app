'use client';

export default function Breadcrumb({ items, className }: { items: Array<{ label: string; href?: string }>; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={`text-sm text-slate-400 mb-2 ${className || ''}`}>
      <ol className="inline-flex items-center gap-2">
        {items.map((item, i) => (
          <li key={i} className="inline-flex items-center gap-2">
            {item.href ? (
              <a href={item.href} className="hover:text-purple-300 transition-colors">{item.label}</a>
            ) : (
              <span className="text-slate-300">{item.label}</span>
            )}
            {i < items.length - 1 ? <span className="text-slate-600">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}