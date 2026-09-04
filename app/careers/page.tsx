import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Careers | Zion Tech Group',
  description: 'Join Zion Tech Group: AI, IT, and engineering careers with remote-friendly roles, measurable impact, and a culture of continuous learning.',
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
<>
    <StandardPage
      title="Careers"
      subtitle="Build reliable AI systems and client-facing delivery practices with a team that values ownership and craft."
      breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Careers' }]}
      actions={[{ label: 'Start a project', href: '/start-project/', style: 'primary' }]}
    >
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto mb-16">
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

      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-white text-2xl font-semibold mb-4">How we work</h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          We ship small, validate outcomes, and iterate quickly. Teams own delivery end-to-end, with clear metrics and decision rights.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Remote-first</h3>
            <p className="text-slate-400 text-sm">Async collaboration with core overlap windows. Home-office setup support available.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Learning budget</h3>
            <p className="text-slate-400 text-sm">Annual education allowance for courses, certifications, and conference attendance.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Career paths</h3>
            <p className="text-slate-400 text-sm">Individual contributor and leadership tracks, with regular growth reviews every 6 months.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Impact visibility</h3>
            <p className="text-slate-400 text-sm">Your work connects to client outcomes and product metrics, with transparent dashboards.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-10">
          <Link href="/contact/" className="btn-primary text-center">Talk to recruiting</Link>
          <Link href="/services/" className="btn-secondary text-center">Explore services</Link>
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