import React from 'react';
import Head from 'next/head';

export default function ResourcesPage() {
  const resources = [
    {
      category: 'AI & Machine Learning',
      items: [
        {
          title: 'AI Development Best Practices',
          description: 'Comprehensive guide to building robust AI systems',
          type: 'Guide',
          link: '#',
          icon: '🤖'
        },
        {
          title: 'Machine Learning Model Optimization',
          description: 'Techniques for improving ML model performance',
          type: 'Technical Paper',
          link: '#',
          icon: '⚡'
        },
        {
          title: 'Ethical AI Framework',
          description: 'Our approach to responsible AI development',
          type: 'Framework',
          link: '#',
          icon: '⚖️'
        }
      ]
    },
    {
      category: 'Automation & DevOps',
      items: [
        {
          title: 'CI/CD Pipeline Setup',
          description: 'Step-by-step guide to automated deployment',
          type: 'Tutorial',
          link: '#',
          icon: '🔧'
        },
        {
          title: 'Infrastructure as Code',
          description: 'Best practices for IaC implementation',
          type: 'Guide',
          link: '#',
          icon: '🏗️'
        },
        {
          title: 'Monitoring & Alerting',
          description: 'Comprehensive monitoring strategy guide',
          type: 'Strategy',
          link: '#',
          icon: '📊'
        }
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      items: [
        {
          title: 'Cloud Migration Checklist',
          description: 'Essential steps for successful cloud migration',
          type: 'Checklist',
          link: '#',
          icon: '☁️'
        },
        {
          title: 'Performance Optimization',
          description: 'Techniques for maximizing cloud performance',
          type: 'Guide',
          link: '#',
          icon: '🚀'
        },
        {
          title: 'Security Hardening',
          description: 'Cloud security best practices and implementation',
          type: 'Security Guide',
          link: '#',
          icon: '🔒'
        }
      ]
    },
    {
      category: 'Data & Analytics',
      items: [
        {
          title: 'Data Strategy Framework',
          description: 'Building a comprehensive data strategy',
          type: 'Framework',
          link: '#',
          icon: '📈'
        },
        {
          title: 'Business Intelligence Setup',
          description: 'Implementing effective BI solutions',
          type: 'Implementation Guide',
          link: '#',
          icon: '💡'
        },
        {
          title: 'Real-time Analytics',
          description: 'Building real-time data processing systems',
          type: 'Technical Guide',
          link: '#',
          icon: '⏱️'
        }
      ]
    }
  ];

  const caseStudies = [
    {
      title: 'Financial Services Automation',
      description: 'How we helped a major bank automate their compliance processes',
      industry: 'Financial Services',
      results: '40% reduction in processing time',
      image: '🏦'
    },
    {
      title: 'E-commerce AI Optimization',
      description: 'Implementing AI-powered recommendations for increased sales',
      industry: 'E-commerce',
      results: '25% increase in conversion rate',
      image: '🛒'
    },
    {
      title: 'Healthcare Data Analytics',
      description: 'Building predictive analytics for patient care optimization',
      industry: 'Healthcare',
      results: '30% improvement in patient outcomes',
      image: '🏥'
    }
  ];

  return (
    <>
      <Head>
        <title>Resources | Zion Tech Group - AI & Automation Resources</title>
        <meta name="description" content="Access Zion Tech Group's comprehensive collection of AI, automation, and technology resources, guides, and case studies." />
        <meta property="og:title" content="Resources - Zion Tech Group" />
        <meta property="og:description" content="AI, automation, and technology resources, guides, and case studies." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Resources & Insights
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Access our comprehensive collection of AI, automation, and technology resources, 
              guides, and real-world case studies to accelerate your digital transformation.
            </p>
          </section>

          {/* Resources by Category */}
          <section className="mx-auto max-w-7xl mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Resource Library</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {resources.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400">{category.category}</h3>
                  
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-200">
                        <div className="flex items-start gap-3">
                          <div className="text-2xl">{item.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-white">{item.title}</h4>
                              <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30">
                                {item.type}
                              </span>
                            </div>
                            <p className="text-white/70 text-sm mb-2">{item.description}</p>
                            <a 
                              href={item.link} 
                              className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                            >
                              Access Resource →
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Case Studies */}
          <section className="mx-auto max-w-7xl mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">Success Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="text-4xl mb-4 text-center">{study.image}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{study.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{study.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/50">Industry:</span>
                      <span className="text-xs text-cyan-400">{study.industry}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/50">Results:</span>
                      <span className="text-xs text-green-400">{study.results}</span>
                    </div>
                  </div>
                  
                  <a 
                    href="#" 
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                  >
                    Read Full Case Study →
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Additional Resources */}
          <section className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-fuchsia-400">Webinars & Events</h2>
                <p className="text-white/70 mb-6">
                  Join our upcoming webinars and events to learn from industry experts 
                  and stay updated on the latest AI and automation trends.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-fuchsia-400 rounded-full"></div>
                    <span className="text-white/80 text-sm">AI Ethics in Practice - Jan 25, 2025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-fuchsia-400 rounded-full"></div>
                    <span className="text-white/80 text-sm">Automation ROI Workshop - Feb 2, 2025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-fuchsia-400 rounded-full"></div>
                    <span className="text-white/80 text-sm">Cloud-Native AI Summit - Feb 15, 2025</span>
                  </div>
                </div>
                <a href="/contact" className="inline-block mt-4 text-fuchsia-400 hover:text-fuchsia-300 font-medium transition-colors">
                  Register for Events →
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-green-400">Newsletter & Updates</h2>
                <p className="text-white/70 mb-6">
                  Stay informed about the latest developments in AI, automation, and technology 
                  with our monthly newsletter and regular updates.
                </p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-400 to-cyan-400 text-white font-bold py-3 px-6 rounded-lg hover:from-green-500 hover:to-cyan-500 transition-all duration-200"
                  >
                    Subscribe to Newsletter
                  </button>
                </form>
                <p className="text-white/50 text-xs mt-2">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mx-auto max-w-4xl text-center mt-20">
            <div className="bg-gradient-to-r from-cyan-400/10 to-fuchsia-400/10 backdrop-blur-xl rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Get Started?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Explore our resources, learn from our experts, and discover how Zion Tech Group 
                can help you implement cutting-edge AI and automation solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105"
                >
                  Get in Touch
                </a>
                <a 
                  href="/services" 
                  className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}