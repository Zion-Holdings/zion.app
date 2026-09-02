import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'FAQ | Zion Tech Group',
  description:
  'Common questions about AI and IT services, engagement models, pricing, onboarding, support, security, and deployment timelines.',
  openGraph: {
    title: 'FAQ | Zion Tech Group',
    description:
      'Common questions about AI and IT services, timing, security, pricing, and onboarding.',
    url: 'https://ziontechgroup.com/faq/',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | Zion Tech Group',
    description: 'Common questions about AI and IT services, timing, security, pricing, and onboarding.',
  },
  alternates: { canonical: '/faq/' },
};


export default function FAQPage() {
  return (
<>
    <StandardPage
      title="Frequently Asked Questions"
      subtitle="Straight answers about AI and IT services, pricing, onboarding, support, and what to expect from a Zion engagement."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'FAQ' },
      ]}
      actions={[
        { label: 'Ask a question', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 max-w-4xl mx-auto">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-bold text-white mb-2">How fast can you start?</h2>
          <p className="text-slate-300 leading-relaxed">Most engagements begin within 7 days. Managed services and advisory work can onboard faster if the scope is clear.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-bold text-white mb-2">Do you support HIPAA and compliance regimes?</h2>
          <p className="text-slate-300 leading-relaxed">Yes. We design delivery with privacy-first controls and can support compliance evidence packages and operational requirements.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-bold text-white mb-2">What does managed AI include?</h2>
          <p className="text-slate-300 leading-relaxed">Monitoring, cost controls, model updates, observability, performance tuning, and incident response for production AI systems.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
          <h2 className="text-2xl font-bold text-white mb-2">How do you price engagements?</h2>
          <p className="text-slate-300 leading-relaxed">We use time-and-materials, fixed-price, and retainer models. After a short scoping call, we return a proposal with clear cost structure and milestones.</p>
        </div>
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-purple-500/30 bg-purple-900/20 px-8 py-10">
          <h3 className="text-3xl font-bold text-white">Still have questions?</h3>
          <p className="text-slate-300 max-w-2xl">
            Email or call us directly. Most questions get a detailed reply within one business hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/contact/" className="btn-primary text-lg px-10 py-4">Contact us →</a>
            <a href="mailto:kleber@ziontechgroup.com" className="btn-secondary text-lg px-10 py-4">Email us</a>
          </div>
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