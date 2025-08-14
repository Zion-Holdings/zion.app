import Link from 'next/link';

const services = [
  { slug: 'ai-seo-auditor', title: 'AI SEO Auditor', desc: 'Automate SEO improvements with continuous audits.' },
  { slug: 'customer-support-chatbot', title: 'Customer Support Chatbot', desc: 'Reduce response time and scale support.' },
  { slug: 'landing-page-generator', title: 'Landing Page Generator', desc: 'Launch optimized pages instantly.' },
  { slug: 'price-intelligence-service', title: 'Price Intelligence', desc: 'Market‑aware dynamic pricing insights.' }
];

export default function ServicesIndex() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="text-3xl font-bold tracking-tight">Services</h1>
      <p className="mt-2 text-white/70">Autonomous solutions you can deploy today.</p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {services.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10">
            <h2 className="text-lg font-semibold">{s.title}</h2>
            <p className="mt-1 text-sm text-white/75">{s.desc}</p>
            <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
          </Link>
        ))}
      </div>
    </div>
  );
}


