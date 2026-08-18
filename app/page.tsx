import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Home | Zion Tech Group',
    description: 'Zion Tech Group is an AI-native IT services company building autonomous operations, managed AI, and enterprise-ready delivery.',
    openGraph: {
    title: 'Zion Tech Group | AI & IT Company',
    description: 'AI-native IT services: autonomous operations, managed AI, cloud, security, and data.',
    url: 'https://ziontechgroup.com/',
    type: 'website',
  },
    twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group | AI & IT Company',
    description: 'AI-native IT services: autonomous operations, managed AI, cloud, security, and data.',
  },
    alternates: { canonical: '/' },
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zion Tech Group',
  url: 'https://ziontechgroup.com',
  sameAs: [
    'https://linkedin.com/company/ziontechgroup',
    'https://x.com/ziontechgroup',
    'https://github.com/Zion-support',
  ],
};

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Zion Tech Group',
  url: 'https://ziontechgroup.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://ziontechgroup.com/search/?q={query}',
    'query-input': 'required name=query',
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationLd} />
      <JsonLd data={websiteLd} />
      <StandardPage
        title="AI-native IT services"
        subtitle="Autonomous operations, managed AI, and enterprise-ready delivery for teams that want to move fast without breaking trust."
        breadcrumbItems={[
          { label: 'Home' },
        ]}
        actions={[
          { label: 'Explore services', href: '/services/', style: 'primary' },
          { label: 'Contact us', href: '/contact/', style: 'secondary' },
        ]}
      >
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          <Link href="/services/?category=ai" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-2">AI & Automation</h3>
            <p className="text-slate-400 text-sm">Strategy, assistants, and autonomous operations.</p>
            <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
          </Link>
          <Link href="/services/?category=cloud" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-2">Cloud & DevOps</h3>
            <p className="text-slate-400 text-sm">Migration, CI/CD, and reliability at scale.</p>
            <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
          </Link>
          <Link href="/services/?category=security" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-2">Security & Compliance</h3>
            <p className="text-slate-400 text-sm">Hardened defenses and audit-ready controls.</p>
            <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
          </Link>
        </div>
    
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-4">Why Zion</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
            <li>AI-native delivery with measurable outcomes and clear rollback plans.</li>
            <li>Enterprise-grade security, compliance, and reliability built in.</li>
            <li>Collaborative teams that transfer knowledge, not just dependencies.</li>
            <li>Track record across regulated industries and fast-moving startups.</li>
          </ul>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/services/" className="btn-primary text-center">Explore services</Link>
            <Link href="/contact/" className="btn-secondary text-center">Contact us</Link>
          </div>
        </div>
      </StandardPage>
    </>
  );
}
