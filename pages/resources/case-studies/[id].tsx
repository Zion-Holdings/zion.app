import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ResourceCaseStudyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  // Resource case studies data
  const resourceCaseStudies = {
    'ai-automation-manufacturing': {
      id: 'ai-automation-manufacturing',
      title: 'AI-Powered Manufacturing Automation',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      results: '40% increase in production efficiency, 60% reduction in downtime',
      description: 'How we implemented autonomous AI systems to revolutionize manufacturing processes.',
      fullDescription: 'This comprehensive case study explores the transformation of Global Manufacturing Corp through AI automation. The company faced significant challenges with inefficient production processes, high downtime, and quality control issues that were impacting their bottom line and customer satisfaction.',
      challenge: 'The manufacturing facility was experiencing 30% production inefficiency, frequent unplanned downtime averaging 8 hours per week, and quality control issues that resulted in 15% product rejection rates.',
      solution: 'We implemented a comprehensive AI automation solution that included predictive maintenance systems, computer vision-based quality control, and intelligent production optimization algorithms.',
      keyMetrics: [
        'Production efficiency increased from 70% to 98%',
        'Unplanned downtime reduced from 8 hours to 3 hours per week',
        'Product quality improved from 85% to 95% acceptance rate',
        'Operational costs reduced by 25%',
        'Energy consumption optimized by 20%'
      ],
      technologies: ['Machine Learning', 'Computer Vision', 'IoT Sensors', 'Predictive Analytics', 'Edge Computing'],
      timeline: '6 months',
      investment: '$2.5M',
      roi: '320%',
      lessons: [
        'Start with pilot programs in specific production lines',
        'Invest in comprehensive data collection infrastructure',
        'Ensure cross-functional team collaboration',
        'Plan for change management and training',
        'Establish clear success metrics from the beginning'
      ]
    },
    'content-generation-scale': {
      id: 'content-generation-scale',
      title: 'Scaling Content Generation 10x',
      company: 'Digital Marketing Agency',
      industry: 'Marketing',
      results: '10x increase in content output, 85% improvement in engagement',
      description: 'Transforming content creation through autonomous AI systems.',
      fullDescription: 'This case study demonstrates how a digital marketing agency overcame content production bottlenecks by implementing AI-powered content generation systems. The solution maintained quality while dramatically increasing output and improving engagement metrics.',
      challenge: 'The agency was struggling to meet client demand, producing only 50 pieces of content per month when clients needed 500+. Manual content creation was time-consuming and expensive.',
      solution: 'We developed an autonomous content generation system with human oversight, incorporating SEO optimization, brand voice consistency, and quality control mechanisms.',
      keyMetrics: [
        'Content output increased from 50 to 500+ pieces per month',
        'Content creation time reduced from 8 hours to 1 hour per piece',
        'SEO performance improved by 85%',
        'Client satisfaction increased from 75% to 95%',
        'Content engagement metrics improved by 70%'
      ],
      technologies: ['Natural Language Processing', 'Content Optimization', 'SEO Automation', 'Analytics', 'Brand Voice Modeling'],
      timeline: '4 months',
      investment: '$800K',
      roi: '450%',
      lessons: [
        'Human oversight is crucial for maintaining brand voice',
        'SEO optimization must be built into the system',
        'Regular content performance analysis drives improvements',
        'Client feedback loops enhance content quality',
        'Scalability requires robust quality control systems'
      ]
    },
    'cloud-infrastructure-optimization': {
      id: 'cloud-infrastructure-optimization',
      title: 'Cloud Infrastructure Optimization',
      company: 'E-commerce Platform',
      industry: 'Technology',
      results: '50% reduction in cloud costs, 99.9% uptime achieved',
      description: 'Building self-healing, auto-scaling cloud infrastructure.',
      fullDescription: 'This case study showcases the transformation of an e-commerce platform\'s cloud infrastructure from a manually managed, expensive system to an intelligent, self-healing platform that automatically optimizes performance and costs.',
      challenge: 'The platform was experiencing high cloud costs ($50K/month), frequent performance issues during peak loads, and required constant manual intervention for scaling and maintenance.',
      solution: 'We built a comprehensive cloud optimization solution featuring auto-scaling, intelligent resource management, predictive cost optimization, and automated monitoring and alerting.',
      keyMetrics: [
        'Cloud costs reduced from $50K to $25K per month',
        'Uptime improved from 98.5% to 99.9%',
        'Response times improved by 3x during peak loads',
        'Manual intervention reduced to zero',
        'Resource utilization optimized to 85%'
      ],
      technologies: ['Auto-scaling', 'Load Balancing', 'Monitoring', 'Cost Optimization', 'Predictive Analytics'],
      timeline: '8 months',
      investment: '$1.2M',
      roi: '280%',
      lessons: [
        'Comprehensive monitoring must precede optimization',
        'Auto-scaling requires careful capacity planning',
        'Cost optimization should not compromise performance',
        'Security and compliance must be built-in',
        'Regular performance testing under various loads is essential'
      ]
    }
  };

  const caseStudy = resourceCaseStudies[id as keyof typeof resourceCaseStudies];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Resource Not Found</h1>
          <p className="text-white/80 mb-8">The resource you're looking for doesn't exist.</p>
          <Link href="/resources" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
            View All Resources
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{caseStudy.title} | Zion Tech Group - Resource</title>
        <meta name="description" content={caseStudy.fullDescription} />
        <meta property="og:title" content={`${caseStudy.title} | Zion Tech Group`} />
        <meta property="og:description" content={caseStudy.fullDescription} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Navigation */}
            <nav className="mb-8">
              <Link href="/resources" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Resources
              </Link>
            </nav>

            {/* Header */}
            <header className="mb-12">
              <div className="mb-4">
                <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30">
                  {caseStudy.industry}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{caseStudy.title}</h1>
              <p className="text-2xl text-cyan-400 font-semibold mb-6">{caseStudy.company}</p>
              <p className="text-xl text-white/80 max-w-4xl leading-relaxed">{caseStudy.fullDescription}</p>
            </header>

            {/* Key Metrics */}
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{caseStudy.timeline}</div>
                  <div className="text-white/80 text-sm">Timeline</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-fuchsia-400 mb-2">{caseStudy.investment}</div>
                  <div className="text-white/80 text-sm">Investment</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">{caseStudy.roi}</div>
                  <div className="text-white/80 text-sm">ROI</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{caseStudy.keyMetrics.length}</div>
                  <div className="text-white/80 text-sm">Key Metrics</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{caseStudy.technologies.length}</div>
                  <div className="text-white/80 text-sm">Technologies</div>
                </div>
              </div>
            </section>

            {/* Challenge & Solution */}
            <section className="mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold mb-4 text-red-400">The Challenge</h2>
                  <p className="text-white/80 text-lg leading-relaxed">{caseStudy.challenge}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold mb-4 text-green-400">Our Solution</h2>
                  <p className="text-white/80 text-lg leading-relaxed">{caseStudy.solution}</p>
                </div>
              </div>
            </section>

            {/* Key Metrics */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Key Results & Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.keyMetrics.map((metric, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-white/90 text-lg">{metric}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technologies */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Technologies Used</h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {caseStudy.technologies.map((tech, index) => (
                  <span key={index} className="px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-full border border-cyan-400/30">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Lessons Learned */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Key Lessons Learned</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.lessons.map((lesson, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-white/90 text-lg">{lesson}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Achieve Similar Results?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  This case study demonstrates the real impact of AI automation. 
                  Let&apos;s discuss how we can help you achieve similar results for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                  <Link 
                    href="/services"
                    className="px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300"
                  >
                    Learn More
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