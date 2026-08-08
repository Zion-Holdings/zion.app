import { } from 'next/navigation';

export const metadata = {
  title: "Observability Data Lakehouse - Zion Tech Group",
  description: "Unified observability: metrics, traces, logs, events in one Iceberg-format lakehouse. OpenMetadata catalog, standard SQL across all signals. Retention hours to years per data class.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/observability-lakehouse`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Observability Data Lakehouse</h1>
        <p className="text-lg text-gray-300 mb-8">Unified observability: metrics, traces, logs, events in one Iceberg-format lakehouse. OpenMetadata catalog, standard SQL across all signals. Retention hours to years per data class.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Metrics + traces + logs + events in single Iceberg format</li>
            <li>OpenMetadata catalog + lineage per signal type</li>
            <li>Standard SQL query across all observability data</li>
            <li>Per-signal retention (hours to years)</li>
            <li>Built-in aggregations + rollups for dashboarding</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>No siloed observability tools</li>
            <li>Query traces with SQL, join with business context</li>
            <li>Single storage no duplication</li>
            <li>Years of retention at commodity storage cost</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$699</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$1999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$6999</p>
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
