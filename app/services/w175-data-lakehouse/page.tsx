import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "Data Lakehouse Architecture - Zion Tech Group",
  description: "Build a modern data lakehouse: S3/ADLS/GCS storage, Iceberg/Delta lake tables, unified batch and streaming, and open table formats. Best of lake + warehouse.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w175-data-lakehouse`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/w175-data-lakehouse`} title="Data Lakehouse Architecture" />
        <h1 className="text-4xl font-bold mb-6">🏔️ Data Lakehouse Architecture</h1>
        <p className="text-lg text-gray-300 mb-8">Build a modern data lakehouse: S3/ADLS/GCS storage, Iceberg/Delta lake tables, unified batch and streaming, and open table formats. Best of lake + warehouse.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Lakehouse architecture design</li>
            <li>Iceberg and Delta Lake table management</li>
            <li>Unified batch and streaming ingestion</li>
            <li>Schema evolution and time travel</li>
            <li>Query with Trino/Spark/DuckDB</li>
            <li>Cost-optimized storage tiering</li>
            <li>AWS, Azure, GCP deployment</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Best of data lake and warehouse in one</li>
            <li>Open table formats prevent vendor lock-in</li>
            <li>Time travel for data audit and rollback</li>
            <li>Cost tiering reduces storage costs</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$599/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$1,799/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$$5,999/mo/month</p>
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
