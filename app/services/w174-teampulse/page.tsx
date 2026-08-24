import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "TeamPulse — Employee Engagement - Zion Tech Group",
  description: "Continuous employee engagement: pulse surveys, 1-on-1 templates, OKR tracking, and burnout detection. Actionable insights, not vanity metrics.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-teampulse`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'Service', 'name': 'TeamPulse — Employee Engagement', 'description': 'Continuous employee engagement: pulse surveys, 1-on-1 templates, OKR tracking, and burnout detection. Actionable insights, not vanity metrics.', 'serviceType': 'micro-saas', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Human Resources'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'TeamPulse — Employee Engagement Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$4/user/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$8/user/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$15/user/mo', 'priceCurrency': 'USD'}]}} }/>
    <JsonLd data={{'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Pulse surveys (weekly, bi-weekly, custom)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Pulse surveys (weekly, bi-weekly, custom)'}}, {'@type': 'Question', 'name': '1-on-1 meeting templates and tracking', 'acceptedAnswer': {'@type': 'Answer', 'text': '1-on-1 meeting templates and tracking'}}, {'@type': 'Question', 'name': 'OKR/goal setting and progress tracking', 'acceptedAnswer': {'@type': 'Answer', 'text': 'OKR/goal setting and progress tracking'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Detect disengagement before attrition; Pulse surveys replace annual engagement surveys; OKR alignment across teams'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} }/>
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w174-teampulse`} title="TeamPulse — Employee Engagement" />
        <h1 className="text-4xl font-bold mb-6">💜 TeamPulse — Employee Engagement</h1>
        <p className="text-lg text-gray-300 mb-8">Continuous employee engagement: pulse surveys, 1-on-1 templates, OKR tracking, and burnout detection. Actionable insights, not vanity metrics.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Pulse surveys (weekly, bi-weekly, custom)</li>
            <li>1-on-1 meeting templates and tracking</li>
            <li>OKR/goal setting and progress tracking</li>
            <li>Burnout and disengagement risk scoring</li>
            <li>Anonymous feedback channels</li>
            <li>Manager effectiveness dashboard</li>
            <li>Integration with Slack, Teams, Workday</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Detect disengagement before attrition</li>
            <li>Pulse surveys replace annual engagement surveys</li>
            <li>OKR alignment across teams</li>
            <li>Manager coaching insights, not just scores</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$4/user/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$8/user/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$15/user/mo/month</p>
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
