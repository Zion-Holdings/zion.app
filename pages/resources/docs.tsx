import React from 'react';
import { GetServerSideProps } from 'next';
import { SEO } from '@/components/SEO';
import YoutubeEmbed from '@/components/YoutubeEmbed';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {}
  };
};

export default function ResourcesDocsPage() {
  return (
    <>
      <SEO
        title="Docs - Zion Tech Marketplace Guides & APIs"
        description="Access developer docs, APIs, and step-by-step guides for Zion Tech Marketplace. Start building integrations and enhancing your workflow now. Explore samples; join our community."
        canonical="https://app.ziontechgroup.com/resources/docs"
      />
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Documentation
          </h1>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Welcome to Zion’s API portal, your gateway to streamlined integration. Discover
            straightforward authentication steps, quick-start examples, and thorough endpoint
            references. Tutorials and case studies show practical strategies so you can develop,
            test, deploy, and scale seamlessly within Zion’s talent marketplace and cloud
            services ecosystem. Explore.
          </p>
          <div className="mt-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Why Zion Tech Marketplace?
            </h2>
            <p className="text-zion-slate-light mb-6">
              Zion connects global talent with forward-thinking companies in a unified hub. Our
              marketplace streamlines collaboration with built-in governance and transparent
              rewards.
            </p>
            <YoutubeEmbed
              videoId="OYxhW22Kv30"
              title="Zion Tech Marketplace Quick Start"
              poster="/images/blog-placeholder.svg"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-zion-blue-light p-6 rounded-lg border border-zion-blue-light">
            <h3 className="text-xl font-semibold text-white mb-3">Getting Started</h3>
            <p className="text-zion-slate-light mb-4">
              Learn the basics of using Zion's platform and services.
            </p>
            <a href="/docs/getting-started" className="text-blue-400 hover:text-blue-300">
              Read more →
            </a>
          </div>
          
          <div className="bg-zion-blue-light p-6 rounded-lg border border-zion-blue-light">
            <h3 className="text-xl font-semibold text-white mb-3">API Reference</h3>
            <p className="text-zion-slate-light mb-4">
              Complete API documentation with examples and best practices.
            </p>
            <a href="/docs/api-reference" className="text-blue-400 hover:text-blue-300">
              Read more →
            </a>
          </div>

          <div className="bg-zion-blue-light p-6 rounded-lg border border-zion-blue-light">
            <h3 className="text-xl font-semibold text-white mb-3">OpenAPI Playground</h3>
            <p className="text-zion-slate-light mb-4">
              Explore interactive docs generated from our OpenAPI specification.
            </p>
            <a href="/docs/swagger" className="text-blue-400 hover:text-blue-300">
              Try it →
            </a>
          </div>
          
          <div className="bg-zion-blue-light p-6 rounded-lg border border-zion-blue-light">
            <h3 className="text-xl font-semibold text-white mb-3">Integration Guide</h3>
            <p className="text-zion-slate-light mb-4">
              Step-by-step guides for integrating Zion into your applications.
            </p>
            <a href="/docs/integration" className="text-blue-400 hover:text-blue-300">
              Read more →
            </a>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-white mb-4">AI Prompt</h2>
          <p className="text-zion-slate-light mb-6">
            Outline API documentation structure: Quick Start, Authentication,
            Endpoints, Webhooks, Error Codes. Provide 1-sentence intro for each.
          </p>
          <pre className="bg-zion-blue-light text-white p-4 rounded-lg overflow-auto">
{`import requests

API_BASE = "https://api.ziontechgroup.com/v1"
API_KEY = "YOUR_API_KEY"

headers = {"Authorization": f"Bearer {API_KEY}"}
response = requests.get(f"{API_BASE}/products", headers=headers, timeout=10)
response.raise_for_status()
products = response.json()
print(products)
`}
          </pre>
        </div>
      </div>
    </div>
    </>
  );
}
