
export const metadata = {
  title: "Cloud Zero Trust Access (ZTNA) - Zion Tech Group",
  description: "Zero trust network access for cloud and on-prem resources: per-application least-privilege policy, device posture context, 1-click revoke per identity, 75% fast",
  alternates: {
    canonical: `https://ziontechgroup.com/services/cloud-zero-trust-access-ztna-313f4d60`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Cloud Zero Trust Access (ZTNA)</h1>
        <p className="text-lg text-gray-300 mb-8">Zero trust network access for cloud and on-prem resources: per-application least-privilege policy, device posture context, 1-click revoke per identity, 75% faster access time for legitimate users, full session recording.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Per-application least-privilege access policy from identity to cookie</li>
            <li>Device posture context — certificate validity, OS, browser assessment before granting</li>
            <li>1-click kill/revoke per user identity across all resources</li>
            <li>Full session recording with playable video replay per access session</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Users blessedly fast SSH and HTTPS access without tear-down VPN</li>
            <li>1-click revocation keeps compromised identity blast-radius strictly bounded</li>
            <li>Privileged access introduced with per-session fine-grained token and audit trail</li>
            <li>Access offboarded exactly when employee leaves — zero lingering shadow-permissions</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$2999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$9999/month</p>
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
