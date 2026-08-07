import { } from 'next/navigation';

export const metadata = {
  title: "Pipeline Next-Gen - Hospitality - Zion Tech Group",
  description: "Drive innovation in hospitality with Pipeline Next-Gen - Hospitality. This AI-powered platform transforms churn risk into a competitive advantage.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/pipeline-next-gen-hospitality-5417e335`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Pipeline Next-Gen - Hospitality</h1>
        <p className="text-lg text-gray-300 mb-8">Drive innovation in hospitality with Pipeline Next-Gen - Hospitality. This AI-powered platform transforms churn risk into a competitive advantage.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Predictive Analytics</li>
            <li>Predictive Modeling</li>
            <li>Performance Monitoring</li>
            <li>Financial Risk Management</li>
            <li>Customer Journey Mapping</li>
            <li>Competitive Intelligence</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Higher customer lifetime value (CLV)</li>
            <li>Reduced marketing costs with targeted campaigns</li>
            <li>Better code quality with automated reviews</li>
            <li>Reduced sales cycle length</li>
            <li>Better employee engagement scores</li>
            <li>reduced environmental impact and costs</li>
            <li>ROI achieved in under 90 days with cost savings</li>
            <li>Reduced shipping costs with route optimization</li>
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
