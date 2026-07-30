import { } from 'next/navigation';

export const metadata = {
  title: "IT Cloud Cost Optimization Service - Zion Tech Group",
  description: "Comprehensive cloud cost analysis and optimization for AWS, Azure, and GCP. Identifies waste, recommends right-sizing, manages reserved instances, and implement",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-cloud-cost-optimization`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">IT Cloud Cost Optimization Service</h1>
        <p className="text-lg text-gray-300 mb-8">Comprehensive cloud cost analysis and optimization for AWS, Azure, and GCP. Identifies waste, recommends right-sizing, manages reserved instances, and implements FinOps best practices to reduce cloud spend by 30-50%.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-cloud cost analysis (AWS, Azure, GCP)</li>
            <li>Idle resource detection and auto-remediation</li>
            <li>Reserved instance and savings plan management</li>
            <li>Right-sizing recommendations with performance impact analysis</li>
            <li>Cost allocation tagging strategy and enforcement</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Reduce cloud spend by 30-50% within 90 days</li>
            <li>Eliminate waste from idle and over-provisioned resources</li>
            <li>Implement FinOps culture with team accountability</li>
            <li>Predictable cloud budgeting with forecasting</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$2,500/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$5,000/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$Custom/month</p>
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
