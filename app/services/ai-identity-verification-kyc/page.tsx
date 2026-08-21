import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Identity Verification & KYC Platform - Zion Tech Group",
  description: "Automated KYC/AML for fintechs and banks: document verification, biometric matching, liveness detection, PEP/sanctions screening, ongoing monitoring.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-identity-verification-kyc`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'AI Identity Verification & KYC Platform', 'description': 'Automated KYC/AML for fintechs and banks: document verification, biometric matching, liveness detection, PEP/sanctions screening, ongoing monitoring.', 'serviceType': 'security', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Financial Services'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'AI Identity Verification & KYC Platform Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '1/verification', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '0.50/verification', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '0.25/verification', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'ID document verification (190+ countries)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'ID document verification (190+ countries)'}}, {'@type': 'Question', 'name': 'Biometric face matching', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Biometric face matching'}}, {'@type': 'Question', 'name': 'Liveness detection', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Liveness detection'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Verify identity in 30 seconds; Reduce fraud by 90%; Full AML compliance'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-identity-verification-kyc`} title="AI Identity Verification & KYC Platform" />
        <h1 className="text-4xl font-bold mb-6">🪪 AI Identity Verification & KYC Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Automated KYC/AML for fintechs and banks: document verification, biometric matching, liveness detection, PEP/sanctions screening, ongoing monitoring.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>ID document verification (190+ countries)</li>
            <li>Biometric face matching</li>
            <li>Liveness detection</li>
            <li>PEP & sanctions screening</li>
            <li>Ongoing audit monitoring</li>
            <li>Regulatory reporting</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Verify identity in 30 seconds</li>
            <li>Reduce fraud by 90%</li>
            <li>Full AML compliance</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$1/verification/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$0.50/verification/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$0.25/verification/month</p>
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
