import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Backup / DR/BCaaS - Zion Tech Group",
  description: "Managed backup and disaster recovery: 3-2-1-1-airgap policy, every-30s WORM snapshots, point-in-time restore to 90 days, failover tests every 30 min, 4-hour RTO, 15-min RPO SLA.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-backup-dr-bc-as-a-service`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'Backup / DR/BCaaS', 'description': 'Managed backup and disaster recovery: 3-2-1-1-airgap policy, every-30s WORM snapshots, point-in-time restore to 90 days, failover tests every 30 min, 4-hour RTO, 15-min RPO SLA.', 'serviceType': 'it', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'commercial@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'General'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'Backup / DR/BCaaS Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$299/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$899/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': '$2,999/mo', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': '3-2-1-1-airgap backup policy enforced automatically', 'acceptedAnswer': {'@type': 'Answer', 'text': '3-2-1-1-airgap backup policy enforced automatically'}}, {'@type': 'Question', 'name': 'WORM snapshots every 30 seconds, point-in-time restore to 90 days', 'acceptedAnswer': {'@type': 'Answer', 'text': 'WORM snapshots every 30 seconds, point-in-time restore to 90 days'}}, {'@type': 'Question', 'name': 'Automatic failover testing every 30 minutes with pass/fail report', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Automatic failover testing every 30 minutes with pass/fail report'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Reduce costs with backup / dr/bcaas; Improve operational efficiency; Scale without complexity'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/it-backup-dr-bc-as-a-service`} title="Backup / DR/BCaaS" />
        <h1 className="text-4xl font-bold mb-6">♿ Backup / DR/BCaaS</h1>
        <p className="text-lg text-gray-300 mb-8">Managed backup and disaster recovery: 3-2-1-1-airgap policy, every-30s WORM snapshots, point-in-time restore to 90 days, failover tests every 30 min, 4-hour RTO, 15-min RPO SLA.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>3-2-1-1-airgap backup policy enforced automatically</li>
            <li>WORM snapshots every 30 seconds, point-in-time restore to 90 days</li>
            <li>Automatic failover testing every 30 minutes with pass/fail report</li>
            <li>4-hour RTO and 15-minute RPO SLA with financial credit clause</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce costs with backup / dr/bcaas</li>
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
