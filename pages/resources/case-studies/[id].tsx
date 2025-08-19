import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ResourceCaseStudyPage() {
  const router = useRouter();
  const { id } = router.query;

  // Case study data - in a real app, this would come from an API or database
  const caseStudies = {
    'ai-automation-manufacturing': {
      title: 'AI-Powered Manufacturing Automation',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      results: '40% increase in production efficiency, 60% reduction in downtime',
      description: 'How we implemented autonomous AI systems to revolutionize manufacturing processes.',
      fullDescription: 'This comprehensive case study explores how Global Manufacturing Corp transformed their operations through AI automation. The implementation included predictive maintenance systems, quality control automation, and production optimization algorithms that resulted in significant efficiency gains and cost reductions.',
      keyInsights: [
        'Predictive maintenance reduced unplanned downtime by 60%',
        'AI-powered quality control improved product quality by 35%',
        'Production optimization algorithms increased efficiency by 40%',
        'Overall operational costs were reduced by 25%'
      ],
      implementation: 'The project was implemented over 6 months with a team of 8 engineers, focusing on gradual rollout and continuous optimization based on real-time data feedback.'
    },
    'content-generation-scale': {
      title: 'Scaling Content Generation 10x',
      company: 'Digital Marketing Agency',
      industry: 'Marketing',
      results: '10x increase in content output, 85% improvement in engagement',
      description: 'Transforming content creation through autonomous AI systems.',
      fullDescription: 'This case study demonstrates how a digital marketing agency scaled their content production capabilities by 10x while maintaining quality and improving engagement metrics. The solution involved deploying autonomous content generation systems with human oversight and quality control mechanisms.',
      keyInsights: [
        'AI content generation increased output by 10x',
        'Engagement metrics improved by 85%',
        'Content creation time was reduced by 70%',
        'Client satisfaction rate reached 95%'
      ],
      implementation: 'The project was completed in 4 months with a team of 5 engineers and 3 content specialists, focusing on maintaining brand voice and quality standards.'
    },
    'cloud-infrastructure-optimization': {
      title: 'Cloud Infrastructure Optimization',
      company: 'E-commerce Platform',
      industry: 'Technology',
      results: '50% reduction in cloud costs, 99.9% uptime achieved',
      description: 'Building self-healing, auto-scaling cloud infrastructure.',
      fullDescription: 'This case study showcases the development of a self-healing, auto-scaling cloud infrastructure that significantly reduced operational costs while improving performance and reliability. The solution eliminated the need for manual intervention in scaling and maintenance operations.',
      keyInsights: [
        'Cloud costs were reduced by 50%',
        '99.9% uptime was achieved consistently',
        'Response times improved by 3x',
        'Zero manual intervention required for scaling'
      ],
      implementation: 'The project spanned 8 months with a team of 6 DevOps engineers, focusing on building robust monitoring and automation systems.'
    }
  };

  const caseStudy = caseStudies[id as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-white/80 mb-8">The requested case study could not be found.</p>
          <Link href="/resources" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
            Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{caseStudy.title} | Zion Tech Group - Resources</title>
        <meta name="description" content={caseStudy.description} />
        <meta property="og:title" content={`${caseStudy.title} | Zion Tech Group Resources`} />
        <meta property="og:description" content={caseStudy.description} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Navigation */}
            <nav className="mb-8">
              <Link href="/resources" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Resources
              </Link>
            </nav>

            {/* Header */}
            <header className="mb-12 text-center">
              <div className="mb-6">
                <span className="px-4 py-2 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                  {caseStudy.industry}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{caseStudy.title}</h1>
              <p className="text-2xl text-cyan-400 font-semibold mb-4">{caseStudy.company}</p>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">{caseStudy.description}</p>
            </header>

            {/* Case Study Content */}
            <div className="space-y-12">
              {/* Results Summary */}
              <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold mb-6 text-center text-white">Key Results</h2>
                <div className="text-center">
                  <p className="text-2xl text-green-400 font-semibold mb-4">{caseStudy.results}</p>
                </div>
              </section>

              {/* Full Description */}
              <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Case Study Overview</h2>
                <p className="text-white/80 leading-relaxed text-lg">{caseStudy.fullDescription}</p>
              </section>

              {/* Key Insights */}
              <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Key Insights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudy.keyInsights.map((insight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-white/90">{insight}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Implementation */}
              <section className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Implementation Details</h2>
                <p className="text-white/80 leading-relaxed">{caseStudy.implementation}</p>
              </section>

              {/* Call to Action */}
              <section className="text-center">
                <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                  <h2 className="text-2xl font-bold mb-4 text-white">Ready to Learn More?</h2>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    This case study demonstrates the real impact of AI automation. 
                    Explore our other resources or get in touch to discuss your specific needs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link 
                      href="/case-studies"
                      className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                    >
                      View All Case Studies
                    </Link>
                    <Link 
                      href="/contact"
                      className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}