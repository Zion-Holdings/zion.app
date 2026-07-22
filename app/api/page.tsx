import Head from 'next/head';

export const metadata = {
  title: 'API Documentation | Zion Tech Group',
  description: 'Comprehensive API documentation for Zion Tech Group services including AI, DevOps, and Data APIs.',
};

export default function ApiDocsPage() {
  const categories = [
    {
      id: 'ai-services',
      title: 'AI Services',
      icon: '🧠',
      endpoints: [
        { name: 'AI Chatbot Builder', path: '/ai/chatbot', desc: 'Create and manage AI chatbots' },
        { name: 'AI Document Processing', path: '/ai/document', desc: 'Extract and classify documents' },
        { name: 'AI Predictive Analytics', path: '/ai/predictive', desc: 'Build ML forecasting models' },
        { name: 'AI Security Scanner', path: '/ai/security', desc: 'Scan code for vulnerabilities' },
        { name: 'AI RAG Knowledge Systems', path: '/ai/rag', desc: 'Build retrieval-augmented systems' },
      ]
    },
    {
      id: 'devops-services',
      title: 'DevOps Services',
      icon: '⚙️',
      endpoints: [
        { name: 'CI/CD Pipeline Automation', path: '/devops/cicd', desc: 'Automate deployment pipelines' },
        { name: 'Infrastructure as Code', path: '/devops/iaas', desc: 'Manage infrastructure as code' },
      ]
    },
    {
      id: 'data-services',
      title: 'Data Services',
      icon: '📊',
      endpoints: [
        { name: 'Data Quality Monitoring', path: '/data/quality', desc: 'Monitor and improve data quality' },
        { name: 'Analytics Dashboard', path: '/data/analytics', desc: 'Retrieve analytics insights' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>API Documentation | Zion Tech Group</title>
      </Head>
      <main className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6">API Documentation</h1>
        <p className="text-slate-300 mb-12 max-w-3xl">
          Comprehensive API documentation for Zion Tech Group services including AI, DevOps, and Data APIs.
          All APIs are production-ready with documentation, SDKs, and integration guides.
        </p>

        <div className="space-y-8">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-3xl">{cat.icon}</span>
                {cat.title}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {cat.endpoints.map((ep) => (
                  <div key={ep.path} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                    <h3 className="font-semibold text-white mb-1">{ep.name}</h3>
                    <code className="text-sm text-purple-400 block mb-2">{ep.path}</code>
                    <p className="text-slate-400 text-sm">{ep.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
          <h2 className="text-2xl font-semibold mb-4">SDKs</h2>
          <p className="text-slate-300 mb-4">We provide official SDKs for major languages:</p>
          <div className="grid gap-2 md:grid-cols-5">
            <div><code>npm install @ziontechgroup/sdk</code></div>
            <div><code>pip install ziontechgroup-sdk</code></div>
            <div><code>gem install ziontechgroup-sdk</code></div>
            <div><code>go get github.com/ziontechgroup/sdk</code></div>
            <div><code>composer require ziontechgroup/sdk</code></div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold">
            Get API Access
          </a>
        </div>
      </main>
    </div>
  );
}
