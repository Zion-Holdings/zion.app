import { } from 'next/navigation';

export const metadata = {
  title: "Smart Security Platform - Logistics - Zion Tech Group",
  description: "The future of logistics is here with Smart Security Platform - Logistics. Powered by cutting-edge AI, this platform delivers business intelligence like never before.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/smart-security-platform-logistics-97c00f88`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Smart Security Platform - Logistics</h1>
        <p className="text-lg text-gray-300 mb-8">The future of logistics is here with Smart Security Platform - Logistics. Powered by cutting-edge AI, this platform delivers business intelligence like never before.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Predictive Modeling</li>
            <li>Supply Chain</li>
            <li>Data Processing</li>
            <li>Image Recognition</li>
            <li>Quality Control</li>
            <li>Document Processing</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Improved quality with automated testing and validation</li>
            <li>Improved agent productivity and satisfaction</li>
            <li>Better code quality with automated reviews</li>
            <li>Improved supplier performance scores</li>
            <li>Improved customer satisfaction scores</li>
            <li>50% reduction in operational costs through automation</li>
            <li>Better employee engagement scores</li>
            <li>Reduced employee turnover rates</li>
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
