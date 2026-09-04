'use client';
import Link from 'next/link';

export const metadata = {
  title: 'Media & Entertainment AI Solutions | Zion Tech Group',
  description: 'AI-powered media solutions for content generation, knowledge management, video analysis, and entertainment automation.',
};

const mediaServices = [
  { id: 'ai-knowledge-management', title: 'AI Knowledge Management', href: '/services/ai-knowledge-management', icon: '📚', pricing: 'From $149/mo', description: 'Organize and search knowledge with AI-powered content management.' },
  { id: 'ai-content-generation', title: 'Content Generation AI', href: '/services/ai-content-generation', icon: '✍️', pricing: 'From $99/mo', description: 'Generate blog posts, social media content, and marketing copy with AI.' },
  { id: 'ai-video-analysis', title: 'Video Analysis AI', href: '/services/ai-video-analysis', icon: '🎬', pricing: 'Custom', description: 'Analyze video content with computer vision for insights and moderation.' },
  { id: 'ai-content-studio', title: 'AI Content Studio', href: '/services/ai-content-studio', icon: '🎥', pricing: 'From $199/mo', description: 'End-to-end video production with AI-assisted editing and optimization.' },
];

export default function MediaIndustryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(236,72,153,0.15),rgba(165,130,250,0.12))]" />
        <div className="container-page text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-sm mb-6">
            <span className="text-green-400">●</span> Creative AI
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6"><span className="bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 bg-clip-text text-transparent">AI Solutions for Media</span></h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">Create content, manage knowledge, and analyze media with AI-powered creative tools.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">🎬 Book Media Consultation</Link>
            <Link href="/services/?category=ai" className="btn-secondary text-lg px-8 py-4">📊 View AI Services</Link>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Media AI Solutions</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">AI-powered tools for content creation and media management.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaServices.map((s) => (
              <Link key={s.id} href={s.href} className="group bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 hover:border-pink-500/40 transition-all">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-pink-300">{s.title}</h3>
                <p className="text-slate-400 text-sm mb-3 line-clamp-3">{s.description}</p>
                <span className="text-xs font-semibold uppercase bg-pink-500/20 text-pink-300 px-2 py-1 rounded">{s.pricing}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-slate-950/30 text-center">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Smarter Content?</h2>
          <p className="text-slate-300 mb-8">Schedule a free consultation for your media team.</p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-4">📞 Book Consultation</Link>
        </div>
      </section>
    </main>
  );
}