import { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solutions Configurator | Zion Tech Group',
  description: 'Configure a custom AI and IT solutions package. Pick goals, timeline, and operating model to get a recommended stack.',
  openGraph: {
    title: 'Solutions Configurator',
    description: 'Custom AI and IT solutions configuration.',
    url: 'https://ziontechgroup.com/ai/solutions-configurator/',
    type: 'website',
  },
  alternates: { canonical: '/ai/solutions-configurator/' },
};

export default function SolutionsConfiguratorPage() {
  return (
    <PageWrapper>
      <div className="container-page">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Solutions Configurator</h1>
          <p className="text-slate-400 text-lg mb-8">
            Configure a custom AI and IT package by selecting goals, timeline, and operating model.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-white font-semibold mb-2">Goal</h3>
              <p className="text-slate-400 text-sm">Automation, analytics, security, or AI delivery.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-white font-semibold mb-2">Timeline</h3>
              <p className="text-slate-400 text-sm">Pilot, program, or managed-service cadence.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-white font-semibold mb-2">Operating model</h3>
              <p className="text-slate-400 text-sm">Advisory, co-development, or fully managed.</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/configurator/" className="btn-primary text-center">Open active configurator</Link>
            <Link href="/contact/" className="btn-secondary text-center">Talk to an engineer</Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
