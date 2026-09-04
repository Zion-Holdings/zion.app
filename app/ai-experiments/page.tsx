import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Experiments | Zion Tech Group",
  description: "Try interactive AI-powered tools in your browser, including an automation ROI estimator and a solution finder that maps you to the right Zion AI products.",
  openGraph: {
    title: "AI Experiments | Zion Tech Group",
    description: "Try interactive AI-powered tools in your browser, including an automation ROI estimator and a solution finder that maps you to the right Zion AI products.",
    url: "https://ziontechgroup.com/ai-experiments/",
    type: 'website',
  },
  alternates: { canonical: "/ai-experiments/" },
};

export default function AiExperimentsPage() {
  return (
    <StandardPage
      title="AI Experiments"
      subtitle="Try interactive AI-powered tools in your browser, including an automation ROI estimator and a solution finder that maps you to the right Zion AI products."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "AI Experiments" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
            <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Explore a few of the same intelligent experiences we use to design and validate production AI rollouts — from automation ROI modeling to solution discovery.</p>
      <div className="grid gap-4 sm:grid-cols-2 mb-8 max-w-5xl mx-auto Recovered-archive-sections">
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">AI experiments you can try in your browser</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Automation ROI sandbox</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">AI ROI Snapshot</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Find the best-fit app in seconds</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
      </div>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Use the sliders to model how AI automation can impact your team's hours, savings, and payback period across support, sales, or engineering workflows.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Adjust the assumptions to model potential savings from your first automation rollout.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Potential annual savings $139,232 with an estimated 674% year-one ROI.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Search by need, then narrow by category to jump directly to relevant product pages.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260418010816) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
