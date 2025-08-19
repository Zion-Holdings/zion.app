import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ToolDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [currentStep, setCurrentStep] = useState(1);

  // Tools data
  const tools = {
    'automation-assessment': {
      id: 'automation-assessment',
      title: 'Automation Readiness Assessment',
      description: 'Evaluate your organization\'s readiness for AI automation implementation.',
      type: 'Interactive Tool',
      estimatedTime: '15 minutes',
      fullDescription: 'This comprehensive assessment tool helps organizations evaluate their current state and readiness for AI automation implementation. It covers technology infrastructure, organizational culture, data maturity, and change management capabilities.',
      benefits: [
        'Identify automation opportunities',
        'Assess current capabilities',
        'Plan implementation roadmap',
        'Benchmark against industry standards',
        'Prioritize automation initiatives'
      ],
      features: [
        'Multi-dimensional assessment framework',
        'Industry-specific benchmarking',
        'Detailed gap analysis',
        'Actionable recommendations',
        'Progress tracking capabilities'
      ],
      steps: [
        {
          title: 'Technology Infrastructure',
          description: 'Evaluate your current technology stack, data systems, and integration capabilities.',
          questions: [
            'What is your current cloud infrastructure status?',
            'How mature is your data collection and storage?',
            'What integration capabilities do you have?',
            'How secure is your current infrastructure?'
          ]
        },
        {
          title: 'Organizational Readiness',
          description: 'Assess your team\'s skills, culture, and readiness for change.',
          questions: [
            'What is your team\'s technical expertise level?',
            'How does your organization handle change?',
            'What is your leadership commitment to automation?',
            'How do you measure and track success?'
          ]
        },
        {
          title: 'Data Maturity',
          description: 'Evaluate the quality, accessibility, and governance of your data.',
          questions: [
            'How clean and structured is your data?',
            'What data governance policies do you have?',
            'How accessible is your data across teams?',
            'What data quality metrics do you track?'
          ]
        },
        {
          title: 'Process Optimization',
          description: 'Identify processes that are prime candidates for automation.',
          questions: [
            'Which processes are most repetitive?',
            'What is the current error rate in key processes?',
            'How much time is spent on manual tasks?',
            'Which processes have the highest ROI potential?'
          ]
        }
      ]
    },
    'ai-maturity-model': {
      id: 'ai-maturity-model',
      title: 'AI Maturity Model',
      description: 'Assess your current AI capabilities and plan your transformation journey.',
      type: 'Framework',
      estimatedTime: '30 minutes',
      fullDescription: 'The AI Maturity Model provides a structured framework for organizations to assess their current AI capabilities across multiple dimensions and plan their transformation journey toward AI excellence.',
      benefits: [
        'Comprehensive capability assessment',
        'Clear transformation roadmap',
        'Industry benchmarking',
        'Resource planning guidance',
        'Success measurement framework'
      ],
      features: [
        'Multi-dimensional maturity assessment',
        'Industry-specific benchmarks',
        'Detailed capability mapping',
        'Transformation planning tools',
        'Progress tracking and reporting'
      ],
      steps: [
        {
          title: 'Data Foundation',
          description: 'Assess your data infrastructure, quality, and governance capabilities.',
          questions: [
            'How mature is your data collection process?',
            'What is your data quality management approach?',
            'How well do you govern data access and security?',
            'What is your data integration strategy?'
          ]
        },
        {
          title: 'AI Infrastructure',
          description: 'Evaluate your technical infrastructure for AI development and deployment.',
          questions: [
            'What AI development tools and platforms do you use?',
            'How scalable is your AI infrastructure?',
            'What monitoring and observability tools do you have?',
            'How do you handle model deployment and updates?'
          ]
        },
        {
          title: 'AI Development',
          description: 'Assess your AI development processes and team capabilities.',
          questions: [
            'What is your AI development methodology?',
            'How do you ensure model quality and validation?',
            'What is your approach to ethical AI?',
            'How do you manage AI project lifecycle?'
          ]
        },
        {
          title: 'AI Operations',
          description: 'Evaluate your ability to operate AI systems at scale.',
          questions: [
            'How do you monitor AI system performance?',
            'What is your incident response process?',
            'How do you handle model drift and updates?',
            'What is your AI governance framework?'
          ]
        }
      ]
    },
    'performance-benchmark': {
      id: 'performance-benchmark',
      title: 'Performance Benchmarking Tool',
      description: 'Compare your automation performance against industry standards.',
      type: 'Analytics Tool',
      estimatedTime: '20 minutes',
      fullDescription: 'This benchmarking tool helps organizations compare their automation performance against industry standards and best practices, providing insights for improvement and competitive positioning.',
      benefits: [
        'Industry performance comparison',
        'Identify improvement opportunities',
        'Benchmark against competitors',
        'Performance trend analysis',
        'Best practice recommendations'
      ],
      features: [
        'Industry-specific benchmarks',
        'Multi-metric comparison',
        'Trend analysis and forecasting',
        'Peer group comparison',
        'Actionable improvement insights'
      ],
      steps: [
        {
          title: 'Performance Metrics',
          description: 'Define and measure your key automation performance indicators.',
          questions: [
            'What are your key automation metrics?',
            'How do you measure automation efficiency?',
            'What is your cost per automation?',
            'How do you track automation ROI?'
          ]
        },
        {
          title: 'Industry Comparison',
          description: 'Compare your performance against industry benchmarks and peers.',
          questions: [
            'What is your industry average performance?',
            'How do you compare to top performers?',
            'What are the industry best practices?',
            'Where do you have competitive advantages?'
          ]
        },
        {
          title: 'Gap Analysis',
          description: 'Identify performance gaps and improvement opportunities.',
          questions: [
            'What are your biggest performance gaps?',
            'Which areas have the highest improvement potential?',
            'What resources do you need to improve?',
            'What is your improvement timeline?'
          ]
        },
        {
          title: 'Action Planning',
          description: 'Develop action plans to close performance gaps.',
          questions: [
            'What specific actions will improve performance?',
            'What resources and budget do you need?',
            'How will you measure improvement progress?',
            'What is your implementation timeline?'
          ]
        }
      ]
    }
  };

  const tool = tools[id as keyof typeof tools];

  if (!tool) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Tool Not Found</h1>
          <p className="text-white/80 mb-8">The tool you're looking for doesn't exist.</p>
          <Link href="/resources" className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
            View All Resources
          </Link>
        </div>
      </div>
    );
  }

  const nextStep = () => {
    if (currentStep < tool.steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <Head>
        <title>{tool.title} | Zion Tech Group - Tool</title>
        <meta name="description" content={tool.fullDescription} />
        <meta property="og:title" content={`${tool.title} | Zion Tech Group`} />
        <meta property="og:description" content={tool.fullDescription} />
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
                <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full border border-green-400/30">
                  {tool.type}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{tool.title}</h1>
              <p className="text-xl text-white/80 max-w-4xl leading-relaxed">{tool.fullDescription}</p>
            </header>

            {/* Tool Info */}
            <section className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">{tool.type}</div>
                  <div className="text-white/80 text-sm">Type</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{tool.estimatedTime}</div>
                  <div className="text-white/80 text-sm">Estimated Time</div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-fuchsia-400 mb-2">{tool.steps.length}</div>
                  <div className="text-white/80 text-sm">Assessment Steps</div>
                </div>
              </div>
            </section>

            {/* Benefits & Features */}
            <section className="mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold mb-4 text-green-400">Key Benefits</h2>
                  <ul className="space-y-3">
                    {tool.benefits.map((benefit, index) => (
                      <li key={index} className="text-white/80 flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-8 border border-white/20">
                  <h2 className="text-2xl font-bold mb-4 text-blue-400">Key Features</h2>
                  <ul className="space-y-3">
                    {tool.features.map((feature, index) => (
                      <li key={index} className="text-white/80 flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Interactive Assessment */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Interactive Assessment</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/80 text-sm">Step {currentStep} of {tool.steps.length}</span>
                    <span className="text-white/80 text-sm">{Math.round((currentStep / tool.steps.length) * 100)}% Complete</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(currentStep / tool.steps.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Current Step */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-white">{tool.steps[currentStep - 1].title}</h3>
                  <p className="text-white/80 text-lg mb-6">{tool.steps[currentStep - 1].description}</p>
                  
                  <div className="space-y-4">
                    {tool.steps[currentStep - 1].questions.map((question, index) => (
                      <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h4 className="font-semibold text-cyan-400 mb-2">Question {index + 1}</h4>
                        <p className="text-white/90">{question}</p>
                        <div className="mt-3">
                          <textarea 
                            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all duration-300"
                            placeholder="Enter your response here..."
                            rows={3}
                          ></textarea>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      currentStep === 1
                        ? 'bg-white/10 text-white/50 cursor-not-allowed'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    Previous
                  </button>
                  
                  {currentStep < tool.steps.length ? (
                    <button
                      onClick={nextStep}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300"
                    >
                      Next Step
                    </button>
                  ) : (
                    <button className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-400 text-white rounded-lg font-semibold hover:from-green-500 hover:to-blue-500 transition-all duration-300">
                      Complete Assessment
                    </button>
                  )}
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Get Started?</h2>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  This tool will help you assess your current state and plan your automation journey. 
                  Get in touch to discuss your results and next steps.
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