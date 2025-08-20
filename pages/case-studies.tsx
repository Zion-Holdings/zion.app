import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'ai-automation-manufacturing',
      title: 'AI-Powered Manufacturing Automation',
      company: 'Global Manufacturing Corp',
      industry: 'Manufacturing',
      challenge:
        'Inefficient production processes, high downtime, and quality control issues',
      solution:
        'Implemented autonomous AI systems for predictive maintenance, quality control, and production optimization',
      results: [
        '40% increase in production efficiency',
        '60% reduction in unplanned downtime',
        '35% improvement in product quality',
        '25% reduction in operational costs',
      ],
      technologies: [
        'Machine Learning',
        'Computer Vision',
        'IoT Sensors',
        'Predictive Analytics',
      ],
      duration: '6 months',
      teamSize: '8 engineers',
      featured: true,
    },
    {
      id: 'content-generation-scale',
      title: 'Scaling Content Generation 10x',
      company: 'Digital Marketing Agency',
      industry: 'Marketing',
      challenge:
        'Unable to meet client demand for high-quality content at scale',
      solution:
        'Deployed autonomous content generation systems with human oversight and quality control',
      results: [
        '10x increase in content output',
        '85% improvement in engagement metrics',
        '70% reduction in content creation time',
        '95% client satisfaction rate',
      ],
      technologies: [
        'Natural Language Processing',
        'Content Optimization',
        'SEO Automation',
        'Analytics',
      ],
      duration: '4 months',
      teamSize: '5 engineers + 3 content specialists',
      featured: false,
    },
    {
      id: 'cloud-infrastructure-optimization',
      title: 'Cloud Infrastructure Optimization',
      company: 'E-commerce Platform',
      industry: 'Technology',
      challenge:
        'High cloud costs, performance issues, and manual scaling requirements',
      solution:
        'Built self-healing, auto-scaling cloud infrastructure with intelligent resource management',
      results: [
        '50% reduction in cloud costs',
        '99.9% uptime achieved',
        '3x improvement in response times',
        'Zero manual intervention required',
      ],
      technologies: [
        'Auto-scaling',
        'Load Balancing',
        'Monitoring',
        'Cost Optimization',
      ],
      duration: '8 months',
      teamSize: '6 DevOps engineers',
      featured: false,
    },
    {
      id: 'customer-service-automation',
      title: 'Intelligent Customer Service Automation',
      company: 'Financial Services Provider',
      industry: 'Financial Services',
      challenge: 'High customer service costs and long response times',
      solution:
        'Implemented AI-powered chatbots and automated ticket routing systems',
      results: [
        '80% reduction in response time',
        '60% decrease in customer service costs',
        '90% customer satisfaction rate',
        '24/7 automated support coverage',
      ],
      technologies: [
        'Chatbots',
        'Natural Language Processing',
        'Ticket Routing',
        'Sentiment Analysis',
      ],
      duration: '5 months',
      teamSize: '4 engineers + 2 customer service specialists',
      featured: false,
    },
    {
      id: 'data-analytics-transformation',
      title: 'Data Analytics Transformation',
      company: 'Healthcare Provider',
      industry: 'Healthcare',
      challenge:
        'Inability to leverage data for patient care improvements and operational efficiency',
      solution:
        'Built comprehensive data analytics platform with real-time insights and predictive modeling',
      results: [
        '30% improvement in patient outcomes',
        '40% reduction in operational costs',
        'Real-time data insights',
        'Predictive analytics for patient care',
      ],
      technologies: [
        'Big Data',
        'Machine Learning',
        'Real-time Analytics',
        'Predictive Modeling',
      ],
      duration: '10 months',
      teamSize: '10 data scientists + 5 engineers',
      featured: false,
    },
  ];

  return (
    <>
      <Head>
        <title>
          Case Studies | Zion Tech Group - AI & Automation Success Stories
        </title>
        <meta
          name='description'
          content='Explore real-world success stories of AI automation implementation across various industries. See how our solutions drive measurable business results.'
        />
        <meta property='og:title' content='Case Studies | Zion Tech Group' />
        <meta
          property='og:description'
          content='Real-world success stories of AI automation implementation.'
        />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>

      <div className='min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white'>
        <main className='container mx-auto px-6 py-12'>
          <div className='max-w-7xl mx-auto'>
            <nav className='mb-8'>
              <Link
                href='/'
                className='text-cyan-400 hover:text-cyan-300 transition-colors'
              >
                ← Back to Home
              </Link>
            </nav>

            <header className='text-center mb-16'>
              <h1 className='text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent'>
                Case Studies
              </h1>
              <p className='text-xl text-white/80 max-w-3xl mx-auto'>
                Real-world success stories demonstrating the transformative
                power of AI automation across various industries and use cases.
              </p>
            </header>

            {/* Featured Case Study */}
            {caseStudies
              .filter(study => study.featured)
              .map(study => (
                <section key={study.id} className='mb-20'>
                  <div className='text-center mb-8'>
                    <span className='px-4 py-2 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30'>
                      Featured Case Study
                    </span>
                  </div>
                  <div className='bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                      <div>
                        <div className='mb-4'>
                          <span className='px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30'>
                            {study.industry}
                          </span>
                        </div>
                        <h2 className='text-3xl font-bold mb-4 text-white'>
                          {study.title}
                        </h2>
                        <p className='text-cyan-400 font-semibold text-lg mb-4'>
                          {study.company}
                        </p>

                        <div className='space-y-4 mb-6'>
                          <div>
                            <h4 className='font-semibold text-cyan-400 mb-2'>
                              Challenge
                            </h4>
                            <p className='text-white/80'>{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className='font-semibold text-fuchsia-400 mb-2'>
                              Solution
                            </h4>
                            <p className='text-white/80'>{study.solution}</p>
                          </div>
                        </div>

                        <div className='flex items-center gap-4 text-sm text-white/60 mb-6'>
                          <span>Duration: {study.duration}</span>
                          <span>Team: {study.teamSize}</span>
                        </div>
                      </div>

                      <div>
                        <h4 className='font-semibold text-green-400 mb-4 text-lg'>
                          Results
                        </h4>
                        <div className='space-y-3 mb-6'>
                          {study.results.map((result, index) => (
                            <div
                              key={index}
                              className='flex items-center gap-3'
                            >
                              <div className='w-2 h-2 bg-green-400 rounded-full'></div>
                              <span className='text-white/90'>{result}</span>
                            </div>
                          ))}
                        </div>

                        <h4 className='font-semibold text-blue-400 mb-3'>
                          Technologies Used
                        </h4>
                        <div className='flex flex-wrap gap-2'>
                          {study.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className='px-3 py-1 bg-blue-400/20 text-blue-400 text-xs rounded-full border border-blue-400/30'
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className='mt-8 pt-6 border-t border-white/20 text-center'>
                      <Link
                        href={`/case-studies/${study.id}`}
                        className='inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300'
                      >
                        Read Full Case Study
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                </section>
              ))}

            {/* All Case Studies Grid */}
            <section>
              <h2 className='text-3xl font-bold mb-8 text-center text-white'>
                All Case Studies
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {caseStudies
                  .filter(study => !study.featured)
                  .map(study => (
                    <div
                      key={study.id}
                      className='bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300'
                    >
                      <div className='mb-4'>
                        <span className='px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full border border-cyan-400/30'>
                          {study.industry}
                        </span>
                      </div>
                      <h3 className='text-xl font-bold mb-3 text-white'>
                        {study.title}
                      </h3>
                      <p className='text-cyan-400 font-semibold mb-4'>
                        {study.company}
                      </p>

                      <div className='space-y-3 mb-6'>
                        <div>
                          <h4 className='font-semibold text-cyan-400 text-sm'>
                            Challenge
                          </h4>
                          <p className='text-white/80 text-sm'>
                            {study.challenge}
                          </p>
                        </div>
                        <div>
                          <h4 className='font-semibold text-fuchsia-400 text-sm'>
                            Solution
                          </h4>
                          <p className='text-white/80 text-sm'>
                            {study.solution}
                          </p>
                        </div>
                      </div>

                      <div className='mb-4'>
                        <h4 className='font-semibold text-green-400 text-sm mb-2'>
                          Key Results
                        </h4>
                        <ul className='space-y-1'>
                          {study.results.slice(0, 2).map((result, index) => (
                            <li
                              key={index}
                              className='text-white/70 text-sm flex items-center gap-2'
                            >
                              <div className='w-1.5 h-1.5 bg-green-400 rounded-full'></div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className='flex items-center justify-between'>
                        <div className='text-white/60 text-xs'>
                          Duration: {study.duration}
                        </div>
                        <Link
                          href={`/case-studies/${study.id}`}
                          className='text-cyan-400 hover:text-cyan-300 transition-colors font-semibold text-sm'
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </section>

            {/* Call to Action */}
            <section className='mt-20 text-center'>
              <div className='bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20'>
                <h2 className='text-2xl font-bold mb-4 text-white'>
                  Ready to Transform Your Business?
                </h2>
                <p className='text-white/80 mb-6 max-w-2xl mx-auto'>
                  These case studies demonstrate the real impact of AI
                  automation. Let&apos;s discuss how we can help you achieve
                  similar results.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <Link
                    href='/contact'
                    className='bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300'
                  >
                    Get Started
                  </Link>
                  <Link
                    href='/services'
                    className='px-8 py-4 border border-white/20 rounded-lg text-white hover:border-cyan-400/50 transition-all duration-300'
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
