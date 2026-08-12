import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solutions Configurator',
  description: 'Configure custom AI, IT, cloud, and security solution bundles. Choose services, support tiers, and deployment options — get a structured summary you can send to our team.',
  alternates: { canonical: '/ai/solutions-configurator/' },
};

export default function SolutionsConfiguratorPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Solutions Configurator</h1>
          <p className="text-slate-300 text-lg mb-6">
            Build a custom solution package across AI, IT, cloud, security, and automation. Pick categories, tier, and support level to create an instant estimate and handoff brief for our team.
          </p>
          <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
            <p className="text-slate-400 mb-4">Use the <Link href="/configurator/" className="text-purple-300 underline underline-offset-2">active configurator</Link> for guided setup, then review pricing with our team.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pricing-calculator/" className="btn-primary">Open Pricing Calculator</Link>
              <Link href="/services/" className="btn-secondary">Browse All Services</Link>
            </div>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {['AI & Automation','IT Infrastructure','Cloud & DevOps','Security & Compliance','Data & Analytics','Workflow Automation'].map((item) => (
              <div key={item} className="glass-card p-4">
                <div className="text-sm font-semibold text-white">{item}</div>
                <p className="text-xs text-slate-400 mt-1">Modular modules available with tiered support.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
