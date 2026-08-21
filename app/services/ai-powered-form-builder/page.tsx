import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI-Powered Form & Survey Builder - Zion Tech Group",
  description: "Create intelligent forms and surveys with AI that suggests questions, analyzes responses, and generates insights. Includes conditional logic, multi-language support, 200+ templates, and integrations with 50+ tools.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-powered-form-builder`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI-Powered Form & Survey Builder', 'description': 'Create intelligent forms and surveys with AI that suggests questions, analyzes responses, and generates insights. Includes conditional logic, multi-language support, 200+ templates, and integrations with 50+ tools.', 'serviceType': 'micro-saas', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Enterprise'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI-Powered Form & Survey Builder Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '0', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '0', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '149', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'AI question suggestions', 'acceptedAnswer': {'@type': 'Answer', 'text': 'AI question suggestions'}}, {'@type': 'Question', 'name': 'Response analytics', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Response analytics'}}, {'@type': 'Question', 'name': 'Conditional logic', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Conditional logic'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': '3x faster form creation; 40% higher completion rates; Auto-generated insights'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-powered-form-builder`} title="AI-Powered Form & Survey Builder" />
        <h1 className="text-4xl font-bold mb-6">📝 AI-Powered Form & Survey Builder</h1>
        <p className="text-lg text-gray-300 mb-8">Create intelligent forms and surveys with AI that suggests questions, analyzes responses, and generates insights. Includes conditional logic, multi-language support, 200+ templates, and integrations with 50+ tools.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>AI question suggestions</li>
            <li>Response analytics</li>
            <li>Conditional logic</li>
            <li>200+ templates</li>
            <li>Multi-language</li>
            <li>CRM/Slack/Sheets integration</li>
            <li>Custom branding</li>
            <li>HIPAA/GDPR compliant</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>3x faster form creation</li>
            <li>40% higher completion rates</li>
            <li>Auto-generated insights</li>
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
              <p className="text-2xl font-bold mb-2">$499/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$149/month</p>
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
