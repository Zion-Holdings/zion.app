import { } from 'next/navigation';

export const metadata = {
  title: "Endpoint Management (macOS & Windows) - Zion Tech Group",
  description: "Unified MDM for macOS and Windows: Zero-touch enrolment, OS update enforcement, full-disk encryption, compliance, remote wipe.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/it-endpoint-management-macos-windows`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Endpoint Management (macOS &amp; Windows)</h1>
        <p className="text-lg text-gray-300 mb-8">Unified MDM for macOS and Windows: Zero-touch enrolment, OS update enforcement, full-disk encryption, compliance, remote wipe.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Zero-touch (DEP/Autopilot) + self-enrol portal</li>
            <li>OS update enforcement patch policy</li>
            <li>Full-disk encryption + TLS 1.3 VPN settings</li>
            <li>Remote wipe + lost-device-geofence</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Onboard 1000 endpoints in one afternoon</li>
            <li>No manual image builds — DEP does the work</li>
            <li>Security baseline enforced at enrolment</li>
            <li>Compliance dashboard per device/team</li>
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
              <p className="text-2xl font-bold mb-2">$3499</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$9999</p>
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
