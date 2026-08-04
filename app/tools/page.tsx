import Link from 'next/link';

export const metadata = {
  title: 'Tools | Zion Tech Group',
  description: 'Free AI and IT tools for automation, analytics, security, and productivity.',
};

export default function ToolsPage() {
  const tools = [
    { href: '/tools/json-formatter/', title: 'JSON Formatter & Validator', description: 'Format, validate, and beautify JSON payloads.' },
    { href: '/tools/base64/', title: 'Base64 Encoder/Decoder', description: 'Encode and decode Base64 strings and files.' },
    { href: '/tools/ai-quick-audit/', title: 'AI Quick Audit', description: '8-question AI readiness check with maturity score and next steps.' },
  ];

  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-3xl font-bold text-white mb-4">Tools</h1>
        <p className="text-slate-400 mb-8">Free AI and IT tools to help you automate, analyze, and secure your business.</p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="glass-card p-6 hover:border-blue-500 transition-colors">
              <h2 className="text-xl font-semibold text-white mb-2">{tool.title}</h2>
              <p className="text-slate-400 text-sm">{tool.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
