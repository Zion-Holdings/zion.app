
export const metadata = {
  title: "API Gateway + OpenAPI Management - Zion Tech Group",
  description: "Enterprise API gateway: OpenAPI 3.1 lifecycle, rate-limit/quota per key, threat-protection WAF rules, schema registry, live API analytics, developer portal with",
  alternates: {
    canonical: `https://ziontechgroup.com/services/api-gateway--openapi-management-d2bcb0bf`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">API Gateway + OpenAPI Management</h1>
        <p className="text-lg text-gray-300 mb-8">Enterprise API gateway: OpenAPI 3.1 lifecycle, rate-limit/quota per key, threat-protection WAF rules, schema registry, live API analytics, developer portal with interactive docs and sandbox.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>OpenAPI 3.1 spec lifecycle — versioning, deprecation, staging</li>
            <li>Rate-limit + quota per consumer key with brotten alerting</li>
            <li>Managed threat-protection WAF rule set for API endpoints</li>
            <li>Schema registry + mocking + developer portal with embedded sandbox</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Govern 1000+ endpoints from one control plane</li>
            <li>Publish API docs that developers actually use</li>
            <li>Threat protection without touching your WAF</li>
            <li>Analytics surface shows which endpoints under-utilised and which overloaded</li>
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
