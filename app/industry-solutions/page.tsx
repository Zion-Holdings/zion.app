// app/industry-solutions/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'Industry Solutions | Zion Tech Group',
  description: 'Industry-specific AI and IT solutions for Healthcare, Financial Services, Manufacturing, and more.',
};

const industries = [
  {
    name: 'Healthcare',
    slug: 'healthcare',
    desc: 'HIPAA-compliant AI diagnostics, patient engagement, and clinical automation.',
    icon: '🏥'
  },
  {
    name: 'Financial Services',
    slug: 'financial-services',
    desc: 'RegTech, fraud detection, trading bots, and KYC automation.',
    icon: '💳'
  },
  {
    name: 'E-Commerce & Retail',
    slug: 'ecommerce-retail',
    desc: 'Recommendation engines, inventory AI, dynamic pricing.',
    icon: '🛒'
  },
];

export default function IndustrySolutionsPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="container-page py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Industry Solutions</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            AI-powered solutions tailored for your industry's unique challenges
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industry-solutions/${ind.slug}/`}
              className="glass-card hover:scale-105 transition-transform"
            >
              <div className="text-3xl mb-3">{ind.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{ind.name}</h3>
              <p className="text-slate-400 text-sm">{ind.desc}</p>
              <span className="text-purple-400 text-xs mt-3 inline-block">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}