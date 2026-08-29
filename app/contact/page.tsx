import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Contact | Zion Tech Group',
  description: 'Contact Zion Tech Group for AI, IT, and automation consultations.',
  openGraph: {
    title: 'Contact | Zion Tech Group',
    description: 'Get in touch for AI and IT services.',
    url: 'https://ziontechgroup.com/contact/',
    type: 'website',
  },
  alternates: { canonical: '/contact/' },
};

export default function ContactPage() {
  return (
    <StandardPage
      title="Contact Us"
      subtitle="Tell us your goal and we'll return a short list of best-fit services with estimated ROI and timeline."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Contact' },
      ]}
      actions={[
        { label: 'Get a recommendation', href: '/tools/ai-roi-calculator/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
        { label: 'Free AI/IT tools', href: '/tools/', style: 'secondary' },
        { label: 'Cloud Cost Savings', href: '/tools/cloud-cost-optimizer/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-2">Email</h2>
          <p className="text-slate-300 text-sm">General inquiries and scoping calls.</p>
          <Link href="mailto:kleber@ziontechgroup.com" className="text-purple-300 text-sm font-semibold hover:text-white">kleber@ziontechgroup.com</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-2">Schedule a call</h2>
          <p className="text-slate-300 text-sm">Book a 30-minute scoping call directly on the CEO&apos;s calendar.</p>
          <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-purple-300 text-sm font-semibold hover:text-white">Open Calendly →</a>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-2">Phone</h2>
          <p className="text-slate-300 text-sm">Call or text for urgent intake and scheduling.</p>
          <Link href="tel:+13046440950" className="text-purple-300 text-sm font-semibold hover:text-white">+1 (304) 644-0950</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-2">Response time</h2>
          <p className="text-slate-300 text-sm">Most questions get a detailed reply within one business hour.</p>
        </div>
        <div className="rounded-2xl border border-purple-500/30 bg-purple-900/20 p-6">
          <h2 className="text-xl font-bold text-white mb-2">Schedule</h2>
          <p className="text-slate-300 text-sm">Book a 15-minute alignment call directly on my calendar.</p>
          <Link href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-purple-300 text-sm font-semibold hover:text-white">calendly.com/kleber-ziontechgroup</Link>
        </div>
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-purple-500/30 bg-purple-900/20 px-8 py-10">
          <h3 className="text-3xl font-bold text-white">Ready to start?</h3>
          <p className="text-slate-300 max-w-2xl">
            Contact us to move from assessment to execution with a timeline and success criteria already in place.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-10 py-4">Book a call</a>
            <Link href="/services/" className="btn-secondary text-lg px-10 py-4">Explore services</Link>
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
  );
}
