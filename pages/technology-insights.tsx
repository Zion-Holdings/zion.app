import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function TechnologyInsightsPage() {
  const technologyTrends = [
    {
      id: 'quantum-computing',
      title: 'Quantum Computing in 2025',
      description: 'Exploring the latest developments in quantum computing and their implications for AI and automation.',
      category: 'Emerging Tech',
      readTime: '15 min read',
      featured: true
    },
    {
      id: 'edge-ai',
      title: 'Edge AI Revolution',
      description: 'How edge computing is transforming AI deployment and enabling real-time intelligent applications.',
      category: 'AI/ML',
      readTime: '12 min read',
      featured: false
    },
    {
      id: 'autonomous-vehicles',
      title: 'Autonomous Vehicle Technology',
      description: 'The current state and future of autonomous vehicle technology and its broader applications.',
      category: 'Autonomy',
      readTime: '18 min read',
      featured: false
    }
  ];

  const researchAreas = [
    {
      title: 'Autonomous Systems Research',
      description: 'Pioneering research in building truly autonomous systems that can operate independently.',
      focus: ['Decision Making', 'Self-Learning', 'Adaptive Behavior', 'System Integration'],
      icon: '🔬'
    },
    {
      title: 'AI Ethics & Governance',
      description: 'Research into responsible AI development and ethical considerations for autonomous systems.',
      focus: ['Ethical AI', 'Bias Detection', 'Transparency', 'Accountability'],
      icon: '⚖️'
    },
    {
      title: 'Human-AI Collaboration',
      description: 'Exploring how humans and AI can work together effectively and safely.',
      focus: ['Human-AI Interface', 'Collaborative Decision Making', 'Safety Protocols', 'Trust Building'],
      icon: '🤝'
    }
  ];

  const whitepapers = [
    {
      id: 'autonomous-systems-whitepaper',
      title: 'The Future of Autonomous Systems',
      description: 'A comprehensive analysis of autonomous technology trends and implementation strategies.',
      pages: '45',
      category: 'Technology',
      downloadUrl: '/whitepapers/autonomous-systems-future.pdf'
    },
    {
      id: 'ai-ethics-framework',
      title: 'AI Ethics Framework for Business',
      description: 'Establishing ethical guidelines for AI implementation in enterprise environments.',
      pages: '32',
      category: 'Ethics',
      downloadUrl: '/whitepapers/ai-ethics-framework.pdf'
    },
    {
      id: 'automation-roi-guide',
      title: 'Automation ROI Guide',
      description: 'How to calculate and maximize return on investment for automation initiatives.',
      pages: '28',
      category: 'Business',
      downloadUrl: '/whitepapers/automation-roi-guide.pdf'
    }
  ];

  return (
    <>
      <Head>
        <title>Technology Insights | Zion Tech Group - Research & Innovation</title>
        <meta name="description" content="Explore Zion Tech Group's technology insights, research, and thought leadership in AI, automation, and emerging technologies." />
        <meta property="og:title" content="Technology Insights | Zion Tech Group" />
        <meta property="og:description" content="Research insights, technology trends, and thought leadership in AI and automation." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Technology Insights
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Research insights, technology trends, and thought leadership in AI, automation, and emerging technologies
            </p>
          </section>

          <section className="mx-auto max-w-7xl">
            {/* Technology Trends */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">Latest Technology Trends</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologyTrends.map((trend, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-fuchsia-400/20 text-fuchsia-400 text-sm rounded-full">{trend.category}</span>
                      <span className="text-white/60 text-sm">{trend.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{trend.title}</h3>
                    <p className="text-white/70 mb-4">{trend.description}</p>
                    <Link 
                      href={`/blog/${trend.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Read More <span className="ml-1">→</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Research Areas */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-fuchsia-400">Research Focus Areas</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {researchAreas.map((area, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6">
                    <div className="text-4xl mb-4">{area.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-white">{area.title}</h3>
                    <p className="text-white/70 mb-4">{area.description}</p>
                    <ul className="space-y-2">
                      {area.focus.map((focus, focusIndex) => (
                        <li key={focusIndex} className="text-sm text-white/60 flex items-center">
                          <span className="text-cyan-400 mr-2">•</span>
                          {focus}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Whitepapers */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Research Whitepapers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {whitepapers.map((paper, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-400/20 text-blue-400 text-sm rounded-full">{paper.category}</span>
                      <span className="text-white/60 text-sm">{paper.pages} pages</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{paper.title}</h3>
                    <p className="text-white/70 mb-4">{paper.description}</p>
                    <Link 
                      href={paper.downloadUrl}
                      className="inline-flex items-center text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                    >
                      Download PDF <span className="ml-1">→</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Innovation Lab */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Innovation Lab</h2>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-cyan-400">Cutting-Edge Research</h3>
                    <p className="text-white/80 mb-6">
                      Our innovation lab is dedicated to exploring the frontiers of technology, conducting research in autonomous systems, 
                      AI ethics, and human-AI collaboration. We work with leading institutions and industry partners to advance the state of the art.
                    </p>
                    <ul className="space-y-2 text-white/70">
                      <li>• Advanced AI research and development</li>
                      <li>• Autonomous system prototyping</li>
                      <li>• Ethical AI framework development</li>
                      <li>• Industry collaboration and partnerships</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl mb-4">🧪</div>
                    <p className="text-white/60 text-sm">Innovation Lab</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 backdrop-blur-xl rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Join the Innovation Journey</h2>
              <p className="text-xl text-white/80 mb-6">
                Stay updated with the latest technology insights and research from Zion Tech Group
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact"
                  className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105"
                >
                  Get in Touch
                </Link>
                <Link 
                  href="/blog"
                  className="px-8 py-3 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  Read Our Blog
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}