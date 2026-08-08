import { } from 'next/navigation';

export const metadata = {
  title: "Predictive Maintenance Advisor - Zion Tech Group",
  description: "Asset remaining useful life prediction via multimodal sensor fusion — vibration, thermal, acoustic, and electrical. Plain-English root-cause narration, part recommendation, and HSE safety-risk layer f",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-predictive-maintenance-advisor`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Predictive Maintenance Advisor</h1>
        <p className="text-lg text-gray-300 mb-8">Asset remaining useful life prediction via multimodal sensor fusion — vibration, thermal, acoustic, and electrical. Plain-English root-cause narration, part recommendation, and HSE safety-risk layer for maintenance managers.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multimodal sensor fusion across vibration, thermal, acoustic, and current sensors</li>
            <li>Remaining-Useful-Life distribution with three-severity flag per asset</li>
            <li>Plain-English root-cause description with part and vendor recommendation</li>
            <li>HSE safety-risk layer assessed before scheduling any maintenance work</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Predict failures 14 to 90 days out with accuracy above 85 percent</li>
            <li>No more surprise downtime dispatches</li>
            <li>Root-cause narrative translates ML output for maintenance crews</li>
            <li>HSE layer prevents safety incidents from maintenance decisions</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$2999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$8999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$29999</p>
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
