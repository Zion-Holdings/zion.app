import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Chatbot Builder | Zion Tech Group',
  description: 'Deploy an AI chatbot in under 10 minutes with multilingual support and CRM integration.',
  alternates: { canonical: '/services/ai-chatbot-builder/' },
};

export default function AiChatbotBuilderServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Chatbot Builder</h1>
        <p className="text-slate-300 text-lg mb-6">
          GPT-4-powered chatbot with multilingual support and CRM integration.
          Qualify leads 24/7 and route complex cases to humans.
        </p>
        <ul className="list-disc pl-6 text-slate-300 space-y-1 mb-8">
          <li>Lead qualification and meeting booking on landing and product pages.</li>
          <li>Support triage with ticket creation and escalation paths.</li>
          <li>Multilingual outreach for global traffic and partner channels.</li>
          <li>CRM integration and pipeline data capture.</li>
        </ul>
        <Link href="/contact/" className="btn-primary">Request early access</Link>
      </div>
    </main>
  );
}
