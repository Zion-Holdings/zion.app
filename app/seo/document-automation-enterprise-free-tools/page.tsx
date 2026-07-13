
export const metadata = {
  title: 'Document Automation Enterprise Free Tools | Zion Tech Group',
  description: 'Enterprise document automation free tools from Zion Tech Group: OCR helpers, parsers, template validators, and compliance-ready workflows.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <main className="relative z-10 flex-1">
        <section className="py-20">
          <div className="container-page">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Document Automation Free Tools</h1>
              <p className="text-slate-400 mb-8">Free utilities for parsing, extracting, validating, and automating enterprise documents.</p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">OCR Helper</div><div className="text-xs text-slate-400">Diagnostics and preprocessing tips.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Template Validator</div><div className="text-xs text-slate-400">Field presence and format checks.</div></div>
                <div className="glass-card"><div className="text-sm font-semibold text-white mb-2">Compliance Helper</div><div className="text-xs text-slate-400">Retention and redaction reminders.</div></div>
              </div>
              <div className="mt-10"><a className="btn-primary" href="/contact/">Request Enterprise Tooling →</a></div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}