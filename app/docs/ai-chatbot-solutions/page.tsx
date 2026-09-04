import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Chatbot Solutions | Zion Tech Group",
  description: "AI chatbot solutions for support, sales, and operations with WhatsApp, web, and voice integrations.",
  openGraph: {
    title: "AI Chatbot Solutions | Zion Tech Group",
    description: "AI chatbot solutions for support, sales, and operations with WhatsApp, web, and voice integrations.",
    url: "https://ziontechgroup.com/docs/ai-chatbot-solutions/",
    type: 'website',
  },
  alternates: { canonical: "/docs/ai-chatbot-solutions/" },
};

export default function DocsAiChatbotSolutionsPage() {
  return (
    <StandardPage
      title="AI Chatbot Solutions"
      subtitle="AI chatbot solutions for support, sales, and operations with WhatsApp, web, and voice integrations."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Ai Chatbot Solutions" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">AI chatbot solutions for support, sales, and operations with WhatsApp, web, and voice integrations.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
