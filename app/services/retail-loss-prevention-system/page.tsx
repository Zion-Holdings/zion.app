import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Retail Loss Prevention System - Zion Tech Group",
  description: "Computer vision and AI-powered loss prevention for retail. Detect shoplifting, employee theft, and inventory shrinkage in real-time using existing CCTV cameras.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/retail-loss-prevention-system`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Retail Loss Prevention System', 'description': 'Computer vision and AI-powered loss prevention for retail. Detect shoplifting, employee theft, and inventory shrinkage in real-time using existing CCTV cameras.', 'serviceType': 'retail-tech', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Retail'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Retail Loss Prevention System Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$999/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$2,999/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Real-time video analytics', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Real-time video analytics'}}, {'@type': 'Question', 'name': 'Shoplifting detection', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Shoplifting detection'}}, {'@type': 'Question', 'name': 'Employee theft detection', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Employee theft detection'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reduce shrinkage by 35%; Real-time theft alerts; Improve store safety'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/retail-loss-prevention-system`} title="AI Retail Loss Prevention System" />
        <h1 className="text-4xl font-bold mb-6">🔒 AI Retail Loss Prevention System</h1>
        <p className="text-lg text-gray-300 mb-8">Computer vision and AI-powered loss prevention for retail. Detect shoplifting, employee theft, and inventory shrinkage in real-time using existing CCTV cameras.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Real-time video analytics</li>
            <li>Shoplifting detection</li>
            <li>Employee theft detection</li>
            <li>Self-checkout monitoring</li>
            <li>POS exception detection</li>
            <li>Heatmap analytics</li>
            <li>Integration with existing CCTV</li>
            <li>Alert management dashboard</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce shrinkage by 35%</li>
            <li>Real-time theft alerts</li>
            <li>Improve store safety</li>
            <li>Data-driven loss prevention</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$999/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$2,999/mo/month</p>
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
