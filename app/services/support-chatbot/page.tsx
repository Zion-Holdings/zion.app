import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Support Chatbot | Zion Tech Group",
  description: "Intelligent customer support chatbot with natural language understanding. Handles FAQs, ticket creation, escalation to humans, and learns from past interactions.",
  openGraph: {
    title: "AI Support Chatbot | Zion Tech Group",
    description: "Intelligent customer support chatbot with natural language understanding. Handles FAQs, ticket creation, escalation to humans, and learns from past interactions.",
    url: "https://ziontechgroup.com/services/support-chatbot/",
    type: 'website',
  },
  alternates: { canonical: "/services/support-chatbot/" },
};

export default function SupportChatbotPage() {
  return (
    <StandardPage
      title="AI Support Chatbot"
      subtitle="Intelligent customer support chatbot with natural language understanding. Handles FAQs, ticket creation, escalation to humans, and learns from past interactions."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "AI Support Chatbot" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Intelligent customer support chatbot with natural language understanding. Handles FAQs, ticket creation, escalation to humans, and learns from past interactions.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614102009) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
