import Link from 'next/link';

export const metadata = {
  title: 'Learning Paths | Zion Tech Group',
  description: 'Curated learning paths for AI, cloud, security, and operations roles.',
};

export default function LearningPaths() {
  const paths = [
    { id: 'ai-engineer', title: 'AI/ML Engineer', focus: 'Models, inference, MLOps, evaluation' },
    { id: 'devops', title: 'DevOps/Platform Engineer', focus: 'CI/CD, infra, observability, SRE' },
    { id: 'security-analyst', title: 'Security Analyst', focus: 'IAM, zero trust, SOC, compliance' },
    { id: 'cloud-engineer', title: 'Cloud Engineer', focus: 'AWS/GCP/Azure, networking, IaC' },
    { id: 'data-engineer', title: 'Data Engineer', focus: 'Pipelines, lakehouse, analytics' },
  ];
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="mb-2 inline-flex items-center gap-2 text-slate-400 hover:text-white">← Home</Link>
        <h1 className="text-3xl font-bold">Learning Paths</h1>
        <p className="mt-2 text-slate-400">Role-focused tracks to build modern AI/cloud operations skills.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {paths.map(p => (
            <div key={p.id} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{p.focus}</p>
              <Link href={`/${p.id}`} className="mt-3 inline-block text-sm text-emerald-300 hover:text-emerald-200">Start path →</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
