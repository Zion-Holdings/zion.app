import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'AI Observability & AIOps | Zion Tech Group',
  description: 'Unified observability and AIOps: metrics, logs, traces, anomaly detection, automated incident response, and SLO management.',
  alternates: { canonical: '/services/ai-observability-aiops' },
};

export default function AiObservabilityAIOpsPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Observability & AIOps',
            provider: { '@type': 'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
            areaServed: 'US',
            availableChannel: { '@type': 'ContactPoint', telephone: '+1 302 464 0950', contactType: 'sales' },
          }}
        />
        <h1 className="text-4xl font-bold text-white mb-4 text-center">AI Observability & AIOps</h1>
        <p className="text-slate-300 max-w-3xl mx-auto text-center mb-10">
          Unified monitoring, anomaly detection, and automated incident response with SLO ownership and executive reporting.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="glass-card">
            <h2 className="text-2xl font-semibold text-white mb-4">What’s Included</h2>
            <ul className="space-y-2 text-slate-300">
              <li>• Metrics, logs, and traces in one control plane</li>
              <li>• AI-assisted anomaly detection and noise reduction</li>
              <li>• Automated incident triage and runbook execution</li>
              <li>• SLO/SLI tracking with error budget alerts</li>
              <li>• Executive and operational dashboards</li>
            </ul>
          </div>
          <div className="glass-card">
            <h2 className="text-2xl font-semibold text-white mb-4">Business Impact</h2>
            <ul className="space-y-2 text-slate-300">
              <li>• Reduce MTTR with faster incident detection</li>
              <li>• Lower alert noise and on-call burnout</li>
              <li>• Reliable SLOs with automated governance</li>
              <li>• Visibility from ops to executives</li>
            </ul>
          </div>
        </div>
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="btn-primary text-lg">📅 Book Free Consultation</a>
            <a href="tel:+13024640950" className="btn-secondary text-lg">☎ +1 302 464 0950</a>
            <Link href="/services/" className="btn-secondary text-lg">All Services</Link>
            <Link href="/free-services-and-tools/" className="btn-secondary text-lg">🛠 Free Services & Tools</Link>
          </div>
        </div>
        <section className="cta-section text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Improve Observability?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Schedule a free consultation and get a same-day proposal for AI-driven observability and AIOps.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="btn-primary text-lg">☎ +1 302 464 0950</a>
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="btn-secondary text-lg">📅 Book Consultation</a>
            <Link href="/contact/" className="btn-secondary text-lg">Contact Us</Link>
          </div>
        </section>
      </div>
    </main>
  );
}
