import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Managed Detection & Response (MDR) - Zion Tech Group",
  description: "Enterprise-grade 24/7 security operations delivered as a service. AI-augmented threat detection across endpoints, network, and cloud — with human-led incident investigation, containment, and response in under 15 minutes.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/wave126-managed-detection-response`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Managed Detection & Response (MDR)', 'description': 'Enterprise-grade 24/7 security operations delivered as a service. AI-augmented threat detection across endpoints, network, and cloud — with human-led incident investigation, containment, and response in under 15 minutes.', 'serviceType': 'security', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Cybersecurity'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Managed Detection & Response (MDR) Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '0', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '14997', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '29997', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': '24/7 SOC with AI-augmented threat detection', 'acceptedAnswer': {'@type': 'Answer', 'text': '24/7 SOC with AI-augmented threat detection'}}, {'@type': 'Question', 'name': 'Endpoint, network, and cloud telemetry correlation', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Endpoint, network, and cloud telemetry correlation'}}, {'@type': 'Question', 'name': 'Threat hunting by veteran security analysts', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Threat hunting by veteran security analysts'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Enterprise SOC capability without building one; Sub-15-minute response to active threats; Reduce mean time to detect by 90%'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/wave126-managed-detection-response`} title="Managed Detection & Response (MDR)" />
        <h1 className="text-4xl font-bold mb-6">🛡️ Managed Detection & Response (MDR)</h1>
        <p className="text-lg text-gray-300 mb-8">Enterprise-grade 24/7 security operations delivered as a service. AI-augmented threat detection across endpoints, network, and cloud — with human-led incident investigation, containment, and response in under 15 minutes.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>24/7 SOC with AI-augmented threat detection</li>
            <li>Endpoint, network, and cloud telemetry correlation</li>
            <li>Threat hunting by veteran security analysts</li>
            <li>Incident investigation & containment (<15 min SLA)</li>
            <li>Playbook-driven & custom incident response</li>
            <li>Monthly threat landscape briefings</li>
            <li>Deception technology & honeypot deployment</li>
            <li>MITRE ATT&CK mapping for all detections</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Enterprise SOC capability without building one</li>
            <li>Sub-15-minute response to active threats</li>
            <li>Reduce mean time to detect by 90%</li>
            <li>Compliance-ready with full audit trail</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$199/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$14997/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$29997/month</p>
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
      </div>
    
    <!-- Zion SchemaAgent: Service+FAQPage -->
    <script type="application/ld+json">{"@context": "https://schema.org", "@type": "Service", "name": "Managed Detection & Response (MDR)", "description": "Enterprise-grade 24/7 security operations delivered as a service. AI-augmented threat detection across endpoints, network, and cloud \u2014 with human-led incident investigation, containment, and response in under 15 minutes.", "serviceType": "Managed Detection & Response (MDR)", "category": "Security", "provider": {"@type": "Organization", "name": "Zion Tech Group", "url": "https://ziontechgroup.com"}, "areaServed": "Cybersecurity", "featureList": ["24/7 SOC with AI-augmented threat detection", "Endpoint, network, and cloud telemetry correlation", "Threat hunting by veteran security analysts", "Incident investigation & containment (<15 min SLA)", "Playbook-driven & custom incident response", "Monthly threat landscape briefings", "Deception technology & honeypot deployment", "MITRE ATT&CK mapping for all detections"], "offers": [{"@type": "Offer", "name": "Professional", "price": "14997", "priceCurrency": "USD", "description": "Professional tier for Managed Detection & Response (MDR)"}, {"@type": "Offer", "name": "Enterprise", "price": "29997", "priceCurrency": "USD", "description": "Enterprise tier for Managed Detection & Response (MDR)"}], "url": "https://ziontechgroup.com/services/wave126-managed-detection-response"}</script>
    <script type="application/ld+json">{"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is Managed Detection & Response (MDR) feature 1?", "acceptedAnswer": {"@type": "Answer", "text": "24/7 SOC with AI-augmented threat detection"}}, {"@type": "Question", "name": "What is Managed Detection & Response (MDR) feature 2?", "acceptedAnswer": {"@type": "Answer", "text": "Endpoint, network, and cloud telemetry correlation"}}, {"@type": "Question", "name": "What is Managed Detection & Response (MDR) feature 3?", "acceptedAnswer": {"@type": "Answer", "text": "Threat hunting by veteran security analysts"}}, {"@type": "Question", "name": "What is Managed Detection & Response (MDR) feature 4?", "acceptedAnswer": {"@type": "Answer", "text": "Incident investigation & containment (<15 min SLA)"}}, {"@type": "Question", "name": "What is Managed Detection & Response (MDR) feature 5?", "acceptedAnswer": {"@type": "Answer", "text": "Playbook-driven & custom incident response"}}, {"@type": "Question", "name": "What business benefit does Managed Detection & Response (MDR) provide (1)?", "acceptedAnswer": {"@type": "Answer", "text": "Enterprise SOC capability without building one"}}, {"@type": "Question", "name": "What business benefit does Managed Detection & Response (MDR) provide (2)?", "acceptedAnswer": {"@type": "Answer", "text": "Sub-15-minute response to active threats"}}, {"@type": "Question", "name": "What business benefit does Managed Detection & Response (MDR) provide (3)?", "acceptedAnswer": {"@type": "Answer", "text": "Reduce mean time to detect by 90%"}}]}</script>
  </main>
  );
}
