import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Home | Zion Tech Group',
  description: 'Zion Tech Group is an AI-native IT services company building autonomous operations, managed AI, and enterprise-ready delivery.',
  openGraph: {
    title: 'Zion Tech Group | AI & IT Company',
    description: 'AI-native IT services: autonomous operations, managed AI, cloud, security, and data.',
    url: 'https://ziontechgroup.com/',
    type: 'website',
  },
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
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
      </StandardPage>
    );
}
