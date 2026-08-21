import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "UptimeCanary — Monitoring & Alerts - Zion Tech Group",
  description: "Simple uptime monitoring with HTTP checks, SSL monitoring, domain expiry alerts, and status pages. 1-minute intervals, 12 global regions, PagerDuty/Slack alerts.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-uptimecanary`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'UptimeCanary — Monitoring & Alerts', 'description': 'Simple uptime monitoring with HTTP checks, SSL monitoring, domain expiry alerts, and status pages. 1-minute intervals, 12 global regions, PagerDuty/Slack alerts.', 'serviceType': 'micro-saas', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Technology'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'UptimeCanary — Monitoring & Alerts Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$7/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$25/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$99/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'HTTP/HTTPS ping monitoring (1-min intervals)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'HTTP/HTTPS ping monitoring (1-min intervals)'}}, {'@type': 'Question', 'name': 'SSL certificate expiry monitoring', 'acceptedAnswer': {'@type': 'Answer', 'text': 'SSL certificate expiry monitoring'}}, {'@type': 'Question', 'name': 'Domain expiry alerts', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Domain expiry alerts'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Detect downtime in under 60 seconds; SSL/domain alerts prevent expiry surprises; Status page builds customer trust'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w174-uptimecanary`} title="UptimeCanary — Monitoring & Alerts" />
        <h1 className="text-4xl font-bold mb-6">🐦 UptimeCanary — Monitoring & Alerts</h1>
        <p className="text-lg text-gray-300 mb-8">Simple uptime monitoring with HTTP checks, SSL monitoring, domain expiry alerts, and status pages. 1-minute intervals, 12 global regions, PagerDuty/Slack alerts.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>HTTP/HTTPS ping monitoring (1-min intervals)</li>
            <li>SSL certificate expiry monitoring</li>
            <li>Domain expiry alerts</li>
            <li>Public status page with branding</li>
            <li>12 global monitoring regions</li>
            <li>PagerDuty, Slack, Opsgenie alerts</li>
            <li>API for programmatic checks</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Detect downtime in under 60 seconds</li>
            <li>SSL/domain alerts prevent expiry surprises</li>
            <li>Status page builds customer trust</li>
            <li>12 regions for global accuracy</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$7/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$25/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$99/mo/month</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <Link href="/services/" className="text-purple-300 hover:text-purple-200">← Back to All Services</Link>
          <Link href="/tools/" className="text-slate-400 hover:text-slate-300">Try our free tools →</Link>
        </div>

        <div className="text-center">
          <a
            href="https://calendly.com/kleber-ziontechgroup/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            Book a Consultation
          </a>
        </div>
      </div></main>
  );
}
