import type { Metadata } from 'next'
import StandardPage from '@/components/StandardPage'
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'AI Automation | Zion Tech Group',
  description: 'AI automation for support, operations, and revenue workflows: ticket routing, knowledge-base assistants, report generation, and pipeline hygiene.',
  openGraph: {
    title: 'AI Automation | Zion Tech Group',
    description: 'AI automation for support, operations, and revenue workflows.',
    url: 'https://ziontechgroup.com/automation/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation | Zion Tech Group',
    description: 'AI automation for support, operations, and revenue workflows.',
  },
  alternates: { canonical: '/automation/' },
}

export default function AutomationPage() {
  return (
    <>
      <StandardPage
        title="AI Automation"
        subtitle="Streamline operations with practical AI automation."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Automation', href: '/automation/' },
        ]}
        actions={[
          { label: 'Start a project', href: '/start-project/', style: 'primary' },
          { label: 'Contact us', href: '/contact/', style: 'secondary' },
        ]}
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            We design automation that reduces manual work, improves consistency, and scales with your team. Every engagement starts with one measurable outcome, then expands after stable operation.
          </p>

          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-white font-semibold mb-2">Support automation</h3>
              <p className="text-slate-400 text-sm">Ticket routing, response drafting, escalation handling, and knowledge-base assistants that deflect recurring questions.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-white font-semibold mb-2">Report automation</h3>
              <p className="text-slate-400 text-sm">Generate reports from structured data with consistent formatting, distribution rules, and audit trails.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-white font-semibold mb-2">Revenue operations</h3>
              <p className="text-slate-400 text-sm">Lead follow-up sequencing, reminders, pipeline hygiene, and handoff automation between sales and delivery.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-bold text-white mb-3">Automation outcomes</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Our automation engagements focus on measurable outcomes: reduced manual effort, faster resolution, consistent output quality, and clear audit trails.
            </p>
            <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm mb-6">
              <li>Reduced manual effort in support, ops, and reporting workflows.</li>
              <li>Measurable deflection rates and faster resolution times.</li>
              <li>Consistent output quality with fewer errors and omissions.</li>
              <li>Audit trails and human-in-the-loop controls where required.</li>
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="/services/" className="btn-primary text-center">Explore services</a>
              <a href="/contact/" className="btn-secondary text-center">Start a project</a>
            </div>
          </div>
        </div>
      </StandardPage>
    </>
  )
}
