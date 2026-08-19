import type {{ Metadata }} from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {{
  title: 'Tools | Zion Tech Group',
  description: 'Free AI/IT tools for service recommendations, comparisons, SSL checks, and more.',
  openGraph: {{
    title: 'Tools | Zion Tech Group',
    description: 'Free AI/IT tools for service recommendations, comparisons, SSL checks.',
    url: 'https://ziontechgroup.com/tools/',
    type: 'website',
  }},
  alternates: {{ canonical: '/tools/' }},
}};

export default function ToolsPage() {{
  return (
    <StandardPage
      title="Tools"
      subtitle="Free utilities built by Zion Tech Group to accelerate your AI and IT initiatives."
      breadcrumbItems={[
        {{ label: 'Home', href: '/' }},
        {{ label: 'Tools' }},
      ]}
      actions={[
        {{ label: 'Browse services', href: '/services/', style: 'secondary' }},
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        <Link href="/tools/agent-prompt-builder/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Agent Prompt Builder</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Agent Prompt Builder.</p>
        </Link>
        <Link href="/tools/ai-roi-calculator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Ai Roi Calculator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Ai Roi Calculator.</p>
        </Link>
        <Link href="/tools/api-health-check/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Api Health Check</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Api Health Check.</p>
        </Link>
        <Link href="/tools/cloud-cost-calculator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Cloud Cost Calculator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Cloud Cost Calculator.</p>
        </Link>
        <Link href="/tools/cloud-cost-optimizer/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Cloud Cost Optimizer</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Cloud Cost Optimizer.</p>
        </Link>
        <Link href="/tools/cron-agent-calculator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Cron Agent Calculator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Cron Agent Calculator.</p>
        </Link>
        <Link href="/tools/json-schema-validator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Json Schema Validator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Json Schema Validator.</p>
        </Link>
        <Link href="/tools/llm-payload-estimator/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Llm Payload Estimator</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Llm Payload Estimator.</p>
        </Link>
        <Link href="/tools/mcp-tester/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Mcp Tester</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Mcp Tester.</p>
        </Link>
        <Link href="/tools/security-headers-analyzer/" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Security Headers Analyzer</h3>
          <p className="mt-2 text-sm text-slate-400">Interactive tool: Security Headers Analyzer.</p>
        </Link>
      </div>
    </StandardPage>
  );
}}
