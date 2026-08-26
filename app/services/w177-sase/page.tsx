import { } from 'next/navigation';

export const metadata = {
  title: "Secure Access Service Edge (SASE) - Zion Tech Group",
  description: "SASE platform: SD-WAN, SWG, CASB, ZTNA, FWaaS in one cloud service. Secure access from anywhere.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/w177-sase`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Secure Access Service Edge (SASE)</h1>
        <p className="text-lg text-gray-300 mb-8">SASE platform: SD-WAN, SWG, CASB, ZTNA, FWaaS in one cloud service. Secure access from anywhere.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>SD-WAN with application-aware routing</li>
            <li>Secure web gateway (SWG)</li>
            <li>Cloud access security broker (CASB)</li>
            <li>Zero trust network access (ZTNA)</li>
            <li>Firewall as a service (FWaaS)</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>One platform for all secure access</li>
            <li>SD-WAN optimizes application performance</li>
            <li>ZTNA replaces legacy VPN</li>
            <li>Global PoP network for low latency</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$25/user/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$45/user/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$75/user/mo/month</p>
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
