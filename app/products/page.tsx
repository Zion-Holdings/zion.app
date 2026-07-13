// app/products/page.tsx — Products & Platforms
import { allServices } from '../data/servicesData';
import type { Service } from '../data/servicesData';
import Link from 'next/link';

export const metadata = {
  title: 'Products & Platforms — Zion Tech Group',
  description: 'Platforms and productized services from Zion Tech Group.',
};

function toSlug(s: Service) {
  const base = (s.title || s.name || 'service').toLowerCase();
  return base.replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function badgeClass(category?: string) {
  const c = String(category || '').toLowerCase();
  if (c.includes('ai') || c.includes('ml')) return 'bg-purple-500/20 text-purple-300';
  if (c.includes('cloud') || c.includes('devops')) return 'bg-cyan-500/20 text-cyan-300';
  if (c.includes('security') || c.includes('cyber')) return 'bg-red-500/20 text-red-300';
  if (c.includes('data') || c.includes('analytics')) return 'bg-amber-500/20 text-amber-300';
  return 'bg-slate-500/20 text-slate-300';
}

export default function ProductsPage() {
  const items = (allServices || []).slice(0, 80);
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Products & Platforms</h1>
        <p className="mt-3 text-slate-400">
          Scalable platforms and productized delivery from Zion Tech Group.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => {
            const category = Array.isArray((s as any).categories) ? (s as any).categories[0] : (s as any).category;
            const href = `/services/${toSlug(s)}`;
            return (
              <div key={href + s.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-colors">
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${badgeClass(category)}`}>
                    {String(category || 'general')}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{s.title || s.name}</h3>
                <p className="mt-2 text-sm text-slate-400 line-clamp-3">
                  {Array.isArray((s as any).features) && (s as any).features.length
                    ? (s as any).features[0]
                    : (s as any).description || 'Service'}
                </p>
                <div className="mt-5">
                  <Link href={href} className="text-sm font-medium text-purple-300 hover:text-purple-200">
                    View service →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
