'use client';
import Link from 'next/link';

export const metadata = {
  title: 'Free Tools Hub | Zion Tech Group',
  description: '50+ free AI-powered developer tools and utilities. JSON formatter, JWT decoder, regex tester, SQL formatter, and more.',
};

const toolCategories = [
  {
    key: 'data',
    title: 'Data Tools',
    color: 'from-emerald-500 to-teal-500',
    tools: [
      { id: 'json-formatter', icon: '📋', title: 'JSON Formatter & Validator', desc: 'Format, validate, and prettify JSON with syntax highlighting' },
      { id: 'json-to-csv-converter', icon: '🔄', title: 'JSON to CSV Converter', desc: 'Convert JSON arrays to CSV and vice versa' },
      { id: 'json-schema-generator', icon: '📐', title: 'JSON Schema Generator', desc: 'Auto-generate JSON Schema from sample JSON' },
      { id: 'yaml-json-converter', icon: '🔁', title: 'YAML ⇄ JSON Converter', desc: 'Convert between YAML and JSON instantly' },
    ]
  },
  {
    key: 'security',
    title: 'Security Tools',
    color: 'from-red-500 to-orange-500',
    tools: [
      { id: 'jwt-decoder', icon: '🔑', title: 'JWT Decoder', desc: 'Decode and inspect JWT tokens with claims visualization' },
      { id: 'password-generator', icon: '🔒', title: 'Password Generator', desc: 'Generate secure random passwords with custom rules' },
      { id: 'secure-hash-generator', icon: '🔐', title: 'Secure Hash Generator', desc: 'Generate SHA-256, SHA-512, MD5, and other hashes' },
    ]
  },
  {
    key: 'design',
    title: 'Design Tools',
    color: 'from-pink-500 to-rose-500',
    tools: [
      { id: 'css-gradient-generator', icon: '🌈', title: 'CSS Gradient Generator', desc: 'Visual CSS gradient builder with live preview' },
      { id: 'color-palette-generator', icon: '🎨', title: 'Color Palette Generator', desc: 'Generate beautiful color palettes for designs' },
      { id: 'color-contrast-checker', icon: '👁️', title: 'Color Contrast Checker', desc: 'Check WCAG accessibility contrast ratios' },
    ]
  },
  {
    key: 'utilities',
    title: 'Utilities',
    color: 'from-blue-500 to-cyan-500',
    tools: [
      { id: 'unit-converter', icon: '📏', title: 'Unit Converter', desc: 'Convert between length, weight, temperature, and data units' },
      { id: 'currency-converter', icon: '💱', title: 'Currency Converter', desc: 'Real-time currency conversion for 150+ currencies' },
      { id: 'qr-code-generator', icon: '📱', title: 'QR Code Generator', desc: 'Generate customizable QR codes for URLs and text' },
      { id: 'cron-expression-explainer', icon: '⏱️', title: 'Cron Expression Explainer', desc: 'Parse and explain cron expressions in plain English' },
    ]
  },
  {
    key: 'text',
    title: 'Text Tools',
    color: 'from-violet-500 to-fuchsia-500',
    tools: [
      { id: 'regex-tester', icon: '🔬', title: 'Regex Tester', desc: 'Test and debug regular expressions with live matching' },
      { id: 'lorem-ipsum-generator', icon: '📃', title: 'Lorem Ipsum Generator', desc: 'Generate placeholder text for designs and mockups' },
      { id: 'string-case-converter', icon: '🔤', title: 'String Case Converter', desc: 'Convert between camelCase, snake_case, kebab-case' },
      { id: 'markdown-preview', icon: '📖', title: 'Markdown Preview', desc: 'Live markdown preview with GitHub Flavored Markdown' },
    ]
  },
  {
    key: 'network',
    title: 'Network Tools',
    color: 'from-cyan-500 to-blue-500',
    tools: [
      { id: 'subnet-calculator', icon: '🌐', title: 'Subnet Calculator', desc: 'Calculate subnet ranges, CIDR, and network addresses' },
      { id: 'ip-address-validator', icon: '🖥️', title: 'IP Address Validator', desc: 'Validate IPv4 and IPv6 addresses with details' },
    ]
  },
];

export default function FreeToolsHubPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(16,185,129,0.15),rgba(59,130,246,0.12))]" />
        <div className="container-page text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm mb-6">
            <span className="text-green-400">●</span> 100% Free • No Signup
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6"><span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">Free Developer Tools</span></h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">50+ AI-powered tools for developers, designers, and data professionals. No signup required, no data stored.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/tools/json-formatter" className="btn-primary text-lg px-8 py-4">📋 Try JSON Formatter</Link>
            <Link href="/services/" className="btn-secondary text-lg px-8 py-4">🧠 View AI Services</Link>
          </div>
        </div>
      </section>
      
      {toolCategories.map((cat) => (
        <section key={cat.key} className="py-20">
          <div className="container-page">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">{cat.title}</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">{cat.title.toLowerCase()} for developers and professionals</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cat.tools.map((tool) => (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.id}`}
                  className="group bg-slate-900/50 border border-slate-800/50 rounded-2xl p-5 hover:border-purple-500/40 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{tool.icon}</span>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-purple-300">{tool.title}</h3>
                      <p className="text-slate-400 text-xs">{tool.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}
      
      <section className="py-20 bg-slate-950/30 text-center">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-4">Need Custom Tools?</h2>
          <p className="text-slate-300 mb-8">We build custom AI tools and integrations for your specific needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">📞 Contact Us</Link>
            <Link href="/services/" className="btn-secondary text-lg px-8 py-4">🛠️ Browse Services</Link>
          </div>
        </div>
      </section>
    </main>
  );
}