
export const metadata = {
  title: 'AI Contact Center Free Tools | Zion Tech Group',
  description: 'Zion Tech Group contact-center free tools: transcript cleanup, response suggestions, sentiment checks, and shift readiness helpers.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <main className="relative z-10 flex-1">
        <section className="py-20">
          <div className="container-page">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Contact Center Free Tools</h1>
              <p className="text-slate-400 mb-8">Lightweight tools to improve response time, quality, and advisor readiness without new software.</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Transcript Cleanup</div><div className="text-xs text-slate-400">De-fillering, redaction, and summarization.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Sentiment Check</div><div className="text-xs text-slate-400">Fast tone and escalation signals.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Readiness Check</div><div className="text-xs text-slate-400">Shift handoff and coach flags.</div></div>
              </div>
              <div className="mt-10"><a className="btn-primary" href="/contact/">Request the Toolkit →</a></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
