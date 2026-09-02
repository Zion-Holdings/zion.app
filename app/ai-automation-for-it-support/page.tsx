'use client';

import Link from 'next/link';

const benefits = [
  { title: 'Faster ticket resolution', body: 'AI triage and routing get requests to the right owner faster, cutting first-response time.' },
  { title: 'Lower support cost', body: 'Deflect repetitive tickets with knowledge-base answers and structured self-service flows.' },
  { title: 'Consistent escalation', body: 'Automated severity classification and escalation rules reduce missed SLAs during peaks.' },
  { title: 'Human-in-the-loop', body: 'Draft replies and recommended actions keep agents productive without removing oversight.' },
  { title: ' measurable reporting', body: 'Track resolution time, deflection rate, CSAT, and backlog age with automated dashboards.' },
];

const patterns = [
  { title: 'Support', href: '/services/?category=ai', desc: 'Ticket triage, routing, and knowledge-base assistants.' },
  { title: 'Security', href: '/services/?category=security', desc: 'Alert correlation, playbooks, and compliance checks.' },
  { title: 'Cloud', href: '/services/?category=cloud', desc: 'Cost optimization, monitoring, and incident response.' },
  { title: 'Data', href: '/services/?category=data', desc: 'Pipeline automation, anomaly detection, and BI.' },
];

export default function AIAutomationForITSupportPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="container-page py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs text-purple-300 font-medium uppercase tracking-wider">AI for IT Support</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="gradient-text">AI automation</span> for IT support teams
            </h1>
            <p className="text-slate-300 text-base md:text-lg mb-8">
              Reduce ticket volume, speed resolution, and keep support quality high with automation built for real operations.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/request-consultation" className="btn-primary text-lg">Get a scoped plan</Link>
              <Link href="/use-cases" className="btn-secondary text-lg">Use cases</Link>
              <Link href="/services" className="btn-secondary text-lg">All services</Link>
            </div>
          </div>

          <section className="mt-14">
            <h2 className="text-2xl font-bold text-white text-center mb-8">What this changes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                  <div className="text-sm font-semibold text-white mb-2">{item.title}</div>
                  <p className="text-slate-400 text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white text-center mb-3">Proven patterns</h2>
            <p className="text-slate-400 text-center mb-8">Start in one domain and expand to others as automation matures.</p>
            <div className="grid md:grid-cols-2 gap-4">
              {patterns.map((item) => (
                <Link key={item.title} href={item.href} className="group block rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all">
                  <div className="text-white font-semibold group-hover:text-purple-300 transition-colors mb-2">{item.title}</div>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                  <div className="mt-3 text-sm text-purple-300 font-medium">Explore service →</div>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-16 cta-section text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to reduce support load?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Tell us your ticket volume, current tooling, and target resolution time. We’ll propose a scoped automation plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/request-consultation" className="btn-primary text-lg">Request consultation</Link>
              <Link href="/case-studies" className="btn-secondary text-lg">Case studies</Link>
              <Link href="/pricing" className="btn-secondary text-lg">Pricing</Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
