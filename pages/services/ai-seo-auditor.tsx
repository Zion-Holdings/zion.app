import Head from 'next/head';
import Link from 'next/link';

export default function Placeholder() {
  return (
    <main className="min-h-screen p-8">
      <Head>
        <title>Services • Ai-seo-auditor - Placeholder</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-2">Services • Ai-seo-auditor</h1>
        <p className="text-gray-600 mb-6">Auto-generated placeholder for missing route: <code>/services/ai-seo-auditor</code>.</p>
        <Link href="/"><a className="text-blue-600 hover:underline">Back to Home</a></Link>
      </div>
    </main>
  );
}
