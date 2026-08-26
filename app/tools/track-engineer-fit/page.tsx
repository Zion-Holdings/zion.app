import { Metadata } from 'next';

export const metadata = {
  title: 'AI Engineer Fit Tracker — Zion Tech Group',
  description: 'AI-powered engineer fit tracker: compare candidate skills, role requirements, culture fit, and placement confidence in one concise hiring dashboard.',

};

export default function TrackEngineerFitPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="container-page py-16">
        <h1 className="text-3xl font-bold">AI Engineer Fit Tracker</h1>
        <p className="mt-3 text-slate-300 max-w-3xl">
          This tool evaluates candidate-to-role fit using skills, experience, and culture signals.
          The AI engine scores placement confidence and highlights gaps.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { title: 'Skill match', desc: 'Ranks candidate skills against required deliverables and tech expectations.' },
            { title: 'Culture fit', desc: 'Surfaces remote, async, ownership, and collaboration style alignments.' },
            { title: 'Placement confidence', desc: 'Combines signals into a single confidence score and recommended interview focus.' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
