import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Tools | Zion Tech Group',
  description: 'Free AI/IT tools for service recommendations, comparisons, SSL checks, and more.',
  openGraph: {
    title: 'Tools | Zion Tech Group',
    description: 'Free AI/IT tools for service recommendations, comparisons, SSL checks.',
    url: 'https://ziontechgroup.com/tools/',
    type: 'website',
  },
  alternates: { canonical: '/tools/' },
};

export default function ToolsPage() {
  return (
    <StandardPage
      title="Tools"
      subtitle="Free utilities built by Zion Tech Group to accelerate your AI and IT initiatives."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools' },
      ]}
      actions={[
        { label: 'Get a recommendation', href: '/tools/ai-roi-calculator/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
        { label: 'Cloud savings check', href: '/tools/cloud-cost-optimizer/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        <Link href="/tools/agent-prompt-builder/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Agent Prompt Builder</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Agent Prompt Builder.</p>
        </Link>
        <Link href="/tools/ai-roi-calculator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Ai Roi Calculator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Ai Roi Calculator.</p>
        </Link>
        <Link href="/tools/api-health-check/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Api Health Check</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Api Health Check.</p>
        </Link>
        <Link href="/tools/base64-encoder/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Base64 Encoder</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Base64 Encoder.</p>
        </Link>
        <Link href="/tools/cloud-cost-calculator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Cloud Cost Calculator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Cloud Cost Calculator.</p>
        </Link>
        <Link href="/tools/cloud-cost-optimizer/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Cloud Cost Optimizer</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Cloud Cost Optimizer.</p>
        </Link>
        <Link href="/tools/color-contrast/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Color Contrast</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Color Contrast.</p>
        </Link>
        <Link href="/tools/color-palette-gen/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Color Palette Gen</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Color Palette Gen.</p>
        </Link>
        <Link href="/tools/cron-agent-calculator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Cron Agent Calculator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Cron Agent Calculator.</p>
        </Link>
        <Link href="/tools/css-minifier/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Css Minifier</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Css Minifier.</p>
        </Link>
        <Link href="/tools/gradient-generator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Gradient Generator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Gradient Generator.</p>
        </Link>
        <Link href="/tools/hash-generator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Hash Generator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Hash Generator.</p>
        </Link>
        <Link href="/tools/image-to-base64/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Image To Base64</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Image To Base64.</p>
        </Link>
        <Link href="/tools/js-minifier/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Js Minifier</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Js Minifier.</p>
        </Link>
        <Link href="/tools/json-formatter/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Json Formatter</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Json Formatter.</p>
        </Link>
        <Link href="/tools/json-schema-validator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Json Schema Validator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Json Schema Validator.</p>
        </Link>
        <Link href="/tools/llm-payload-estimator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Llm Payload Estimator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Llm Payload Estimator.</p>
        </Link>
        <Link href="/tools/lorem-ipsum/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Lorem Ipsum</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Lorem Ipsum.</p>
        </Link>
        <Link href="/tools/markdown-preview/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Markdown Preview</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Markdown Preview.</p>
        </Link>
        <Link href="/tools/markdown-to-html/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Markdown To Html</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Markdown To Html.</p>
        </Link>
        <Link href="/tools/mcp-tester/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Mcp Tester</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Mcp Tester.</p>
        </Link>
        <Link href="/tools/meta-tag-generator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Meta Tag Generator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Meta Tag Generator.</p>
        </Link>
        <Link href="/tools/number-base-converter/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Number Base Converter</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Number Base Converter.</p>
        </Link>
        <Link href="/tools/password-strength/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Password Strength</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Password Strength.</p>
        </Link>
        <Link href="/tools/phishing-analyzer/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Phishing Analyzer</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Phishing Analyzer.</p>
        </Link>
        <Link href="/tools/regex-tester/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Regex Tester</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Regex Tester.</p>
        </Link>
        <Link href="/tools/security-headers-analyzer/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Security Headers Analyzer</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Security Headers Analyzer.</p>
        </Link>
        <Link href="/tools/sql-formatter/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Sql Formatter</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Sql Formatter.</p>
        </Link>
        <Link href="/tools/text-analyzer/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Text Analyzer</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Text Analyzer.</p>
        </Link>
        <Link href="/tools/text-diff/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Text Diff</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Text Diff.</p>
        </Link>
        <Link href="/tools/timestamp-converter/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Timestamp Converter</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Timestamp Converter.</p>
        </Link>
        <Link href="/tools/url-encoder/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Url Encoder</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Url Encoder.</p>
        </Link>
        <Link href="/tools/user-agent-parser/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">User Agent Parser</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: User Agent Parser.</p>
        </Link>
        <Link href="/tools/uuid-generator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Uuid Generator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Uuid Generator.</p>
        </Link>
        <Link href="/tools/yaml-to-json/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Yaml To Json</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Yaml To Json.</p>
        </Link>
      </div>
    </StandardPage>
  );
}
