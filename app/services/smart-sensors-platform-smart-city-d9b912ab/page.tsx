import { } from 'next/navigation';

export const metadata = {
  title: "Smart Sensors Platform - Smart-City - Zion Tech Group",
  description: "Next-generation smart-city solution: Smart Sensors Platform - Smart-City. Combines automation control with adaptive intelligence for optimal results.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/smart-sensors-platform-smart-city-d9b912ab`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Smart Sensors Platform - Smart-City</h1>
        <p className="text-lg text-gray-300 mb-8">Next-generation smart-city solution: Smart Sensors Platform - Smart-City. Combines automation control with adaptive intelligence for optimal results.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Cloud-native architecture with multi-region deployment</li>
            <li>GDPR compliance with data portability</li>
            <li>Device management with OTA updates</li>
            <li>Data encryption at rest and in transit</li>
            <li>Custom integrations with webhook support</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>24/7 automated operations without human intervention</li>
            <li>Dynamic resource allocation based on demand patterns</li>
            <li>99.9% uptime guarantee with redundant architecture</li>
            <li>Automated compliance reporting for regulatory requirements</li>
            <li>Scalable to millions of transactions per second</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$199/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$499/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$1499/month</p>
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
