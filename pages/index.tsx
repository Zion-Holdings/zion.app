import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Zion — Autonomous Cloud AI</title>
        <meta name="description" content="Zion Brain: always-on, self-optimizing cloud automations" />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-10">
          <h1 className="text-3xl font-semibold">Zion Brain — Autonomous Cloud AI</h1>
          <p className="text-gray-600 mt-2 max-w-2xl">Always-on, self-monitoring automations that optimize prompts, tune chains, detect stuck users, and publish daily reports — all running in the cloud with zero human intervention.</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link href="/admin/zion-brain"><a className="px-3 py-2 bg-black text-white rounded">Open Admin Dashboard</a></Link>
            <Link href="/docs/zion-brain/status"><a className="px-3 py-2 border rounded">Daily Status Report</a></Link>
            <a href="/docs/zion-brain/prompt-benchmark" className="px-3 py-2 border rounded">Prompt Benchmark</a>
            <a href="/docs/zion-brain/governance-digest" className="px-3 py-2 border rounded">Governance Digest</a>
            <a href="https://github.com/Zion-Holdings/zion.app/actions" className="px-3 py-2 border rounded">View Automation Runs</a>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded">
            <h2 className="font-medium">Prompt Optimization</h2>
            <p className="text-sm text-gray-600 mt-1">Continuously refines prompts for speed and specificity. Uses OpenAI if available; otherwise a fast heuristic. Results are committed back to the repo.</p>
            <Link href="/admin/zion-brain"><a className="text-blue-600 text-sm mt-2 inline-block">Manage »</a></Link>
          </div>
          <div className="p-4 border rounded">
            <h2 className="font-medium">Chain Tuning</h2>
            <p className="text-sm text-gray-600 mt-1">Balances routing load by adjusting chain weights from usage analytics. Syncs `data/zion-brain/chains.json` automatically.</p>
            <a href="https://github.com/Zion-Holdings/zion.app/tree/main/data/zion-brain" className="text-blue-600 text-sm mt-2 inline-block">Configs »</a>
          </div>
          <div className="p-4 border rounded">
            <h2 className="font-medium">Stuck Users & Issues</h2>
            <p className="text-sm text-gray-600 mt-1">Scans for laggy or stuck sessions and opens GitHub issues automatically with context and labels.</p>
            <a href="https://github.com/Zion-Holdings/zion.app/issues" className="text-blue-600 text-sm mt-2 inline-block">Open Issues »</a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;