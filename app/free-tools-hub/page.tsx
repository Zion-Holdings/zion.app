import Link from 'next/link';

export const metadata = {
  title: 'Free Tools Hub',
  description: 'Free online tools for developers, designers, and businesses. JSON formatters, code tools, converters, generators, and more.',
};

export default function FreeToolsHubPage() {
  const toolCategories = [
    {
      title: 'JSON & Data',
      emoji: '📊',
      tools: [
        { name: 'JSON Formatter & Validator', href: '/tools/json-formatter', desc: 'Format, validate, and beautify JSON' },
        { name: 'JSON to CSV Converter', href: '/tools/json-to-csv-converter', desc: 'Convert JSON arrays to CSV' },
        { name: 'JSON Schema Generator', href: '/tools/json-schema-generator', desc: 'Generate JSON Schema from sample data' },
        { name: 'JSON Diff Viewer', href: '/tools/json-diff-viewer', desc: 'Compare two JSON documents' },
        { name: 'YAML to JSON', href: '/tools/yaml-json-converter', desc: 'Convert YAML to JSON and back' },
        { name: 'XML Formatter', href: '/tools/xml-formatter-validator', desc: 'Format and validate XML' },
      ],
    },
    {
      title: 'Code & CSS',
      emoji: '💻',
      tools: [
        { name: 'CSS Gradient Generator', href: '/tools/css-gradient-generator', desc: 'Create beautiful CSS gradients' },
        { name: 'CSS Minifier', href: '/tools/css-minifier-beautifier', desc: 'Minify and beautify CSS' },
        { name: 'HTML to JSX', href: '/tools/html-to-jsx', desc: 'Convert HTML to JSX for React' },
        { name: 'HTML Minifier', href: '/tools/html-minifier-beautifier', desc: 'Minify and format HTML' },
        { name: 'SQL Formatter', href: '/tools/sql-formatter', desc: 'Format SQL queries' },
        { name: 'JWT Decoder', href: '/tools/jwt-decoder', desc: 'Decode and inspect JWT tokens' },
      ],
    },
    {
      title: 'Colors & Design',
      emoji: '🎨',
      tools: [
        { name: 'Color Palette Generator', href: '/tools/color-palette-generator', desc: 'Generate harmonious color palettes' },
        { name: 'Color Contrast Checker', href: '/tools/color-contrast-checker', desc: 'Check WCAG accessibility contrast' },
        { name: 'Color Blindness Simulator', href: '/tools/color-blindness-simulator', desc: 'Simulate color blindness' },
        { name: 'Box Shadow Generator', href: '/tools/box-shadow-generator', desc: 'Create CSS box shadows' },
        { name: 'Favicon Generator', href: '/tools/favicon-generator', desc: 'Generate favicon from image or text' },
        { name: 'Image Color Extractor', href: '/tools/image-color-extractor', desc: 'Extract dominant colors from images' },
      ],
    },
    {
      title: 'Converters & Calculators',
      emoji: '🔄',
      tools: [
        { name: 'Unit Converter', href: '/tools/unit-converter', desc: 'Convert between measurement units' },
        { name: 'Currency Converter', href: '/tools/currency-converter', desc: 'Real-time currency conversion' },
        { name: 'Timestamp Converter', href: '/tools/timestamp-converter', desc: 'Unix timestamp to human date' },
        { name: 'Number Base Converter', href: '/tools/number-base-converter', desc: 'Binary, hex, decimal, octal' },
        { name: 'String Case Converter', href: '/tools/string-case-converter', desc: 'camelCase, snake_case, etc.' },
        { name: 'Subnet Calculator', href: '/tools/subnet-calculator', desc: 'Calculate subnet ranges and masks' },
      ],
    },
    {
      title: 'Text & Content',
      emoji: '📝',
      tools: [
        { name: 'Word Counter', href: '/tools/word-counter', desc: 'Count words, characters, sentences' },
        { name: 'Lorem Ipsum Generator', href: '/tools/lorem-ipsum-generator', desc: 'Generate placeholder text' },
        { name: 'Markdown Preview', href: '/tools/markdown-preview', desc: 'Live markdown preview' },
        { name: 'Regex Tester', href: '/tools/regex-tester', desc: 'Test regular expressions' },
        { name: 'URL Encoder/Decoder', href: '/tools/url-encoder-decoder', desc: 'Encode and decode URLs' },
        { name: 'Hash Generator', href: '/tools/secure-hash-generator', desc: 'MD5, SHA-1, SHA-256' },
      ],
    },
    {
      title: 'DevOps & Security',
      emoji: '🔐',
      tools: [
        { name: 'Password Generator', href: '/tools/password-generator', desc: 'Generate secure passwords' },
        { name: 'Password Strength Checker', href: '/tools/password-strength-checker', desc: 'Check password strength' },
        { name: 'UUID Generator', href: '/tools/uuid-generator', desc: 'Generate UUIDs/GUIDs' },
        { name: 'QR Code Generator', href: '/tools/qr-code-generator', desc: 'Generate QR codes' },
        { name: 'Base64 Encoder/Decoder', href: '/tools/base64', desc: 'Encode and decode Base64' },
        { name: 'Cron Expression Explainer', href: '/tools/cron-expression-explainer', desc: 'Explain cron schedules' },
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
