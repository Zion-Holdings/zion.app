import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Markdown Previewer | Zion Tech Group',
  description: 'Preview formatted markdown output instantly for docs, blogs, and readmes.',
  openGraph: {
    title: 'Markdown Previewer | Zion Tech Group',
    description: 'Instant markdown preview with common formatting support.',
    url: 'https://ziontechgroup.com/tools/markdown-previewer/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Markdown Previewer | Zion Tech Group',
    description: 'Instant markdown preview with common formatting support.',
  },
  alternates: { canonical: '/tools/markdown-previewer/' },
};


export default function MarkdownPreviewerPage() {
  return (
<>
    <JsonLd data={{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Markdown Previewer",
  "description": "Preview formatted markdown output instantly for docs, blogs, and readmes.",
  "applicationCategory": "BusinessApplication",
  "applicationSuite": "Zion Tech Group Tools",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com"
  },
  "url": "https://ziontechgroup.com/tools/markdown-previewer/",
  "@id": "https://ziontechgroup.com/tools/markdown-previewer/",
  "featureList": [
    "Free to use",
    "No installation required",
    "Browser-based"
  ],
  "softwareVersion": "1.0"
}} />
    <StandardPage
      title="Markdown Previewer"
      subtitle="Preview formatted markdown output instantly for docs, blogs, and readmes."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'Markdown Previewer' },
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
            Use the Markdown Previewer when drafting documentation, README files, blog posts, or support content. It lets you verify formatting, links, lists, and code blocks before publishing.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">How to use</h2>
          <ol className="list-decimal list-inside text-slate-300 space-y-2">
            <li>Paste markdown text into the editor.</li>
            <li>Review the rendered preview.</li>
            <li>Adjust headings, lists, links, and code blocks.</li>
            <li>Copy the final markdown or HTML output.</li>
          </ol>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Tips</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Use consistent heading levels for better structure.</li>
            <li>Validate external links before publishing.</li>
            <li>Keep code blocks language-tagged for syntax highlighting.</li>
          </ul>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Related tools</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <Link href="/tools/word-counter/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">Word Counter</h3>
              <p className="text-slate-400 text-xs">Count words and characters.</p>
            </Link>
            <Link href="/tools/json-formatter/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">JSON Formatter</h3>
              <p className="text-slate-400 text-xs">Beautify and validate JSON.</p>
            </Link>
            <Link href="/tools/regex-tester/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">Regex Tester</h3>
              <p className="text-slate-400 text-xs">Test regular expressions safely.</p>
            </Link>
          </div>
        </section>
      </div>
    
      {/* Injected JSON-LD Schemas */}
      <JsonLd data={{
  "@context": "https://schema.org",
  "@type": [
    "SoftwareApplication",
    "WebApplication"
  ],
  "name": "Markdown Previewer",
  "applicationCategory": "WebApplication",
  "applicationSubCategory": "DeveloperTool",
  "description": "Interactive tool: Markdown Previewer.",
  "url": "https://ziontechgroup.com/tools/markdown-previewer/",
  "featureList": [
    "Free online tool",
    "No registration required",
    "Instant results",
    "Browser-based",
    "Client-side processing"
  ],
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com",
    "email": "hello@ziontechgroup.com",
    "telephone": "+1 (302) 464 0950"
  },
  "operatingSystem": "All (web-based)",
  "browserRequirements": "Modern web browser with JavaScript enabled",
  "softwareVersion": "1.0"
} }} />
      <JsonLd data={{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is the Markdown Previewer free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, this tool is completely free. No registration or payment required."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use the Markdown Previewer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply open the Markdown Previewer page, enter your inputs, and click run to get instant results."
      }
    },
    {
      "@type": "Question",
      "name": "Does this tool store my data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. All processing happens client-side. Your data never leaves your browser."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use this tool for commercial projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our free tools can be used for both personal and commercial projects."
      }
    }
  ]
} }} /></StandardPage>
  </>
  );
}