import { } from 'next/navigation';

export const metadata = {
  title: "AI ESG Reporting Platform - Zion Tech Group",
  description: "Automated ESG data collection, analysis, and report generation. Supports GRI, SASB, TCFD, and EU Taxonomy frameworks. Real-time ESG scoring.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w130-saas-esg`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI ESG Reporting Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Automated ESG data collection, analysis, and report generation. Supports GRI, SASB, TCFD, and EU Taxonomy frameworks. Real-time ESG scoring.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-framework support (GRI/SASB/TCFD)</li>
            <li>Automated data collection</li>
            <li>Carbon footprint calculation</li>
            <li>ESG scoring &amp; benchmarking</li>
            <li>Stakeholder engagement tracking</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>80% faster ESG reporting</li>
            <li>Real-time ESG scoring</li>
            <li>Regulatory compliance</li>
            <li>Investor-ready reports</li>
            <li>Supply chain visibility</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$N/A/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$4997/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$12997/month</p>
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
