import { } from 'next/navigation';

export const metadata = {
  title: "Agentic Workflow Orchestrator - Zion Tech Group",
  description: "Orchestrate multi-agent AI workflows: DAG of agents with routing, handoff, conditional branches, state persistence, retry logic, human-review gates. LangGraph/S",
  alternates: {
    canonical: `https://ziontechgroup.com/services/agentic-workflow-orchestrator`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Agentic Workflow Orchestrator</h1>
        <p className="text-lg text-gray-300 mb-8">Orchestrate multi-agent AI workflows: DAG of agents with routing, handoff, conditional branches, state persistence, retry logic, human-review gates. LangGraph/Semantic Kernel backend.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multi-agent workflow DAG editor (visual + code)</li>
            <li>Agent handoff + state persistence</li>
            <li>Conditional branching + retry policy per step</li>
            <li>Human-review gate per critical node</li>
            <li>Audit trail per agent + cost tracking</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Build complex workflows in hours not weeks</li>
            <li>Human-in-the-loop for safe production</li>
            <li>State persistence — agents resume from checkpoint</li>
            <li>Audit trail full observability</li>
          </ul>
        </div>
        
        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$299</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$899</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$2999</p>
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
