import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Quality Management System (QMS) - Zion Tech Group",
  description: "Manage quality: CAPA, audits, document control, compliance. ISO 9001, ISO 13485, FDA 21 CFR Part 820 aligned.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w177-quality-mgmt`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Quality Management System (QMS)', 'description': 'Manage quality: CAPA, audits, document control, compliance. ISO 9001, ISO 13485, FDA 21 CFR Part 820 aligned.', 'serviceType': 'automation', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Quality Assurance'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Quality Management System (QMS) Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$399/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$1,199/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$3,999/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'CAPA management and tracking', 'acceptedAnswer': {'@type': 'Answer', 'text': 'CAPA management and tracking'}}, {'@type': 'Question', 'name': 'Audit planning and execution', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Audit planning and execution'}}, {'@type': 'Question', 'name': 'Document control and approval', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Document control and approval'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'CAPA tracking ensures corrective actions; Audit management for compliance; Document control for ISO standards'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w177-quality-mgmt`} title="Quality Management System (QMS)" />
        <h1 className="text-4xl font-bold mb-6">✅ Quality Management System (QMS)</h1>
        <p className="text-lg text-gray-300 mb-8">Manage quality: CAPA, audits, document control, compliance. ISO 9001, ISO 13485, FDA 21 CFR Part 820 aligned.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>CAPA management and tracking</li>
            <li>Audit planning and execution</li>
            <li>Document control and approval</li>
            <li>Training management</li>
            <li>Supplier quality management</li>
            <li>Integration with MasterControl</li>
            <li>Veeva Vault QMS</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>CAPA tracking ensures corrective actions</li>
            <li>Audit management for compliance</li>
            <li>Document control for ISO standards</li>
            <li>Supplier quality for supply chain</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$399/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$1,199/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$3,999/mo/month</p>
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
