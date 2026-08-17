import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'IT Consulting Services | Zion Tech Group',
  description: 'IT consulting services: architecture, delivery, automation, and managed support.',
  openGraph: { title: 'IT Consulting Services | Zion Tech Group', description: 'Enterprise IT consulting and implementation.', url: 'https://ziontechgroup.com/it-consulting-services/', type: 'website' },
  alternates: { canonical: '/it-consulting-services/' },
};

export default function ItConsultingPage() {
  return (
    <StandardPage title="IT Consulting Services" subtitle="Architecture, delivery, automation, and managed support." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'IT Consulting' }]} actions={[{ label: 'Start a project', href: '/contact/', style: 'primary' }]}>
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        <Link href="/services?category=it" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Infrastructure</h3>
          <p className="text-slate-400 text-sm">Cloud, networking, observability, and cost optimization.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services?category=automation" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Automation</h3>
          <p className="text-slate-400 text-sm">Workflow automation, ticket routing, and knowledge-base assistants.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
      </div>
    </StandardPage>
  );
}
