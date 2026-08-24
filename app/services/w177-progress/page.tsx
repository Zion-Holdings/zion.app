import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "ProgressBoard — OKR Tracking - Zion Tech Group",
  description: "OKR tracking: cascading goals, progress visibility, retrospective insights. Keep teams aligned.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w177-progress`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'Service', 'name': 'ProgressBoard — OKR Tracking', 'description': 'OKR tracking: cascading goals, progress visibility, retrospective insights. Keep teams aligned.', 'serviceType': 'micro-saas', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Productivity'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'ProgressBoard — OKR Tracking Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$5/user/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$10/user/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$20/user/mo', 'priceCurrency': 'USD'}]}} }/>
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'OKR creation and cascading', 'acceptedAnswer': {'@type': 'Answer', 'text': 'OKR creation and cascading'}}, {'@type': 'Question', 'name': 'Progress tracking with confidence ratings', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Progress tracking with confidence ratings'}}, {'@type': 'Question', 'name': 'Weekly check-in prompts and updates', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Weekly check-in prompts and updates'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Cascading OKRs align teams to strategy; Visibility across organization; Weekly check-ins prevent drift'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} }/>
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w177-progress`} title="ProgressBoard — OKR Tracking" />
        <h1 className="text-4xl font-bold mb-6">🎯 ProgressBoard — OKR Tracking</h1>
        <p className="text-lg text-gray-300 mb-8">OKR tracking: cascading goals, progress visibility, retrospective insights. Keep teams aligned.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>OKR creation and cascading</li>
            <li>Progress tracking with confidence ratings</li>
            <li>Weekly check-in prompts and updates</li>
            <li>Retrospective and scoring</li>
            <li>Visibility across organization</li>
            <li>Integration with Slack</li>
            <li>Jira</li>
            <li>Asana</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Cascading OKRs align teams to strategy</li>
            <li>Visibility across organization</li>
            <li>Weekly check-ins prevent drift</li>
            <li>Retrospectives drive continuous improvement</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$5/user/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$10/user/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$20/user/mo/month</p>
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
