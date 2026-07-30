'use client';
import Link from 'next/link';
export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-white mb-3">AI Partnership Growth Playbook 2026</h1>
        <p className="text-slate-400 mb-6">A practical playbook for building, scaling, and managing AI partnerships that create joint revenue.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-2">Partner Selection</h2>
            <p className="text-slate-300 text-sm">Target complementary AI and IT services firms with shared buyer personas.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-2">Co-Selling Motions</h2>
            <p className="text-slate-300 text-sm">Bundle free tools, joint webinars, and shared proposal frameworks.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-2">Governance</h2>
            <p className="text-slate-300 text-sm">Clear revenue share, IP ownership, and escalation rules accelerate trust.</p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/contact/" className="text-purple-400 hover:text-purple-300">Start a partnership conversation →</Link>
        </div>
      </div>
    </div>
  );
}
