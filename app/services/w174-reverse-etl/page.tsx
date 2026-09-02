import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Reverse ETL & Data Activation - Zion Tech Group",
  description: "Push data from warehouse to operational systems (CRM, ad platforms, support tools). Activate warehouse data in tools your teams already use.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w174-reverse-etl`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w174-reverse-etl`} title="Reverse ETL & Data Activation" />
        <h1 className="text-4xl font-bold mb-6">🔄 Reverse ETL & Data Activation</h1>
        <p className="text-lg text-gray-300 mb-8">Push data from warehouse to operational systems (CRM, ad platforms, support tools). Activate warehouse data in tools your teams already use.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Push data from Snowflake/BigQuery to SaaS tools</li>
            <li>Sync to Salesforce, HubSpot, Braze, Zendesk</li>
            <li>Column mapping and transformation</li>
            <li>Scheduled and event-triggered syncs</li>
            <li>Sync monitoring and error alerting</li>
            <li>Pre-built and custom destinations</li>
            <li>Reverse ETL sync optimization</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Activate warehouse data in business tools</li>
            <li>CRM, ad, and support teams use fresh data</li>
            <li>No more CSV exports and manual imports</li>
            <li>Monitor sync health and catch issues fast</li>
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
      </div>
    </main>
  );
}
