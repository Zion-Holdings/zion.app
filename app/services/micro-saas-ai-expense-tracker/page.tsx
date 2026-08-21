import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Micro-SAAS AI Expense Tracker & Approval - Zion Tech Group",
  description: "Smart expense management with AI receipt scanning, automatic categorization, policy enforcement, and approval workflows.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-ai-expense-tracker`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Micro-SAAS AI Expense Tracker & Approval', 'description': 'Smart expense management with AI receipt scanning, automatic categorization, policy enforcement, and approval workflows.', 'serviceType': 'ai', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Finance'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Micro-SAAS AI Expense Tracker & Approval Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '39', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '99', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '299', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'AI receipt scanning', 'acceptedAnswer': {'@type': 'Answer', 'text': 'AI receipt scanning'}}, {'@type': 'Question', 'name': 'Auto-categorization', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Auto-categorization'}}, {'@type': 'Question', 'name': 'Policy enforcement', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Policy enforcement'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': '90% faster expense processing; Policy compliance guaranteed; Real-time spend visibility'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/micro-saas-ai-expense-tracker`} title="Micro-SAAS AI Expense Tracker & Approval" />
        <h1 className="text-4xl font-bold mb-6">💰 Micro-SAAS AI Expense Tracker & Approval</h1>
        <p className="text-lg text-gray-300 mb-8">Smart expense management with AI receipt scanning, automatic categorization, policy enforcement, and approval workflows.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>AI receipt scanning</li>
            <li>Auto-categorization</li>
            <li>Policy enforcement</li>
            <li>Approval workflows</li>
            <li>Accounting integration</li>
            <li>Real-time reporting</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>90% faster expense processing</li>
            <li>Policy compliance guaranteed</li>
            <li>Real-time spend visibility</li>
            <li>Audit-ready reports</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$39/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$99/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$299/month</p>
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
