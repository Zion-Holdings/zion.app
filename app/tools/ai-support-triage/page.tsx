'use client';

import Link from 'next/link';

export default function AISupportTriage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">
          ← Back to Free Tools
        </Link>
        <h1 className="text-3xl font-bold">AI Support Triage</h1>
        <p className="mt-2 text-slate-400">Paste an incident or support ticket. Get severity classification, likely root cause, and remediation steps.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Incident / Ticket</label>
            <textarea id="ticket" className="mt-2 w-full min-h-[260px] rounded-lg border border-slate-700 bg-slate-900 p-4 font-mono text-sm text-white placeholder-slate-600 focus:border-emerald-500 focus:outline-none" placeholder="Example: Users report 504 errors on checkout after deploy; latency spiked to 12s; DB CPU at 98%." />
            <button id="triage" className="mt-4 w-full rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors">Run Triage</button>
          </div>
          <div>
            <label className="block text-sm font-medium">Analysis</label>
            <div id="result" className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[260px] whitespace-pre-wrap">Paste a ticket and run triage...</div>
          </div>
        </div>
      </div>

      {/*
        regex literals intentionally keep escaped shorthand; eslint-disable scoped
      */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
        (function(){
          const b=document.getElementById('triage'),r=document.getElementById('result');
          if(!b||!r)return;
          b.onclick=function(){
            const t=document.getElementById('ticket').value||'';
            const l=t.toLowerCase();
            let sev='Medium';
            if(/outage|down|data\\s*loss|security|breach|504|500|502|outage/.test(l))sev='Critical';
            else if(/degraded|slow|timeout|latency|error\\s*rate|timeout/.test(l))sev='High';
            else if(/question|how\\s*to|guidance|best\\s*practice|question/.test(l))sev='Low';
            const causes=[];
            if(/php|laravel|codeigniter/.test(l))causes.push('App/runtime error');
            if(/database|sql|postgres|mysql|mongo/.test(l))causes.push('Database load or connection issue');
            if(/504|502|500|timeout|latency/.test(l))causes.push('Upstream timeout or overload');
            if(/dns|cname|ssl|cert|tls/.test(l))causes.push('DNS/TLS/SSL issue');
            if(!causes.length)causes.push('General infrastructure issue');
            const fixes=[];
            if(/database|sql|postgres|mysql|mongo/.test(l))fixes.push('Check connection pool, slow queries, replication lag, disk IO.');
            if(/504|502|500|timeout|latency/.test(l))fixes.push('Check upstream health, retries, circuit breaker, timeout values.');
            if(/php|laravel|codeigniter/.test(l))fixes.push('Check app logs, recent deploy, queue jobs, cache invalidation.');
            if(/dns|cname|ssl|cert|tls/.test(l))fixes.push('Verify DNS propagation, cert expiry, chain completeness.');
            if(/nginx|apache|caddy/.test(l))fixes.push('Check web server error logs, rate limits, upstream blocks.');
            fixes.push('Create incident timeline, stabilize first, RCA after mitigation.');
            r.textContent='Severity: '+sev+'\\nLikely causes: '+(causes.join('; ')||'General infra issue')+'\\nRemediation: '+(fixes.join(' ')||'Collect more logs and timeline');
          };
        })();`,
        }}
      />
    </div>
  );
}
