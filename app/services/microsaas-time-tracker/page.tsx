import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "TimeTrack Pro - Time Tracking - Zion Tech Group",
  description: "Simple yet powerful time tracking and timesheet management for teams. Features project tracking, invoicing integration, and productivity analytics.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/microsaas-time-tracker`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'TimeTrack Pro - Time Tracking', 'description': 'Simple yet powerful time tracking and timesheet management for teams. Features project tracking, invoicing integration, and productivity analytics.', 'serviceType': 'Micro-SaaS', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Productivity'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'TimeTrack Pro - Time Tracking Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$15/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$39/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$79/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Time Tracking', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Time Tracking'}}, {'@type': 'Question', 'name': 'Timesheets', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Timesheets'}}, {'@type': 'Question', 'name': 'Project Budgeting', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Project Budgeting'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Accurate billing; Improve productivity; Simplify payroll'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/microsaas-time-tracker`} title="TimeTrack Pro - Time Tracking" />
        <h1 className="text-4xl font-bold mb-6">clock TimeTrack Pro - Time Tracking</h1>
        <p className="text-lg text-gray-300 mb-8">Simple yet powerful time tracking and timesheet management for teams. Features project tracking, invoicing integration, and productivity analytics.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Time Tracking</li>
            <li>Timesheets</li>
            <li>Project Budgeting</li>
            <li>Invoice Generation</li>
            <li>Productivity Reports</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Accurate billing</li>
            <li>Improve productivity</li>
            <li>Simplify payroll</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$15/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$39/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$79/mo/month</p>
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
