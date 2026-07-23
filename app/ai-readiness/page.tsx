import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'AI Readiness Assessment | Zion Tech Group',
  description:
    'Free AI readiness assessment for IT managers and engineering leaders. Get a prioritized roadmap and same-day proposal from Zion Tech Group.',
};

export default function AIReadinessPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'AI Readiness Assessment' },
          ]}
        />
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">AI Readiness Assessment</h1>
          <p className="text-slate-300 mb-6">
            Use our free checklist to evaluate your team’s readiness for AI adoption, then book a free discovery call to
            turn findings into an implementation plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/free-ai-readiness-audit-checklist-for-it-managers-2026/"
              className="btn-primary text-lg"
            >
              Download the Free Checklist
            </a>
            <a
              href="https://calendly.com/kleber-ziontechgroup"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-lg"
            >
              Book a Free Discovery Call
            </a>
          </div>
        </div>

        <section className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { title: 'Assess', body: 'Evaluate data readiness, tooling, and team skills.' },
            { title: 'Prioritize', body: 'Identify quick wins and high-impact AI use cases.' },
            { title: 'Act', body: 'Get a same-day proposal and execution roadmap.' },
          ].map((item) => (
            <div key={item.title} className="glass-card">
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-300">{item.body}</p>
            </div>
          ))}
        </section>

        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to move from assessment to delivery?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Zion Tech Group helps IT leaders implement AI and automation with fast onboarding, production-grade architecture, and measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="btn-primary text-lg">
              Schedule Your Assessment Now
            </a>
            <a href="/services/" className="btn-secondary text-lg">
              View Services
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
