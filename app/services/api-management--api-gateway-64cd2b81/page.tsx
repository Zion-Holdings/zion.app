
export const metadata = {
  title: "API Management & API Gateway - Zion Tech Group",
  description: "Full API lifecycle management: gateway (auth, rate-limit, circuit-breaker), developer portal, analytics, and monetisation. Supports REST, GraphQL, and gRPC with",
  alternates: {
    canonical: `https://ziontechgroup.com/services/api-management--api-gateway-64cd2b81`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">API Management &amp; API Gateway</h1>
        <p className="text-lg text-gray-300 mb-8">Full API lifecycle management: gateway (auth, rate-limit, circuit-breaker), developer portal, analytics, and monetisation. Supports REST, GraphQL, and gRPC with OpenAPI spec auto-discovery and runtime validation.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Unified gateway: REST, GraphQL, and gRPC with schema registry per protocol</li>
            <li>Developer portal: auto-generated OpenAPI documentation, try-it console, SDK</li>
            <li>Rate-limits, circuit-breaker, and auto-rediscovery for %02D second latency</li>
            <li>Usage analytics: per-tenant/method status-code breakdown + monetisation rules</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>One gateway for all your APIs — REST, GraphQL, and gRPC unified</li>
            <li>Developer portal cuts onboarding time from 2 weeks to 30 minutes</li>
            <li>Monetise APIs without writing a single billing rule</li>
            <li>Built-in security: OAuth2/OIDC, mTLS, JWT claims context injection</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$1499/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$4999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$14999/month</p>
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
