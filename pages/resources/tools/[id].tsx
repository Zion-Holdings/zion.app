import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Mock tools data - in a real app, this would come from an API or database
const tools = {
  'ai-performance-analyzer': {
    id: 'ai-performance-analyzer',
    title: 'AI Performance Analyzer',
    description: 'Advanced tool for analyzing and optimizing AI model performance across various metrics.',
    type: 'Analytics',
    estimatedTime: '15-30 min',
    features: [
      'Real-time performance monitoring',
      'Automated optimization suggestions',
      'Performance trend analysis',
      'Resource utilization tracking'
    ],
    useCases: [
      'Model performance evaluation',
      'Resource optimization',
      'Performance bottleneck identification',
      'Scalability planning'
    ]
  },
  'automation-workflow-builder': {
    id: 'automation-workflow-builder',
    title: 'Automation Workflow Builder',
    description: 'Visual workflow builder for creating complex automation sequences without coding.',
    type: 'Workflow',
    estimatedTime: '30-60 min',
    features: [
      'Drag-and-drop interface',
      'Pre-built automation templates',
      'Conditional logic support',
      'Integration with popular services'
    ],
    useCases: [
      'Business process automation',
      'Marketing campaign automation',
      'Customer service workflows',
      'Data processing pipelines'
    ]
  },
  'security-vulnerability-scanner': {
    id: 'security-vulnerability-scanner',
    title: 'Security Vulnerability Scanner',
    description: 'Comprehensive security assessment tool for identifying and prioritizing security risks.',
    type: 'Security',
    estimatedTime: '45-90 min',
    features: [
      'Automated vulnerability detection',
      'Risk prioritization',
      'Compliance reporting',
      'Remediation guidance'
    ],
    useCases: [
      'Security audits',
      'Compliance assessments',
      'Risk management',
      'Security monitoring'
    ]
  }
};

export default function ToolPage() {
  const router = useRouter();
  const { id } = router.query;
  
  const tool = tools[id as keyof typeof tools];

  if (!tool) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Tool Not Found</h1>
            <p className="text-white/80 mb-8">The requested tool could not be found.</p>
            <Link href="/resources" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
              Back to Resources
            </Link>
          </div>
        </main>
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
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/resources" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              ← Back to Resources
            </Link>
          </nav>

          {/* Header */}
          <header className="text-center mb-16">
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🔧</span>
            </div>
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              {tool.title}
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-6">
              {tool.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-green-400/20 text-green-400 text-sm rounded-full border border-green-400/30">
                {tool.type}
              </span>
              <span className="px-4 py-2 bg-blue-400/20 text-blue-400 text-sm rounded-full border border-blue-400/30">
                Est. time: {tool.estimatedTime}
              </span>
            </div>
          </header>

          {/* Tool Content */}
          <div className="max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tool.features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-lg p-4 border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-white/90">{feature}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">Use Cases</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tool.useCases.map((useCase, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-lg p-4 border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-fuchsia-400 rounded-full"></div>
                      <span className="text-white/90">{useCase}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tool Demo/Launch Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8 border border-green-500/20 text-center">
                <h2 className="text-2xl font-bold mb-4 text-white">Ready to Get Started?</h2>
                <p className="text-white/80 mb-6">
                  Launch the tool and begin optimizing your processes with AI-powered automation.
                </p>
                <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-blue-400 text-white rounded-lg font-semibold hover:from-green-500 hover:to-blue-500 transition-all duration-300 text-lg">
                  Launch {tool.title}
                </button>
                <p className="text-white/60 text-sm mt-4">
                  Estimated completion time: {tool.estimatedTime}
                </p>
              </div>
            </section>

            {/* Related Tools */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-white">Explore More Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.values(tools)
                  .filter(t => t.id !== tool.id)
                  .slice(0, 2)
                  .map((relatedTool) => (
                    <Link 
                      key={relatedTool.id}
                      href={`/resources/tools/${relatedTool.id}`}
                      className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/30 transition-all duration-300"
                    >
                      <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors mb-2">
                        {relatedTool.title}
                      </h3>
                      <p className="text-white/70 text-sm mb-3">{relatedTool.description}</p>
                      <span className="inline-block px-3 py-1 bg-green-400/20 text-green-400 text-xs rounded-full border border-green-400/30">
                        {relatedTool.type}
                      </span>
                    </Link>
                  ))}
              </div>
            </section>

            {/* CTA */}
            <section className="text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <h2 className="text-2xl font-bold mb-4 text-white">Need Custom Solutions?</h2>
                <p className="text-white/80 mb-6">
                  Our team can build custom tools and automation solutions tailored to your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300">
                    Contact Us
                  </Link>
                  <Link href="/services" className="px-6 py-3 border border-white/20 text-white rounded-lg hover:border-cyan-400/50 transition-all duration-300">
                    Our Services
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