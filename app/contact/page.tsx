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
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Zion Tech Group',
    description: 'Get in touch for AI and IT services.',
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
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Start project', href: '/start-project/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-2">Email</h2>
          <p className="text-slate-300 text-sm">General inquiries, scoping calls, and solution reviews.</p>
          <Link href="mailto:kleber@ziontechgroup.com" className="text-purple-300 text-sm font-semibold hover:text-white">kleber@ziontechgroup.com</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-2">Phone</h2>
          <p className="text-slate-300 text-sm">Call or text for urgent intake and scheduling.</p>
          <Link href="tel:+13046440950" className="text-purple-300 text-sm font-semibold hover:text-white">+1 (304) 644-0950</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-2">Response time</h2>
          <p className="text-slate-300 text-sm">Most inquiries receive a detailed reply within one business hour.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-2">Preferred path</h2>
          <p className="text-slate-300 text-sm">Start with /start-project/ for scoped proposals, or email for general questions.</p>
          <Link href="/start-project/" className="text-purple-300 text-sm font-semibold hover:text-white">Start project →</Link>
        </div>
      </div>

      <div className="text-center mt-12">
        <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-purple-500/30 bg-purple-900/20 px-8 py-10">
          <h3 className="text-3xl font-bold text-white">Ready to start?</h3>
          <p className="text-slate-300 max-w-2xl">
            Contact us to move from assessment to execution with a timeline and success criteria already in place.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/start-project/" className="btn-primary text-lg px-10 py-4">Start project</Link>
            <Link href="/services/" className="btn-secondary text-lg px-10 py-4">Browse services</Link>
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">What happens next</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>We review your goal and return best-fit service options.</li>
          <li>Estimated timeline, resource needs, and upfront risks included.</li>
          <li>Clear milestones and success criteria from day one.</li>
          <li>Ongoing visibility through dashboards and regular check-ins.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href="/start-project/" className="btn-primary text-center">Start a project</Link>
          <Link href="/services/" className="btn-secondary text-center">Browse services</Link>
        </div>
      </div>
    </StandardPage>
  );
}