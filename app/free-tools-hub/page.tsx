import Link from 'next/link';

export const metadata = {
  title: 'Free Tools Hub',
  description: 'Free online tools for developers, designers, and businesses. JSON formatters, code tools, converters, generators, and more.',
};

export default function FreeToolsHubPage() {
  const toolCategories = [
  {
    title: 'Data & JSON',
    emoji: '📊',
    tools: [
      { name: 'JSON Formatter & Validator', href: '/tools/json-formatter', desc: 'Format, validate, and beautify JSON' },
      { name: 'JSON to CSV Converter', href: '/tools/json-to-csv-converter', desc: 'Convert JSON arrays to CSV' },
      { name: 'Base64 Encoder/Decoder', href: '/tools/base64', desc: 'Encode and decode Base64' },
    ],
  },
  {
    title: 'Service Tools',
    emoji: '🛠️',
    tools: [
      { name: 'AI Service Router', href: '/tools/ai-service-router', desc: 'Free AI recommendation engine' },
      { name: 'ROI Calculator', href: '/tools/roi-calculator', desc: 'Estimate automation returns' },
      { name: 'Service Recommender', href: '/tools/service-recommender', desc: 'Quick matching and ranking' },
      { name: 'Health Check', href: '/tools/health-check', desc: 'Readiness and basic diagnostics' },
    ],
  },
  {
    title: 'Design & Dev',
    emoji: '🎨',
    tools: [
      { name: 'Color Palette Generator', href: '/tools/color-palette-generator', desc: 'Generate harmonious color palettes' },
      { name: 'CSS Gradient Generator', href: '/tools/css-gradient-generator', desc: 'Visual CSS gradient builder' },
      { name: 'HTML to JSX', href: '/tools/html-to-jsx', desc: 'Convert HTML to React JSX' },
      { name: 'Favicon Generator', href: '/tools/favicon-generator', desc: 'Generate favicon from image or text' },
    ],
  },
  {
    title: 'Security & Encoding',
    emoji: '🔐',
    tools: [
      { name: 'JWT Decoder', href: '/tools/jwt-decoder', desc: 'Decode and inspect JWT tokens' },
      { name: 'Password Generator', href: '/tools/password-generator', desc: 'Generate secure passwords' },
      { name: 'UUID Generator', href: '/tools/uuid-generator', desc: 'Generate UUIDs/GUIDs' },
      { name: 'QR Code Generator', href: '/tools/qr-code-generator', desc: 'Generate QR codes' },
    ],
  },
  {
    title: 'Converters',
    emoji: '🔄',
    tools: [
      { name: 'Unit Converter', href: '/tools/unit-converter', desc: 'Convert between measurement units' },
      { name: 'Timestamp Converter', href: '/tools/timestamp-converter', desc: 'Unix timestamp to human date' },
      { name: 'String Case Converter', href: '/tools/string-case-converter', desc: 'camelCase, snake_case, etc.' },
      { name: 'URL Encoder/Decoder', href: '/tools/url-encoder-decoder', desc: 'Encode and decode URLs' },
    ],
  },
  {
    title: 'Network & API',
    emoji: '🌐',
    tools: [
      { name: 'Subnet Calculator', href: '/tools/subnet-calculator', desc: 'Calculate subnet ranges and masks' },
      { name: 'IP Address Validator', href: '/tools/ip-address-validator', desc: 'Validate IPv4 and IPv6 addresses' },
      { name: 'API Endpoint Tester', href: '/tools/api-endpoint-tester', desc: 'Test REST APIs with custom headers' },
      { name: 'Webhook Inspector', href: '/tools/webhook-inspector', desc: 'Inspect and debug webhook payloads' },
    ],
  },
  {
    title: 'Text & Content',
    emoji: '📝',
    tools: [
      { name: 'Word Counter', href: '/tools/word-counter', desc: 'Count words, characters, sentences' },
      { name: 'Lorem Ipsum Generator', href: '/tools/lorem-ipsum-generator', desc: 'Generate placeholder text' },
      { name: 'Regex Tester', href: '/tools/regex-tester', desc: 'Test regular expressions' },
      { name: 'Markdown Preview', href: '/tools/markdown-preview', desc: 'Live markdown preview' },
    ],
  },
  {
    title: 'Cloud & Operations',
    emoji: '☁️',
    tools: [
      { name: 'Cloud Cost Estimator', href: '/tools/cloud-cost-estimator', desc: 'Compare AWS/GCP/Azure spend' },
      { name: 'Tech Stack Recommender', href: '/tools/tech-stack-recommender', desc: 'Curated modern stack recommendation' },
      { name: 'Incident Postmortem', href: '/tools/incident-postmortem', desc: 'Lightweight postmortem draft' },
      { name: 'Port Scanner', href: '/tools/port-scanner', desc: 'Scan ports and services' },
    ],
  },
];

  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">Free Tools</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Free Tools Hub</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            36+ free online tools for developers, designers, and businesses. No signup required. All tools run in your browser.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          {toolCategories.map((cat, i) => (
            <div key={i} className="mb-12">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>{cat.emoji}</span> {cat.title}
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {cat.tools.map((tool, j) => (
                  <Link key={j} href={tool.href} className="group rounded-xl border border-slate-800 bg-slate-900/60 p-4 hover:border-purple-500/30 transition-colors">
                    <h3 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">{tool.name}</h3>
                    <p className="mt-1 text-xs text-slate-400">{tool.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
