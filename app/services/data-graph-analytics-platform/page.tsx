import { } from 'next/navigation';

export const metadata = {
  title: "Graph Analytics & Network Intelligence - Zion Tech Group",
  description: "Large-scale network analytics: entity relationship graph builder, centrality and community detection, per-edge anomaly scoring, influencer score per node, GNN-r",
  alternates: {
    canonical: `https://ziontechgroup.com/services/data-graph-analytics-platform`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Graph Analytics &amp; Network Intelligence</h1>
        <p className="text-lg text-gray-300 mb-8">Large-scale network analytics: entity relationship graph builder, centrality and community detection, per-edge anomaly scoring, influencer score per node, GNN-ready feature export, and interactive graph visualisation dashboard.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Entity and relationship graph builder from any structured or semi-structured data</li>
            <li>Community detection and centrality scoring per node highlighting key connectors</li>
            <li>Per-edge anomaly scoring with three-sigma departure auto-alert</li>
            <li>GNN-ready feature export for training ML fraud and influence detection models</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Find fraud rings, influencer networks, and spam clusters invisible in tabular views</li>
            <li>Community detection surfaces account segregation rings that ML models miss 40 percent of the time</li>
            <li>GNN export feeds graph features directly into existing fraud detection pipelines</li>
            <li>Network graph visualiser surfaces hidden relationships to any analyst in under a minute</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$2999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$9999</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$34999</p>
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
