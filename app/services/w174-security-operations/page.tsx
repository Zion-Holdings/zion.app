import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Security Operations Maturity Assessment - Zion Tech Group",
  description: "Assess and roadmap your security operations maturity. Gap analysis against NIST CSF, CMMC, and CIS Controls. Build vs buy recommendations with 3-year TCO.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-security-operations`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'Service', 'name': 'Security Operations Maturity Assessment', 'description': 'Assess and roadmap your security operations maturity. Gap analysis against NIST CSF, CMMC, and CIS Controls. Build vs buy recommendations with 3-year TCO.', 'serviceType': 'security', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Cybersecurity'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Security Operations Maturity Assessment Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$4,999', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$14,999', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} }/>
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'NIST CSF maturity assessment', 'acceptedAnswer': {'@type': 'Answer', 'text': 'NIST CSF maturity assessment'}}, {'@type': 'Question', 'name': 'CMMC and CIS Controls gap analysis', 'acceptedAnswer': {'@type': 'Answer', 'text': 'CMMC and CIS Controls gap analysis'}}, {'@type': 'Question', 'name': 'Current state evaluation (people, process, tech)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Current state evaluation (people, process, tech)'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Know where you stand vs industry frameworks; Prioritized roadmap maximizes risk reduction per dollar; Build vs buy saves 30-50% vs wrong choices'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} }/>
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w174-security-operations`} title="Security Operations Maturity Assessment" />
        <h1 className="text-4xl font-bold mb-6">📊 Security Operations Maturity Assessment</h1>
        <p className="text-lg text-gray-300 mb-8">Assess and roadmap your security operations maturity. Gap analysis against NIST CSF, CMMC, and CIS Controls. Build vs buy recommendations with 3-year TCO.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>NIST CSF maturity assessment</li>
            <li>CMMC and CIS Controls gap analysis</li>
            <li>Current state evaluation (people, process, tech)</li>
            <li>Risk-prioritized roadmap</li>
            <li>Build vs buy analysis with TCO</li>
            <li>Quick wins identification</li>
            <li>Executive and board-ready findings</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Know where you stand vs industry frameworks</li>
            <li>Prioritized roadmap maximizes risk reduction per dollar</li>
            <li>Build vs buy saves 30-50% vs wrong choices</li>
            <li>Quick wins deliver value immediately</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$4,999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$14,999/month</p>
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
