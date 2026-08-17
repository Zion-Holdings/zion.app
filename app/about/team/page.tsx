import PageWrapper from '@/components/PageWrapper';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Leadership Team | Zion Tech Group',
  description: 'Meet the US-based leadership team at Zion Tech Group — experts in AI, cloud, cybersecurity, and enterprise software delivery.',
  alternates: { canonical: '/about/team/' },
};

const teamMembers = [
  {
    name: 'Kleber Garcia Alcatrão',
    title: 'Founder & CEO',
    desc: 'Enterprise AI and cloud architect with 10+ years leading technology transformation for Fortune 500 companies. Specializes in AI/ML platform design, zero-trust security, and autonomous automation systems.',
    skills: ['AI/ML Platform Architecture', 'Cloud Strategy', 'Zero-Trust Security', 'Team Leadership'],
  },
  {
    name: 'Sarah Chen',
    title: 'CTO — AI & Data',
    desc: 'Machine learning engineer with a PhD in Computer Science from MIT. Led large-scale AI deployments across healthcare and financial services before joining Zion Tech Group.',
    skills: ['ML Engineering', 'Data Science', 'Model Deployment', 'Research'],
  },
  {
    name: 'Marcus Rodriguez',
    title: 'Head of Cloud Infrastructure',
    desc: 'AWS and Google Cloud certified architect with 12 years of experience in enterprise cloud migration, Kubernetes orchestration, and security-first infrastructure design.',
    skills: ['Cloud Architecture', 'Kubernetes', 'DevOps', 'Security'],
  },
  {
    name: 'Dr. Aisha Patel',
    title: 'Director of Cybersecurity',
    desc: 'CISSP, CISM certified security leader with deep expertise in zero-trust architecture, penetration testing, and compliance automation (SOC2, HIPAA, NIST).',
    skills: ['Security Architecture', 'Compliance', 'Threat Modeling', 'Incident Response'],
  },
  {
    name: 'James Wu',
    title: 'VP of Automation',
    desc: 'RPA and workflow automation specialist who has deployed over 200 autonomous processes across manufacturing, logistics, and financial services.',
    skills: ['RPA', 'Workflow Automation', 'Process Mining', 'AI Integration'],
  },
];

export default function TeamPage() {
  return (
    <PageWrapper>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
              Leadership
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-3">
              Our Leadership Team
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              Meet the US-based experts behind Zion Tech Group. Our team combines deep
              technical expertise with real-world enterprise experience to deliver AI and
              IT solutions that drive measurable business outcomes.
            </p>
          </div>

          <div className="space-y-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-slate-900/40 border border-slate-800 rounded-xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-2xl font-bold text-purple-300">
                      {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">{member.name}</h2>
                    <p className="text-purple-400 font-semibold mb-3">{member.title}</p>
                    <p className="text-slate-300 mb-4">{member.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-slate-800/60 border border-slate-700 rounded-full text-xs text-slate-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/contact/" className="inline-block btn-primary text-lg px-10 py-4">
              Work With Our Team →
            </Link>
          </div>
        </div>
      </PageWrapper>
  );
}
