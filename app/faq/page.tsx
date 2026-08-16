import type { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';

export const metadata: Metadata = {
  title: 'FAQ | Zion Tech Group',
  description:
    'Common questions about AI and IT services, engagement models, pricing, onboarding, support, security, and deployment timelines.',
  openGraph: {
    title: 'FAQ | Zion Tech Group',
    description:
      'Common questions about AI and IT services, timing, security, pricing, and onboarding.',
    url: 'https://ziontechgroup.com/faq/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/faq/' },
};

export default function FAQPage() {
  return (
    <PageWrapper breadcrumb={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}>
      <div className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-xs">💬</span>
          <span className="text-xs text-emerald-300 font-medium uppercase tracking-wider">Help & FAQs</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Frequently Asked <span className="gradient-text">Questions</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Straight answers about AI and IT services, pricing, onboarding, support, and what to expect from a Zion engagement.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <a href="/contact/" className="btn-primary text-lg px-8 py-3">Ask a question</a>
          <a href="/services/" className="btn-secondary text-lg px-8 py-3">Browse services</a>
        </div>
      </div>

      <div className="grid gap-6 max-w-4xl mx-auto mb-16">
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

      <div className="text-center">
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
    </PageWrapper>
  );
}
