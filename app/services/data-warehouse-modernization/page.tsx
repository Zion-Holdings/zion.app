import { } from 'next/navigation';

export const metadata = {
  title: "AI Data Warehouse Modernization - Zion Tech Group",
  description: "Modernize legacy data warehouses (Oracle, Teradata, on-prem) to cloud-native solutions (Snowflake, BigQuery, Redshift) with AI-assisted schema mapping and migration validation.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/data-warehouse-modernization`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI Data Warehouse Modernization</h1>
        <p className="text-lg text-gray-300 mb-8">Modernize legacy data warehouses (Oracle, Teradata, on-prem) to cloud-native solutions (Snowflake, BigQuery, Redshift) with AI-assisted schema mapping and migration validation.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Legacy schema extraction &amp; analysis</li>
            <li>AI-powered schema mapping to target</li>
            <li>Automated ETL/ELT pipeline generation</li>
            <li>Data lineage &amp; impact analysis</li>
            <li>Post-migration validation &amp; reconciliation</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>60% faster migration timelines</li>
            <li>Zero data loss guarantee</li>
            <li>50% lower TCO vs traditional consultancies</li>
            <li>Future-proof cloud-native architecture</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$1499</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$3499</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$9999</p>
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
