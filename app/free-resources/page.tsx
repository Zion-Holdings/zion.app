import Link from 'next/link';
import SiteBreadcrumbs from '@/components/SiteBreadcrumbs';

export const metadata = {
  title: 'Free AI Resources | Zion Tech Group',
  description: 'Free AI resources for IT teams: templates, checklists, frameworks, and implementation playbooks from Zion Tech Group.',
  keywords: ['free AI resources','AI playbook','IT templates','Zion Tech Group'],
  authors: { name: 'Zion Tech Group' },
  openGraph: {
    title: 'Free AI Resources',
    description: 'Free AI resources for IT teams: templates, checklists, frameworks, and implementation playbooks.',
    url: 'https://ziontechgroup.com/free-resources/',
    type: 'website',
    siteName: 'Zion Tech Group',
  },
  alternates: { canonical: '/free-resources/' },
};

export default function Page() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <article className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <SiteBreadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Free Resources', href: '/free-resources' }]} className="mb-8" />
        <header className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Free AI Resources</h1>
          <p className="mt-4 text-lg text-slate-300">Free AI resources for IT teams: templates, checklists, frameworks, and implementation playbooks.</p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span>By Zion Tech Group</span>
            <span aria-hidden="true">•</span>
            <span>IT and AI insights from Zion Tech Group</span>
          </div>
        </header>
        <section className="prose prose-invert max-w-none">
          <h2>Use these resources to move faster</h2>
          <p>Each resource is designed to reduce planning time and create a repeatable operating model.</p>
          <h2>Best use</h2>
          <p>Use them with a single owner, one workflow, and a 30-day review cycle. Broad rollout without ownership creates unrecoverable backlogs.</p>
          <h2>Get support</h2>
          <p>If you need help applying these resources, Zion Tech Group can run a scoped pilot with concrete milestones.</p>
        </section>
        <section className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
            <h2 className="mb-2 text-xl font-bold text-white">Next steps</h2>
            <p className="text-slate-300">Talk with Zion Tech Group about your environment and goals.</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">Contact us</Link>
              <Link href="/services" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white">Services</Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
