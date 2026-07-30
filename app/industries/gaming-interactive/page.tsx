import Link from 'next/link';

export const metadata = {
  title: 'AI Solutions for Gaming & Interactive Entertainment | Zion Tech Group',
  description: 'AI solutions for game developers, esports organizations, and interactive entertainment companies. Enhance player experiences, reduce cheating, optimize game performance, and create dynamic content.',
  keywords: 'gaming AI, esports AI, game development AI, anti-cheat AI, player behavior AI, game content generation, interactive entertainment AI',
  alternates: { canonical: '/industries/gaming-interactive' },
};

const SERVICES = [
  {
    title: 'AI Game Content Generator',
    slug: '/services/ai-game-content-generator',
    description: 'Generate quests, levels, characters, and narrative content dynamically. Create endless gameplay experiences with AI-powered procedural content generation.',
    icon: '🎮',
    category: 'ai',
    ROI: 'Infinite content'
  },
  {
    title: 'AI-Powered Anti-Cheat System',
    slug: '/services/ai-anticheat-system',
    description: 'Detect and prevent cheating in real-time using behavioral analysis and pattern recognition. Reduce cheating incidents by 95% with machine learning-based detection.',
    icon: '🛡️',
    category: 'ai',
    ROI: '95% cheat reduction'
  },
  {
    title: 'Player Behavior Analytics Platform',
    slug: '/services/ai-player-analytics',
    description: 'Analyze player engagement, retention, and monetization patterns. Optimize game design and marketing with data-driven insights from 1M+ player sessions.',
    icon: '📊',
    category: 'data',
    ROI: '40% retention increase'
  },
  {
    title: 'AI Matchmaking & Lobby System',
    slug: '/services/ai-matchmaking',
    description: 'Intelligent player matching based on skill, latency, and preferences. Reduce queue times by 60% and improve player satisfaction with smart matchmaking.',
    icon: '🎯',
    category: 'ai',
    ROI: '60% faster matches'
  },
  {
    title: 'Dynamic Game Difficulty Adjustment',
    slug: '/services/ai-game-difficulty',
    description: 'AI adjusts game challenge in real-time to keep players engaged. Reduce player churn by 35% with personalized difficulty curves.',
    icon: '⚡',
    category: 'ai',
    ROI: '35% churn reduction'
  },
  {
    title: 'AI Voice & NPC Dialogue System',
    slug: '/services/ai-npc-dialogue',
    description: 'Generate natural, contextually relevant NPC dialogue and voice responses. Create immersive worlds with AI-powered conversational agents.',
    icon: '🗣️',
    category: 'ai',
    ROI: 'Realistic interactions'
  },
];

export default function GamingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative container-page">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
              <span className="text-green-400">●</span> GAMING-OPTIMIZED AI
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400 bg-clip-text text-transparent">
                Gaming & Interactive
              </span>{' '}
              <span className="text-white">Entertainment AI</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              AI-powered solutions for game developers, esports organizations, and interactive 
              entertainment companies. Enhance player experiences, reduce cheating, and optimize performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/configurator" className="btn-primary text-lg px-10 py-4">
                ⚡ Get Game Optimization Report →
              </Link>
              <Link href="/services" className="btn-secondary text-lg px-10 py-4">
                🛠️ Browse Gaming Services
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-pink-400 mb-1">95%</div>
                <div className="text-sm text-slate-400">Cheat Detection</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-cyan-400 mb-1">40%</div>
                <div className="text-sm text-slate-400">Player Retention</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-6 border border-slate-700/50">
                <div className="text-2xl font-bold text-emerald-400 mb-1">60%</div>
                <div className="text-sm text-slate-400">Queue Time Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gaming Solutions */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI-Powered Gaming Solutions
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Enhance player engagement, prevent cheating, and create dynamic content 
              with AI-powered gaming and interactive entertainment solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {SERVICES.map((service, i) => (
              <Link
                key={service.slug}
                href={service.slug}
                className="group bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 hover:border-pink-500/40 transition-all"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm mb-3 line-clamp-3">{service.description}</p>
                <div className="text-xs text-pink-400 font-medium">{service.ROI}</div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-pink-500 hover:to-purple-500 transition-all"
            >
              View All Gaming Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Esports & Competitive Gaming Section */}
      <section className="py-20">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Esports & Competitive Gaming
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              AI-powered analytics, anti-cheat systems, and performance optimization 
              for competitive gaming and esports organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="glass-card p-6 text-center">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-semibold text-white mb-2">Fair Play Detection</h3>
              <p className="text-slate-400 text-sm">AI anti-cheat systems ensure fair competition</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold text-white mb-2">Performance Analytics</h3>
              <p className="text-slate-400 text-sm">Analyze player stats and team performance</p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold text-white mb-2">Matchmaking AI</h3>
              <p className="text-slate-400 text-sm">Smart player matching for competitive balance</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/configurator"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-emerald-500 hover:to-cyan-500 transition-all"
            >
              ⚡ Get Esports Analytics Report →
            </Link>
            <p className="text-slate-500 text-xs mt-2">Free competitive gaming analysis</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950">
        <div className="container-page max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent">
              Elevate Your Gaming Experience
            </span>
          </h2>
          <p className="text-slate-300 mb-10 max-w-2xl mx-auto">
            Get a free AI-powered gaming assessment and optimization roadmap. 
            Our autonomous AI agents analyze your game or platform and recommend improvements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+130****0950" className="btn-primary text-lg px-10 py-4">
              ☎ +1 302 464 0950
            </a>
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer noreferrer" className="btn-secondary text-lg px-10 py-4">
              📅 Book Free Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}