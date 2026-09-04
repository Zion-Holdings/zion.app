import Link from 'next/link';

export const metadata = {
  title: 'AI Content Generator — Free AI Tool | Zion Tech Group',
  description: 'Generate structured outlines for blog posts, social posts, and product descriptions.',
};

export default function AIContentGenerator() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/free-tools" className="mb-6 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Back to Free Tools</Link>
        <h1 className="text-3xl font-bold">AI Content Generator</h1>
        <p className="mt-2 text-slate-400">Enter a topic and audience to generate a reusable content outline.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Topic</label>
              <input id="topic" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="e.g., AI support automation for MSPs" />
            </div>
            <div>
              <label className="block text-sm font-medium">Audience</label>
              <input id="audience" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="e.g., IT managers, MSP owners" />
            </div>
            <div>
              <label className="block text-sm font-medium">Format</label>
              <select id="format" className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:border-emerald-500 focus:outline-none">
                <option>Blog post</option>
                <option>LinkedIn post</option>
                <option>Product description</option>
                <option>Newsletter</option>
              </select>
            </div>
            <button id="generate" className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors">Generate</button>
          </div>
          <div>
            <label className="block text-sm font-medium">Outline</label>
            <div id="output" className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[320px] whitespace-pre-wrap">Output appears here.</div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{__html: `(function(){document.getElementById('generate').onclick=function(){const t=document.getElementById('topic').value||'Topic';const a=document.getElementById('audience').value||'Audience';const f=document.getElementById('format').value||'Blog post';let o='';if(f==='Blog post'){o='# '+t+'\\nIntro\\n- Why it matters to '+a+'\\n- Key pain point\\n\\nMain sections\\n- Problem\\n- Approach\\n- Evidence\\n- Implementation steps\\n\\nConclusion\\n- Next steps\\n- CTA: https://ziontechgroup.com';}else if(f==='LinkedIn post'){o=t+'\\n\\nIf you serve '+a+', focus on:\\n1) Outcome\\n2) Proof\\n3) Next step\\n\\nExample:\\n- Reduced handle time by 28%\\n- Kept compliance intact\\n- Book a short intro: https://calendly.com/kleber-ziontechgroup';}else{o='Product: '+t+'\\nAudience: '+a+'\\n\\nValue props\\n- Outcome 1\\n- Outcome 2\\n- Outcome 3\\n\\nDifferentiators\\n- Why now\\n- Proof point\\n\\nCTA\\n- Try it: https://ziontechgroup.com';}document.getElementById('output').textContent=o;}})();`}} />
    </div>
  );
}
