'use client';

import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Use Cases',
  description: 'Practical AI and IT use cases delivered by Zion Tech Group — real deployments across healthcare, finance, retail, logistics, and more.',
  alternates: { canonical: '/use-cases/' },
};

const useCases = [
  { sector: 'Healthcare', title: 'AI-Assisted Medical Triage', tagline: 'Reduce wait times and prioritize urgent cases.', bullets: ['Faster patient routing', 'Reduced radiologist load', 'Compliant by design'] },
  { sector: 'Financial Services', title: 'Real-Time Fraud & Anomaly Detection', tagline: 'Stop fraud before it hits the books.', bullets: ['Sub-second scoring', 'Behavioral biometrics', 'Lower false positives'] },
  { sector: 'Manufacturing', title: 'Predictive Maintenance on the Plant Floor', tagline: 'Turn downtime into planned maintenance.', bullets: ['IoT + edge inference', 'Early failure signals', 'Parts in stock ahead of failures'] },
  { sector: 'Retail & E-Commerce', title: 'Personalized Offer Engines', tagline: 'Next-best-action offers that actually convert.', bullets: ['Real-time recommendation', 'Dynamic pricing', 'Omnichannel sync'] },
  { sector: 'Logistics', title: 'Adaptive Route Optimization', tagline: 'Save fuel, hit SLAs, reroute in real time.', bullets: ['Live traffic + weather', 'Route pooling', 'Driver experience insights'] },
  { sector: 'Legal & Compliance', title: 'Contract Intelligence & Obligation Tracking', tagline: 'Turn paperwork into an active risk radar.', bullets: ['Clause extraction', 'Expiry & renewal alerts', 'Policy cross-check'] },
  { sector: 'Energy & Utilities', title: 'Grid Load Forecasting', tagline: 'Balance supply and demand before peaks hit.', bullets: ['Demand forecasting', 'Distributed IoT telemetry', 'Regulatory reporting'] },
  { sector: 'Insurance', title: 'AI Claims Automation', tagline: 'Accelerate FNOL, triage, and settlement.', bullets: ['Smart intake + OCR', 'Fraud checks', 'Faster settlements'] },
  { sector: 'Education', title: 'AI Learning Assistants', tagline: 'Personalized tutoring at scale.', bullets: ['Adaptive curriculums', 'Progress dashboards', 'Accessibility first'] },
  { sector: 'Enterprise IT', title: 'Automated Incident Response', tagline: 'Detect, diagnose, and resolve faster.', bullets: ['AIOps correlation', 'Auto-remediation', 'On-call simplification'] },
];

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-subheading">Practical, deployable use cases — production-ready outcomes.</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-2">
            AI + IT <span className="gradient-text">Use Cases</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
            From claims automation to predictive maintenance — here is how Zion Tech Group turns problems into products.
          </p>
        </div>
      </section>

      {/* Use cases grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u, i) => (
              <div key={i} className="glass-card p-6 sm:p-8">
                <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest">{u.sector}</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-2">{u.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{u.tagline}</p>
                <ul className="text-slate-300 text-sm space-y-2">
                  {u.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Which Use Case Is Yours?</h2>
          <p className="text-slate-300 mb-8">
            We&apos;ll scope a fast-path pilot tailored to your goals and constraints.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/" className="btn-primary">Talk to an Engineer</Link>
            <Link href="/services/" className="btn-secondary">Browse Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
