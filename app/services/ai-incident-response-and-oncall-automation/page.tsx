import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'AI Incident Response & On-Call Automation | Zion Tech Group',
  description: 'AI-assisted incident response, on-call automation, alert correlation, and postmortem generation for IT and security operations.',
  alternates: { canonical: '/services/ai-incident-response-and-oncall-automation' },
};

export default function AiIncidentResponseOnCallPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Incident Response & On-Call Automation',
            provider: { '@type': 'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
            areaServed: 'US',
            availableChannel: { '@type': 'ContactPoint', telephone: '+1 302 464 0950', contactType: 'sales' },
          }}
        />
        <h1 className="text-4xl font-bold text-white mb-4 text-center">AI Incident Response & On-Call Automation</h1>
        <p className="text-slate-300 max-w-3xl mx-auto text-center mb-10">
          Faster incident response with AI-assisted alert correlation, on-call orchestration, automated runbooks, and lightweight postmortem generation.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="glass-card">
            <h2 className="text-2xl font-semibold text-white mb-4">What’s Included</h2>
            <ul className="space-y-2 text-slate-300">
              <li>• Alert correlation and duplicate suppression</li>
              <li>• On-call scheduling, escalation, and override</li>
              <li>• Incident command dashboard and status updates</li>
              <li>• Automated runbook execution</li>
              <li>• Postmortem draft and action tracking</li>
            </ul>
          </div>
          <div className="glass-card">
            <h2 className="text-2xl font-semibold text-white mb-4">Business Impact</h2>
            <ul className="space-y-2 text-slate-300">
              <li>• Lower MTTR with faster triage</li>
              <li>• Reduced on-call fatigue</li>
              <li>• Repeatable incident responses</li>
              <li>• Audit-ready postmortems</li>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Respond Faster?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Schedule a free consultation and get a same-day proposal for incident response automation.</p>
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
