'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HTTPStatusReference() {
  const searchRef = useRef<HTMLInputElement>(null);
  const outRef = useRef<HTMLDivElement>(null);

  const codes = [
    { code: '200', name: 'OK', group: 'Success', cause: 'Standard response for successful HTTP requests.' },
    { code: '201', name: 'Created', group: 'Success', cause: 'Request fulfilled and resulted in a new resource being created.' },
    { code: '204', name: 'No Content', group: 'Success', cause: 'Server successfully processed the request but is not returning any content.' },
    { code: '301', name: 'Moved Permanently', group: 'Redirect', cause: 'Resource has been moved permanently to a new URL.' },
    { code: '302', name: 'Found', group: 'Redirect', cause: 'Temporary redirect to a different URL.' },
    { code: '304', name: 'Not Modified', group: 'Redirect', cause: 'Cached version is still valid; no body returned.' },
    { code: '400', name: 'Bad Request', group: 'Client error', cause: 'Malformed syntax or invalid request framing.' },
    { code: '401', name: 'Unauthorized', group: 'Client error', cause: 'Authentication is required and has not been provided or is invalid.' },
    { code: '403', name: 'Forbidden', group: 'Client error', cause: 'Authenticated but not authorized to access the resource.' },
    { code: '404', name: 'Not Found', group: 'Client error', cause: 'Server cannot find the requested resource.' },
    { code: '409', name: 'Conflict', group: 'Client error', cause: 'Request conflicts with current resource state.' },
    { code: '422', name: 'Unprocessable Entity', group: 'Client error', cause: 'Semantic errors in request body or params.' },
    { code: '429', name: 'Too Many Requests', group: 'Client error', cause: 'Rate limit exceeded.' },
    { code: '500', name: 'Internal Server Error', group: 'Server error', cause: 'Unexpected server-side failure.' },
    { code: '502', name: 'Bad Gateway', group: 'Server error', cause: 'Upstream or gateway response invalid.' },
    { code: '503', name: 'Service Unavailable', group: 'Server error', cause: 'Server temporarily overloaded or under maintenance.' },
    { code: '504', name: 'Gateway Timeout', group: 'Server error', cause: 'Upstream did not respond in time.' },
  ];

  useEffect(() => {
    const btn = document.getElementById('search');
    const out = outRef.current;
    if (!btn || !out) return;
    btn.onclick = () => {
      const q = (searchRef.current?.value || '').trim().toLowerCase();
      const filtered = q ? codes.filter(c => c.code.includes(q) || c.name.toLowerCase().includes(q) || c.group.toLowerCase().includes(q)) : codes;
      out.textContent = filtered.map(c => `${c.code} ${c.name} [${c.group}]\nCause: ${c.cause}`).join('\n\n') || 'No codes matched.';
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Back to Free Tools</Link>
        <h1 className="text-3xl font-bold">HTTP Status Code Reference</h1>
        <p className="mt-2 text-slate-400">Quick lookup for HTTP status codes, names, and common causes.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div>
            <label className="block text-sm font-medium">Search</label>
            <input ref={searchRef} className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="e.g., 404, server error" />
            <button id="search" className="mt-4 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors">Search</button>
          </div>
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium">Results</label>
            <div ref={outRef} className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[320px] whitespace-pre-wrap">Click search to view codes.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
