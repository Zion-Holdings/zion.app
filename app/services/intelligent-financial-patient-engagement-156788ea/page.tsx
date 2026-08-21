import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Intelligent Financial Patient Engagement - Zion Tech Group",
  description: "AI-driven patient engagement platform that delivers next-generation personalized care journeys, remote monitoring, and adherence support through intelligent automation.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/intelligent-financial-patient-engagement-156788ea`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Intelligent Financial Patient Engagement', 'description': 'AI-driven patient engagement platform that delivers next-generation personalized care journeys, remote monitoring, and adherence support through intelligent automation.', 'serviceType': 'customer experience', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'hello@ziontechgroup.com', 'telephone': '+1 (302) 464-0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'healthcare'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Intelligent Financial Patient Engagement Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '258', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '648', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '1948', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Personalized care plans', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Personalized care plans'}}, {'@type': 'Question', 'name': 'Remote monitoring', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Remote monitoring'}}, {'@type': 'Question', 'name': 'Medication adherence', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Medication adherence'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Better outcomes; Higher satisfaction; Reduced readmissions'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/intelligent-financial-patient-engagement-156788ea`} title="Intelligent Financial Patient Engagement" />
        <h1 className="text-4xl font-bold mb-6">💡 Intelligent Financial Patient Engagement</h1>
        <p className="text-lg text-gray-300 mb-8">AI-driven patient engagement platform that delivers next-generation personalized care journeys, remote monitoring, and adherence support through intelligent automation.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Personalized care plans</li>
            <li>Remote monitoring</li>
            <li>Medication adherence</li>
            <li>Virtual consultations</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Better outcomes</li>
            <li>Higher satisfaction</li>
            <li>Reduced readmissions</li>
            <li>Lower costs</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$258/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$648/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$1948/month</p>
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
