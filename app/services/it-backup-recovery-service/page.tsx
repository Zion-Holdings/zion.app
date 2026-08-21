import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "IT Backup & Disaster Recovery as a Service - Zion Tech Group",
  description: "Cloud-native backup and disaster recovery for VMs, databases, and SaaS applications with instant recovery and automated testing.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-backup-recovery-service`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'IT Backup & Disaster Recovery as a Service', 'description': 'Cloud-native backup and disaster recovery for VMs, databases, and SaaS applications with instant recovery and automated testing.', 'serviceType': 'it', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'technology'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'IT Backup & Disaster Recovery as a Service Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$199/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$599/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Agentless VM and database backup', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Agentless VM and database backup'}}, {'@type': 'Question', 'name': 'Instant recovery with sub-minute RTO', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Instant recovery with sub-minute RTO'}}, {'@type': 'Question', 'name': 'Automated backup testing and validation', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Automated backup testing and validation'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Achieve near-zero RPO and RTO; Protect against ransomware; Automate DR testing'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/it-backup-recovery-service`} title="IT Backup & Disaster Recovery as a Service" />
        <h1 className="text-4xl font-bold mb-6">💾 IT Backup & Disaster Recovery as a Service</h1>
        <p className="text-lg text-gray-300 mb-8">Cloud-native backup and disaster recovery for VMs, databases, and SaaS applications with instant recovery and automated testing.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Agentless VM and database backup</li>
            <li>Instant recovery with sub-minute RTO</li>
            <li>Automated backup testing and validation</li>
            <li>Immutable backups for ransomware protection</li>
            <li>Cross-region replication</li>
            <li>Integration with AWS, Azure, GCP, VMware</li>
            <li>Compliance-ready reporting</li>
            <li>24/7 monitoring and alerting</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Achieve near-zero RPO and RTO</li>
            <li>Protect against ransomware</li>
            <li>Automate DR testing</li>
            <li>Reduce backup costs by 40%</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$199/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$599/mo/month</p>
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
