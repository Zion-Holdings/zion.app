import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Micro-SaaS Customer Health Score Platform - Zion Tech Group",
  description: "B2B SaaS customer health monitoring that aggregates product usage, support tickets, NPS scores, and payment history into a single health score. Predicts churn 60 days in advance.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-customer-health-score`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Micro-SaaS Customer Health Score Platform', 'description': 'B2B SaaS customer health monitoring that aggregates product usage, support tickets, NPS scores, and payment history into a single health score. Predicts churn 60 days in advance.', 'serviceType': 'micro-saas', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'technology'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Micro-SaaS Customer Health Score Platform Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$99/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$299/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Composite health score (0-100) per customer account', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Composite health score (0-100) per customer account'}}, {'@type': 'Question', 'name': 'Product usage tracking and feature adoption metrics', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Product usage tracking and feature adoption metrics'}}, {'@type': 'Question', 'name': 'Support ticket sentiment analysis and escalation triggers', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Support ticket sentiment analysis and escalation triggers'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Predict churn 60 days before it happens; Prioritize CSM time on highest-risk accounts; Increase net revenue retention by 15-25%'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/micro-saas-customer-health-score`} title="Micro-SaaS Customer Health Score Platform" />
        <h1 className="text-4xl font-bold mb-6">❤️ Micro-SaaS Customer Health Score Platform</h1>
        <p className="text-lg text-gray-300 mb-8">B2B SaaS customer health monitoring that aggregates product usage, support tickets, NPS scores, and payment history into a single health score. Predicts churn 60 days in advance.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Composite health score (0-100) per customer account</li>
            <li>Product usage tracking and feature adoption metrics</li>
            <li>Support ticket sentiment analysis and escalation triggers</li>
            <li>NPS/CSAT survey automation and trend analysis</li>
            <li>Payment history and contract renewal tracking</li>
            <li>Automated playbooks for at-risk accounts</li>
            <li>Slack/Teams alerts for health score drops</li>
            <li>Executive dashboard with portfolio health overview</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Predict churn 60 days before it happens</li>
            <li>Prioritize CSM time on highest-risk accounts</li>
            <li>Increase net revenue retention by 15-25%</li>
            <li>Data-driven renewal and expansion conversations</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$99/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$299/mo/month</p>
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
