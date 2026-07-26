import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI & IT Tools | Zion Tech Group",
  description: "AI-assisted IT tools, automation utilities, and Micro-SaaS platforms from Zion Tech Group. Boost productivity and cut costs.",
  alternates: { canonical: "/free-ai-itools/" },
};

export default function FreeAiIToolsPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800/60">
        <div className="container-page py-6 flex items-center justify-between">
          <a className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" href="/">Zion Tech Group</a>
          <nav className="flex items-center gap-4">
            <a className="text-sm text-slate-300 hover:text-white" href="/services/">Services</a>
            <a className="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white" href="/contact/">Book Free Consultation</a>
          </nav>
        </div>
      </header>

      <main className="container-page py-16">
        <section className="py-10 md:py-16">
          <h1 className="text-4xl font-bold text-white mb-3">Free AI & IT Tools</h1>
          <p className="text-slate-300 text-lg max-w-2xl mb-8">
            Practical, AI-led utilities to help you ship faster, automate workflows, and strengthen operations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "AI Readiness Assessment", href: "/ai-readiness-assessment/", desc: "Find the highest-ROI AI opportunities in your business." },
              { title: "AI Automation Guide", href: "/ai-automation-guide/", desc: "Implementation playbook for real automations." },
              { title: "Managed IT Support", href: "/managed-it/", desc: "On-demand IT operations, monitoring, and incident response." },
              { title: "Enterprise AI Consulting", href: "/enterprise-ai-consulting/", desc: "Governed adoption for larger organizations." },
              { title: "AI Automation Services", href: "/ai-powered-automation/", desc: "End-to-end automation design and delivery." },
              { title: "Hire AI Engineers", href: "/hire-ai-engineers/", desc: "Embedded AI engineering talent for your roadmap." },
            ].map((t) => (
              <a key={t.href} href={t.href} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-purple-500/50 transition-colors">
                <h3 className="text-white font-semibold mb-2">{t.title}</h3>
                <p className="text-slate-300 text-sm">{t.desc}</p>
                <span className="inline-flex mt-4 text-sm text-purple-300">Open tool →</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/60">
        <div className="container-page py-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">Zion Tech Group</p>
          <div className="flex gap-6 text-sm text-slate-400">
            <a className="hover:text-white" href="/contact/">Contact</a>
            <a className="hover:text-white" href="/privacy/">Privacy</a>
            <a className="hover:text-white" href="/terms/">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
