import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Zion Tech Group. View open positions and apply for careers in AI, IT, and engineering.',
  alternates: { canonical: '/careers/' },

  openGraph: {
    title: 'Careers',
    description: 'Join Zion Tech Group. View open positions and apply for careers in AI, IT, and engineering.',
    url: 'https://ziontechgroup.com/careers/',
    siteName: 'Zion Tech Group',
    type: 'website',
    images: ['/og-default.png'],
  },
};

const JOBS = [
  {
    title: 'AI Engineer',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    desc: 'Build LLM-powered automation, RAG systems, and enterprise AI assistants.',
    requirements: ['Python', 'LangChain', 'RAG', 'OpenAI/Anthropic APIs'],
  },
  {
    title: 'DevOps Engineer',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    desc: 'CI/CD, Kubernetes, cloud infrastructure, and developer experience tooling.',
    requirements: ['AWS/GCP', 'Terraform', 'Docker', 'GitHub Actions'],
  },
  {
    title: 'IT Support Technician',
    location: 'Taubaté, SP',
    type: 'Full-time',
    desc: 'On-site and remote IT support for enterprise clients with escalation into AI tooling.',
    requirements: ['Windows', 'Linux', 'Networking', 'ITIL'],
  },
  {
    title: 'Cybersecurity Analyst',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    desc: 'SOC operations, threat detection, compliance automation, and incident response.',
    requirements: ['SOC2', 'SIEM', 'Python', 'NIST'],
  },
  {
    title: 'Solutions Architect',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    desc: 'Design enterprise AI and cloud architectures with production-ready roadmaps.',
    requirements: ['Cloud', 'AI/ML', 'System Design', 'Enterprise Sales Engineering'],
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

    <JsonLd data={@context: "https://schema.org", @type: "WebPage", name: "Careers", description: "Join Zion Tech Group. View open positions and apply for careers in AI, IT, and engineering.", url: "https://ziontechgroup.com/careers/"} />
      <section className="py-20 px-4 text-center bg-gradient-to-b from-purple-900/20 to-transparent">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Careers
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Join the Zion Tech Group team and help shape the future of AI and IT.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pb-20">
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Open Roles', value: '5+' },
              { label: 'Remote Friendly', value: 'Yes' },
              { label: 'Benefits', value: 'Competitive' },
            ].map((stat) => (
              <div key={stat.label} className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-purple-400">{stat.value}</div>
                <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="grid gap-6 max-w-4xl mx-auto">
            {JOBS.map((job) => (
              <div key={job.title} className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                    <p className="text-purple-400 text-sm">{job.location} · {job.type}</p>
                  </div>
                  <Link href="/contact/" className="btn-secondary whitespace-nowrap text-sm">
                    Apply
                  </Link>
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
        </section>

        <section className="text-center bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-10 border border-purple-500/20">
          <h2 className="text-2xl font-bold text-white mb-4">Don’t see the right role?</h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Send your resume and we’ll reach out when a matching position opens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-primary">
              Send Resume
            </Link>
            <Link href="/about/" className="btn-secondary">
              Learn About Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
