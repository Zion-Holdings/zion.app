
export const metadata = {
  title: "Industrial IoT Edge Gateway - Zion Tech Group",
  description: "OT/IT edge gateway for manufacturing, energy, and logistics: Modbus/OPC-UA/SCADA protocol decode, TLS, local edge inference, air-gapped monitoring, edge-file ba",
  alternates: {
    canonical: `https://ziontechgroup.com/services/industrial-iot-edge-gateway-18aea326`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Industrial IoT Edge Gateway</h1>
        <p className="text-lg text-gray-300 mb-8">OT/IT edge gateway for manufacturing, energy, and logistics: Modbus/OPC-UA/SCADA protocol decode, TLS, local edge inference, air-gapped monitoring, edge-file backup — no cloud required for operation.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Industrial protocol adapters: Modbus TCP/RTU, OPC-UA, PROFINET, SCADA historians</li>
            <li>TLS + VPN mesh — communication encrypted end-to-end with no cloud relay</li>
            <li>Local edge inference — computer-vision/sensor models run on-device</li>
            <li>Air-gapped monitor + edge file backup to local NAS or tape store</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>OT/IT convergence without putting unsafe PLC protocols on the internet</li>
            <li>Full protocol compatibility — no custom SCADA rewrite required</li>
            <li>Edge inference sub-30ms means no cloud round-trip latency for control loop</li>
            <li>Auditable standalone operation for air-gapped security zones</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$3999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$12999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$39999/month</p>
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
