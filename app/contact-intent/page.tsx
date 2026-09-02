import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Contact Intent | Zion Tech Group',
  description: 'Choose the right contact path for new projects, partnerships, support escalations, or press inquiries.',
  openGraph: {
    title: 'Contact Intent | Zion Tech Group',
    description: 'Choose the right contact path for new projects, partnerships, support escalations, or press inquiries.',
    url: 'https://ziontechgroup.com/contact-intent/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Intent | Zion Tech Group',
    description: 'Choose the right contact path for new projects, partnerships, support escalations, or press inquiries.',
  },
  alternates: { canonical: '/contact-intent/' },
};


export default function ContactIntentPage() {
  return (
<>
    <StandardPage
      title="Contact Intent"
      subtitle="We route inquiries to the right team quickly."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Contact Intent', href: '/contact-intent/' },
      ]}
      actions={[
        { label: 'Go to contact', href: '/contact/', style: 'primary' },
        { label: 'Partnerships', href: '/partners/', style: 'secondary' },
      ]}
    >
      <p className="mb-6">
        Use this page to choose the right path before you reach out. That helps us reply faster with the right context.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">New project inquiry</h3>
          <p className="text-slate-400 text-sm mb-3">Best for scoping AI, automation, or infrastructure work.</p>
          <Link href="/contact/" className="text-purple-300 text-sm font-semibold hover:text-white">Start a project →</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Partnership or reseller discussion</h3>
          <p className="text-slate-400 text-sm mb-3">Best for integrations, co-sell, or marketplace pathways.</p>
          <Link href="/partners/" className="text-purple-300 text-sm font-semibold hover:text-white">View partners →</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Support escalation</h3>
          <p className="text-slate-400 text-sm mb-3">Best for urgent platform or delivery issues.</p>
          <Link href="/contact/" className="text-purple-300 text-sm font-semibold hover:text-white">Contact support →</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Press or analyst inquiry</h3>
          <p className="text-slate-400 text-sm mb-3">Best for interviews, briefings, and company information.</p>
          <Link href="/press/" className="text-purple-300 text-sm font-semibold hover:text-white">Press page →</Link>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Routing best practices</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>New project inquiries get the fastest response from delivery leads.</li>
          <li>Partnership requests connect to ecosystem and business development.</li>
          <li>Support escalations route to on-call engineers immediately.</li>
          <li>Press inquiries reach our communications team with brand guidance.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="/services/" className="btn-primary text-center">Browse services</a>
          <a href="/contact/" className="btn-secondary text-center">Contact us</a>
        </div>
      </div>
    </StandardPage>
  </>
  );
}