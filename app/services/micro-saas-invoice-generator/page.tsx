import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "InvoiceFlow — Invoice Generator Micro-SaaS - Zion Tech Group",
  description: "Professional invoice and payment collection for freelancers and small businesses. Custom templates, recurring invoices, payment tracking, and automatic late payment reminders. Multi-currency and tax support.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/micro-saas-invoice-generator`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'InvoiceFlow — Invoice Generator Micro-SaaS', 'description': 'Professional invoice and payment collection for freelancers and small businesses. Custom templates, recurring invoices, payment tracking, and automatic late payment reminders. Multi-currency and tax support.', 'serviceType': 'micro-saas', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Finance'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'InvoiceFlow — Invoice Generator Micro-SaaS Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$29/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$89/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Custom invoice templates', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Custom invoice templates'}}, {'@type': 'Question', 'name': 'Recurring invoice automation', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Recurring invoice automation'}}, {'@type': 'Question', 'name': 'Payment tracking dashboard', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Payment tracking dashboard'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Get paid 2x faster; Automate invoicing workflows; Professional brand image'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/micro-saas-invoice-generator`} title="InvoiceFlow — Invoice Generator Micro-SaaS" />
        <h1 className="text-4xl font-bold mb-6">🧾 InvoiceFlow — Invoice Generator Micro-SaaS</h1>
        <p className="text-lg text-gray-300 mb-8">Professional invoice and payment collection for freelancers and small businesses. Custom templates, recurring invoices, payment tracking, and automatic late payment reminders. Multi-currency and tax support.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Custom invoice templates</li>
            <li>Recurring invoice automation</li>
            <li>Payment tracking dashboard</li>
            <li>Automatic late payment reminders</li>
            <li>Multi-currency support</li>
            <li>Tax calculation (VAT, GST, Sales Tax)</li>
            <li>Stripe/PayPal payment integration</li>
            <li>Expense and time tracking</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Get paid 2x faster</li>
            <li>Automate invoicing workflows</li>
            <li>Professional brand image</li>
            <li>Accurate tax compliance</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$29/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$89/mo/month</p>
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
