import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Speech Recognition | Zion Tech Group",
  description: "Speech Recognition from Zion Tech Group.",
  openGraph: {
    title: "Speech Recognition | Zion Tech Group",
    description: "Speech Recognition from Zion Tech Group.",
    url: "https://ziontechgroup.com/services/speech-recognition/",
    type: 'website',
  },
  alternates: { canonical: "/services/speech-recognition/" },
};

export default function SpeechRecognitionPage() {
  return (
    <StandardPage
      title="Speech Recognition"
      subtitle="Speech Recognition from Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Speech Recognition" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Speech Recognition from Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614132047) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
