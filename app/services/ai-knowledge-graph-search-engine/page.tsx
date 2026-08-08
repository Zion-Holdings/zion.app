import { } from 'next/navigation';

export const metadata = {
  title: "Knowledge Graph Search Engine - Zion Tech Group",
  description: "Semantic graph search engine: turn siloed docs, databases, and APIs into a unified knowledge graph with entity disambiguation, NL query rewriting, and cited ranked answers across 50+ connected tools.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-knowledge-graph-search-engine`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Knowledge Graph Search Engine</h1>
        <p className="text-lg text-gray-300 mb-8">Semantic graph search engine: turn siloed docs, databases, and APIs into a unified knowledge graph with entity disambiguation, NL query rewriting, and cited ranked answers across 50+ connected tools.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-source entity and relation extractor from PDF, Notion, Slack, databases, and API specs</li>
            <li>Entity disambiguation with canonical identity store</li>
            <li>NL query rewriter — &#39;who reported this bug?&#39; becomes a graph query automatically</li>
            <li>Every answer carries a primary-source footnote plus timestamp</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Find answers in under 5 seconds instead of 6 hours of searching</li>
            <li>Single answer surface across all information silos</li>
            <li>Graph context prevents hallucinations — every claim is source-cited</li>
            <li>Auto-crawl keeps knowledge base fresh without manual curation</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$1999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$5999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$17999</p>
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
