import { } from 'next/navigation';

export const metadata = {
  title: "Hybrid Multi-Cloud Networking - Zion Tech Group",
  description: "Unified networking across private DC + public clouds: VPC peering, VPN/Direct Connect/Interconnect, centralized routing, cloud firewall, Istio/Linkerd cross-clo",
  alternates: {
    canonical: `https://ziontechgroup.com/services/hybrid-multi-cloud-net`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Hybrid Multi-Cloud Networking</h1>
        <p className="text-lg text-gray-300 mb-8">Unified networking across private DC + public clouds: VPC peering, VPN/Direct Connect/Interconnect, centralized routing, cloud firewall, Istio/Linkerd cross-cloud mesh.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Cross-cloud VPC peering + VPN mesh</li>
            <li>Transit Gateway/Cloud Router centralized routing</li>
            <li>Cloud firewall + centralized egress</li>
            <li>Istio/Linkerd cross-cloud service mesh</li>
            <li>Centralized observability per cross-cloud request</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Single networking control plane across all clouds</li>
            <li>Avoid cloud lock-in by design</li>
            <li>Private connectivity sub-2ms intra-cloud</li>
            <li>Cross-cloud failover DR sub-minute RPO/RTO</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$4499</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$12999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$44999</p>
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
