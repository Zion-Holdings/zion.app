import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Mainframe Modernization - Zion Tech Group",
  description: "Migrate legacy COBOL, PL/I, and JCL workloads to cloud-native microservices with automated refactoring, data migration, and parallel-run validation.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/mainframe-modernization`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Mainframe Modernization', 'description': 'Migrate legacy COBOL, PL/I, and JCL workloads to cloud-native microservices with automated refactoring, data migration, and parallel-run validation.', 'serviceType': 'it', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'commercial@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'General'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Mainframe Modernization Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$299/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$899/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$2,999/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'COBOL → Java/Python transpiler', 'acceptedAnswer': {'@type': 'Answer', 'text': 'COBOL → Java/Python transpiler'}}, {'@type': 'Question', 'name': 'Automated data migration', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Automated data migration'}}, {'@type': 'Question', 'name': 'Parallel run validation', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Parallel run validation'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reduce costs with mainframe modernization; Improve operational efficiency; Scale without complexity'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/mainframe-modernization`} title="Mainframe Modernization" />
        <h1 className="text-4xl font-bold mb-6">♿ Mainframe Modernization</h1>
        <p className="text-lg text-gray-300 mb-8">Migrate legacy COBOL, PL/I, and JCL workloads to cloud-native microservices with automated refactoring, data migration, and parallel-run validation.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>COBOL → Java/Python transpiler</li>
            <li>Automated data migration</li>
            <li>Parallel run validation</li>
            <li>Mainframe emulator for testing</li>
            <li>Gradual cutover strategy</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce costs with mainframe modernization</li>
            <li>Improve operational efficiency</li>
            <li>Scale without complexity</li>
            <li>Enterprise-grade reliability</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$299/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$899/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$2,999/mo/month</p>
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
