import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Cloud Database Managed Service - Zion Tech Group",
  description: "Managed cloud databases: RDS, Cloud SQL, Cosmos DB, DynamoDB. Performance tuning, HA/DR, cost optimization.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w177-cloud-db`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w177-cloud-db`} title="Cloud Database Managed Service" />
        <h1 className="text-4xl font-bold mb-6">🗄️ Cloud Database Managed Service</h1>
        <p className="text-lg text-gray-300 mb-8">Managed cloud databases: RDS, Cloud SQL, Cosmos DB, DynamoDB. Performance tuning, HA/DR, cost optimization.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Database provisioning and configuration</li>
            <li>Performance tuning and query optimization</li>
            <li>High availability and disaster recovery</li>
            <li>Read replicas and scaling</li>
            <li>Backup and point-in-time recovery</li>
            <li>Cost optimization (right-sizing</li>
            <li>reserved)</li>
            <li>AWS RDS</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Expert DBA management without hiring</li>
            <li>Performance tuning reduces query times</li>
            <li>HA/DR for business continuity</li>
            <li>Cost optimization reduces cloud spend</li>
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
