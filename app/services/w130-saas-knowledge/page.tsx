import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Knowledge Management Platform - Zion Tech Group",
  description: "Enterprise knowledge base with AI-powered search, auto-categorization, and intelligent recommendations. Connects to Slack, Teams, Confluence, and SharePoint.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w130-saas-knowledge`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Knowledge Management Platform', 'description': 'Enterprise knowledge base with AI-powered search, auto-categorization, and intelligent recommendations. Connects to Slack, Teams, Confluence, and SharePoint.', 'serviceType': 'micro-saas', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'knowledge-management'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Knowledge Management Platform Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '0', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '1297', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '3497', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'AI-powered search', 'acceptedAnswer': {'@type': 'Answer', 'text': 'AI-powered search'}}, {'@type': 'Question', 'name': 'Auto-categorization', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Auto-categorization'}}, {'@type': 'Question', 'name': 'Intelligent recommendations', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Intelligent recommendations'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Find answers 10x faster; Reduce duplicate work by 40%; Preserve institutional knowledge'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w130-saas-knowledge`} title="AI Knowledge Management Platform" />
        <h1 className="text-4xl font-bold mb-6">📚 AI Knowledge Management Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Enterprise knowledge base with AI-powered search, auto-categorization, and intelligent recommendations. Connects to Slack, Teams, Confluence, and SharePoint.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>AI-powered search</li>
            <li>Auto-categorization</li>
            <li>Intelligent recommendations</li>
            <li>Multi-source integration</li>
            <li>Knowledge gap analysis</li>
            <li>Expert identification</li>
            <li>Content freshness scoring</li>
            <li>Access control & governance</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Find answers 10x faster</li>
            <li>Reduce duplicate work by 40%</li>
            <li>Preserve institutional knowledge</li>
            <li>Improve onboarding speed</li>
            <li>Data-driven knowledge gaps</li>
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
              <p className="text-2xl font-bold mb-2">$1297/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$3497/month</p>
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
