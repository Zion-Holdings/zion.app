import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="max-w-6xl mx-auto px-6 py-5 flex items-center gap-4">
        <div className="font-semibold text-lg">Zion Hire AI</div>
        <nav className="ml-auto flex items-center gap-4 text-sm text-gray-600">
          <Link href="/pricing">Pricing</Link>
          <a href="#embed">Embed</a>
        </nav>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-4">White‑label AI Recruiting Suite</h1>
          <p className="text-gray-600 mb-6">Brandable dashboard, AI tools, embeddable applicant assistant, and reporting. Co‑brand as YourCompany.ai powered by Zion.</p>
          <div className="flex gap-3">
            <Link className="bg-gray-900 text-white rounded px-4 py-2 text-sm" href="/dashboard">Open Dashboard</Link>
            <Link className="border border-gray-300 rounded px-4 py-2 text-sm" href="/pricing">View Pricing</Link>
          </div>
        </div>
        <div className="bg-white border rounded p-4">
          <div className="text-sm font-medium mb-2">Embeddable Widget</div>
          <pre className="text-xs bg-gray-50 border rounded p-3 overflow-auto" id="embed">{`<script src="/embed/zion.js" data-tenant-id="TENANT_ID" data-brand="YourCompany.ai" async></script>`}</pre>
          <div className="text-xs text-gray-600 mt-2">Adds a "Powered by Zion AI" chat bubble to your careers site.</div>
        </div>
      </main>
    </div>
  );
}