'use client';
import { useState } from 'react';

export default function HealthCheckScriptTool() {
  const [os, setOs] = useState('linux');
  const code =
    os === 'linux'
      ? '#!/bin/bash\nset -euo pipefail\necho "Health check placeholder"\n# Coming soon: Linux health check script'
      : os === 'macos'
      ? '#!/bin/bash\necho "Health check placeholder"\n# Coming soon: macOS health check script'
      : 'Write-Host "Health check placeholder"\n# Coming soon: Windows PowerShell health check script';

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6">
      <div className="mx-auto max-w-5xl">
        <a href="/tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Back to Tools</a>
        <h1 className="text-3xl font-bold mb-2">Health Check Script</h1>
        <p className="text-slate-400 mb-6">Generate a system health-check script for your environment.</p>
        <select value={os} onChange={e => setOs(e.target.value)} className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-sm text-slate-100">
          <option value="linux">Linux</option>
          <option value="macos">macOS</option>
          <option value="windows">Windows</option>
        </select>
        <pre className="mt-6 h-64 overflow-auto rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm font-mono whitespace-pre-wrap text-slate-200">{code}</pre>
      </div>
    </main>
  );
}
