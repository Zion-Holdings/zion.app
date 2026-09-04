'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function TechStackRecommender() {
  useEffect(() => {
    const btn = document.getElementById('recommend');
    const out = document.getElementById('result');
    if (!btn || !out) return;
    btn.onclick = () => {
      const type = (document.getElementById('type') as HTMLInputElement).value || 'SaaS Web App';
      const priority = (document.getElementById('priority') as HTMLInputElement).value?.toLowerCase() || 'speed to market';
      const stacks = {
        'SaaS Web App': { default: 'Next.js + Supabase + Stripe', perf: 'Remix + Neon + Stripe', compliance: 'Next.js + Keycloak + PostgreSQL' },
        'Mobile App': { default: 'Flutter + Firebase', perf: 'React Native + Supabase', compliance: 'Flutter + App Check + Encrypted storage' },
        'API / Microservices': { default: 'Go + gRPC + NATS', perf: 'Rust + Axum + Kafka', compliance: 'Java Spring + OpenTelemetry + vault' },
        'Data Platform': { default: 'Python + Airflow + DuckDB', perf: 'Spark + Iceberg + Trino', compliance: 'dbt + Great Expectations + RBAC' },
        'Enterprise Portal': { default: 'Next.js + Auth0 + PostgreSQL', perf: 'Remix + LDAP + Redis cache', compliance: 'Next.js + OAuth2 + PostgreSQL' },
        'CLI / Automation': { default: 'Python + Typer + SQLite', perf: 'Rust + Clap + SQLite', compliance: 'Go + Cobra + Audit logging' },
      };
      const rec = stacks[type] || { default: 'Express + Postgres + Redis' };
      const pick = priority === 'performance' ? rec.perf || rec.default : priority === 'compliance' ? rec.compliance || rec.default : rec.default;
      const components = pick.split(' + ').filter(Boolean);
      const extras = ['Observability: OpenTelemetry + Grafana', 'CI/CD: GitHub Actions + preview deploys', 'Security: secret scanning + least privilege'];
      out.textContent = `${priority.charAt(0).toUpperCase()}${priority.slice(1)} priority - ${pick}\n\nComponents\n- ${components.join('\n- ')}\n\nExtras\n- ${extras.join('\n- ')}`;
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Back to Free Tools</Link>
        <h1 className="text-3xl font-bold">Tech Stack Recommender</h1>
        <p className="mt-2 text-slate-400">Select your project profile to get a curated modern stack recommendation.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div>
            <label className="block text-sm font-medium">Project type</label>
            <select id="type" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none">
              <option>SaaS Web App</option>
              <option>Mobile App</option>
              <option>API / Microservices</option>
              <option>Data Platform</option>
              <option>Enterprise Portal</option>
              <option>CLI / Automation</option>
            </select>
            <label className="mt-4 block text-sm font-medium">Team size</label>
            <select id="team" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none">
              <option>Solo / Small</option>
              <option>Mid</option>
              <option>Large</option>
            </select>
            <label className="mt-4 block text-sm font-medium">Priority</label>
            <select id="priority" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none">
              <option>Speed to market</option>
              <option>Maintainability</option>
              <option>Performance</option>
              <option>Compliance</option>
            </select>
            <button id="recommend" className="mt-4 w-full rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors">Recommend</button>
          </div>
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium">Recommendation</label>
            <div id="result" className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[260px] whitespace-pre-wrap">
              Pick options and click recommend.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
