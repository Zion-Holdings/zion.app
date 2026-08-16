
export const metadata = {
  title: "Knowledge Graph Search Engine - Zion Tech Group",
  description: "Turn siloed docs, databases, and APIs into one semantic knowledge graph: entity/relation extraction, entity disambiguation, natural language query rewriting, ra",
  alternates: {
    canonical: `https://ziontechgroup.com/services/knowledge-graph-search-engine-10c72cf0`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Knowledge Graph Search Engine</h1>
        <p className="text-lg text-gray-300 mb-8">Turn siloed docs, databases, and APIs into one semantic knowledge graph: entity/relation extraction, entity disambiguation, natural language query rewriting, ranked results with source citations.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-source entity/relation extractor (PDF, Notion, Slack, DB schemas, API specs)</li>
            <li>Entity disambiguation graph + canonical identity store</li>
            <li>NL query rewriter — translates &#39;who reported this bug?&#39; into graph query</li>
            <li>Cited results — every answer has primary-source footnote + timestamp</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Team finds answers in &lt;5 seconds instead of 6 hours of searching</li>
            <li>Single answer surface across 50+ disconnected tools and silos</li>
            <li>Graph context prevents hallucinations — every claim is source-cited</li>
            <li>Automated crawl keeps knowledge base current without manual curation</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$1999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$5999/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$17999/month</p>
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
