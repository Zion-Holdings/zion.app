import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Zion Tech Group | AI & IT Solutions | Zion Tech Group",
  description: "AI applications, secure engineering, and scalable delivery for modern teams. Zion Tech Group.",
  openGraph: {
    title: "Zion Tech Group | AI & IT Solutions | Zion Tech Group",
    description: "AI applications, secure engineering, and scalable delivery for modern teams. Zion Tech Group.",
    url: "https://ziontechgroup.com/ai-experiences/",
    type: 'website',
  },
  alternates: { canonical: "/ai-experiences/" },
};

export default function AiExperiencesPage() {
  return (
    <StandardPage
      title="Zion Tech Group | AI & IT Solutions"
      subtitle="AI applications, secure engineering, and scalable delivery for modern teams. Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Zion Tech Group | AI & IT Solutions" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
            <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">In-Browser AI Experiences Experience AI Like Never Before Interact with cutting-edge AI directly in your browser. Mic, vision, conversation, and prediction — all powered by Zion's advanced AI engine.</p>
      <div className="grid gap-4 sm:grid-cols-2 mb-8 max-w-5xl mx-auto Recovered-archive-sections">
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Experience AI Like Never Before</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Featured AI Experiences</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Voice AI Assistant</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Smart Chat Companion</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Computer Vision AI</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-5"><h2 className="text-white font-semibold mb-2">Predictive Analytics</h2><p className="text-slate-400 text-sm">Archived section recovered from the live site snapshot.</p></div>
      </div>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Featured AI Experiences NEW Voice AI Assistant Speak naturally with our AI. Get instant responses, control features, and interact hands-free.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Smart Chat Companion AI-powered conversational assistant that learns from your interactions.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">Computer Vision AI Advanced image recognition and visual analysis for your applications.</p>
      <p className="text-slate-400 leading-relaxed mb-4 max-w-5xl mx-auto">NEW Predictive Analytics Forecast trends and make data-driven decisions with AI precision.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260421074536) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
