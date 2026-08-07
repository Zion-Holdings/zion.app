import { } from 'next/navigation';

export const metadata = {
  title: "Smart DevOps Platform - Logistics - Zion Tech Group",
  description: "Revolutionize logistics through intelligent automation. Our Smart DevOps Platform - Logistics leverages advanced machine learning to deliver healthcare data analytics at scale.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/smart-devops-platform-logistics-6f830b34`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Smart DevOps Platform - Logistics</h1>
        <p className="text-lg text-gray-300 mb-8">Revolutionize logistics through intelligent automation. Our Smart DevOps Platform - Logistics leverages advanced machine learning to deliver healthcare data analytics at scale.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>HIPAA ready with healthcare data protection</li>
            <li>API-first design with comprehensive REST and GraphQL endpoints</li>
            <li>Compliance monitoring with regulatory updates</li>
            <li>Data loss prevention (DLP)</li>
            <li>Performance dashboards with real-time metrics</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>reduced environmental impact and costs</li>
            <li>Better customer retention rates</li>
            <li>Reduced contract negotiation time</li>
            <li>Improved conversion funnel metrics</li>
            <li>Improved sales performance with lead scoring</li>
            <li>Improved product quality scores</li>
            <li>Better supply chain visibility with tracking</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$199</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$499</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$1499</p>
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
