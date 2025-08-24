import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ToolPage() {
  const router = useRouter();
  const { id } = router.query;

  // This would typically come from a database or API
  // For now, we'll show a generic tool page
  const tool = {
    id: id as string,
    title: (id as string)?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    description: 'An interactive tool designed to help organizations assess and improve their automation capabilities.',
    type: 'Interactive Tool',
    estimatedTime: '15-30 minutes',
    features: [
      'Comprehensive assessment framework',
      'Real-time scoring and analysis',
      'Actionable recommendations',
      'Progress tracking',
      'Industry benchmarking'
    ],
    benefits: [
      'Identify automation opportunities',
      'Prioritize implementation efforts',
      'Measure current capabilities',
      'Plan transformation roadmap'
    ]
  };

  if (!id) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{tool.title} | Zion Tech Group</title>
        <meta name="description" content={tool.description} />
        <meta property="og:title" content={tool.title} />
        <meta property="og:description" content={tool.description} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <nav className="mb-8">
              <Link href="/resources" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Resources
              </Link>
            </nav>
            
            <article className="prose prose-invert prose-lg max-w-none">
              <header className="mb-12 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🔧</span>
                </div>
                <div className="flex items-center gap-3 justify-center mb-4">
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full border border-green-400/30">
                    {tool.type}
                  </span>
                  <span className="text-white/60 text-sm">Est. time: {tool.estimatedTime}</span>
                </div>
                <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  {tool.title}
                </h1>
                <p className="text-xl text-white/80 max-w-3xl mx-auto">
                  {tool.description}
                </p>
              </header>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-green-400">Tool Overview</h2>
                                  <p className="text-white/90 mb-4">
                    This interactive tool is designed to help organizations of all sizes assess their current automation 
                    capabilities and identify opportunities for improvement. Whether you&apos;re just starting your automation 
                    journey or looking to optimize existing systems, this tool provides valuable insights and actionable recommendations.
                  </p>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-fuchsia-400">Key Features</h2>
                <ul className="space-y-3">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="text-white/90 flex items-center gap-3">
                      <div className="w-2 h-2 bg-fuchsia-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Benefits</h2>
                <ul className="space-y-3">
                  {tool.benefits.map((benefit, index) => (
                    <li key={index} className="text-white/90 flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-cyan-400">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20 text-center">
                    <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">1</span>
                    </div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Assessment</h4>
                    <p className="text-white/80 text-sm">
                      Complete a comprehensive questionnaire about your current automation capabilities
                    </p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20 text-center">
                    <div className="w-12 h-12 bg-fuchsia-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">2</span>
                    </div>
                    <h4 className="font-semibold text-fuchsia-400 mb-2">Analysis</h4>
                    <p className="text-white/80 text-sm">
                      Our AI analyzes your responses and compares them to industry benchmarks
                    </p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 border border-white/20 text-center">
                    <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">3</span>
                    </div>
                    <h4 className="font-semibold text-green-400 mb-2">Recommendations</h4>
                    <p className="text-white/80 text-sm">
                      Receive personalized recommendations and a roadmap for improvement
                    </p>
                  </div>
                </div>
              </section>
              
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-purple-400">Get Started</h2>
                <p className="text-white/90 mb-6">
                  Ready to assess your automation readiness? This tool will take approximately {tool.estimatedTime} 
                  to complete and will provide you with valuable insights to guide your automation strategy.
                </p>
                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/20 text-center">
                  <h3 className="text-xl font-semibold mb-4 text-white">Tool Coming Soon</h3>
                  <p className="text-white/80 mb-4">
                    We&apos;re currently finalizing this interactive tool. In the meantime, our team can provide 
                    a personalized assessment of your automation capabilities.
                  </p>
                  <Link href="/contact?tool=assessment" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-500 hover:to-blue-500 transition-all duration-300">
                    Schedule Assessment
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </section>
            </article>
            
            <div className="mt-16 pt-8 border-t border-white/20 text-center">
              <h3 className="text-xl font-semibold mb-6 text-white">Explore More Resources</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/resources" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                  View All Resources
                </Link>
                <Link href="/case-studies" className="px-6 py-3 border border-white/20 text-white rounded-lg hover:border-cyan-400/50 transition-all duration-300">
                  Case Studies
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}