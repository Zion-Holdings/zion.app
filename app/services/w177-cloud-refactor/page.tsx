import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Cloud Refactoring and Modernization - Zion Tech Group",
  description: "Refactor legacy apps for cloud: containerization, microservices decomposition, serverless conversion, data migration.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w177-cloud-refactor`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Cloud Refactoring and Modernization', 'description': 'Refactor legacy apps for cloud: containerization, microservices decomposition, serverless conversion, data migration.', 'serviceType': 'cloud', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Cloud Computing'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Cloud Refactoring and Modernization Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$9,999', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$29,999', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Application assessment and cloud fit', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Application assessment and cloud fit'}}, {'@type': 'Question', 'name': 'Containerization and Docker optimization', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Containerization and Docker optimization'}}, {'@type': 'Question', 'name': 'Microservices decomposition strategy', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Microservices decomposition strategy'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Modernize legacy apps for cloud scale; Containerization improves deployment; Microservices enable independent teams'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w177-cloud-refactor`} title="Cloud Refactoring and Modernization" />
        <h1 className="text-4xl font-bold mb-6">☁️ Cloud Refactoring and Modernization</h1>
        <p className="text-lg text-gray-300 mb-8">Refactor legacy apps for cloud: containerization, microservices decomposition, serverless conversion, data migration.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Application assessment and cloud fit</li>
            <li>Containerization and Docker optimization</li>
            <li>Microservices decomposition strategy</li>
            <li>Serverless conversion assessment</li>
            <li>Data migration and synchronization</li>
            <li>CI/CD pipeline modernization</li>
            <li>Integration with AWS</li>
            <li>Azure</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Modernize legacy apps for cloud scale</li>
            <li>Containerization improves deployment</li>
            <li>Microservices enable independent teams</li>
            <li>Serverless reduces operational burden</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$9,999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$29,999/month</p>
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
