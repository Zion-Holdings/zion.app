import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
export const metadata = {
  title: 'AI Partner and Reseller Program for LATAM Growth',
  description: 'A partner-first model for AI and IT services companies expanding across LATAM with co-sell and referral motion.',
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
          <span className="text-slate-300">AI Partner and Reseller Program for LATAM Growth</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Partner and Reseller Program for LATAM Growth</h1>
        <p className="text-slate-300 leading-relaxed mb-8">Structure a channel program for AI services with onboarding, enablement, co-selling, and margin models suited to LATAM.</p>
        <div className="glass-card prose prose-invert max-w-none">
          <p>Channel revenue grows faster when partners have clear AI bundles and deal support.</p><ul><li>Partner tiers, enablement, and pipeline rules</li><li>Co-sell motions and LATAM market entry</li><li>Visit <a href="https://ziontechgroup.com">ziontechgroup.com</a> for partnership details</li></ul><p>See <a href="/services/ai-consulting">AI consulting</a>, then <a href="/contact/">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/services/" className="btn-primary">Explore AI services</Link>
          <Link href="/contact/" className="btn-secondary">Contact us</Link>
        </div>
      </div>
    </main>
  );
}
