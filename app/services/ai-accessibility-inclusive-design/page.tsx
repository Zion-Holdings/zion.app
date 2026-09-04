import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'AI Accessibility and Inclusive Digital Services | Zion Tech Group',
  description: 'AI-assisted accessibility automation, WCAG evaluation, and inclusive UX for digital services.',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <nav className="mb-6 text-sm text-slate-400">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/services/" className="hover:text-purple-400 transition">Services</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">AI Accessibility and Inclusive Digital Services</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Accessibility and Inclusive Digital Services</h1>
        <p className="text-slate-300 leading-relaxed mb-8">Improve reach, compliance, and usability with AI-assisted accessibility programs.</p>
        <div className="glass-card prose prose-invert max-w-none">
          <p>Accessibility measurement and improvement for fast-moving teams.</p><ul><li>WCAG-aware evaluation and tracking</li><li>Motion, language, and routing accessibility improvements</li><li>Proof-of-concept available at <a href="https://ziontechgroup.com">ziontechgroup.com</a></li></ul><p>See <a href="/blog/ai-web-accessibility-inclusive-design-for-brazilian-digital-services-in-2026">accessibility guide</a>, then <a href="/contact">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/contact/" className="btn-primary">Contact us</Link>
          <Link href="https://calendly.com/kleber-ziontechgroup" className="btn-secondary">Schedule a meeting</Link>
        </div>
      </div>
    </main>
  );
}
