import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Start a Project | Zion Tech Group',
  description: 'Start your AI or IT project with clear outcomes, timeline, and integration constraints.',
  keywords: ['start project', 'AI project', 'IT engagement', 'scoped proposal', 'ROI', 'timeline'],
  openGraph: {
    title: 'Start a Project | Zion Tech Group',
    description: 'Start your AI or IT project with clear outcomes, timeline, and integration constraints.',
    url: 'https://ziontechgroup.com/start-project/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start a Project | Zion Tech Group',
    description: 'Start your AI or IT project with clear outcomes, timeline, and integration constraints.',
  },
  alternates: { canonical: '/start-project/' },
};


export default function StartProjectPage() {
  return (
<>
    <StandardPage
      title="Start a Project"
      subtitle="Tell us about your goals and constraints."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Start a Project', href: '/start-project/' },
      ]}
      actions={[
        { label: 'Contact us', href: '/contact/', style: 'primary' },
        { label: 'See services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="mb-6">
        Most successful engagements start with outcomes, timelines, and integration constraints. This page captures the essentials so we can return a scoped recommendation fast.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Goal</h3>
          <p className="text-slate-400 text-sm">What outcome matters most in the next 30 to 90 days?</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Systems</h3>
          <p className="text-slate-400 text-sm">Which systems, data sources, and tools are in scope?</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Timeline</h3>
          <p className="text-slate-400 text-sm">Target dates, internal stakeholders, and decision cadence.</p>
        </div>
      </div>
      <div className="mt-10 rounded-2xl border border-purple-500/30 bg-purple-900/20 p-6">
        <h2 className="text-xl font-bold text-white mb-2">Ready to continue?</h2>
        <p className="text-slate-300 text-sm mb-4">
          Submit your goal and constraints and we will return a short list of best-fit services with estimated ROI and timeline.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/contact/" className="btn-primary text-center">Contact us</Link>
          <Link href="/services/" className="btn-secondary text-center">Browse services</Link>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Engagement formats</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Fixed-scope sprints with clear deliverables and acceptance criteria.</li>
          <li>Retainer-based support for ongoing operations and improvements.</li>
          <li>Embedded team augmentation for skills gaps and capacity.</li>
          <li>Advisory engagements for architecture and strategy reviews.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href="/services/" className="btn-primary text-center">Browse services</Link>
          <Link href="/contact/" className="btn-secondary text-center">Contact us</Link>
        </div>
      </div>
    </StandardPage>
  </>
  );
}