import Head from 'next/head';
import Link from 'next/link';
import { BookOpen, Code, ExternalLink } from 'lucide-react';

export default function APIDocumentationPage() {
  return (
    <>
      <Head>
        <title>API Documentation | Zion Tech Group</title>
        <meta name="description" content="Beautiful, accurate API docs with live playgrounds and SDK snippets." />
        <link rel="canonical" href="https://ziontechgroup.com/api-documentation" />
      </Head>
      <section className="pt-28 pb-16 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4 mr-2" /> Developer Resources
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">API Documentation</h1>
            <p className="text-gray-400 mt-4">Generate and host comprehensive API docs from your code and OpenAPI. Zero drift, CI-friendly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-gray-800 bg-black/40">
              <h2 className="text-xl font-semibold text-white mb-2">API Docs Generator</h2>
              <p className="text-gray-300">Create live docs with SDK snippets, changelogs, and a playground. Ideal for platform teams and public APIs.</p>
              <div className="mt-4">
                <Link href="/api-documentation-generator" className="inline-flex items-center text-purple-300 hover:text-purple-200">
                  Open generator <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-gray-800 bg-black/40">
              <h2 className="text-xl font-semibold text-white mb-2">Developer Docs</h2>
              <p className="text-gray-300">Explore getting started guides, authentication, SDKs, webhooks, and error handling.</p>
              <div className="mt-4 flex gap-4">
                <Link href="/docs" className="inline-flex items-center text-purple-300 hover:text-purple-200">
                  Read docs <Code className="w-4 h-4 ml-2" />
                </Link>
                <Link href="/market-pricing" className="inline-flex items-center text-purple-300 hover:text-purple-200">
                  Pricing refs <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}