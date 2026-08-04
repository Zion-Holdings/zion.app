import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'scaling ai across manufacturing operations | Zion Tech Group',
  description: 'AI insights for enterprises from Zion Tech Group.',
  alternates: { canonical: '/blog/scaling-ai-across-manufacturing-operations/' },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold">scaling ai across manufacturing operations</h1>
        <p className="mt-4 text-slate-300">This topic is available in our expanded guide.</p>
        <div className="mt-8">
          <a href="/contact/" className="btn-primary">Get Consultation</a>
        </div>
      </main>
    </div>
  );
}
