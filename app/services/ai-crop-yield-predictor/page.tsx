import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Crop Yield Prediction & Precision Agriculture - Zion Tech Group",
  description: "AI-powered precision agriculture with crop yield prediction, soil analysis, and irrigation optimization. Increase yields by 20% while reducing water and fertilizer use.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-crop-yield-predictor`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Crop Yield Prediction & Precision Agriculture', 'description': 'AI-powered precision agriculture with crop yield prediction, soil analysis, and irrigation optimization. Increase yields by 20% while reducing water and fertilizer use.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'agritech'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Crop Yield Prediction & Precision Agriculture Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$1,499/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Satellite and drone imagery analysis', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Satellite and drone imagery analysis'}}, {'@type': 'Question', 'name': 'Crop yield prediction with weather integration', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Crop yield prediction with weather integration'}}, {'@type': 'Question', 'name': 'Soil health monitoring and recommendations', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Soil health monitoring and recommendations'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Increase crop yields by 20%; Reduce water usage by 30%; Detect pests and disease 2 weeks early'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-crop-yield-predictor`} title="AI Crop Yield Prediction & Precision Agriculture" />
        <h1 className="text-4xl font-bold mb-6">🌾 AI Crop Yield Prediction & Precision Agriculture</h1>
        <p className="text-lg text-gray-300 mb-8">AI-powered precision agriculture with crop yield prediction, soil analysis, and irrigation optimization. Increase yields by 20% while reducing water and fertilizer use.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Satellite and drone imagery analysis</li>
            <li>Crop yield prediction with weather integration</li>
            <li>Soil health monitoring and recommendations</li>
            <li>Irrigation optimization and scheduling</li>
            <li>Pest and disease early detection</li>
            <li>Integration with farm management software</li>
            <li>Field-level analytics and reporting</li>
            <li>Sustainability and carbon credit tracking</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Increase crop yields by 20%</li>
            <li>Reduce water usage by 30%</li>
            <li>Detect pests and disease 2 weeks early</li>
            <li>Optimize fertilizer application with AI</li>
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
