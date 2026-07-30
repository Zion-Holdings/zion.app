import { Layout } from '@/components/Layout'

export const metadata = {
  title: 'Service - AI-Powered AI Solution',
  description: 'Deep semantic search across structured + unstructured corporate knowledge: auto-builds a navigable knowledge graph from Confluence, Slack, Drive, Jira, and CRM;',
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
            Deep semantic search across structured + unstructured corporate knowledge: auto-builds a navigable knowledge graph from Confluence, Slack, Drive, Jira, and CRM; facet navigation, path-finding between related entities, and answer synthesis with cited sources.
          </p>

          <div className="bg-slate-900 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-2">
            <li className="text-purple-300">✓ Auto-ingest: Confluence, Slack, Drive, Jira, Notion, SharePoint</li>
            <li className="text-purple-300">✓ Auto-built navigable knowledge graph with entity recognition</li>
            <li className="text-purple-300">✓ Faceted navigation + path finder (A→B shortest path through relations)</li>
            <li className="text-purple-300">✓ Answer synthesis with inline citations + source confidence scores</li>
            <li className="text-purple-300">✓ On-prem AIR-gapped deployment option for public-sector / PHI</li>
            </ul>
          </div>

          <div className="bg-slate-900 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-purple-400 mb-4">
              Business Benefits
            </h2>
            <ul className="list-disc list-inside space-y-2">
            <li className="text-purple-300">✓ Answer how-do-I type queries in seconds that previously took hours of searching</li>
            <li className="text-purple-300">✓ Eliminate 40-70% of repeated support tickets by surfacing canonical answers</li>
            <li className="text-purple-300">✓ Build a living knowledge graph without manual taxonomy work</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-8 text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Pricing</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">$249</div>
                <div>Basic</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">$849</div>
                <div>Pro</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold mb-2">$Custom</div>
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
