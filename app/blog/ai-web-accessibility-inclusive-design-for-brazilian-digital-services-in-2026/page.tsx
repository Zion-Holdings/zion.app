import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'AI Web Accessibility and Inclusive Design for Brazilian Digital Services in 2026',
  description: 'Use AI-assisted accessibility evaluation and inclusive design to improve reach, compliance, and usability.',
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
          <span className="text-slate-300">AI Web Accessibility and Inclusive Design</span>
        </nav>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Web Accessibility and Inclusive Design for Brazilian Digital Services in 2026</h1>
        <p className="text-slate-300 leading-relaxed mb-8">Practical accessibility automation, audit trails, and UX refinements for public and private digital services.</p>
        <div className="glass-card prose prose-invert max-w-none">
          <p>Accessibility automation that reduces audit friction and improves real usability.</p><ul><li>WCAG-aware evaluation, pass/fail reporting, and tracking</li><li>Language, motion, and routing accessibility improvements</li><li>Free readiness tools at <a href="https://ziontechgroup.com">ziontechgroup.com</a></li></ul><p>Explore <a href="/services">AI services</a>, then <a href="/contact">contact us</a> or <a href="https://calendly.com/kleber-ziontechgroup">schedule a meeting</a>.</p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/services/" className="btn-primary">Explore AI services</Link>
          <Link href="/contact/" className="btn-secondary">Contact us</Link>
        </div>
      </div>
    </main>
  );
}
