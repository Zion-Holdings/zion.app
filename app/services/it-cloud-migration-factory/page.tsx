import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "IT Cloud Migration Factory - Zion Tech Group",
  description: "Systematic cloud migration service with assessment, planning, migration, and optimization. Proven methodology for lifting and shifting or re-architecting to cloud-native.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-cloud-migration-factory`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'IT Cloud Migration Factory', 'description': 'Systematic cloud migration service with assessment, planning, migration, and optimization. Proven methodology for lifting and shifting or re-architecting to cloud-native.', 'serviceType': 'it', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'technology'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'IT Cloud Migration Factory Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$25,000 project', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$75,000 project', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Application portfolio assessment', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Application portfolio assessment'}}, {'@type': 'Question', 'name': 'Migration strategy (rehost, refactor, rearchitect)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Migration strategy (rehost, refactor, rearchitect)'}}, {'@type': 'Question', 'name': 'Automated migration tooling', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Automated migration tooling'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Migrate 10x faster with automation; Reduce cloud costs by 40% post-migration; Zero-downtime migrations for critical apps'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/it-cloud-migration-factory`} title="IT Cloud Migration Factory" />
        <h1 className="text-4xl font-bold mb-6">☁️ IT Cloud Migration Factory</h1>
        <p className="text-lg text-gray-300 mb-8">Systematic cloud migration service with assessment, planning, migration, and optimization. Proven methodology for lifting and shifting or re-architecting to cloud-native.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Application portfolio assessment</li>
            <li>Migration strategy (rehost, refactor, rearchitect)</li>
            <li>Automated migration tooling</li>
            <li>Data migration with zero downtime</li>
            <li>Post-migration optimization</li>
            <li>Knowledge transfer and training</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Migrate 10x faster with automation</li>
            <li>Reduce cloud costs by 40% post-migration</li>
            <li>Zero-downtime migrations for critical apps</li>
            <li>De-risk migration with proven methodology</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$25,000 project/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$75,000 project/month</p>
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
