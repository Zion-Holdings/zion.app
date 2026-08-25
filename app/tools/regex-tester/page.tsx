import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Regex Tester — Zion Tech Group',
  description: 'Test regular expressions with live matching, highlighting, and quick reference for common patterns.',
  keywords: ['regex tester', 'regular expression', 'regex debug', 'developer tools'],
  openGraph: {
    title: 'Regex Tester — Zion Tech Group',
    description: 'Test regular expressions with live matching, highlighting, and quick reference for common patterns.',
    url: 'https://ziontechgroup.com/tools/regex-tester/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Regex Tester — Zion Tech Group',
    description: 'Test regular expressions with live matching, highlighting, and quick reference for common patterns.',
  },
  alternates: { canonical: '/tools/regex-tester/' },
  robots: { index: true, follow: true },
};


export default function RegexTesterPage() {
  const breadcrumbItems = [
    { label: 'Tools', href: '/tools/' },
    { label: 'Regex Tester' },
  ];

  return (
<>
    <StandardPage
      title="Regex Tester"
      subtitle="Test regular expressions with live matching and highlights."
      breadcrumbItems={breadcrumbItems}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
        { label: 'Talk to us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Live matching</h3>
          <p className="text-slate-400 text-sm">Test patterns against sample text with immediate match feedback.</p>
        </div>
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Capture groups</h3>
          <p className="text-slate-400 text-sm">Inspect groups and reuse extracted values in development workflows.</p>
        </div>
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Common patterns</h3>
          <p className="text-slate-400 text-sm">Use quick templates for emails, URLs, dates, and identifiers.</p>
        </div>
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Use cases</h3>
          <p className="text-slate-400 text-sm">Form validation, log parsing, and extraction automation.</p>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Regex tips</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Start with simple patterns and add complexity only when needed.</li>
          <li>Test against edge cases: empty strings, whitespace, and special characters.</li>
          <li>Document reusable patterns in a shared library for consistency.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="/tools/" className="btn-primary text-center">All tools</a>
          <a href="/contact/" className="btn-secondary text-center">Talk to us</a>
        </div>
      </div>
    </StandardPage>
  </>
  );
}