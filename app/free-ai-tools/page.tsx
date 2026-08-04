export const metadata = {
  title: 'Free AI Tools Directory | Zion Tech Group',
  description: 'Curated free AI tools for productivity, automation, security, and analytics.',
  alternates: { canonical: 'https://ziontechgroup.com/free-ai-tools/' },
  openGraph: { title: 'Free AI Tools', url: 'https://ziontechgroup.com/free-ai-tools/' }
};

export default function FreeAiToolsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Free AI Tools</h1>
      <p className="mb-6 text-slate-300">Useful AI tools we actually use in production workflows.</p>
      <ul className="list-disc pl-6 space-y-2 text-slate-300">
        <li>Prompt engineering templates</li>
        <li>Document automation helpers</li>
        <li>Lightweight data extractors</li>
      </ul>
      <div className="mt-8">
        <a href="/contact/" className="inline-block rounded bg-purple-600 px-4 py-2 font-semibold">Start a project</a>
      </div>
    </main>
  );
}
