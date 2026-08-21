import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Citizen Services Platform - Zion Tech Group",
  description: "AI-powered citizen services for government agencies. Chatbots, form processing, case management, and automated eligibility determination.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-government-citizen-services`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Citizen Services Platform', 'description': 'AI-powered citizen services for government agencies. Chatbots, form processing, case management, and automated eligibility determination.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Government'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Citizen Services Platform Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$2,999/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$8,999/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Citizen service chatbots', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Citizen service chatbots'}}, {'@type': 'Question', 'name': 'Form processing automation', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Form processing automation'}}, {'@type': 'Question', 'name': 'Case management', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Case management'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Improve citizen experience; Reduce processing times by 70%; Increase accessibility'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-government-citizen-services`} title="AI Citizen Services Platform" />
        <h1 className="text-4xl font-bold mb-6">🏛️ AI Citizen Services Platform</h1>
        <p className="text-lg text-gray-300 mb-8">AI-powered citizen services for government agencies. Chatbots, form processing, case management, and automated eligibility determination.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Citizen service chatbots</li>
            <li>Form processing automation</li>
            <li>Case management</li>
            <li>Eligibility determination</li>
            <li>Multi-language support</li>
            <li>Integration with legacy government systems</li>
            <li>Accessibility compliance</li>
            <li>Analytics and reporting</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Improve citizen experience</li>
            <li>Reduce processing times by 70%</li>
            <li>Increase accessibility</li>
            <li>Reduce operational costs</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$2,999/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$8,999/mo/month</p>
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
