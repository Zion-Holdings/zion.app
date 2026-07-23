import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'AI Chatbot Builder | Zion Tech Group',
  description: 'Deploy an AI chatbot in under 10 minutes with multilingual support and CRM integration.',
  alternates: { canonical: '/services/ai-chatbot-builder/' },
};

export default function AiChatbotBuilderServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <Breadcrumb items={[{ label: 'Services', href: '/services/' }, { label: 'AI Chatbot Builder', href: '/services/ai-chatbot-builder/' }]} className="mb-8" />
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Chatbot Builder</h1>
        <p className="text-slate-300 text-lg mb-6 max-w-3xl">GPT-4-powered chatbot with multilingual support and CRM integration.</p>
        <ul className="list-disc pl-6 text-slate-300 space-y-1 mb-8 max-w-3xl">
          <li>Qualify leads 24/7 and book meetings.</li>
          <li>Support triage with ticket creation.</li>
          <li>Multilingual outreach.</li>
        </ul>
        <div className="flex flex-wrap gap-3">
          <a href="/contact/" className="btn-primary">Request early access</a>
          <a href="/services/" className="btn-secondary">All services</a>
        </div>
      </div>
    </main>
  );
}
