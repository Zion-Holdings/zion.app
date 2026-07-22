'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function CommandGenerator() {
  const goalRef = useRef<HTMLInputElement>(null);
  const outRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const btn = document.getElementById('gen');
    const out = outRef.current;
    if (!btn || !out) return;
    btn.onclick = () => {
      const goal = (goalRef.current?.value || '').toLowerCase();
      const lines: string[] = [];
      if (/docker/.test(goal)) {
        lines.push('docker build -t app .');
        lines.push('docker compose up -d');
        lines.push('docker compose logs -f --tail=200');
      }
      if (/git/.test(goal)) {
        lines.push('git status -sb');
        lines.push('git switch -c feature/...');
        lines.push('git commit -m "..." && git push');
      }
      if (/k8s|kubernetes/.test(goal)) {
        lines.push('kubectl get pods -A');
        lines.push('kubectl rollout restart deployment/app -n prod');
        lines.push('kubectl logs -f deploy/app -n prod');
      }
      if (/npm|node/.test(goal)) {
        lines.push('npm install');
        lines.push('npm run build');
        lines.push('npm test -- --coverage');
      }
      if (!lines.length) {
        lines.push('No specific pattern matched.');
        lines.push('Try keywords: docker, git, kubernetes, npm, aws, gcp, terraform.');
      }
      out.textContent = lines.join('\n');
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Back to Free Tools</Link>
        <h1 className="text-3xl font-bold">Command Generator</h1>
        <p className="mt-2 text-slate-400">Describe your goal and get likely CLI commands.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Goal</label>
              <input ref={goalRef} className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="e.g., build and run docker compose" />
            </div>
            <button id="gen" className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors">Generate</button>
          </div>
          <div>
            <label className="block text-sm font-medium">Commands</label>
            <div ref={outRef} className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[220px] whitespace-pre-wrap">Commands appear here.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
