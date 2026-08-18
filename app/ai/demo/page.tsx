import type { Metadata } from 'next';
import DemoSandboxClient from './DemoSandboxClient';

export const metadata: Metadata = {
  title: 'AI Service Demo Sandbox | Zion Tech Group',
  description:
    "Try Zion's AI service matching tool live — no sign-up, no API key, 100% browser-side. Type a use case and get ranked service recommendations instantly.",
  openGraph: {
    title: 'AI Service Demo Sandbox',
    description: "Browser-side AI service matching demo with instant recommendations.",
    url: 'https://ziontechgroup.com/ai/demo/',
    type: 'website',
  },
  alternates: { canonical: '/ai/demo/' },
};

export default function AIDemoPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-[-6rem] right-[-8rem] h-[28rem] w-[28rem] rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-[-6rem] h-[24rem] w-[24rem] rounded-full bg-blue-600/08 blur-3xl" />
      </div>
      <div className="container-page py-12">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">AI Service Demo Sandbox</h1>
          <p className="text-slate-400 text-lg">
            Try our AI service matching tool live — no sign-up, no API key, 100% browser-side.
          </p>
        </div>
        <DemoSandboxClient />
      </div>
    </div>
  );
}
