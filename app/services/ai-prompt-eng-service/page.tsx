import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Prompt Engineering Service | Zion Tech Group",
  description: "Design, test, and optimize production-grade prompts for LLMs. Improve accuracy, reduce hallucinations, and scale AI outputs across your business.",
  openGraph: {
    title: "AI Prompt Engineering Service | Zion Tech Group",
    description: "Design, test, and optimize production-grade prompts for LLMs. Improve accuracy, reduce hallucinations, and scale AI outputs across your business.",
    url: "https://ziontechgroup.com/services/ai-prompt-eng-service/",
    type: 'website',
  },
  alternates: { canonical: "/services/ai-prompt-eng-service/" },
};

export default function ServicesAiPromptEngServicePage() {
  return (
    <StandardPage
      title="AI Prompt Engineering Service"
      subtitle="Design, test, and optimize production-grade prompts for LLMs. Improve accuracy, reduce hallucinations, and scale AI outputs across your business."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Ai Prompt Eng Service" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Design, test, and optimize production-grade prompts for LLMs. Improve accuracy, reduce hallucinations, and scale AI outputs across your business.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
