import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Enterprise Knowledge Management - Zion Tech Group",
  description: "AI-powered enterprise knowledge management: auto-organize documents, answer questions over your knowledge base, and surface relevant info in workflow tools.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-knowledge-mgmt`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'Service', 'name': 'Enterprise Knowledge Management', 'description': 'AI-powered enterprise knowledge management: auto-organize documents, answer questions over your knowledge base, and surface relevant info in workflow tools.', 'serviceType': 'data', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Knowledge Management'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Enterprise Knowledge Management Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$299/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$899/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$2,999/mo', 'priceCurrency': 'USD'}]}} }/>
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Auto-organize and tag documents', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Auto-organize and tag documents'}}, {'@type': 'Question', 'name': 'Natural language Q&A over knowledge base', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Natural language Q&A over knowledge base'}}, {'@type': 'Question', 'name': 'Relevant info surfacing in Slack, Teams, Confluence', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Relevant info surfacing in Slack, Teams, Confluence'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Find any information in seconds with NL search; AI surfaces relevant knowledge in your workflow; Knowledge gaps identified and addressed'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} }/>
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w174-knowledge-mgmt`} title="Enterprise Knowledge Management" />
        <h1 className="text-4xl font-bold mb-6">🧠 Enterprise Knowledge Management</h1>
        <p className="text-lg text-gray-300 mb-8">AI-powered enterprise knowledge management: auto-organize documents, answer questions over your knowledge base, and surface relevant info in workflow tools.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Auto-organize and tag documents</li>
            <li>Natural language Q&A over knowledge base</li>
            <li>Relevant info surfacing in Slack, Teams, Confluence</li>
            <li>Knowledge gap identification</li>
            <li>Content lifecycle and freshness management</li>
            <li>Access control and permissions</li>
            <li>Integration with Confluence, SharePoint, Notion, GDrive</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Find any information in seconds with NL search</li>
            <li>AI surfaces relevant knowledge in your workflow</li>
            <li>Knowledge gaps identified and addressed</li>
            <li>Content lifecycle keeps knowledge fresh</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$299/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$899/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$2,999/mo/month</p>
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
