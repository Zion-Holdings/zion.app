import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Crop Diagnostic & Yield Optimizer - Zion Tech Group",
  description: "Precision agriculture: drone/satellite crop health imaging, pest detection, irrigation optimization, yield prediction. Field-level recommendations in real-time.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-agriculture-crop-advisor`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Crop Diagnostic & Yield Optimizer', 'description': 'Precision agriculture: drone/satellite crop health imaging, pest detection, irrigation optimization, yield prediction. Field-level recommendations in real-time.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Agriculture'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Crop Diagnostic & Yield Optimizer Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '49/acre', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '99/acre', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '249/acre', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Crop health imaging (drone + satellite)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Crop health imaging (drone + satellite)'}}, {'@type': 'Question', 'name': 'Pest & disease early detection', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Pest & disease early detection'}}, {'@type': 'Question', 'name': 'Irrigation optimization', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Irrigation optimization'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Increase yields by 20%; Reduce water use by 30%; Cut pesticide costs by 40%'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-agriculture-crop-advisor`} title="AI Crop Diagnostic & Yield Optimizer" />
        <h1 className="text-4xl font-bold mb-6">🌾 AI Crop Diagnostic & Yield Optimizer</h1>
        <p className="text-lg text-gray-300 mb-8">Precision agriculture: drone/satellite crop health imaging, pest detection, irrigation optimization, yield prediction. Field-level recommendations in real-time.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Crop health imaging (drone + satellite)</li>
            <li>Pest & disease early detection</li>
            <li>Irrigation optimization</li>
            <li>Yield prediction models</li>
            <li>Soil nutrient mapping</li>
            <li>Weather impact forecasting</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Increase yields by 20%</li>
            <li>Reduce water use by 30%</li>
            <li>Cut pesticide costs by 40%</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$49/acre/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$99/acre/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$249/acre/month</p>
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
