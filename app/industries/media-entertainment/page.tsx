
import Link from 'next/link';

export const metadata = {
  title: 'AI Solutions for Media & Entertainment | Zion Tech Group',
  description: 'AI content creation, video analysis, recommendation engines, and digital media automation for media companies and entertainment platforms.',
  keywords: 'media AI, entertainment AI, content automation, video AI, recommendation engines, digital media',
  alternates: { canonical: '/industries/media-entertainment' },
};

const SERVICES = [
  {
    title: 'AI Content Creation Studio',
    slug: '/services/ai-content-creation',
    description: 'AI-powered content generation for articles, scripts, social media, and marketing materials. Create professional content 10x faster with consistent brand voice.',
    icon: '✍️',
    category: 'ai',
    ROI: '10x faster creation'
  },
  {
    title: 'AI Video Analysis & Tagging',
    slug: '/services/ai-video-analysis',
    description: 'Automated video content analysis, scene detection, object recognition, and metadata extraction. Tag and organize video libraries instantly.',
    icon: '🎬',
    category: 'ai',
    ROI: 'Instant tagging'
  },
  {
    title: 'Personalized Recommendation Engine',
    slug: '/services/recommendation-engine',
    description: 'AI-powered content recommendation systems for streaming platforms, e-commerce, and media sites. Increase engagement by 40% with personalized discovery.',
    icon: '🎯',
    category: 'ai',
    ROI: '40% engagement boost'
  },
  {
    title: 'AI Audio & Music Generation',
    slug: '/services/ai-audio-generation',
    description: 'AI-powered music composition, sound design, and audio content creation. Generate original soundtracks and audio assets for productions.',
    icon: '🎵',
    category: 'ai',
    ROI: 'Original audio'
  },
  {
    title: 'Content Moderation AI',
    slug: '/services/ai-content-moderation',
    description: 'Automated content moderation for social platforms, user-generated content, and media uploads. Detect and flag inappropriate content in real-time.',
    icon: '🛡️',
    category: 'ai',
    ROI: 'Real-time moderation'
  },
  {
    title: 'Audience Analytics & Insights',
    slug: '/services/ai-audience-analytics',
    description: 'AI-driven audience analytics for content performance, audience segmentation, and predictive engagement modeling. Understand what resonates.',
    icon: '📊',
    category: 'data',
    ROI: 'Predictive insights'
  },
];

export default function MediaEntertainmentPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative container-page">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm mb-6">
              <span className="text-green-400">●</span> AI-POWERED MEDIA
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                Media & Entertainment
              </span>{' '}
              <span className="text-white">AI Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              AI content creation, video analysis, recommendation engines, and audience analytics 
              for media companies and entertainment platforms. Transform content production and engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/contact" className="btn-primary text-lg px-10 py-4">
                ⚡ Get Content Strategy →
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-10 py-4">
                🛠️ Browse Media Services
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-cyan-400 mb-1">10x</div>
                <div className="text-sm text-slate-400">Faster Content Creation</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-emerald-400 mb-1">40%</div>
                <div className="text-sm text-slate-400">Engagement Boost</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-blue-400 mb-1">Instant</div>
                <div className="text-sm text-slate-400">Video Tagging</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                AI-Powered Media Solutions
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Automate content creation, analyze video, and boost engagement with AI agents working 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={service.slug}
                className="group bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-all"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm mb-3 line-clamp-3">{service.description}</p>
                <div className="text-xs text-cyan-400 font-medium">{service.ROI}</div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all"
            >
              View All Media Services →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI-Enhanced Media Production
            </span>
          </h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
            Get a free media AI strategy consultation from our AI agents. Discover how AI can transform 
            your content creation, distribution, and audience engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+13024640950" className="btn-primary text-lg px-10 py-4">
              ☎ +1 302 464 0950
            </a>
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer noreferrer" className="btn-secondary text-lg px-10 py-4">
              📅 Book Media AI Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}