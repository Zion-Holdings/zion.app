'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';


export default function ResumeScreener() {
  const jdRef = useRef(null);
  const resumeRef = useRef(null);
  const outRef = useRef(null);

  useEffect(() => {
    const btn = document.getElementById('screen');
    const out = outRef.current;
    if (!btn || !out) return;
    btn.onclick = () => {
      const jd = (jdRef.current?.value || '').toLowerCase();
      const resume = (resumeRef.current?.value || '').toLowerCase();
      const jdTokens = [...jd.matchAll(/[-a-z0-9+#.]{2,}/g)].map((m) => m[0]).filter((t) => !['the','and','for','with','that','this','have','from','your','will','required','preferred'].includes(t));
      const uniqueTokens = [...new Set(jdTokens)];
      if (!uniqueTokens.length || !resume) {
        out.textContent = 'Paste a job description and a resume to screen.';
        return;
      }
      const matched = uniqueTokens.filter(t => resume.includes(t));
      const score = uniqueTokens.length ? Math.round((matched.length / uniqueTokens.length) * 100) : 0;
      const strong = matched.slice(0, 8);
      const missing = uniqueTokens.filter(t => !resume.includes(t)).slice(0, 8);
      out.textContent = `Match score: ${score}%\n\nMatched:\n- ${strong.join('\n- ') || 'None'}\n\nMissing keywords:\n- ${missing.join('\n- ') || 'None'}\n\nTip:\n- Add missing keywords with concrete evidence from experience.`;
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Back to Free Tools</Link>
        <h1 className="text-3xl font-bold">Resume Screener</h1>
        <p className="mt-2 text-slate-400">Compare a resume against a job description and get a quick match score.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Job description</label>
              <textarea ref={jdRef} className="mt-2 w-full min-h-[180px] rounded-lg border border-slate-700 bg-slate-900 p-3 font-mono text-sm text-white focus:border-emerald-500 focus:outline-none" placeholder="Paste job description..." />
            </div>
            <div>
              <label className="block text-sm font-medium">Resume</label>
              <textarea ref={resumeRef} className="mt-2 w-full min-h-[180px] rounded-lg border border-slate-700 bg-slate-900 p-3 font-mono text-sm text-white focus:border-emerald-500 focus:outline-none" placeholder="Paste resume..." />
            </div>
            <button id="screen" className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors">Screen Resume</button>
          </div>
          <div>
            <label className="block text-sm font-medium">Results</label>
            <div ref={outRef} className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[320px] whitespace-pre-wrap">Results will appear here.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
