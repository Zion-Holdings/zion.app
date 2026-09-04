
'use client';
import Link from 'next/link';
export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-white mb-3">Occupational Health & Safety Intelligence</h1>
        <p className="text-slate-400 mb-6">AI-assisted safety monitoring, incident reduction, and compliance automation for modern workplaces.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-2">Risk Detection</h2>
            <p className="text-slate-300 text-sm">Computer vision and sensor analytics to identify unsafe conditions in real time.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-2">Compliance Automation</h2>
            <p className="text-slate-300 text-sm">Auto-generate safety reports, checklists, and audit evidence.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-2">Training Readiness</h2>
            <p className="text-slate-300 text-sm">Mobile-friendly microlearning with completion tracking and certification.</p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/contact/" className="text-purple-400 hover:text-purple-300">Request a safety tech assessment →</Link>
        </div>
      </div>
    </div>
  );
}
