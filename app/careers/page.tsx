import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Careers | Zion Tech Group',
  description: 'Join Zion Tech Group: AI, IT, and engineering careers with remote-friendly roles and measurable impact.',
  openGraph: { title: 'Careers | Zion Tech Group', description: 'Open roles and culture at Zion Tech Group.', url: 'https://ziontechgroup.com/careers/', type: 'website' },
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
    </StandardPage>
  );
}
