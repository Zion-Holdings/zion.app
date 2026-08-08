import { } from 'next/navigation';

export const metadata = {
  title: "GCP Data Analytics Platform - Zion Tech Group",
  description: "End-to-end GCP analytics: BigQuery, Dataflow, Pub/Sub streaming, Looker dashboards. GCS Delta Lakehouse with partition pruning and auto-clustering.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/gcp-data-analytics-platform`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">GCP Data Analytics Platform</h1>
        <p className="text-lg text-gray-300 mb-8">End-to-end GCP analytics: BigQuery, Dataflow, Pub/Sub streaming, Looker dashboards. GCS Delta Lakehouse with partition pruning and auto-clustering.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>BigQuery + partition-cluster auto-tuning</li>
            <li>Dataflow batch + streaming pipelines</li>
            <li>Pub/Sub to BigQuery streaming ingestion</li>
            <li>Looker Studio + Looker dashboards</li>
            <li>GCS Delta Lakehouse (Iceberg/Delta)</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Start analytics in days not months</li>
            <li>Serverless no cluster management</li>
            <li>Real-time + batch from single pipeline</li>
            <li>Pay-per-query no over-provisioned cluster</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$1999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$5999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$19999</p>
            </div>
          </div>
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
