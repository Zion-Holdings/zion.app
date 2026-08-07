import { } from 'next/navigation';

export const metadata = {
  title: "AI/IT SMB Suite - Insurance - Zion Tech Group",
  description: "Quantum leap forward for insurance: AI/IT SMB Suite - Insurance. Uses quantum-inspired algorithms to deliver compliance automation at exponential speed.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/aiit-smb-suite-insurance-1831915b`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI/IT SMB Suite - Insurance</h1>
        <p className="text-lg text-gray-300 mb-8">Quantum leap forward for insurance: AI/IT SMB Suite - Insurance. Uses quantum-inspired algorithms to deliver compliance automation at exponential speed.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Healthcare data analytics with patient insights</li>
            <li>Customer service automation with chatbot integration</li>
            <li>Usage analytics with insights</li>
            <li>Penetration testing with red team</li>
            <li>Custom integrations with webhook support</li>
            <li>Quantum optimization engine</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Improved quality with automated testing and validation</li>
            <li>Performance benchmarking against industry standards</li>
            <li>Reduced risk with early warning systems</li>
            <li>Improved contract renewal rates</li>
            <li>ROI achieved in under 90 days with cost savings</li>
            <li>Seamless integration with existing systems and workflows</li>
            <li>Better customer experience with personalization</li>
            <li>Reduced time to market for new products</li>
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
