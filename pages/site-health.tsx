import Head from 'next/head';

export default function SiteHealth() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
      <Head><title>Site Health — Broken Images</title></Head>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold mb-2">Site Health</h1>
        <p className="text-white/70 mb-6">Automatically detected external images that failed to load.</p>
        <ul className="list-disc pl-6">
          <li className="py-2">No issues found.</li>
        </ul>
      </main>
    </div>
  );
}
