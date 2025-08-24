import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ResourceCaseStudyPage() {
  const caseStudy = {
    id: 'ai-automation-manufacturing',
    title: 'AI-Powered Manufacturing Automation',
    company: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    results: '40% increase in production efficiency, 60% reduction in downtime',
    description: 'How we implemented autonomous AI systems to revolutionize manufacturing processes.'
  };

  return (
    <>
      <Head>
        <title>{caseStudy.title} - Resource | Zion Tech Group</title>
        <meta name="description" content={caseStudy.description} />
        <meta name="keywords" content="AI automation, manufacturing, resource, case study, predictive maintenance" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link href="/resources" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Resources
              </Link>
            </nav>

            {/* Header */}
            <header className="mb-12 text-center">
              <div className="mb-4">
                <span className="px-4 py-2 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                  {caseStudy.industry}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">{caseStudy.title}</h1>
              <p className="text-xl text-cyan-400 font-semibold mb-4">{caseStudy.company}</p>
              <p className="text-white/80 text-lg max-w-3xl mx-auto">{caseStudy.description}</p>
            </header>

            {/* Key Results */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-green-400">Key Results</h2>
              <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/20">
                <p className="text-white/90 text-lg">{caseStudy.results}</p>
              </div>
            </section>

            {/* Detailed Analysis */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-blue-400">Detailed Analysis</h2>
              <div className="space-y-6">
                <div className="bg-blue-500/10 rounded-lg p-6 border border-blue-500/20">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Implementation Strategy</h3>
                  <p className="text-white/90">
                    Our approach involved deploying autonomous AI systems across three key areas: predictive maintenance, 
                    quality control, and production optimization. Each system was designed to work independently while 
                    sharing data for comprehensive insights.
                  </p>
                </div>
                
                <div className="bg-purple-500/10 rounded-lg p-6 border border-purple-500/20">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">Technology Stack</h3>
                  <p className="text-white/90">
                    We utilized advanced machine learning algorithms, computer vision systems, IoT sensors, and 
                    predictive analytics to create a comprehensive automation solution that could adapt to changing 
                    production requirements.
                  </p>
                </div>
                
                <div className="bg-yellow-500/10 rounded-lg p-6 border border-yellow-500/20">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">Business Impact</h3>
                  <p className="text-white/90">
                    The implementation resulted in significant improvements across all key metrics, with the most 
                    notable being the 40% increase in production efficiency and 60% reduction in unplanned downtime. 
                    These improvements directly translated to increased profitability and customer satisfaction.
                  </p>
                </div>
              </div>
            </section>

            {/* Related Resources */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-fuchsia-400">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link 
                  href="/case-studies/ai-automation-manufacturing"
                  className="bg-fuchsia-500/10 rounded-lg p-6 border border-fuchsia-500/20 hover:border-fuchsia-400/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-fuchsia-400 mb-2">Full Case Study</h3>
                  <p className="text-white/80 text-sm">Read the complete case study with detailed implementation insights.</p>
                </Link>
                
                <Link 
                  href="/resources/whitepapers/autonomous-systems-guide.pdf"
                  className="bg-cyan-500/10 rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Autonomous Systems Guide</h3>
                  <p className="text-white/80 text-sm">Download our comprehensive guide to autonomous technology.</p>
                </Link>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Implement Similar Solutions?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  This resource demonstrates the real impact of AI automation in manufacturing. 
                  Let's discuss how we can help you achieve similar results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                  <Link 
                    href="/resources"
                    className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300"
                  >
                    Explore More Resources
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}