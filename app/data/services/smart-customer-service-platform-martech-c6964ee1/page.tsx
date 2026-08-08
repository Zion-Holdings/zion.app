import { } from 'next/navigation';

export const metadata = {
  title: "Smart Customer Service Platform - MARTECH - Zion Tech Group",
  description: "Drive innovation in martech with Smart Customer Service Platform - MARTECH. This AI-powered platform transforms performance reviews into a competitive advantage.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/smart-customer-service-platform-martech-c6964ee1`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Smart Customer Service Platform - MARTECH</h1>
        <p className="text-lg text-gray-300 mb-8">Drive innovation in martech with Smart Customer Service Platform - MARTECH. This AI-powered platform transforms performance reviews into a competitive advantage.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Session management with timeout controls</li>
            <li>Micro-segmentation for security zones</li>
            <li>Compliance automation with audit trails</li>
            <li>Auto-scaling capabilities with predictive scaling</li>
            <li>Competitive intelligence with market share tracking</li>
            <li>Web Application Firewall (WAF)</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Better shipping and delivery times</li>
            <li>Reduced procurement cycle times</li>
            <li>Improved conversion funnel metrics</li>
            <li>better employee performance metrics</li>
            <li>Reduced compensation administration time</li>
            <li>Better customer experience with personalization</li>
            <li>Improved employee productivity with automation</li>
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
