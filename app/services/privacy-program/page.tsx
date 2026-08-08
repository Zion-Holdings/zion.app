import { } from 'next/navigation';

export const metadata = {
  title: "Privacy Program & Data Governance - Zion Tech Group",
  description: "Full privacy program: data mapping, discovery, inventory, classification, consent management, DSAR automation, PIAs, DPO support, regulatory reporting (GDPR/CCP",
  alternates: {
    canonical: `https://ziontechgroup.com/services/privacy-program`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Program &amp; Data Governance</h1>
        <p className="text-lg text-gray-300 mb-8">Full privacy program: data mapping, discovery, inventory, classification, consent management, DSAR automation, PIAs, DPO support, regulatory reporting (GDPR/CCPA/PIPEDA/CPC).</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Data mapping + inventory + classification</li>
            <li>Consent management platform (web + mobile)</li>
            <li>DSAR automation (discover/collect/redact/deliver)</li>
            <li>Privacy impact assessment per workflow</li>
            <li>Regulatory privacy report multi-jurisdiction</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Meet GDPR/CCPA/PIPEDA end-to-end</li>
            <li>DSAR response within 30 days automated</li>
            <li>Privacy program without hiring full-time DPO</li>
            <li>Continuous data discovery no manual inventory</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$2499</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$6999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$24999</p>
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
