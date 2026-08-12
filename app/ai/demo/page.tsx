import type { Metadata } from 'next';
import DemoSandboxClient from './DemoSandboxClient';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'AI Service Demo Sandbox',
  description:
    'Try Zion\'s AI service matching tool live — no sign-up, no API key, 100% browser-side. Type a use case and get ranked service recommendations instantly.',
  alternates: { canonical: '/ai/demo' },
  openGraph: {
    title: 'AI Service Demo Sandbox',
    description: 'Try Zion\',
    url: 'https://ziontechgroup.com/ai/demo',
    siteName: 'Zion Tech Group',
    type: 'website',
    images: ['/og-default.png'],
  },
};

export default function AIDemoPage() {
  return (

    <>


    <JsonLd data={{@context: "https://schema.org", @type: "WebPage", name: "AI Service Demo Sandbox", description: "Try Zion\", url: "https://ziontechgroup.com/ai/demo/"}} />

      <h1>AI Service Demo Sandbox</h1>

<div className="relative min-h-screen overflow-hidden bg-slate-950">
  <div className="pointer-events-none absolute inset-0" aria-hidden="true">
    <div className="absolute top-[-6rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-purple-600/10 blur-3xl" />
    <div className="absolute bottom-[-6rem] left-[-6rem] h-[24rem] w-[24rem] rounded-full bg-blue-600/08 blur-3xl" />
  </div>
  <DemoSandboxClient />
</div>
  

    </>

  );
}
