// app/tools/page.tsx — Free Developer Tools
import Link from 'next/link';
import type { Metadata } from 'next';
import PageTemplate from '@/components/PageTemplate';

export const metadata: Metadata = {
  title: 'Free Developer Tools & Utilities | Zion Tech Group',
  description: '50+ free online developer tools: JSON formatter, JWT decoder, regex tester, SQL formatter, color palette generator, QR code generator, and more.',
  alternates: { canonical: '/tools' },
};

const tools = [
  { id: 'json-formatter', icon: '📋', title: 'JSON Formatter & Validator', desc: 'Format, validate, and prettify JSON with syntax highlighting', category: 'Data' },
  { id: 'json-to-csv-converter', icon: '🔄', title: 'JSON to CSV Converter', desc: 'Convert JSON arrays to CSV and vice versa', category: 'Data' },
  { id: 'json-schema-generator', icon: '📐', title: 'JSON Schema Generator', desc: 'Auto-generate JSON Schema from sample JSON data', category: 'Data' },
  { id: 'json-diff-viewer', icon: '⚖️', title: 'JSON Diff Viewer', desc: 'Compare two JSON documents and highlight differences', category: 'Data' },
  { id: 'yaml-json-converter', icon: '🔁', title: 'YAML ⇄ JSON Converter', desc: 'Convert between YAML and JSON formats instantly', category: 'Data' },
  { id: 'xml-formatter-validator', icon: '📄', title: 'XML Formatter & Validator', desc: 'Format, validate, and minify XML documents', category: 'Data' },
  { id: 'css-gradient-generator', icon: '🌈', title: 'CSS Gradient Generator', desc: 'Visual CSS gradient builder with live preview', category: 'CSS' },
  { id: 'css-minifier-beautifier', icon: '🎨', title: 'CSS Minifier & Beautifier', desc: 'Minify CSS for production or beautify for development', category: 'CSS' },
  { id: 'html-to-jsx', icon: '⚛️', title: 'HTML to JSX Converter', desc: 'Convert HTML markup to React JSX syntax', category: 'HTML' },
  { id: 'html-minifier-beautifier', icon: '📝', title: 'HTML Minifier & Beautifier', desc: 'Minify HTML for performance or format for readability', category: 'HTML' },
  { id: 'sql-formatter', icon: '🗃️', title: 'SQL Formatter', desc: 'Format and beautify SQL queries with syntax highlighting', category: 'Data' },
  { id: 'jwt-decoder', icon: '🔑', title: 'JWT Decoder', desc: 'Decode and inspect JWT tokens with claims visualization', category: 'Security' },
  { id: 'color-palette-generator', icon: '🎨', title: 'Color Palette Generator', desc: 'Generate beautiful color palettes for your designs', category: 'Design' },
  { id: 'color-contrast-checker', icon: '👁️', title: 'Color Contrast Checker', desc: 'Check WCAG accessibility contrast ratios', category: 'Design' },
  { id: 'color-blindness-simulator', icon: '🔍', title: 'Color Blindness Simulator', desc: 'Simulate how designs look for different types of color blindness', category: 'Design' },
  { id: 'box-shadow-generator', icon: '📦', title: 'Box Shadow Generator', desc: 'Visual CSS box shadow builder with live preview', category: 'CSS' },
  { id: 'image-color-extractor', icon: '🖼️', title: 'Image Color Extractor', desc: 'Extract dominant colors from any image', category: 'Design' },
  { id: 'unit-converter', icon: '📏', title: 'Unit Converter', desc: 'Convert between length, weight, temperature, and data units', category: 'Utilities' },
  { id: 'currency-converter', icon: '💱', title: 'Currency Converter', desc: 'Real-time currency conversion for 150+ currencies', category: 'Utilities' },
  { id: 'base64', icon: '🔐', title: 'Base64 Encoder/Decoder', desc: 'Encode and decode Base64 strings and files', category: 'Encoding', href: '/tools/base64/' },
  { id: 'url-encoder-decoder', icon: '🔗', title: 'URL Encoder/Decoder', desc: 'Encode and decode URL parameters safely', category: 'Encoding' },
  { id: 'qr-code-generator', icon: '📱', title: 'QR Code Generator', desc: 'Generate customizable QR codes for URLs, text, and more', category: 'Utilities' },
  { id: 'password-generator', icon: '🔒', title: 'Password Generator', desc: 'Generate secure random passwords with custom rules', category: 'Security' },
  { id: 'password-strength-checker', icon: '💪', title: 'Password Strength Checker', desc: 'Analyze password strength and get improvement tips', category: 'Security' },
  { id: 'regex-tester', icon: '🔬', title: 'Regex Tester', desc: 'Test and debug regular expressions with live matching', category: 'Text' },
  { id: 'timestamp-converter', icon: '⏰', title: 'Unix Timestamp Converter', desc: 'Convert between Unix timestamps and human-readable dates', category: 'Utilities' },
  { id: 'uuid-generator', icon: '🆔', title: 'UUID/GUID Generator', desc: 'Generate RFC 4122 compliant UUIDs (v1, v4, v5)', category: 'Utilities' },
  { id: 'lorem-ipsum-generator', icon: '📃', title: 'Lorem Ipsum Generator', desc: 'Generate placeholder text for designs and mockups', category: 'Text' },
  { id: 'word-counter', icon: '🔢', title: 'Word & Character Counter', desc: 'Count words, characters, sentences, and paragraphs', category: 'Text' },
  { id: 'string-case-converter', icon: '🔤', title: 'String Case Converter', desc: 'Convert between camelCase, snake_case, kebab-case, and more', category: 'Text' },
  { id: 'markdown-preview', icon: '📖', title: 'Markdown Preview', desc: 'Live markdown preview with GitHub Flavored Markdown', category: 'Text' },
  { id: 'cron-expression-explainer', icon: '⏱️', title: 'Cron Expression Explainer', desc: 'Parse and explain cron expressions in plain English', category: 'Utilities' },
  { id: 'number-base-converter', icon: '🔢', title: 'Number Base Converter', desc: 'Convert between binary, octal, decimal, and hexadecimal', category: 'Utilities' },
  { id: 'subnet-calculator', icon: '🌐', title: 'Subnet Calculator', desc: 'Calculate subnet ranges, CIDR, and network addresses', category: 'Network' },
  { id: 'secure-hash-generator', icon: '🔐', title: 'Secure Hash Generator', desc: 'Generate SHA-256, SHA-512, MD5, and other hashes', category: 'Security' },
  { id: 'api-endpoint-tester', icon: '🧪', title: 'API Endpoint Tester', desc: 'Test REST APIs with custom headers and payloads', category: 'API' },
  { id: 'jwt-signature-verifier', icon: '✅', title: 'JWT Signature Verifier', desc: 'Verify JWT signatures with public keys', category: 'Security' },
  { id: 'html-entity-decoder', icon: '🔤', title: 'HTML Entity Decoder', desc: 'Decode HTML entities to plain text', category: 'Text' },
  { id: 'csv-validator', icon: '✅', title: 'CSV Validator', desc: 'Validate and format CSV data', category: 'Data' },
  { id: 'ip-address-validator', icon: '🌐', title: 'IP Address Validator', desc: 'Validate IPv4 and IPv6 addresses with details', category: 'Network' },
  { id: 'email-validator', icon: '📧', title: 'Email Validator', desc: 'Validate email addresses and extract components', category: 'Text' },
  { id: 'phone-number-formatter', icon: '📱', title: 'Phone Number Formatter', desc: 'Format phone numbers for different countries', category: 'Utilities' },
  { id: 'credit-card-validator', icon: '💳', title: 'Credit Card Validator', desc: 'Validate credit card numbers with Luhn algorithm', category: 'Validation' },
  { id: 'geolocation-geocoder', icon: '📍', title: 'Geolocation Geocoder', desc: 'Convert addresses to coordinates and vice versa', category: 'Geolocation' },
  { id: 'weather-api-mock', icon: '🌤️', title: 'Weather API Mock', desc: 'Mock weather data for testing and development', category: 'API' },
  { id: 'graphql-query-builder', icon: '📊', title: 'GraphQL Query Builder', desc: 'Build and test GraphQL queries visually', category: 'API' },
  { id: 'rate-limit-calculator', icon: '📈', title: 'Rate Limit Calculator', desc: 'Calculate API rate limits and quotas', category: 'API' },
  { id: 'webhook-inspector', icon: '🔗', title: 'Webhook Inspector', desc: 'Inspect and debug webhook payloads', category: 'API' },
  { id: 'oauth-debugger', icon: '🔑', title: 'OAuth Debugger', desc: 'Debug OAuth flows and token exchanges', category: 'Authentication' },
  { id: 'cors-proxy', icon: '🔓', title: 'CORS Proxy', desc: 'Test CORS headers with proxy URLs', category: 'Development' },
  { id: 'cookie-parser', icon: '🍪', title: 'Cookie Parser', desc: 'Parse and decode cookie strings', category: 'Web' },
  { id: 'http-header-analyzer', icon: '📬', title: 'HTTP Header Analyzer', desc: 'Analyze and format HTTP headers', category: 'Web' },
  { id: 'ai-support-triage', icon: '🚨', title: 'AI Support Triage', desc: 'Classify incident severity, likely causes, and remediation steps', category: 'Support' },
  { id: 'cloud-cost-estimator', icon: '🧮', title: 'Cloud Cost Estimator', desc: 'Compare estimated AWS/GCP/Azure spend and optimization tips', category: 'Cloud' },
  { id: 'tech-stack-recommender', icon: '🧩', title: 'Tech Stack Recommender', desc: 'Get a curated modern stack recommendation by project profile', category: 'Architecture' },
  { id: 'incident-postmortem', icon: '📋', title: 'Incident Postmortem', desc: 'Generate a lightweight postmortem draft from incident inputs', category: 'Operations' },
  { id: 'jwt-inspector', icon: '🔎', title: 'JWT Inspector', desc: 'Decode JWT header/payload and inspect claims client-side', category: 'Security' },
  { id: 'ai-quick-audit', icon: '🧭', title: 'AI Quick Audit', desc: '8-question 2-minute readiness check with maturity score and next steps', category: 'AI' },
  { id: 'free-tools-hub', icon: '🧲', title: 'Free Services & Tools Hub', desc: 'Explore Zion free tools and IT/AI services in one place', category: 'Growth' },
];

export default function ToolsPage() {
  const categories = [...new Set(tools.map(t => t.category))];

  return (
    <PageTemplate
      title="Free Developer Tools"
      description="50+ free online tools for developers, designers, and data professionals. No signup required, no data stored. If you need custom AI integrations, IT automation, or managed delivery, Zion Tech Group can build tailored solutions on top of these patterns."
      category="Developer Tools"
      heroIcon="🛠️"
      actions={[
        { label: 'Contact Us', href: '/contact', style: 'secondary' },
      ]}
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools' },
      ]}
      layout="hero"
    >
      <div className="max-w-6xl mx-auto">
        {categories.map(cat => (
          <div key={cat} className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4 border-b border-slate-700 pb-2">{cat}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.filter(t => t.category === cat).map(tool => (
                <Link
                  key={tool.id}
                  href={tool.href || `/tools/${tool.id}`}
                  className="group block p-5 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-800 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{tool.icon}</span>
                    <div>
                      <h3 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">{tool.title}</h3>
                      <p className="text-slate-400 text-sm mt-1">{tool.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageTemplate>
  );
}