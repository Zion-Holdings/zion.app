import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IT Consulting Services | Zion Tech Group',
  description: 'IT consulting services from Zion Tech Group.',
  openGraph: {
    title: 'Page',
    description: 'IT consulting services from Zion Tech Group.',
    url: 'https://ziontechgroup.com',
    type: 'website',
  },
  alternates: { canonical: '/it-consulting-services/' },
};

export default function ItConsultingServicesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">IT Consulting Services</h1>
      <p className="text-slate-300 text-lg leading-relaxed mb-8">
        Hands-on consulting for cloud, security, data, automation, and AI delivery.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Architecture review</h3>
          <p className="text-slate-400 text-sm">Current-state assessment with prioritized improvements and migration paths.</p>
          <Link href="/services" className="text-purple-300 text-xs font-semibold mt-3 inline-block">Services →</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Delivery coaching</h3>
          <p className="text-slate-400 text-sm">Team enablement for reliable releases, observability, and incident response.</p>
          <Link href="/services" className="text-purple-300 text-xs font-semibold mt-3 inline-block">Services →</Link>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Vendor and tool selection</h3>
          <p className="text-slate-400 text-sm">Objective evaluation of platforms, clouds, and SaaS tools for your workload.</p>
          <Link href="/contact" className="text-purple-300 text-xs font-semibold mt-3 inline-block">Talk to us →</Link>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-10">
        <Link href="/contact" className="btn-primary text-center">Talk to an Engineer</Link>
        <Link href="/services" className="btn-secondary text-center">All Services</Link>
      </div>
    </div>
  );
}
