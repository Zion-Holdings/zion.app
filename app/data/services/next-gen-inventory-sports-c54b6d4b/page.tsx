import { } from 'next/navigation';

export const metadata = {
  title: "Next-Gen Inventory - Sports - Zion Tech Group",
  description: "Transform your sports operations with our Next-Gen Inventory - Sports. This AI-driven solution automates audit trail management with unprecedented accuracy and efficiency.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/next-gen-inventory-sports-c54b6d4b`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Next-Gen Inventory - Sports</h1>
        <p className="text-lg text-gray-300 mb-8">Transform your sports operations with our Next-Gen Inventory - Sports. This AI-driven solution automates audit trail management with unprecedented accuracy and efficiency.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Sentiment Analysis</li>
            <li>Predictive Analytics</li>
            <li>Resource Optimization</li>
            <li>Financial Risk Management</li>
            <li>Maintenance Scheduling</li>
            <li>Compliance Monitoring</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>better employee performance metrics</li>
            <li>Reduced procurement cycle times</li>
            <li>Improved performance review completion rates</li>
            <li>Enhanced security posture with continuous monitoring</li>
            <li>Reduced risk with early warning systems</li>
            <li>99.9% uptime guarantee with redundant architecture</li>
            <li>Improved customer retention with proactive service</li>
            <li>Reduced contract negotiation time</li>
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
              <p className="text-2xl font-bold mb-2">$2,499</p>
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
