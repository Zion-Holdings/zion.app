import { } from 'next/navigation';

export const metadata = {
  title: "Intelligent Advisor for Hospitality - Zion Tech Group",
  description: "Drive innovation in hospitality with Intelligent Advisor for Hospitality. This AI-powered platform transforms performance tuning into a competitive advantage.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/intelligent-advisor-for-hospitality-3d05e2f9`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Intelligent Advisor for Hospitality</h1>
        <p className="text-lg text-gray-300 mb-8">Drive innovation in hospitality with Intelligent Advisor for Hospitality. This AI-powered platform transforms performance tuning into a competitive advantage.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Identity management with IAM</li>
            <li>Executive dashboards with drill-down capabilities</li>
            <li>Predictive modeling with ensemble methods</li>
            <li>Endpoint protection with EDR</li>
            <li>Mobile-responsive interface with offline capabilities</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Enhanced security posture with continuous monitoring</li>
            <li>Better supply chain visibility with tracking</li>
            <li>Faster content creation with AI assistance</li>
            <li>Better social media engagement rates</li>
            <li>Lower total cost of ownership (TCO)</li>
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
