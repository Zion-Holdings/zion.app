import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata = {
  title: "AI Conversational AI & Voice Agent Platform - Zion Tech Group",
  description: "Build and deploy AI conversational agents for chat and voice. Handle customer service, sales, and internal support with natural language understanding.",
  alternates: {
    canonical: `https://ziontechgroup.com/services/ai-conversational-ai`
  }
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <BreadcrumbSchema path={`/services/ai-conversational-ai`} title="AI Conversational AI & Voice Agent Platform" />
        <h1 className="text-4xl font-bold mb-6">🗣️ AI Conversational AI & Voice Agent Platform</h1>
        <p className="text-lg text-gray-300 mb-8">Build and deploy AI conversational agents for chat and voice. Handle customer service, sales, and internal support with natural language understanding.</p>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>No-code conversational AI builder</li>
            <li>Natural language understanding (NLU)</li>
            <li>Voice agent with text-to-speech</li>
            <li>Integration with CRM, knowledge base, ticketing</li>
            <li>Multi-language support (50+ languages)</li>
            <li>Human handoff with full context</li>
            <li>Analytics on conversation quality</li>
            <li>Custom training with your data</li>
          </ul>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Handle 70% of inquiries without humans</li>
            <li>24/7 availability in 50+ languages</li>
            <li>Reduce support costs by 50%</li>
            <li>Improve CSAT with instant responses</li>
          </ul>
        </div>

        <div className="border border-purple-500 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Basic</h3>
              <p className="text-2xl font-bold mb-2">$$999/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg border-2 border-purple-500">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-2xl font-bold mb-2">$$2,999/mo/month</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-2xl font-bold mb-2">$Custom/month</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <Link href="/services/" className="text-purple-300 hover:text-purple-200">← Back to All Services</Link>
          <Link href="/tools/" className="text-slate-400 hover:text-slate-300">Try our free tools →</Link>
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
