
export const metadata = {
  title: "API Gateway Management - Zion Tech Group",
  description: "Enterprise API gateway: rate limiting, API key management, OAuth2 + mTLS, usage analytics, developer portal, request/response transforms, and dead-letter queue ",
  alternates: {
    canonical: `https://ziontechgroup.com/services/api-gateway-management-a377ad94`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">API Gateway Management</h1>
        <p className="text-lg text-gray-300 mb-8">Enterprise API gateway: rate limiting, API key management, OAuth2 + mTLS, usage analytics, developer portal, request/response transforms, and dead-letter queue handling across cloud and on-prem APIs.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Centralised rate limiting, throttling, protocol transforms</li>
            <li>OAuth2, mTLS, API-key auth with role-based scopes</li>
            <li>Developer self-service portal + SDK generation</li>
            <li>Built-in developer portal: docs, try-it console, usage analytics</li>
            <li>Dead-letter queue + retry logic with configurable backoff</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Protect backends from traffic spikes without cloud-proxy lock-in</li>
            <li>API onboarding time for partners drops from weeks to hours</li>
            <li>Usage insights + quota controls save 20-35% on API gateway spend</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$149/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$549/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$Custom/month</p>
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
