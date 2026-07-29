'use client';
import Link from 'next/link';

export const metadata = {
  title: 'Education AI Solutions | Zion Tech Group',
  description: 'AI-powered education technology for personalized learning, student analytics, content generation, and research automation.',
};

const educationServices = [
  { id: 'ai-tutor', title: 'AI Tutor & Personal Assistant', href: '/services/ai-tutor', icon: '🎓', pricing: 'From $49/mo' },
  { id: 'ai-student-analytics', title: 'Student Performance Analytics', href: '/services/ai-student-analytics', icon: '📊', pricing: 'From $99/mo' },
  { id: 'ai-course-content-generator', title: 'Course Content Generator', href: '/services/ai-course-content-generator', icon: '📚', pricing: 'Custom' },
  { id: 'ai-research-assistant', title: 'Research Automation', href: '/services/ai-research-assistant', icon: '🔬', pricing: 'From $149/mo' },
];

export default function EducationIndustryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(16,185,129,0.15),rgba(59,130,246,0.12))]" />
        <div className="container-page text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm mb-6">
            <span className="text-green-400">●</span> Education Innovation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6"><span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">AI Solutions for Education</span></h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">Personalized learning, student insights, and research automation for modern education.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">🎓 Book Education Consultation</Link>
            <Link href="/services/?category=ai" className="btn-secondary text-lg px-8 py-4">📊 View AI Services</Link>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Education AI Solutions</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">AI-powered tools for personalized learning and research.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationServices.map((s) => (
              <Link key={s.id} href={s.href} className="group bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 hover:border-emerald-500/40 transition-all">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300">{s.title}</h3>
                <p className="text-slate-400 text-sm mb-3">{s.description}</p>
                <span className="text-xs font-semibold uppercase bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded">{s.pricing}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-950/30 text-center">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Learning?</h2>
          <p className="text-slate-300 mb-8">Schedule a free consultation for your educational institution.</p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">📞 Book Consultation</Link>
        </div>
      </section>
    </main>
  );
}