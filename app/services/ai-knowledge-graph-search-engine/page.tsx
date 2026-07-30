import { Layout } from '@/components/Layout'

export const metadata = {
  title: 'Service - AI-Powered General Solution',
  description: 'Semantic graph search engine: turn siloed docs, databases, and APIs into a unified knowledge graph with entity disambiguation, NL query rewriting, and cited ran',
}

export default function ServicePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto py-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6">
            Service
          </h1>
          
          <p className="text-xl text-slate-300 mb-8">
            Semantic graph search engine: turn siloed docs, databases, and APIs into a unified knowledge graph with entity disambiguation, NL query rewriting, and cited ranked answers across 50+ connected tools.
          </p>

          <div className="bg-slate-900 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-2">
            <li className="text-purple-300">✓ Multi-source entity and relation extractor from PDF, Notion, Slack, databases, and API specs</li>
            <li className="text-purple-300">✓ Entity disambiguation with canonical identity store</li>
            <li className="text-purple-300">✓ NL query rewriter — \</li>
            <li className="text-purple-300">✓  becomes a graph query automatically</li>
            <li className="text-purple-300">✓ Every answer carries a primary-source footnote plus timestamp</li>
            </ul>
          </div>

          <div className="bg-slate-900 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Business Benefits
            </h2>
            <ul className="list-disc list-inside space-y-2">
            <li className="text-purple-300">✓ Reduce costs with knowledge graph search engine</li>
            <li className="text-purple-300">✓ Improve operational efficiency</li>
            <li className="text-purple-300">✓ Scale without complexity</li>
            <li className="text-purple-300">✓ Enterprise-grade reliability</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">$$149/mo</div>
                <div>Basic</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">$$399/mo</div>
                <div>Pro</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">$$1,299/mo</div>
                <div>Enterprise</div>
              </div>
            </div>
          </div>

          <a 
            href="https://calendly.com/kleber-ziontechgroup" 
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition-colors"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </Layout>
  )
}
