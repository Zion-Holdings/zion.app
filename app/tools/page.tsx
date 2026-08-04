export const metadata = {
  title: 'Free AI & IT Tools | Zion Tech Group',
  description: 'Explore AI and IT calculators, checklists, and lightweight self-service tools.',
  alternates: { canonical: 'https://ziontechgroup.com/tools/' },
  openGraph: { title: 'Zion Tech Group Tools', url: 'https://ziontechgroup.com/tools/' }
};

export default function ToolsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Tools</h1>
      <p className="mb-6 text-slate-300">Self-service AI and IT tools built by Zion Tech Group.</p>
      <ul className="list-disc pl-6 space-y-2 text-slate-300">
        <li>AI readiness self-assessment</li>
        <li>Cloud cost estimator</li>
        <li>Security checklist</li>
      </ul>
      <div className="mt-8">
        <a href="/contact/" className="inline-block rounded bg-purple-600 px-4 py-2 font-semibold">Get help</a>
      </div>
    </main>
  );
}
