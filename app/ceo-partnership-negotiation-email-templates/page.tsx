
'use client';
import Link from 'next/link';
export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-white mb-3">CEO Partnership Negotiation Templates</h1>
        <p className="text-slate-400 mb-6">Use these email templates to start and advance partnership conversations with other companies.</p>
        <div className="space-y-4">
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-2">Intro Outreach</h2>
            <p className="text-slate-300 text-sm leading-relaxed">Hi [Name], I’m Kleber from Zion Tech Group. We help IT and AI services companies increase revenue through co-selling and joint solution building. If you’re open to exploring a mutually beneficial partnership, I’d like to share a few ideas and hear your goals. Are you free for a short chat this week? https://calendly.com/kleber-ziontechgroup</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-2">Follow-Up with Ideas</h2>
            <p className="text-slate-300 text-sm leading-relaxed">Thanks for connecting. Based on our conversation, I see three quick wins: bundled AI support automation, a joint free-tools landing page, and a shared LATAM expansion playbook. Want me to send a 1-page outline?</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-2">Advancing the Deal</h2>
            <p className="text-slate-300 text-sm leading-relaxed">To move quickly, I suggest a 30-minute working session with our delivery leads. We can map integration points, revenue share, and launch timeline. I’ll send an invite if that works.</p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/contact/" className="text-purple-400 hover:text-purple-300">Contact Zion Tech Group →</Link>
        </div>
      </div>
    </div>
  );
}
