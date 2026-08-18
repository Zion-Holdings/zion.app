import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Cron Parser | Zion Tech Group',
  description: 'Translate cron schedules into human-readable plain English.',
  openGraph: {
    title: 'Cron Parser | Zion Tech Group',
    description: 'Translate cron schedules into human-readable plain English.',
    url: 'https://ziontechgroup.com/tools/cron-parser/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cron Parser | Zion Tech Group',
    description: 'Translate cron schedules into human-readable plain English.',
  },
  alternates: { canonical: '/tools/cron-parser/' },
};

export default function Page() {
  return (
    <StandardPage
      title="Cron Parser"
      subtitle="Translate cron schedules into human-readable plain English."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'Cron Parser' },
      ]}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto space-y-6">
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">When to use</h2>
          <p className="text-slate-300">
            Use this tool when reviewing deployment schedules, batch jobs, or automation timers. Paste a cron expression and get a readable description of when it runs.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">How to use</h2>
          <ol className="list-decimal list-inside text-slate-300 space-y-2">
            <li>Paste a cron expression.</li>
            <li>Review the human-readable schedule.</li>
            <li>Validate correctness before applying it.</li>
          </ol>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Related tools</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <a href="/tools/word-counter/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">Word Counter</h3>
              <p className="text-slate-400 text-xs">Count words and characters quickly.</p>
            </a>
            <a href="/tools/uuid-generator/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">UUID Generator</h3>
              <p className="text-slate-400 text-xs">Create UUIDs for identifiers and tokens.</p>
            </a>
            <a href="/tools/base64-encoder/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">Base64 Encoder</h3>
              <p className="text-slate-400 text-xs">Encode and decode Base64 safely.</p>
            </a>
          </div>
        </section>
      </div>
    </StandardPage>
  );
}
