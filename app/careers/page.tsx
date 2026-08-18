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
    siteName: 'Zion Tech Group',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | Zion Tech Group',
    description: 'Open roles and culture at Zion Tech Group.',
    siteName: 'Zion Tech Group',
  },
  alternates: { canonical: '/careers/' },
};

export default function CareersPage() {
  return (
    <StandardPage
      title="Careers"
      subtitle="Build reliable AI systems and client-facing delivery practices."
      breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
      actions={[{ label: 'Open roles', href: '/contact/', style: 'primary' }]}
    >
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        <Link href="/contact/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Engineering</h3>
          <p className="text-slate-400 text-sm">Platform, infrastructure, and AI engineering roles.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">View roles →</span>
        </Link>
        <Link href="/contact/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Delivery & Consulting</h3>
          <p className="text-slate-400 text-sm">Client-facing architects, analysts, and program leads.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">View roles →</span>
        </Link>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Work at Zion</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Remote-friendly roles with async collaboration and clear ownership.</li>
          <li>Work on production AI systems, not just prototypes and demos.</li>
          <li>Mentorship, code review, and continuous learning budgets.</li>
          <li>Impact visible to clients and measurable through shipped outcomes.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="/contact/" className="btn-primary text-center">Open roles</a>
          <a href="/services/" className="btn-secondary text-center">Browse services</a>
        </div>
      </div>
    </StandardPage>
  );
}
