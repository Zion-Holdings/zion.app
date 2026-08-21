import JsonLd from '@/components/JsonLd';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "IT Data Backup & Recovery Service - Zion Tech Group",
  description: "Comprehensive backup and recovery solution with automated backups, point-in-time recovery, and disaster recovery testing. Protect against ransomware, human error, and hardware failure.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-data-backup-recovery`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
    <JsonLd data={'@context': 'https://schema.org', '@type': 'Service', 'name': 'IT Data Backup & Recovery Service', 'description': 'Comprehensive backup and recovery solution with automated backups, point-in-time recovery, and disaster recovery testing. Protect against ransomware, human error, and hardware failure.', 'serviceType': 'it', 'provider': {'@type': 'Organization', 'name': 'Zion Tech Group', 'url': 'https://ziontechgroup.com', 'contactPoint': {'@type': 'ContactPoint', 'email': 'kleber@ziontechgroup.com', 'telephone': '+1 302 464 0950', 'contactType': 'sales'}}, 'serviceArea': {'@type': 'Place', 'name': 'technology'}, 'hasOfferCatalog': {'@type': 'OfferCatalog', 'name': 'IT Data Backup & Recovery Service Pricing Plans', 'itemListElement': [{'@type': 'Offer', 'name': 'Basic', 'price': '$500/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Pro', 'price': '$1,500/mo', 'priceCurrency': 'USD'}, {'@type': 'Offer', 'name': 'Enterprise', 'price': 'Custom', 'priceCurrency': 'USD'}]}} />
    <JsonLd data={'@context': 'https://schema.org', '@type': 'FAQPage', 'mainEntity': [{'@type': 'Question', 'name': 'Automated backup scheduling (hourly to daily)', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Automated backup scheduling (hourly to daily)'}}, {'@type': 'Question', 'name': 'Point-in-time recovery for databases', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Point-in-time recovery for databases'}}, {'@type': 'Question', 'name': 'Immutable backups for ransomware protection', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Immutable backups for ransomware protection'}}, {'@type': 'Question', 'name': 'What business impact can I expect?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Recover from ransomware in hours not days; Meet RPO/RTO requirements; Automated DR testing ensures readiness'}}, {'@type': 'Question', 'name': 'How do I get started with this service?', 'acceptedAnswer': {'@type': 'Answer', 'text': 'Contact our team at hello@ziontechgroup.com or book a free consultation at https://calendly.com/kleber-ziontechgroup/consultation to get started.'}}]} />
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/it-data-backup-recovery`} title="IT Data Backup & Recovery Service" />
        <h1 className="text-4xl font-bold mb-6">💾 IT Data Backup & Recovery Service</h1>
        <p className="text-lg text-gray-300 mb-8">Comprehensive backup and recovery solution with automated backups, point-in-time recovery, and disaster recovery testing. Protect against ransomware, human error, and hardware failure.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Automated backup scheduling (hourly to daily)</li>
            <li>Point-in-time recovery for databases</li>
            <li>Immutable backups for ransomware protection</li>
            <li>Automated DR testing without production impact</li>
            <li>Cross-region replication</li>
            <li>Compliance retention policies</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Recover from ransomware in hours not days</li>
            <li>Meet RPO/RTO requirements</li>
            <li>Automated DR testing ensures readiness</li>
            <li>Protect against accidental deletion</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$500/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$1,500/mo/month</p>
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
