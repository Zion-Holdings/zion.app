import { } from 'next/navigation';

export const metadata = {
  title: "AI Customer Support Agent - Zion Tech Group",
  description: "Fully automated 24/7 customer support using RAG + LLMs: answer FAQs, troubleshoot issues, process returns, and escalate complex tickets with context handoff.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-customer-support-agent`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">AI Customer Support Agent</h1>
        <p className="text-lg text-gray-300 mb-8">Fully automated 24/7 customer support using RAG + LLMs: answer FAQs, troubleshoot issues, process returns, and escalate complex tickets with context handoff.</p>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Multilingual support (50+ languages)</li>
            <li>Integrations: Zendesk, Intercom, Salesforce</li>
            <li>Document retrieval from knowledge base (RAG)</li>
            <li>Sentiment-aware responses &amp; escalation</li>
            <li>Analytics: resolution rate, CSAT impact</li>
          </ul>
        </div>
        
        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Cut support costs by 70%</li>
            <li>Instant responses (sub-second)</li>
            <li>80%+ ticket deflection from humans</li>
            <li>Always-on coverage across timezones</li>
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
              <p className="text-2xl font-bold mb-2">$799</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$2499</p>
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
