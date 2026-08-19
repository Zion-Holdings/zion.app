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
      subtitle="Tell us your goal and we’ll return a short list of best-fit services with estimated ROI and timeline."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Contact' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
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
    </StandardPage>
  );
}
