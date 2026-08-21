import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Student Success Platform - Zion Tech Group",
  description: "Predict and prevent student dropout with AI. Analyze engagement, performance, and behavioral data to identify at-risk students and recommend interventions.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/edtech-student-success-platform`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Student Success Platform', 'description': 'Predict and prevent student dropout with AI. Analyze engagement, performance, and behavioral data to identify at-risk students and recommend interventions.', 'serviceType': 'edtech', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Education'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Student Success Platform Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$1,499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Early warning system for at-risk students', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Early warning system for at-risk students'}}, {'@type': 'Question', 'name': 'Engagement tracking across platforms', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Engagement tracking across platforms'}}, {'@type': 'Question', 'name': 'Predictive analytics for retention', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Predictive analytics for retention'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Improve retention rates by 20%; Identify at-risk students early; Data-driven intervention strategies'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/edtech-student-success-platform`} title="AI Student Success Platform" />
        <h1 className="text-4xl font-bold mb-6">📈 AI Student Success Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Predict and prevent student dropout with AI. Analyze engagement, performance, and behavioral data to identify at-risk students and recommend interventions.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Early warning system for at-risk students</li>
            <li>Engagement tracking across platforms</li>
            <li>Predictive analytics for retention</li>
            <li>Automated intervention recommendations</li>
            <li>Advisor dashboard</li>
            <li>Communication automation</li>
            <li>Success outcome tracking</li>
            <li>Integration with SIS and LMS</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Improve retention rates by 20%</li>
            <li>Identify at-risk students early</li>
            <li>Data-driven intervention strategies</li>
            <li>Improve graduation rates</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$499/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$1,499/mo/month</p>
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
