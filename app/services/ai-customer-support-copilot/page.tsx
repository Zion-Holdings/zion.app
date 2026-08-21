import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Customer Support Copilot - Zion Tech Group",
  description: "AI copilot for support agents that suggests responses, auto-summarizes tickets, and routes inquiries to the right team. Reduces average handle time by 40% while improving CSAT.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-customer-support-copilot`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Customer Support Copilot', 'description': 'AI copilot for support agents that suggests responses, auto-summarizes tickets, and routes inquiries to the right team. Reduces average handle time by 40% while improving CSAT.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'technology'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Customer Support Copilot Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$49/agent/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$99/agent/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Real-time response suggestions based on knowledge base', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Real-time response suggestions based on knowledge base'}}, {'@type': 'Question', 'name': 'Automatic ticket summarization and categorization', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Automatic ticket summarization and categorization'}}, {'@type': 'Question', 'name': 'Smart routing to best-qualified agent', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Smart routing to best-qualified agent'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reduce handle time by 40%; Improve first-contact resolution by 25%; Consistent quality across all agents'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-customer-support-copilot`} title="AI Customer Support Copilot" />
        <h1 className="text-4xl font-bold mb-6">🎧 AI Customer Support Copilot</h1>
        <p className="text-lg text-gray-300 mb-8">AI copilot for support agents that suggests responses, auto-summarizes tickets, and routes inquiries to the right team. Reduces average handle time by 40% while improving CSAT.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-time response suggestions based on knowledge base</li>
            <li>Automatic ticket summarization and categorization</li>
            <li>Smart routing to best-qualified agent</li>
            <li>Sentiment-aware tone adjustment</li>
            <li>Multi-language support (50+ languages)</li>
            <li>Integration with Zendesk, Intercom, Freshdesk</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce handle time by 40%</li>
            <li>Improve first-contact resolution by 25%</li>
            <li>Consistent quality across all agents</li>
            <li>Scale support without adding headcount</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$49/agent/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$99/agent/mo/month</p>
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
