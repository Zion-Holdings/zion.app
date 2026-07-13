
export const metadata = { title: "Technology & SaaS", description: "Complete IT solutions for technology companies and SaaS providers." };
import Link from 'next/link';

export default function SolutionPage() {
  const services = [
            { icon: "☁️", name: "Cloud Infrastructure", href: "/cloud-infrastructure-management", desc: "Multi-cloud architecture, Kubernetes, serverless." },
            { icon: "⚙️", name: "DevOps & CI/CD", href: "/devops-automation", desc: "Automated pipelines, infrastructure as code, monitoring." },
            { icon: "🔐", name: "Enterprise Security", href: "/enterprise-security", desc: "Zero Trust, SIEM, penetration testing, incident response." },
            { icon: "🧠", name: "AI/ML Platform", href: "/ai-ml-platform", desc: "MLOps, feature stores, model serving, A/B testing." },
            { icon: "📊", name: "Business Intelligence", href: "/business-intelligence", desc: "Data warehousing, dashboards, predictive analytics." },
            { icon: "📱", name: "Product Development", href: "/custom-development", desc: "Full-stack development, mobile apps, API platforms." },
  ];
  return (
    <div className="relative overflow-hidden">
      <section className="relative overflow-hidden border-b border-purple-500/20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-900">
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-purple-400">Technology & SaaS</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Technology & SaaS</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">Complete IT solutions for technology companies and SaaS providers.</p>
        </div>
      </section>
      <section className="bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link key={i} href={s.href} className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
                <span className="text-3xl">{s.icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-purple-300">{s.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-900/30 to-pink-900/20 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Need Custom Solutions?</h2>
            <p className="text-slate-300 mb-6">Our experts can tailor solutions to your specific requirements.</p>
            <Link href="/consultation" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white">Schedule a Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
