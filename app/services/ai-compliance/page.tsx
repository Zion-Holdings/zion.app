export const metadata = {
  title: 'AI Compliance Services | Zion Tech Group',
  description: 'AI governance, data privacy, and compliance implementation for regulated environments.',
  alternates: { canonical: 'https://ziontechgroup.com/services/ai-compliance/' },
  openGraph: { title: 'AI Compliance Services', url: 'https://ziontechgroup.com/services/ai-compliance/' }
};

export default function AiCompliancePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">AI Compliance</h1>
      <p className="mb-6 text-slate-300">Practical AI compliance, data governance, and audit-ready controls.</p>
      <ul className="list-disc pl-6 space-y-2 text-slate-300">
        <li>Data classification and retention</li>
        <li>Model risk and bias reviews</li>
        <li>Audit and evidence packages</li>
      </ul>
      <div className="mt-8">
        <a href="/contact/" className="inline-block rounded bg-purple-600 px-4 py-2 font-semibold">Book compliance review</a>
      </div>
    </main>
  );
}
