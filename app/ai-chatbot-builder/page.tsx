import type { Metadata } from 'next';
import StandardPageLayout from '@/components/StandardPageLayout';

export const metadata: Metadata = {
  title: 'AI Chatbot Builder | Zion Tech Group',
  description: 'Build intelligent chatbots with our AI-powered conversational platform.',
  alternates: { canonical: '/ai-chatbot-builder/' },
};

export default function Page() {
  return (
    <StandardPageLayout data={{
      title: "AI Chatbot Builder",
      description: "Build intelligent chatbots with our AI-powered conversational platform.",
      category: 'AI Service',
      categoryColor: "from-purple-500 to-indigo-500",
      ctaLabel: 'Contact us',
      ctaHref: '/contact/',
      secondaryCtaLabel: 'Services',
      secondaryCtaHref: '/services/',
    }} />
  );
}
