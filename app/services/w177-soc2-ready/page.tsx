import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "SOC 2 Compliance Readiness - Zion Tech Group",
  description: "Prepare for SOC 2 Type I and II: gap analysis, control implementation, evidence collection, auditor coordination.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w177-soc2-ready`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'SOC 2 Compliance Readiness', 'description': 'Prepare for SOC 2 Type I and II: gap analysis, control implementation, evidence collection, auditor coordination.', 'serviceType': 'it', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Compliance'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'SOC 2 Compliance Readiness Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$7,999', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$19,999', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'SOC 2 gap analysis (Trust Services Criteria)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'SOC 2 gap analysis (Trust Services Criteria)'}}, {'@type': 'Question', 'name': 'Control implementation roadmap', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Control implementation roadmap'}}, {'@type': 'Question', 'name': 'Evidence collection automation', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Evidence collection automation'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Pass SOC 2 on the first try; Automated evidence collection saves weeks; Continuous monitoring maintains compliance'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w177-soc2-ready`} title="SOC 2 Compliance Readiness" />
        <h1 className="text-4xl font-bold mb-6">✅ SOC 2 Compliance Readiness</h1>
        <p className="text-lg text-gray-300 mb-8">Prepare for SOC 2 Type I and II: gap analysis, control implementation, evidence collection, auditor coordination.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>SOC 2 gap analysis (Trust Services Criteria)</li>
            <li>Control implementation roadmap</li>
            <li>Evidence collection automation</li>
            <li>Auditor coordination and support</li>
            <li>Policy and procedure documentation</li>
            <li>Continuous monitoring setup</li>
            <li>Pre-audit readiness assessment</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Pass SOC 2 on the first try</li>
            <li>Automated evidence collection saves weeks</li>
            <li>Continuous monitoring maintains compliance</li>
            <li>Auditor coordination reduces stress</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$7,999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$19,999/month</p>
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
