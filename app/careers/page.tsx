import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Careers | Zion Tech Group',
  description: 'Join Zion Tech Group: AI, IT, and engineering careers with remote-friendly roles and measurable impact.',
  openGraph: {
    title: 'Careers | Zion Tech Group',
    description: 'Open roles and culture at Zion Tech Group.',
    url: 'https://ziontechgroup.com/careers/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | Zion Tech Group',
    description: 'Open roles and culture at Zion Tech Group.',
  },
  alternates: { canonical: '/careers/' },
};

export default function CareersPage() {
  return (
    <StandardPage
      title="Careers"
      subtitle="Build reliable AI systems and client-facing delivery practices."
      breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
      actions={[{ label: 'Start a project', href: '/start-project/', style: 'primary' }]}
    >
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        <Link href="/start-project/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Engineering</h3>
          <p className="text-slate-400 text-sm">Platform, infrastructure, and AI engineering roles.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">View roles →</span>
        </Link>
        <Link href="/start-project/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Delivery</h3>
          <p className="text-slate-400 text-sm">Client-facing delivery, solutions, and onboarding.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">View roles →</span>
        </Link>
        <Link href="/start-project/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Operations</h3>
          <p className="text-slate-400 text-sm">Support, observability, and operational excellence.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">View roles →</span>
        </Link>
      </div>
    </StandardPage>
  );
}
