import Link from 'next/link';

export const metadata = {
  title: 'AI SOC + AIOps + Platform Engineering for LATAM IT Teams in 2026',
  description: 'Practical AI SOC, AIOps, and platform engineering models for LATAM IT teams reducing incidents and operating with smaller staff.',
  openGraph: {
    title: metadata.title || pageTitle,
    description: metadata.description,
    url: metadata.canonical || canonicalUrl,
    type: 'website',
  },
  alternates: {
    canonical: 'https://ziontechgroup.com/blog/ai-soc-aiops-platform-engineering-for-latam-it-teams-in-2026/',
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <nav className="mb-6 text-sm text-slate-400">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog/" className="hover:text-purple-400 transition">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">AI SOC + AIOps + Platform Engineering</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI SOC + AIOps + Platform Engineering for LATAM IT Teams in 2026</h1>
        <p className="text-slate-300 leading-relaxed mb-8">A practical systems view for LATAM IT teams who want fewer incidents, faster recovery, and better platform governance.</p>
        <div className="glass-card prose prose-invert max-w-none">
          <p>How LATAM IT teams can adopt AI SOC and AIOps together to reduce incidents, improve observability, and operate with smaller staff.</p><ul><li>Practical SOC/AIOps execution models</li><li>Runbook automation and alert tuning</li><li>Free tools and partnership options at <a href="https://ziontechgroup.com">ziontechgroup.com</a></li></ul><p>Explore <a href="/services">AI services</a>, then <a href="/contact">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/services/" className="btn-primary">Explore AI services</Link>
          <Link href="/contact/" className="btn-secondary">Contact us</Link>
        </div>
      </div>
    </main>
  );
}
