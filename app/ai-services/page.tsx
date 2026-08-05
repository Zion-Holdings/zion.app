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

const aiCategories = new Set([
  'ai',
  'machine-learning',
  'ml',
  'data',
  'analytics',
  'automation',
  'aiops',
  'genai',
  'llm',
  'computer-vision',
  'nlp',
]);

function isAiService(s: Service) {
  const category = (s.category || '').toLowerCase();
  const title = (s.title || '').toLowerCase();
  const description = (s.description || '').toLowerCase();
  const industry = (s.industry || '').toLowerCase();
  const haystack = `${category} ${title} ${description} ${industry}`;
  return [...aiCategories].some(key => haystack.includes(key));
}

const aiServices = (services as Service[]).filter(isAiService).slice(0, 120);

export const metadata = {
  title: 'AI Services | Zion Tech Group',
  description: 'AI services curated from Zion Tech Group: automation, analytics, computer vision, and managed AI operations.',
  alternates: { canonical: '/ai-services/' },
};

export default function AiServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">AI Services</h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          End-to-end AI services pulled from our catalog: assessment, deployment, and managed operations.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {aiServices.map((s) => (
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
                View service <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
