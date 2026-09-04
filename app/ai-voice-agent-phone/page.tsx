import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Voice Agent Phone | Zion Tech Group",
  description: "Zion Tech Group builds voice agent phone solutions for IT teams and enterprises.",
  openGraph: {
    title: "Voice Agent Phone | Zion Tech Group",
    description: "Zion Tech Group builds voice agent phone solutions for IT teams and enterprises.",
    url: "https://ziontechgroup.com/ai-voice-agent-phone/",
    type: 'website',
  },
  alternates: { canonical: "/ai-voice-agent-phone/" },
};

export default function AiVoiceAgentPhonePage() {
  return (
    <StandardPage
      title="Voice Agent Phone"
      subtitle="Zion Tech Group builds voice agent phone solutions for IT teams and enterprises."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ai Voice Agent Phone" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Zion Tech Group builds voice agent phone solutions for IT teams and enterprises.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
