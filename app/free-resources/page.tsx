export const metadata = {
  title: 'Free AI & IT Resources | Zion Tech Group',
  description: 'Free implementation guides, checklists, and templates for AI and IT leaders.',
  alternates: { canonical: 'https://ziontechgroup.com/free-resources/' },
  openGraph: { title: 'Free Resources', url: 'https://ziontechgroup.com/free-resources/' }
};

export default function FreeResourcesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Free Resources</h1>
      <p className="mb-6 text-slate-300">Downloadable guides, checklists, and runbooks.</p>
      <ul className="list-disc pl-6 space-y-2 text-slate-300">
        <li>AI readiness checklist</li>
        <li>Cloud migration playbook</li>
        <li>Incident response runbook</li>
      </ul>
      <div className="mt-8">
        <a href="/contact/" className="inline-block rounded bg-purple-600 px-4 py-2 font-semibold">Talk to us</a>
      </div>
    </main>
  );
}
