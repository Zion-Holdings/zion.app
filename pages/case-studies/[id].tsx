import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CaseStudyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  // Case studies data - in a real app, this would come from an API or database
  const caseStudies = {
    'ai-automation-manufacturing': {
      id: 'ai-automation-manufacturing',
      title: 'AI-Powered Manufacturing Automation',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge: 'Inefficient production processes, high downtime, and quality control issues',
      solution: 'Implemented autonomous AI systems for predictive maintenance, quality control, and production optimization',
      results: [
        '40% increase in production efficiency',
        '60% reduction in unplanned downtime',
        '35% improvement in product quality',
        '25% reduction in operational costs'
      ],
      technologies: ['Machine Learning', 'Computer Vision', 'IoT Sensors', 'Predictive Analytics'],
      duration: '6 months',
      teamSize: '8 engineers',
      featured: true,
      description: 'A comprehensive case study on how AI automation transformed manufacturing operations at Global Manufacturing Corp, leading to significant improvements in efficiency, quality, and cost reduction.',
      implementation: [
        'Phase 1: Data Collection & Analysis (2 months)',
        'Phase 2: AI Model Development (2 months)',
        'Phase 3: System Integration & Testing (1 month)',
        'Phase 4: Deployment & Optimization (1 month)'
      ],
      challenges: [
        'Legacy system integration complexity',
        'Data quality and standardization issues',
        'Change management and training requirements',
        'Regulatory compliance considerations'
      ],
      lessons: [
        'Start with pilot programs before full deployment',
        'Invest in comprehensive data quality management',
        'Prioritize change management and training',
        'Establish clear success metrics from the beginning'
      ]
    },
    'content-generation-scale': {
      id: 'content-generation-scale',
      title: 'Scaling Content Generation 10x',
      company: 'Digital Marketing Agency',
      industry: 'Marketing',
      challenge: 'Unable to meet client demand for high-quality content at scale',
      solution: 'Deployed autonomous content generation systems with human oversight and quality control',
      results: [
        '10x increase in content output',
        '85% improvement in engagement metrics',
        '70% reduction in content creation time',
        '95% client satisfaction rate'
      ],
      technologies: ['Natural Language Processing', 'Content Optimization', 'SEO Automation', 'Analytics'],
      duration: '4 months',
      teamSize: '5 engineers + 3 content specialists',
      featured: false,
      description: 'How a digital marketing agency leveraged AI automation to scale content production while maintaining quality and improving client satisfaction.',
      implementation: [
        'Phase 1: Content Strategy Analysis (1 month)',
        'Phase 2: AI System Development (2 months)',
        'Phase 3: Quality Control Implementation (1 month)'
      ],
      challenges: [
        'Maintaining content quality at scale',
        'SEO optimization requirements',
        'Client approval processes',
        'Content personalization needs'
      ],
      lessons: [
        'Human oversight is crucial for quality control',
        'SEO optimization must be built into the system',
        'Client feedback loops improve results',
        'Regular content performance analysis is essential'
      ]
    },
    'cloud-infrastructure-optimization': {
      id: 'cloud-infrastructure-optimization',
      title: 'Cloud Infrastructure Optimization',
      company: 'E-commerce Platform',
      industry: 'Technology',
      challenge: 'High cloud costs, performance issues, and manual scaling requirements',
      solution: 'Built self-healing, auto-scaling cloud infrastructure with intelligent resource management',
      results: [
        '50% reduction in cloud costs',
        '99.9% uptime achieved',
        '3x improvement in response times',
        'Zero manual intervention required'
      ],
      technologies: ['Auto-scaling', 'Load Balancing', 'Monitoring', 'Cost Optimization'],
      duration: '8 months',
      teamSize: '6 DevOps engineers',
      featured: false,
      description: 'A comprehensive cloud infrastructure optimization project that resulted in significant cost savings and performance improvements.',
      implementation: [
        'Phase 1: Infrastructure Assessment (1 month)',
        'Phase 2: Auto-scaling Implementation (3 months)',
        'Phase 3: Monitoring & Alerting (2 months)',
        'Phase 4: Cost Optimization (2 months)'
      ],
      challenges: [
        'Complex multi-cloud environment',
        'Performance requirements during peak loads',
        'Cost optimization without performance degradation',
        'Security and compliance requirements'
      ],
      lessons: [
        'Start with comprehensive infrastructure assessment',
        'Implement monitoring before optimization',
        'Test auto-scaling under various load conditions',
        'Regular cost analysis prevents budget overruns'
      ]
    },
    'customer-service-automation': {
      id: 'customer-service-automation',
      title: 'Intelligent Customer Service Automation',
      company: 'Financial Services Provider',
      industry: 'Financial Services',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI-powered chatbots and automated ticket routing systems',
      results: [
        '80% reduction in response time',
        '60% decrease in customer service costs',
        '90% customer satisfaction rate',
        '24/7 automated support coverage'
      ],
      technologies: ['Chatbots', 'Natural Language Processing', 'Ticket Routing', 'Sentiment Analysis'],
      duration: '5 months',
      teamSize: '4 engineers + 2 customer service specialists',
      featured: false,
      description: 'How AI automation transformed customer service operations, improving response times and customer satisfaction while reducing costs.',
      implementation: [
        'Phase 1: Customer Journey Mapping (1 month)',
        'Phase 2: Chatbot Development (2 months)',
        'Phase 3: Integration & Testing (1 month)',
        'Phase 4: Training & Deployment (1 month)'
      ],
      challenges: [
        'Understanding complex customer queries',
        'Integration with existing systems',
        'Training customer service staff',
        'Maintaining human touch in automation'
      ],
      lessons: [
        'Start with simple, common queries',
        'Human escalation paths are essential',
        'Regular training updates improve performance',
        'Customer feedback drives continuous improvement'
      ]
    },
    'data-analytics-transformation': {
      id: 'data-analytics-transformation',
      title: 'Data Analytics Transformation',
      company: 'Healthcare Provider',
      industry: 'Healthcare',
      challenge: 'Inability to leverage data for patient care improvements and operational efficiency',
      solution: 'Built comprehensive data analytics platform with real-time insights and predictive modeling',
      results: [
        '30% improvement in patient outcomes',
        '40% reduction in operational costs',
        'Real-time data insights',
        'Predictive analytics for patient care'
      ],
      technologies: ['Big Data', 'Machine Learning', 'Real-time Analytics', 'Predictive Modeling'],
      duration: '10 months',
      teamSize: '10 data scientists + 5 engineers',
      featured: false,
      description: 'A healthcare data analytics transformation that improved patient outcomes and operational efficiency through AI-powered insights.',
      implementation: [
        'Phase 1: Data Infrastructure Setup (3 months)',
        'Phase 2: Analytics Platform Development (4 months)',
        'Phase 3: Model Training & Validation (2 months)',
        'Phase 4: Deployment & Training (1 month)'
      ],
      challenges: [
        'Data privacy and HIPAA compliance',
        'Integration of legacy healthcare systems',
        'Data quality and standardization',
        'Clinical staff adoption and training'
      ],
      lessons: [
        'Compliance must be built into the system from day one',
        'Clinical validation is crucial for healthcare AI',
        'User training and adoption drive success',
        'Regular model updates maintain accuracy'
      ]
    }
  };

  const caseStudy = caseStudies[id as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-white/80 mb-8">The case study you're looking for doesn't exist.</p>
          <Link href="/case-studies" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
            View All Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{caseStudy.title} | Zion Tech Group - Case Study</title>
        <meta name="description" content={caseStudy.description} />
        <meta property="og:title" content={`${caseStudy.title} | Zion Tech Group`} />
        <meta property="og:description" content={caseStudy.description} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Navigation */}
            <nav className="mb-8">
              <Link href="/case-studies" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ← Back to Case Studies
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
              <p className="text-xl text-white/80 max-w-4xl">{caseStudy.description}</p>
            </header>

            {/* Key Metrics */}
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{caseStudy.duration}</div>
                  <div className="text-white/80 text-sm">Duration</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-fuchsia-400 mb-2">{caseStudy.teamSize}</div>
                  <div className="text-white/80 text-sm">Team Size</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">{caseStudy.results.length}</div>
                  <div className="text-white/80 text-sm">Key Results</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{caseStudy.technologies.length}</div>
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

            {/* Results */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Key Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-white/90 text-lg">{result}</p>
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

            {/* Implementation */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Implementation Phases</h2>
              <div className="space-y-4">
                {caseStudy.implementation.map((phase, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-white/90 text-lg">{phase}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges & Lessons */}
            <section className="mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold mb-4 text-orange-400">Challenges Faced</h2>
                  <ul className="space-y-3">
                    {caseStudy.challenges.map((challenge, index) => (
                      <li key={index} className="text-white/80 flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">Key Lessons</h2>
                  <ul className="space-y-3">
                    {caseStudy.lessons.map((lesson, index) => (
                      <li key={index} className="text-white/80 flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
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