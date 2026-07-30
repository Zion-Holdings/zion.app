import Link from 'next/link';

export default function AIDiscoveryBlogPost() {
  return (
    <article className="min-h-screen bg-slate-950">
      <section className="relative overflow-hidden border-b border-slate-800/60 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.12),transparent_60%)]" />
        <div className="relative container-page">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm mb-6">
              <span className="text-green-400">🤖</span>
              <span>AI & Technology</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                How Our AI Agent Fleet Powers Intelligent Service Discovery
              </span>
            </h1>
            <div className="flex items-center gap-4 text-slate-400 text-sm mb-8">
              <span>By Zion Tech Group AI Team</span>
              <span>•</span>
              <span>July 2026</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              At Zion Tech Group, we've built something unprecedented: an autonomous AI agent fleet that not only creates and maintains our service catalog but also powers the discovery experience for our clients. 
              This article explores how our AI agents work together to deliver intelligent, personalized service recommendations in real-time.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">The Challenge: Finding the Right AI Solution</h2>
            <p className="text-slate-300 mb-6">
              With 850+ AI and IT services across 21 categories and 10 industries, choosing the right solution is no longer a simple decision. 
              Traditional service catalogs rely on manual categorization and basic search filters. 
              Our clients needed something smarter—something that understands their unique business context and matches it to the most relevant solutions.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">How Our AI Agent Fleet Works</h2>
            <p className="text-slate-300 mb-6">
              Our solution is powered by 9 specialized AI agents working in concert:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="glass-card p-5">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">🔍 @tablet - Research Agent</h3>
                <p className="text-slate-400 text-sm">
                  Continuously monitors market trends, competitor offerings, and emerging technologies. 
                  Updates our service catalog with new solutions and pricing intelligence.
                </p>
              </div>

              <div className="glass-card p-5">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">🧠 @Kilo - Intelligence Agent</h3>
                <p className="text-slate-400 text-sm">
                  Builds and maintains the AI matching algorithms. 
                  Analyzes service features, benefits, and industry applications to create intelligent recommendations.
                </p>
              </div>

              <div className="glass-card p-5">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">🚀 @Rocket - Delivery Agent</h3>
                <p className="text-slate-400 text-sm">
                  Deploys new service pages, updates documentation, and ensures all discovery features are live and functioning. 
                  Monitors performance and optimizes delivery speed.
                </p>
              </div>

              <div className="glass-card p-5">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">🔧 @Quel - Quality Agent</h3>
                <p className="text-slate-400 text-sm">
                  Ensures all service descriptions are accurate, up-to-date, and SEO-optimized. 
                  Validates that discovery matches return correct results.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">The Intelligent Matching Engine</h2>
            <p className="text-slate-300 mb-6">
              Our matching engine uses a multi-layered approach:
            </p>

            <ol className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-0.5">1.</span>
                <span className="text-slate-300">
                  <strong className="text-white">Natural Language Processing</strong> - Understanding what clients mean when they describe their needs in plain language
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-0.5">2.</span>
                <span className="text-slate-300">
                  <strong className="text-white">Contextual Relevance</strong> - Matching services to industry, use case, and business objectives
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-0.5">3.</span>
                <span className="text-slate-300">
                  <strong className="text-white">Real-time Catalog Updates</strong> - New services are immediately available for matching
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 font-bold mt-0.5">4.</span>
                <span className="text-slate-300">
                  <strong className="text-white">Performance Optimization</strong> - Continuous A/B testing to improve match accuracy
                </span>
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-white mb-4">Live Results You Can See</h2>
            <p className="text-slate-300 mb-6">
              The results speak for themselves:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-900/60 rounded-xl p-4 text-center border border-slate-700/50">
                <div className="text-2xl font-bold text-purple-400">95%</div>
                <div className="text-xs text-slate-500">Match Accuracy</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-4 text-center border border-slate-700/50">
                <div className="text-2xl font-bold text-emerald-400">&lt;5 min</div>
                <div className="text-xs text-slate-500">Average Match Time</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-4 text-center border border-slate-700/50">
                <div className="text-2xl font-bold text-sky-400">850+</div>
                <div className="text-xs text-slate-500">Services</div>
              </div>
              <div className="bg-slate-900/60 rounded-xl p-4 text-center border border-slate-700/50">
                <div className="text-2xl font-bold text-pink-400">Live</div>
                <div className="text-xs text-slate-500">Agent-Powered</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4">Try It Yourself</h2>
            <p className="text-slate-300 mb-6">
              Experience the power of AI-driven service discovery:
            </p>

            <div className="text-center">
              <Link
                href="/service-discovery"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg"
              >
                🚀 Start Intelligent Discovery
              </Link>
              <p className="text-slate-500 text-xs mt-3">No sign-up required • Instant results • Powered by live AI agents</p>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Future of AI Services Discovery</h2>
            <p className="text-slate-300 mb-6">
              This is just the beginning. Our AI agent fleet continues to evolve, with new capabilities being added regularly:
            </p>

            <ul className="space-y-2 text-slate-300 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Automated ROI predictions for each recommended service</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Integration with client's existing tech stack assessment</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Custom proposal generation based on discovery results</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Multi-language support for global enterprises</span>
              </li>
            </ul>

            <div className="glass-card p-6 border border-purple-500/20 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🤖</span>
                <h3 className="text-xl font-bold text-white">Ready to Transform Your Business?</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Let our AI agents analyze your needs and recommend the perfect solution from our catalog of 850+ AI services.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/service-discovery"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all"
                >
                  Start Discovery
                </Link>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-xl bg-slate-800/60 border border-purple-500/30 text-purple-300 font-semibold hover:bg-purple-500/10 hover:border-purple-400/50 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}