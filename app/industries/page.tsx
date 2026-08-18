import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Industries | Zion Tech Group',
    description: 'Industry-specific AI and IT solutions: healthcare, finance, manufacturing, retail, logistics, education, and government.',
    openGraph: { title: 'Industries | Zion Tech Group',
    description: 'Industry-specific solutions and delivery patterns.',
    url: 'https://ziontechgroup.com/industries/',
    type: 'website' },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries | Zion Tech Group',
    description: 'Industry-specific solutions and delivery patterns.',
  },
    alternates: { canonical: '/industries/' },
};

const INDUSTRIES = [
  { key: 'healthcare', label: 'Healthcare', href: '/industries/healthcare/', desc: 'Clinical operations, diagnostics, and patient pathways.' },
  { key: 'financial-services', label: 'Financial Services', href: '/industries/financial-services/', desc: 'Fraud defense, compliance, and payment intelligence.' },
  { key: 'manufacturing', label: 'Manufacturing', href: '/industries/manufacturing/', desc: 'Predictive maintenance, quality assurance, and supply chain ops.' },
  { key: 'retail', label: 'Retail & E-Commerce', href: '/industries/retail/', desc: 'Personalization, demand forecasting, and checkout optimization.' },
  { key: 'logistics', label: 'Logistics', href: '/industries/logistics/', desc: 'Routing, tracking, and warehouse automation.' },
  { key: 'education', label: 'Education & Research', href: '/industries/education/', desc: 'Learning intelligence, assessment automation, and research ops.' },
  { key: 'government', label: 'Government', href: '/industries/government/', desc: 'Secure, compliant AI and infrastructure modernization.' },
];

export default function IndustriesPage() {
  return (
    <StandardPage title="Industries" subtitle="AI and IT delivery patterns tailored to your operating context." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Industries' }]} actions={[{ label: 'Browse services', href: '/services/', style: 'primary' }, { label: 'Contact us', href: '/contact/', style: 'secondary' }]}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {INDUSTRIES.map((item) => (
          <Link key={item.key} href={item.href} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all">
            <h3 className="text-white font-semibold mb-2">{item.label}</h3>
            <p className="text-slate-400 text-sm">{item.desc}</p>
            <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
          </Link>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <h2 className="text-xl font-bold text-white mb-4">Explore related offerings</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Link href="/services/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Enterprise Services</h3>
            <p className="text-slate-400 text-xs mb-3">AI, IT, security, and data programs with measurable outcomes.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">View services →</span>
          </Link>
          <Link href="/tools/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Developer Tools</h3>
            <p className="text-slate-400 text-xs mb-3">Free utilities for JSON, JWT, regex, QR, and text processing.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Use tools →</span>
          </Link>
          <Link href="/blog/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Insights & Guides</h3>
            <p className="text-slate-400 text-xs mb-3">Practical guidance on AI, IT, automation, and enterprise delivery.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Read blog →</span>
          </Link>
        </div>
      </div>
    </StandardPage>
  );
}
