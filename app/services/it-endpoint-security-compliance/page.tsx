import { } from 'next/navigation';

export const metadata = {
  title: "Endpoint Security & Compliance Monitor - Zion Tech Group",
  description: "EDR and XDR endpoint coverage with compliance attestation: CIS benchmark checks, disk-encrypt status, OS patch-level verification, software-inventory SBOM per asset, CISA KEV auto-detection, and SCAP ",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-endpoint-security-compliance`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Endpoint Security &amp; Compliance Monitor</h1>
        <p className="text-lg text-gray-300 mb-8">EDR and XDR endpoint coverage with compliance attestation: CIS benchmark checks, disk-encrypt status, OS patch-level verification, software-inventory SBOM per asset, CISA KEV auto-detection, and SCAP reporting for regulated assessments.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>EDR and XDR with behavioural threat detection and real-time endpoint isolation</li>
            <li>CIS benchmark and compliance attestation per device without manual spreadsheet</li>
            <li>Software inventory SBOM per asset with CISA KEV automated detection</li>
            <li>SCAP-formatted reporting for FedRAMP and regulated customer assessments</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Catch rogue or banned software before it becomes a perimeter breach</li>
            <li>Demonstrate compliance without a 100-page manual audit package</li>
            <li>Built-in CIS and CISA checks reduces GRC overhead by 60 percent</li>
            <li>SBOM per asset in KEV format satisfies FedRAMP requirements</li>
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
