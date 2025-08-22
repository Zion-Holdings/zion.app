import React from 'react';
import SEO from '../components/SEO';

export default function ApiDocumentationPage() {
  return (
    <>
      <SEO
        title="API Documentation | Zion Tech Group"
        description="Guides, endpoints, and SDKs to integrate Zion Tech Group services."
        canonical="https://ziontechgroup.com/api-documentation/"
      />
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 max-w-5xl text-white space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">API Documentation</h1>
          <p className="text-gray-300">Quick starts, REST/GraphQL references, and SDKs for AI, DevOps, and analytics services.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/40 border border-gray-700/60 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-2">Getting Started</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li><a className="text-cyan-400 underline" href="/docs/">Developer Docs</a></li>
                <li><a className="text-cyan-400 underline" href="/ai-evaluation-orchestrator/">Evals API</a></li>
                <li><a className="text-cyan-400 underline" href="/pdf-render-api/">PDF Render API</a></li>
              </ul>
            </div>
            <div className="bg-black/40 border border-gray-700/60 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-2">SDKs</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>JavaScript/TypeScript SDK</li>
                <li>Python SDK</li>
                <li>REST clients via OpenAPI</li>
              </ul>
            </div>
          </div>
          <div className="bg-black/40 border border-gray-700/60 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">Support</h2>
            <p className="text-gray-300">Need help? Visit <a className="text-cyan-400 underline" href="/support/">Support</a> or email <a className="text-purple-400 underline" href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}