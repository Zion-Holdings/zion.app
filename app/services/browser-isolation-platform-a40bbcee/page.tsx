
export const metadata = {
  title: "Browser Isolation Platform - Zion Tech Group",
  description: "Remote browser isolation: inspect every uncertified or risky site in cloud sandbox, drive-by download protection, credential-forwarding safe mock environment, p",
  alternates: {
    canonical: `https://ziontechgroup.com/services/browser-isolation-platform-a40bbcee`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Browser Isolation Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Remote browser isolation: inspect every uncertified or risky site in cloud sandbox, drive-by download protection, credential-forwarding safe mock environment, phishing-engine sandbox analysis, bandwidth savings 30+.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Remote browser isolation — all rendering occurs off-device in a cloud sandbox</li>
            <li>Drive-by download protection — adware aphishing payloads isolated from endpoint</li>
            <li>Credential-forwarding sandbox — test credentials safely no overposting to real accounts</li>
            <li>Phishing engine sandbox analysis — 30-day credential-reuse window check in isolated browser</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Zero malware reaches endpoint from the unclassified internet</li>
            <li>Phishing credential reuse checks take 5 minutes not 5 days</li>
            <li>Bandwidth savings of over 30% vs. full browser VDI</li>
            <li>IT picks up no new virus protection costs on client OS</li>
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
