import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Customer Feedback Analyzer - Zion Tech Group",
  description: "Analyze customer feedback from surveys, reviews, support tickets, and social media. AI-powered theme extraction, sentiment tracking, and actionable insight generation.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-customer-feedback-analyzer`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Customer Feedback Analyzer', 'description': 'Analyze customer feedback from surveys, reviews, support tickets, and social media. AI-powered theme extraction, sentiment tracking, and actionable insight generation.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Customer Success'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Customer Feedback Analyzer Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$299/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$899/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Multi-source feedback aggregation', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Multi-source feedback aggregation'}}, {'@type': 'Question', 'name': 'AI theme and topic extraction', 'acceptedAnswer': {'@type': 'Answer', 'text': 'AI theme and topic extraction'}}, {'@type': 'Question', 'name': 'Sentiment trend tracking', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Sentiment trend tracking'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Understand customer pain points at scale; Track satisfaction trends over time; Prioritize product improvements'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-customer-feedback-analyzer`} title="AI Customer Feedback Analyzer" />
        <h1 className="text-4xl font-bold mb-6">💬 AI Customer Feedback Analyzer</h1>
        <p className="text-lg text-gray-300 mb-8">Analyze customer feedback from surveys, reviews, support tickets, and social media. AI-powered theme extraction, sentiment tracking, and actionable insight generation.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-source feedback aggregation</li>
            <li>AI theme and topic extraction</li>
            <li>Sentiment trend tracking</li>
            <li>NPS and CSAT analysis</li>
            <li>Actionable insight generation</li>
            <li>Integration with Zendesk, SurveyMonkey</li>
            <li>Custom categorization models</li>
            <li>Executive summary reports</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Understand customer pain points at scale</li>
            <li>Track satisfaction trends over time</li>
            <li>Prioritize product improvements</li>
            <li>Close the feedback loop faster</li>
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
