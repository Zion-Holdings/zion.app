import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Cloud Readiness Assessment - Zion Tech Group",
  description: "Assess organizational cloud readiness: people, process, technology, governance. Roadmap with quick wins and cost modeling.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w177-cloud-readiness`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'Service', 'name': 'Cloud Readiness Assessment', 'description': 'Assess organizational cloud readiness: people, process, technology, governance. Roadmap with quick wins and cost modeling.', 'serviceType': 'it', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Cloud Computing'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Cloud Readiness Assessment Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$7,999', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$19,999', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} }/>
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Organizational cloud readiness assessment', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Organizational cloud readiness assessment'}}, {'@type': 'Question', 'name': 'Application portfolio analysis and cloud fit', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Application portfolio analysis and cloud fit'}}, {'@type': 'Question', 'name': 'People and skills gap analysis', 'acceptedAnswer': {'@type': 'Answer', 'text': 'People and skills gap analysis'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Know your readiness before you invest; Application portfolio tells you what to move first; Skills gaps addressed before migration'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} }/>
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w177-cloud-readiness`} title="Cloud Readiness Assessment" />
        <h1 className="text-4xl font-bold mb-6">☁️ Cloud Readiness Assessment</h1>
        <p className="text-lg text-gray-300 mb-8">Assess organizational cloud readiness: people, process, technology, governance. Roadmap with quick wins and cost modeling.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Organizational cloud readiness assessment</li>
            <li>Application portfolio analysis and cloud fit</li>
            <li>People and skills gap analysis</li>
            <li>Governance and compliance readiness</li>
            <li>TCO modeling and ROI projections</li>
            <li>Phased adoption roadmap with quick wins</li>
            <li>Change management and training plan</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Know your readiness before you invest</li>
            <li>Application portfolio tells you what to move first</li>
            <li>Skills gaps addressed before migration</li>
            <li>TCO model justifies the investment</li>
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
