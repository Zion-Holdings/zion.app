import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Zion Tech Group. View open positions and apply for careers in AI, IT, and engineering.',
  alternates: { canonical: '/careers/' },
};

const JOBS = [
  { title: 'AI Engineer', location: 'Remote / Hybrid', type: 'Full-time', desc: 'Build LLM-powered automation and RAG systems.', requirements: ['Python', 'LangChain', 'RAG'] },
  { title: 'DevOps Engineer', location: 'Remote / Hybrid', type: 'Full-time', desc: 'CI/CD, Kubernetes, cloud infrastructure.', requirements: ['AWS/GCP', 'Terraform', 'Docker'] },
  { title: 'IT Support Technician', location: 'Taubaté, SP', type: 'Full-time', desc: 'On-site and remote IT support for enterprise clients.', requirements: ['Windows', 'Linux', 'Networking'] },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Careers</h1>
          <p className="text-xl text-slate-300 leading-relaxed">Join the Zion Tech Group team and help shape the future of AI and IT.</p>
        </div>
        <div className="grid gap-6 max-w-3xl mx-auto">
          {JOBS.map((job) => (
            <div key={job.title} className="glass-card">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                  <p className="text-purple-400 text-sm">{job.location} · {job.type}</p>
                </div>
                <Link href="/contact/" className="btn-secondary whitespace-nowrap text-sm">Apply</Link>
              </div>
              <p className="text-slate-400 text-sm mb-3">{job.desc}</p>
              <div className="flex flex-wrap gap-2">
                {job.requirements.map((req) => (
                  <span key={req} className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded-full">{req}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
