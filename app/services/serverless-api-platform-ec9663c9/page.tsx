import { } from 'next/navigation';

export const metadata = {
  title: "Serverless API Platform - Zion Tech Group",
  description: "Zero-infrastructure serverless REST + GraphQL API layer: auto-scales to millions of RPS, pay-per-invocation billing, built-in authentication, rate-limiting, cac",
  alternates: {
    canonical: `https://ziontechgroup.com/services/serverless-api-platform-ec9663c9`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Serverless API Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Zero-infrastructure serverless REST + GraphQL API layer: auto-scales to millions of RPS, pay-per-invocation billing, built-in authentication, rate-limiting, caching, and observability. Includes free tier and CI/CD auto-deploy from Git.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Auto-scaling — handles 10 to 10 000 000 RPS without configuration change</li>
            <li>Serverless HTTP workers Node.js, Python, Go, Rust with edge deployment</li>
            <li>Built-in REST + GraphQL API, schema validation, auto-generated OpenAPI spec</li>
            <li>Auto-deploy CI/CD pipelines per-branch with staging environments</li>
            <li>Auth: OAuth2, API keys, mTLS — all configurable via dashboard</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Pay-per-invocation model: 70-90% infra cost reduction vs. always-on servers</li>
            <li>Deploy REST or GraphQL APIs in minutes without DevOps involvement</li>
            <li>Zero-tuning auto-scaling removes over-provisioning and heads-of-department cost savings</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$79/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$349/month</p>
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
