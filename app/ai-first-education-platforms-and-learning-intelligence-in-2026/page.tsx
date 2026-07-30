
'use client';
import Link from 'next/link';
export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-white mb-3">Education Platforms & Learning Intelligence</h1>
        <p className="text-slate-400 mb-6">How AI-powered learning platforms adapt to employee and student needs while improving completion rates.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-2">Adaptive Learning</h2>
            <p className="text-slate-300 text-sm">Personalize difficulty, modality, and pacing from engagement signals.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-2">Knowledge Retention</h2>
            <p className="text-slate-300 text-sm">Spaced repetition and retrieval practice tuned by skill assessments.</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5">
            <h2 className="text-white font-semibold mb-2">Workforce Upskilling</h2>
            <p className="text-slate-300 text-sm">Role-based learning paths that connect completion to project readiness.</p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/learning-paths/" className="text-purple-400 hover:text-purple-300">Explore learning paths →</Link>
        </div>
      </div>
    </div>
  );
}
