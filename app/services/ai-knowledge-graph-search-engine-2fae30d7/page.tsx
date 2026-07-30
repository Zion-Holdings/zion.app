import { } from 'next/navigation';

export const metadata = {
  title: "AI Knowledge Graph Search Engine - Zion Tech Group",
  description: "Deep semantic search across structured + unstructured corporate knowledge: auto-builds a navigable knowledge graph from Confluence, Slack, Drive, Jira, and CRM;",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-knowledge-graph-search-engine-2fae30d7`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI Knowledge Graph Search Engine</h1>
        <p className="text-lg text-gray-300 mb-8">Deep semantic search across structured + unstructured corporate knowledge: auto-builds a navigable knowledge graph from Confluence, Slack, Drive, Jira, and CRM; facet navigation, path-finding between related entities, and answer synthesis with cited sources.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Auto-ingest: Confluence, Slack, Drive, Jira, Notion, SharePoint</li>
            <li>Auto-built navigable knowledge graph with entity recognition</li>
            <li>Faceted navigation + path finder (A→B shortest path through relations)</li>
            <li>Answer synthesis with inline citations + source confidence scores</li>
            <li>On-prem AIR-gapped deployment option for public-sector / PHI</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Answer how-do-I type queries in seconds that previously took hours of searching</li>
            <li>Eliminate 40-70% of repeated support tickets by surfacing canonical answers</li>
            <li>Build a living knowledge graph without manual taxonomy work</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$249/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$849/month</p>
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
