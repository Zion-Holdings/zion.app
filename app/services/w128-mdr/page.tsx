import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Managed Detection & Response (MDR) - Zion Tech Group",
  description: "24/7 threat monitoring, detection, and response. SOC-as-a-service with AI-powered threat hunting and incident response.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w128-mdr`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'Service', 'name': 'Managed Detection & Response (MDR)', 'description': '24/7 threat monitoring, detection, and response. SOC-as-a-service with AI-powered threat hunting and incident response.', 'serviceType': 'it-services', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'cybersecurity'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Managed Detection & Response (MDR) Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '0', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '14997', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '29997', 'priceCurrency': 'USD'}]}} }/>
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': '24/7 SOC monitoring', 'acceptedAnswer': {'@type': 'Answer', 'text': '24/7 SOC monitoring'}}, {'@type': 'Question', 'name': 'AI threat hunting', 'acceptedAnswer': {'@type': 'Answer', 'text': 'AI threat hunting'}}, {'@type': 'Question', 'name': 'Incident response', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Incident response'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reduce breach risk by 75%; 24/7 expert monitoring; Faster incident response'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} }/>
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w128-mdr`} title="Managed Detection & Response (MDR)" />
        <h1 className="text-4xl font-bold mb-6">🛡️ Managed Detection & Response (MDR)</h1>
        <p className="text-lg text-gray-300 mb-8">24/7 threat monitoring, detection, and response. SOC-as-a-service with AI-powered threat hunting and incident response.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>24/7 SOC monitoring</li>
            <li>AI threat hunting</li>
            <li>Incident response</li>
            <li>Threat intelligence</li>
            <li>Digital forensics</li>
            <li>Vulnerability management</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce breach risk by 75%</li>
            <li>24/7 expert monitoring</li>
            <li>Faster incident response</li>
            <li>Compliance-ready</li>
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
      </div></main>
  );
}
