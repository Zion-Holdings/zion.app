import React from 'react';
import Head from 'next/head';

export default function ResourcesPage() {
  const whitepapers = [
    {
      id: 1,
      title: "The Future of Autonomous AI Systems",
      description: "Comprehensive analysis of autonomous AI technology trends and business implications",
      category: "AI & Automation",
      downloadCount: "2,847",
      date: "2025-01-19",
      size: "2.4 MB",
      image: "📊"
    },
    {
      id: 2,
      title: "Cloud-Native Architecture Best Practices",
      description: "Essential guidelines for building scalable and resilient cloud infrastructure",
      category: "Cloud & Infrastructure",
      downloadCount: "1,923",
      date: "2025-01-17",
      size: "1.8 MB",
      image: "☁️"
    },
    {
      id: 3,
      title: "DevOps Automation Strategies",
      description: "Advanced techniques for automating software development and deployment pipelines",
      category: "DevOps & CI/CD",
      downloadCount: "1,456",
      date: "2025-01-15",
      size: "3.1 MB",
      image: "⚡"
    },
    {
      id: 4,
      title: "Machine Learning in Production",
      description: "Practical guide to deploying and maintaining ML models in production environments",
      category: "Machine Learning",
      downloadCount: "1,234",
      date: "2025-01-14",
      size: "2.7 MB",
      image: "🧠"
    }
  ];

  const guides = [
    {
      id: 1,
      title: "Getting Started with Autonomous Systems",
      description: "Step-by-step guide to implementing your first autonomous technology solution",
      level: "Beginner",
      readTime: "15 min",
      image: "🚀"
    },
    {
      id: 2,
      title: "AI Ethics and Responsible Development",
      description: "Essential principles for building fair, transparent, and beneficial AI systems",
      level: "Intermediate",
      readTime: "20 min",
      image: "⚖️"
    },
    {
      id: 3,
      title: "Performance Optimization Techniques",
      description: "Advanced strategies for optimizing autonomous system performance and efficiency",
      level: "Advanced",
      readTime: "25 min",
      image: "📈"
    },
    {
      id: 4,
      title: "Security Best Practices for AI Systems",
      description: "Comprehensive security guidelines for protecting autonomous AI applications",
      level: "Intermediate",
      readTime: "18 min",
      image: "🔒"
    }
  ];

  const tools = [
    {
      id: 1,
      title: "Performance Benchmarking Tool",
      description: "Open-source tool for measuring and comparing autonomous system performance",
      category: "Development",
      status: "Open Source",
      image: "📊"
    },
    {
      id: 2,
      title: "AI Model Monitoring Dashboard",
      description: "Real-time monitoring and alerting for machine learning models in production",
      category: "Monitoring",
      status: "Free Tier",
      image: "📱"
    },
    {
      id: 3,
      title: "Automation Workflow Designer",
      description: "Visual tool for designing and testing autonomous workflow processes",
      category: "Design",
      status: "Beta",
      image: "🎨"
    },
    {
      id: 4,
      title: "Security Assessment Framework",
      description: "Comprehensive framework for assessing AI system security and compliance",
      category: "Security",
      status: "Open Source",
      image: "🛡️"
    }
  ];

  const webinars = [
    {
      id: 1,
      title: "Autonomous AI Implementation Strategies",
      description: "Learn from industry experts about successful autonomous AI deployment",
      date: "2025-02-15",
      duration: "60 min",
      speaker: "Dr. Sarah Chen",
      image: "🎥"
    },
    {
      id: 2,
      title: "Cloud-Native Security Best Practices",
      description: "Essential security considerations for modern cloud infrastructure",
      date: "2025-02-22",
      duration: "45 min",
      speaker: "Michael Rodriguez",
      image: "🔐"
    },
    {
      id: 3,
      title: "The Future of DevOps Automation",
      description: "Exploring next-generation automation in software development",
      date: "2025-03-01",
      duration: "75 min",
      speaker: "Alex Thompson",
      image: "🤖"
    }
  ];

  return (
    <>
      <Head>
        <title>Resources | Zion Tech Group - Knowledge Hub</title>
        <meta name="description" content="Access comprehensive resources including whitepapers, guides, tools, and webinars on autonomous technology and AI innovation." />
        <meta property="og:title" content="Resources - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive resources on autonomous technology and AI innovation." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Resources
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive knowledge hub featuring whitepapers, guides, tools, and webinars to accelerate your autonomous technology journey
            </p>
          </section>

          <section className="mx-auto max-w-7xl space-y-20">
            {/* Whitepapers */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Whitepapers & Research</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whitepapers.map((paper) => (
                  <div key={paper.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{paper.image}</div>
                      <div className="flex-1">
                        <div className="mb-2">
                          <span className="inline-block px-2 py-1 bg-cyan-400/20 text-cyan-300 text-xs rounded border border-cyan-400/30">
                            {paper.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-white">{paper.title}</h3>
                        <p className="text-white/70 text-sm mb-3">{paper.description}</p>
                        <div className="flex items-center justify-between text-xs text-white/50">
                          <span>📥 {paper.downloadCount} downloads</span>
                          <span>📅 {paper.date}</span>
                          <span>💾 {paper.size}</span>
                        </div>
                        <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                          Download Whitepaper
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guides */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Implementation Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guides.map((guide) => (
                  <div key={guide.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{guide.image}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="inline-block px-2 py-1 bg-fuchsia-400/20 text-fuchsia-300 text-xs rounded border border-fuchsia-400/30">
                            {guide.level}
                          </span>
                          <span className="text-white/50 text-xs">⏱️ {guide.readTime}</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-white">{guide.title}</h3>
                        <p className="text-white/70 text-sm mb-3">{guide.description}</p>
                        <button className="w-full px-4 py-2 bg-gradient-to-r from-fuchsia-400 to-purple-400 text-white font-semibold rounded-lg hover:from-fuchsia-500 hover:to-purple-500 transition-all duration-200">
                          Read Guide
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Free Tools & Utilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tools.map((tool) => (
                  <div key={tool.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{tool.image}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="inline-block px-2 py-1 bg-green-400/20 text-green-300 text-xs rounded border border-green-400/30">
                            {tool.category}
                          </span>
                          <span className="inline-block px-2 py-1 bg-blue-400/20 text-blue-300 text-xs rounded border border-blue-400/30">
                            {tool.status}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-white">{tool.title}</h3>
                        <p className="text-white/70 text-sm mb-3">{tool.description}</p>
                        <button className="w-full px-4 py-2 bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold rounded-lg hover:from-green-500 hover:to-blue-500 transition-all duration-200">
                          Access Tool
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Webinars */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Upcoming Webinars</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {webinars.map((webinar) => (
                  <div key={webinar.id} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{webinar.image}</div>
                      <span className="inline-block px-2 py-1 bg-purple-400/20 text-purple-300 text-xs rounded border border-purple-400/30">
                        {webinar.duration}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white text-center">{webinar.title}</h3>
                    <p className="text-white/70 text-sm mb-3 text-center">{webinar.description}</p>
                    <div className="text-center text-xs text-white/50 mb-4">
                      <p>📅 {webinar.date}</p>
                      <p>👤 {webinar.speaker}</p>
                    </div>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-400 to-indigo-400 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-indigo-500 transition-all duration-200">
                      Register Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 backdrop-blur-xl rounded-2xl p-12 border border-cyan-400/30">
                <h2 className="text-3xl font-bold mb-4 text-cyan-400">Stay Updated</h2>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  Get the latest resources, insights, and updates on autonomous technology delivered to your inbox. 
                  Join thousands of professionals staying ahead of the curve.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200">
                    Subscribe
                  </button>
                </div>
                <p className="text-white/60 text-sm mt-4">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}