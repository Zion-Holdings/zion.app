import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Crop Disease Detector - Zion Tech Group",
  description: "Detect crop diseases from smartphone photos: 200+ disease types, treatment recommendations, outbreak prediction. Offline mode.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w177-ai-crop-disease`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Crop Disease Detector', 'description': 'Detect crop diseases from smartphone photos: 200+ disease types, treatment recommendations, outbreak prediction. Offline mode.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Agriculture'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Crop Disease Detector Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$49/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$149/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$499/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': '200+ crop disease identification', 'acceptedAnswer': {'@type': 'Answer', 'text': '200+ crop disease identification'}}, {'@type': 'Question', 'name': 'Treatment and prevention recommendations', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Treatment and prevention recommendations'}}, {'@type': 'Question', 'name': 'Outbreak prediction and spread modeling', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Outbreak prediction and spread modeling'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Detect diseases early from a photo; Treatment recommendations by disease; Outbreak prediction prevents spread'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w177-ai-crop-disease`} title="AI Crop Disease Detector" />
        <h1 className="text-4xl font-bold mb-6">🌿 AI Crop Disease Detector</h1>
        <p className="text-lg text-gray-300 mb-8">Detect crop diseases from smartphone photos: 200+ disease types, treatment recommendations, outbreak prediction. Offline mode.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>200+ crop disease identification</li>
            <li>Treatment and prevention recommendations</li>
            <li>Outbreak prediction and spread modeling</li>
            <li>Offline mobile inference</li>
            <li>Weather and soil condition integration</li>
            <li>Spray timing recommendations</li>
            <li>Integration with John Deere</li>
            <li>Climate FieldView</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Detect diseases early from a photo</li>
            <li>Treatment recommendations by disease</li>
            <li>Outbreak prediction prevents spread</li>
            <li>Offline mode works anywhere</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$49/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$149/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$499/mo/month</p>
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
