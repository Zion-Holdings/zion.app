import { Metadata } from 'next';
import Link from 'next/link';

export const metadata = {
  title: 'AI Document Processing | Zion Tech Group',
  description: 'AI Document Processing: extract data from invoices, contracts, and forms.',
  openGraph: {
    title: 'AI Document Processing',
    description: 'AI Document Processing: extract data from invoices, contracts, and forms.',
    url: 'https://ziontechgroup.com/services/ai-document-processing/',
    type: 'service',
  },
  alternates: {
    canonical: 'https://ziontechgroup.com/services/ai-document-processing/',
  },
};

export default function Page() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 left-[-9rem] h-[26rem] w-[26rem] rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute right-[-10rem] top-24 h-[28rem] w-[28rem] rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      <article className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">AI Document Processing</h1>
          <p className="mt-4 text-lg text-slate-300">Extract data from invoices, contracts, and forms.</p>
        </header>

        <div className="prose-invert max-w-none space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">Capabilities</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li>OCR and structured field extraction</li>
              <li>Validation against business rules</li>
              <li>Integration with ERP and document storage</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">Next step</h2>
            <p className="mb-4 leading-relaxed text-slate-300">
              Browse our services at{' '}
              <Link href="/services/#automation" className="text-violet-300 underline">Automation services</Link>
              , or schedule a call at{' '}
              <Link href="https://calendly.com/kleber-ziontechgroup" className="text-violet-300 underline">
                https://calendly.com/kleber-ziontechgroup
              </Link>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <Link href="/services/" className="text-sm font-medium text-violet-300 transition hover:text-violet-200">
            &larr; Back to services
          </Link>
        </div>
      </article>
    </div>
  );
}
