import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
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
  twitter: {
    card: 'summary_large_image',
    title: 'Academy | Zion Tech Group',
    description: 'Technical enablement and learning for AI, IT, and automation teams.',
  },
  alternates: { canonical: '/academy/' },
};


export default function AcademyPage() {
  return (
<>
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
        <Link href="/blog/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
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

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Why learning with Zion</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Curriculum aligned to production AI and automation stacks, not theory alone.</li>
          <li>Hands-on labs built on real client environments and compliance constraints.</li>
          <li>Flexible formats: workshops, async paths, and team coaching.</li>
          <li>Outcome tracking tied to adoption metrics and business results.</li>
          <li>Regular content refresh from live project experience.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="/services/" className="btn-primary text-center">Browse services</a>
          <a href="/contact/" className="btn-secondary text-center">Start learning</a>
        </div>
      </div>
    
      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Explore related</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Link href="/services/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Services</h3>
            <p className="text-slate-400 text-xs mb-2">AI, IT, and automation services with measurable outcomes.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">View services →</span>
          </Link>
          <Link href="/blog/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Insights</h3>
            <p className="text-slate-400 text-xs mb-2">Guides on AI delivery, security, data, and DevOps.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Read blog →</span>
          </Link>
          <Link href="/contact/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Contact</h3>
            <p className="text-slate-400 text-xs mb-2">Talk with Zion about your environment and timeline.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Contact us →</span>
          </Link>
        </div>
      </div>

    </StandardPage>
  </>
  );
}