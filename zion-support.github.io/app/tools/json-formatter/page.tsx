import { Metadata } from 'next';
import Link from 'next/link';

export const metadata = {
  title: 'JSON Formatter | Zion Tech Group',
  description: 'JSON Formatter: validate, clean, and format JSON payloads quickly.',
  openGraph: {
    title: 'JSON Formatter',
    description: 'JSON Formatter: validate, clean, and format JSON payloads quickly.',
    url: 'https://ziontechgroup.com/tools/json-formatter/',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ziontechgroup.com/tools/json-formatter/',
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
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">JSON Formatter</h1>
          <p className="mt-4 text-lg text-slate-300">Validate, clean, and format JSON payloads quickly.</p>
        </header>

        <div className="prose-invert max-w-none space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">Use cases</h2>
            <ul className="list-disc pl-6 text-slate-300 space-y-2">
              <li>Normalize API request and response payloads</li>
              <li>Remove trailing commas and fix common JSON issues</li>
              <li>Prepare clean JSON for logs, configs, or data pipelines</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-white">Next step</h2>
            <p className="mb-4 leading-relaxed text-slate-300">
              Browse our services at{' '}
              <Link href="/services/" className="text-violet-300 underline">Services</Link>
              , or schedule a call at{' '}
              <Link href="https://calendly.com/kleber-ziontechgroup" className="text-violet-300 underline">
                https://calendly.com/kleber-ziontechgroup
              </Link>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8">
          <Link href="/tools/" className="text-sm font-medium text-violet-300 transition hover:text-violet-200">
            &larr; Back to all tools
          </Link>
        </div>
      </article>
    </div>
  );
}
