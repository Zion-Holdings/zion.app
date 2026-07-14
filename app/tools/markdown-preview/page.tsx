import Link from 'next/link';

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 py-20">
      <div className="container-page">
        <Link href="/tools/" className="text-purple-400 text-sm hover:underline">← All Tools</Link>
        <h1 className="text-3xl font-bold text-white mt-4 mb-4">Coming soon</h1>
        <p className="text-slate-300 mb-8">This tool is part of our free developer toolkit.</p>
        <Link href="/contact/" className="btn-primary">Request early access</Link>
      </div>
    </main>
  );
}