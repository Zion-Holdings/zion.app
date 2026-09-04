import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Cloud & DevOps Solutions | Zion Tech Group',
  description: 'Cloud migration, CI/CD, infrastructure automation, and reliability engineering from Zion Tech Group.',
  openGraph: {
    title: 'Cloud & DevOps Solutions | Zion Tech Group',
    description: 'Cloud and DevOps solutions with measurable outcomes.',
    url: 'https://ziontechgroup.com/solutions/cloud-devops/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud & DevOps Solutions | Zion Tech Group',
    description: 'Cloud and DevOps solutions with measurable outcomes.',
  },
  alternates: { canonical: '/solutions/cloud-devops/' },
};


export default function CloudDevOpsSolutionsPage() {
  return (
<>
    <StandardPage
      title="Cloud & DevOps"
      subtitle="Migration, CI/CD, and reliability at scale with operational ownership built in."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/solutions/' },
        { label: 'Cloud & DevOps' },
      ]}
      actions={[
        { label: 'Start a project', href: '/contact/', style: 'primary' },
        { label: 'Browse cloud services', href: '/services/?category=cloud', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        <Link href="/services/?category=cloud" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Cloud Migration</h3>
          <p className="text-slate-400 text-sm">Lift-and-shift, refactoring, and hybrid-cloud landing zones.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services/?category=automation" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">CI/CD Modernization</h3>
          <p className="text-slate-400 text-sm">Pipelines, quality gates, release automation, and rollback safety.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services/?category=security" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Reliability & Observability</h3>
          <p className="text-slate-400 text-sm">Monitoring, SLOs, incident response, and capacity planning.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <h2 className="text-xl font-bold text-white mb-4">What you can expect</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Architecture reviews with clear migration paths and risk controls.</li>
          <li>Automated provisioning, testing, and deployment pipelines.</li>
          <li>Cost visibility and optimization tied to real usage patterns.</li>
          <li>Runbooks, on-call coverage, and incident response from day one.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href="/contact/" className="btn-primary text-center">Talk to an engineer</Link>
          <Link href="/services/?category=cloud" className="btn-secondary text-center">Browse cloud services</Link>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <h2 className="text-xl font-bold text-white mb-4">Related offerings</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/tools/health-check/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Health Check</h3>
            <p className="text-slate-400 text-xs mb-3">Quick reliability and security review for your stack.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Run health check →</span>
          </Link>
          <Link href="/blog/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Insights & Guides</h3>
            <p className="text-slate-400 text-xs mb-3">Cloud cost, DevOps, and modernization guidance.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Read blog →</span>
          </Link>
        </div>
      </div>
    </StandardPage>
  </>
  );
}