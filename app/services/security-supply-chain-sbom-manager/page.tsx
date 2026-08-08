import { } from 'next/navigation';

export const metadata = {
  title: "Software Bill-of-Materials Manager - Zion Tech Group",
  description: "Full SBOM lifecycle management: auto-generate SPDX and Cyclone-DX per build, license-compliance check, vulnerability and CVE matching per component, attestation",
  alternates: {
    canonical: `https://ziontechgroup.com/services/security-supply-chain-sbom-manager`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Software Bill-of-Materials Manager</h1>
        <p className="text-lg text-gray-300 mb-8">Full SBOM lifecycle management: auto-generate SPDX and Cyclone-DX per build, license-compliance check, vulnerability and CVE matching per component, attestation signing, and SBOM consumer portal per vendor release.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Auto-generate SBOM per build in SPDX and Cyclone-DX formats</li>
            <li>License compliance matrix covering GPL, Apache, MIT, and commercial licenses</li>
            <li>CVE matching per SBOM component auto-updated daily from NVD and vendor feeds</li>
            <li>Attestation signing and SBOM consumer portal per vendor per OS release</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Executive order SBOM compliance achieved in 1 day with auto-generation per build</li>
            <li>License compliance flagging prevents GPL contamination of proprietary builds</li>
            <li>CVE auto-match cuts supplier security review time by 80 percent</li>
            <li>Vendor self-service SBOM portal reduces vendor questionnaire overhead per customer</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$1499</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$4999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$14999</p>
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
