import { } from 'next/navigation';

export const metadata = {
  title: "Data Cognitive - Insurance - Zion Tech Group",
  description: "Revolutionize insurance through intelligent automation. Our Data Cognitive - Insurance leverages advanced machine learning to deliver loyalty optimization at scale.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/data-cognitive-insurance-c2145780`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Data Cognitive - Insurance</h1>
        <p className="text-lg text-gray-300 mb-8">Revolutionize insurance through intelligent automation. Our Data Cognitive - Insurance leverages advanced machine learning to deliver loyalty optimization at scale.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Cache optimization with Redis</li>
            <li>Micro-segmentation for security zones</li>
            <li>Multi-language support with localization</li>
            <li>Penetration testing with red team</li>
            <li>Version control with rollback capabilities</li>
            <li>Chaos engineering for resilience</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduced sales cycle length</li>
            <li>50% reduction in operational costs through automation</li>
            <li>Enhanced decision making with data-driven insights</li>
            <li>Increased revenue with optimized pricing strategies</li>
            <li>Zero manual intervention required for routine tasks</li>
            <li>Better lead quality and conversion rates</li>
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
