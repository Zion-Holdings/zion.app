import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "IT Log Management & SIEM - Zion Tech Group",
  description: "Centralized log management with real-time analysis, correlation, and alerting. Ingest logs from any source and detect threats, anomalies, and operational issues.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-log-management`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'IT Log Management & SIEM', 'description': 'Centralized log management with real-time analysis, correlation, and alerting. Ingest logs from any source and detect threats, anomalies, and operational issues.', 'serviceType': 'it', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'technology'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'IT Log Management & SIEM Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$500/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$1,500/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Centralized log collection from any source', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Centralized log collection from any source'}}, {'@type': 'Question', 'name': 'Real-time log analysis and correlation', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Real-time log analysis and correlation'}}, {'@type': 'Question', 'name': 'Custom alerting and dashboards', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Custom alerting and dashboards'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Detect threats in real-time; Meet compliance log retention requirements; Troubleshoot issues 10x faster'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/it-log-management`} title="IT Log Management & SIEM" />
        <h1 className="text-4xl font-bold mb-6">📊 IT Log Management & SIEM</h1>
        <p className="text-lg text-gray-300 mb-8">Centralized log management with real-time analysis, correlation, and alerting. Ingest logs from any source and detect threats, anomalies, and operational issues.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Centralized log collection from any source</li>
            <li>Real-time log analysis and correlation</li>
            <li>Custom alerting and dashboards</li>
            <li>Compliance reporting (SOC 2, HIPAA, PCI)</li>
            <li>Long-term log retention and archiving</li>
            <li>Integration with 200+ data sources</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Detect threats in real-time</li>
            <li>Meet compliance log retention requirements</li>
            <li>Troubleshoot issues 10x faster</li>
            <li>Centralize all logs in one platform</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$500/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$1,500/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$Custom/month</p>
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
