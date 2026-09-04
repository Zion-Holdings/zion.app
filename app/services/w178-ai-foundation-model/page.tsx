import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Foundation Model Fine-Tuning | Zion Tech Group",
  description: "Fine-tune LLMs for your domain: data preparation, training, evaluation, deployment.",
  openGraph: {
    title: "AI Foundation Model Fine-Tuning | Zion Tech Group",
    description: "Fine-tune LLMs for your domain: data preparation, training, evaluation, deployment.",
    url: "https://ziontechgroup.com/services/w178-ai-foundation-model/",
    type: 'website',
  },
  alternates: { canonical: "/services/w178-ai-foundation-model/" },
};

export default function W178AiFoundationModelPage() {
  return (
    <StandardPage
      title="AI Foundation Model Fine-Tuning"
      subtitle="Fine-tune LLMs for your domain: data preparation, training, evaluation, deployment."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "AI Foundation Model Fine-Tuning" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Fine-tune LLMs for your domain: data preparation, training, evaluation, deployment.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607112241) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
