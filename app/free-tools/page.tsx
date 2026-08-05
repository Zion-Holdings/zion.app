import Link from 'next/link';
import services from '@/app/data/servicesData.json';

type Service = {
  id: string;
  title: string;
  description: string;
  category: string;
  industry: string;
  pricing: Record<string, string> | null;
  features?: string[];
  benefits?: string[];
  href?: string;
  icon?: string;
};

const freeish = (s: Service) => {
  const pricing = s.pricing || {};
  const values = Object.values(pricing).map((v) => (v || '').toLowerCase());
  const text = `${s.title} ${s.description} ${s.category} ${s.industry}`.toLowerCase();
  const looksFree =
    values.some((v) => v === 'free' || v === '$0' || v.includes('free') || v === '0') ||
    /free|no-cost|trial|freemium/.test(text);
  return looksFree;
};

const items = (services as Service[]).filter(freeish).slice(0, 120);

export const metadata = {
  title: 'Free Tools | Zion Tech Group',
  description: 'Free and low-cost IT assessment tools, checklists, and automation utilities from Zion Tech Group.',
  alternates: { canonical: '/free-tools/' },
};

export default function FreeToolsPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Free Tools</h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          Free and low-cost IT assessment tools, checklists, and automation utilities.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {items.map((s) => (
            <Link
              key={s.id}
              href={s.href || `/services/${s.id}/`}
              className="glass-card group hover:border-purple-500/40 transition-colors block"
            >
              <h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors leading-snug">
                {s.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">{s.description}</p>
              <div className="mt-3 text-xs text-slate-400">
                <div className="font-semibold text-slate-300">Pricing</div>
                <div>{s.pricing ? `${s.pricing.basic || 'Custom'} - ${s.pricing.enterprise || 'Custom'}` : 'Custom'}</div>
              </div>
              <span className="text-purple-400 text-sm mt-4 inline-flex items-center gap-1">
                Get access <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
