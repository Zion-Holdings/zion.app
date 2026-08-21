import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Email Archive and Migration - Zion Tech Group",
  description: "Email archive and migration: PST import, journal archive, cross-platform migration, compliance retention.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w177-email-arch-migrate`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Email Archive and Migration', 'description': 'Email archive and migration: PST import, journal archive, cross-platform migration, compliance retention.', 'serviceType': 'it', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'Data Management'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Email Archive and Migration Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$2,999', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$9,999', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'PST import and export', 'acceptedAnswer': {'@type': 'Answer', 'text': 'PST import and export'}}, {'@type': 'Question', 'name': 'Journal archive migration', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Journal archive migration'}}, {'@type': 'Question', 'name': 'Cross-platform migration (Exchange', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Cross-platform migration (Exchange'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Migrate email without data loss; Compliance retention enforced automatically; eDiscovery search for legal holds'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w177-email-arch-migrate`} title="Email Archive and Migration" />
        <h1 className="text-4xl font-bold mb-6">📧 Email Archive and Migration</h1>
        <p className="text-lg text-gray-300 mb-8">Email archive and migration: PST import, journal archive, cross-platform migration, compliance retention.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>PST import and export</li>
            <li>Journal archive migration</li>
            <li>Cross-platform migration (Exchange</li>
            <li>Google</li>
            <li>Zoho)</li>
            <li>Compliance retention policy enforcement</li>
            <li>eDiscovery search and export</li>
            <li>Deduplication and compression</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Migrate email without data loss</li>
            <li>Compliance retention enforced automatically</li>
            <li>eDiscovery search for legal holds</li>
            <li>Deduplication reduces storage costs</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$2,999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$9,999/month</p>
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
