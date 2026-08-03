export const metadata = {
  title: "Platform Engineering and AI Observability in 2026 | Zion Tech Group",
  description: "Platform engineering practices paired with AI observability for production-readiness.",

};

export default function Page() {
  return (
    <article className="container-page py-20">
      <h1 className="text-4xl font-bold mb-4 text-white">Platform Engineering and AI Observability in 2026</h1>
      <div className="text-sm text-slate-500 mb-8">Published: 2026-07-07</div>
      <div
        className="prose prose-invert max-w-none text-slate-300 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: `<p>Platform engineering practices paired with AI observability for production-readiness.</p><ul><li>Practical execution models</li><li>Local AI/IT delivery and support</li><li>Governance, cost control, and observability</li></ul><p><a href="/services">Explore AI services</a></p><p><a href="/contact">Contact us</a></p>` }}
      />
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900">Get started</Link>
              <Link href="/services" className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white">Services</Link>
            </div>
        </article>
  );
}
