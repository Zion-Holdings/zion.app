import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'IT On-Site Rapid Response | Zion Tech Group',
  description: 'Same-day onsite IT emergency response for network outages, endpoint failures, and infrastructure incidents.',
  alternates: { canonical: '/services/it-onsite-rapid-response' },
};

export default function ItOnsiteRapidResponsePage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'IT On-Site Rapid Response',
            provider: { '@type': 'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
            areaServed: 'US',
            availableChannel: { '@type': 'ContactPoint', telephone: '+1 302 464 0950', contactType: 'sales' },
          }}
        />
        <h1 className="text-4xl font-bold text-white mb-4 text-center">IT On-Site Rapid Response</h1>
        <p className="text-slate-300 max-w-3xl mx-auto text-center mb-10">
          Same-day onsite dispatch for network outages, server failures, endpoint emergencies, and cabling incidents. We restore business operations fast and document every step.
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="glass-card">
            <h2 className="text-2xl font-semibold text-white mb-4">What’s Included</h2>
            <ul className="space-y-2 text-slate-300">
              <li>• Same-day onsite dispatch</li>
              <li>• Network and server recovery</li>
              <li>• Endpoint replacement and imaging</li>
              <li>• Wireless and cabling remediation</li>
              <li>• Incident documentation</li>
            </ul>
          </div>
          <div className="glass-card">
            <h2 className="text-2xl font-semibold text-white mb-4">Why Zion Tech Group</h2>
            <ul className="space-y-2 text-slate-300">
              <li>• Faster restoration than remote-only support</li>
              <li>• Reduced business downtime</li>
              <li>• Local expertise with national coordination</li>
              <li>• Clear post-incident reporting</li>
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
          <h2 className="text-3xl font-bold text-white mb-4">Need Immediate Help?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Call now for emergency dispatch coordination or schedule a readiness review.</p>
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
