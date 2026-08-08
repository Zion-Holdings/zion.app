import { } from 'next/navigation';

export const metadata = {
  title: "Data Product Catalog & Lineage - Zion Tech Group",
  description: "Auto-discover data assets from warehouse/lakehouse/BI. Business glossary auto-linked. Column-level lineage: table to report to dashboard. Auto-generated data co",
  alternates: {
    canonical: `https://ziontechgroup.com/services/data-product-catalog-svc`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Data Product Catalog &amp; Lineage</h1>
        <p className="text-lg text-gray-300 mb-8">Auto-discover data assets from warehouse/lakehouse/BI. Business glossary auto-linked. Column-level lineage: table to report to dashboard. Auto-generated data contracts per product.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Auto-discover assets (warehouse + lakehouse + BI)</li>
            <li>Business glossary auto-linked to actual columns</li>
            <li>Column-level lineage: table to report to dashboard</li>
            <li>Auto-generated data contract per published product</li>
            <li>Data quality SLA enforced per data product</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Find right dataset in 60 seconds not hours</li>
            <li>Column-level lineage — trace any metric to source</li>
            <li>Data contracts enforce schema stability</li>
            <li>Automated catalog discovery no manual upload</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$299</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$799</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$2499</p>
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
