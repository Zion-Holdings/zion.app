
export const metadata = {
  title: 'AI Free Services and Tools | Zion Tech Group',
  description: 'Explore Zion Tech Group free services and tools: AI automation helpers, network utilities, converters, validators, and workflow accelerators for startups and teams.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <main className="relative z-10 flex-1">
        <section className="py-20">
          <div className="container-page">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Free AI Services and Tools</h1>
              <p className="text-slate-400 mb-8">Use these free services and tools to validate ideas, speed up workflows, and evaluate AI capabilities before scaling.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <a className="glass-card group" href="/tools/ai-service-router/"><div className="font-semibold text-white">AI Service Router</div><div className="text-xs text-slate-400">Free recommendation engine</div></a>
                <a className="glass-card group" href="/tools/roi-calculator/"><div className="font-semibold text-white">ROI Calculator</div><div className="text-xs text-slate-400">Estimate automation returns</div></a>
                <a className="glass-card group" href="/tools/json-formatter/"><div className="font-semibold text-white">JSON Formatter</div><div className="text-xs text-slate-400">Validate and clean payloads</div></a>
                <a className="glass-card group" href="/tools/base64/"><div className="font-semibold text-white">Base64 Utilities</div><div className="text-xs text-slate-400">Encode, decode, and inspect</div></a>
                <a className="glass-card group" href="/tools/service-recommender/"><div className="font-semibold text-white">Service Recommender</div><div className="text-xs text-slate-400">Quick matching and ranking</div></a>
                <a className="glass-card group" href="/tools/health-check/"><div className="font-semibold text-white">Health Check</div><div className="text-xs text-slate-400">Readiness and basic diagnostics</div></a>
              </div>
              <div className="mt-10"><a className="btn-primary" href="/contact/">Request Advanced Integration →</a></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}