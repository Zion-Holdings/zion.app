
export const metadata = {
  title: 'Zion AI Free Tools | Zion Tech Group',
  description: 'Zion AI free tools include lightweight IT utilities, AI prompt packs, automation templates, and startup-friendly scripts.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <main className="relative z-10 flex-1">
        <section className="py-20">
          <div className="container-page">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Zion AI Free Tools</h1>
              <p className="text-slate-400 mb-8">Lightweight tools and templates designed for startups evaluating AI and IT automation.</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Prompt Pack</div><div className="text-xs text-slate-400">Curated starter prompts for sales and support.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Template Library</div><div className="text-xs text-slate-400">Proposals, emails, and workflow templates.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Scripts</div><div className="text-xs text-slate-400">Startup-ready deployment and monitoring snippets.</div></div>
              </div>
              <div className="mt-10"><a className="btn-primary" href="/contact/">Request More Free Tools →</a></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}