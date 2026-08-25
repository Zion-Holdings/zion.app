import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Academy | Zion Tech Group',
  description: 'Learning paths, workshops, and enablement from Zion Tech Group.',
  openGraph: {
    title: 'Academy | Zion Tech Group',
    description: 'Technical enablement and learning for AI, IT, and automation teams.',
    url: 'https://ziontechgroup.com/academy/',
    type: 'website',
  },
  alternates: { canonical: '/academy/' },
};

export default function AcademyPage() {
  return (
    <StandardPage
      title="Academy"
      subtitle="Workshops, learning paths, and enablement for teams adopting AI and modern IT."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Academy' },
      ]}
      actions={[
        { label: 'Start learning', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        <Link href="/blog" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">AI Literacy</h3>
          <p className="text-slate-400 text-sm">Foundations for leaders and practitioners.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Read blog →</span>
        </Link>
        <Link href="/services?category=automation" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Automation</h3>
          <p className="text-slate-400 text-sm">Hands-on workflow and support automation training.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services?category=ai" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Applied AI</h3>
          <p className="text-slate-400 text-sm">Production AI, evaluation, and governance.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
      </div>
    </StandardPage>
  );
}
