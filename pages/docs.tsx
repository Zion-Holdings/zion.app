import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function DocsPage() {
  const documentationCategories = [
    {
      title: "Getting Started",
      description: "Quick start guides and setup instructions",
      icon: "🚀",
      color: "from-blue-500 to-blue-600",
      items: [
        { title: "Installation Guide", description: "Set up Zion Tech Group tools and services", link: "#" },
        { title: "First Project", description: "Create your first AI-powered application", link: "#" },
        { title: "Configuration", description: "Configure your development environment", link: "#" },
        { title: "Quick Start", description: "Get up and running in 5 minutes", link: "#" }
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "AI development guides and best practices",
      icon: "🤖",
      color: "from-purple-500 to-purple-600",
      items: [
        { title: "AI Model Training", description: "Train custom AI models with our platform", link: "#" },
        { title: "NLP Solutions", description: "Natural language processing implementation", link: "#" },
        { title: "Computer Vision", description: "Image and video analysis with AI", link: "#" },
        { title: "AI Ethics", description: "Responsible AI development guidelines", link: "#" }
      ]
    },
    {
      title: "Quantum Computing",
      description: "Quantum algorithms and quantum-classical hybrid development",
      icon: "⚛️",
      color: "from-pink-500 to-pink-600",
      items: [
        { title: "Quantum Basics", description: "Introduction to quantum computing concepts", link: "#" },
        { title: "Quantum Algorithms", description: "Implement quantum algorithms", link: "#" },
        { title: "Hybrid Systems", description: "Quantum-classical hybrid applications", link: "#" },
        { title: "Quantum ML", description: "Quantum machine learning techniques", link: "#" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      description: "Cloud deployment and infrastructure management",
      icon: "☁️",
      color: "from-green-500 to-green-600",
      items: [
        { title: "Cloud Deployment", description: "Deploy applications to cloud platforms", link: "#" },
        { title: "DevOps Pipeline", description: "CI/CD and automation workflows", link: "#" },
        { title: "Monitoring", description: "Application performance monitoring", link: "#" },
        { title: "Security", description: "Cloud security best practices", link: "#" }
      ]
    },
    {
      title: "API Reference",
      description: "Complete API documentation and examples",
      icon: "📚",
      color: "from-yellow-500 to-yellow-600",
      items: [
        { title: "REST API", description: "RESTful API endpoints and methods", link: "#" },
        { title: "GraphQL", description: "GraphQL schema and queries", link: "#" },
        { title: "Webhooks", description: "Real-time event notifications", link: "#" },
        { title: "SDKs", description: "Client libraries and SDKs", link: "#" }
      ]
    },
    {
      title: "Tutorials",
      description: "Step-by-step guides and examples",
      icon: "🎓",
      color: "from-indigo-500 to-indigo-600",
      items: [
        { title: "Building AI Chatbots", description: "Create intelligent conversational agents", link: "#" },
        { title: "Data Analysis", description: "Analyze data with AI-powered tools", link: "#" },
        { title: "Automation", description: "Automate business processes with AI", link: "#" },
        { title: "Integration", description: "Integrate with third-party services", link: "#" }
      ]
    }
  ];

  const quickLinks = [
    { title: "API Status", description: "Check service availability", icon: "🟢", link: "#" },
    { title: "Support Center", description: "Get help and support", icon: "💬", link: "/contact" },
    { title: "Community Forum", description: "Connect with developers", icon: "👥", link: "#" },
    { title: "GitHub Repository", description: "View source code", icon: "📦", link: "https://github.com/Zion-Holdings" }
  ];

  return (
    <>
      <Head>
        <title>Documentation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI, quantum computing, and cloud services. Get started with tutorials, API references, and best practices." />
        <meta name="keywords" content="documentation, API reference, tutorials, AI development, quantum computing, cloud services" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Documentation
            </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300">
          Everything you need to build with Zion Tech Group&apos;s cutting-edge AI, 
          quantum computing, and cloud services. From quick starts to advanced tutorials.
        </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#getting-started" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </Link>
              <Link href="#api-reference" className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                API Reference
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => (
                <Link key={index} href={link.link} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center">
                  <div className="text-3xl mb-3">{link.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{link.title}</h3>
                  <p className="text-gray-300 text-sm">{link.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Documentation Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {documentationCategories.map((category, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                  <p className="text-gray-300 mb-6">{category.description}</p>
                  <div className="space-y-3">
                    {category.items.map((item, idx) => (
                      <Link key={idx} href={item.link} className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                        <h4 className="font-medium text-blue-300 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section id="getting-started" className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Getting Started</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Quick Start Guide</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold mb-2">Install Zion CLI</h4>
                      <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
                        npm install -g @zion-tech/cli
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold mb-2">Authenticate</h4>
                      <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
                        zion auth login
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold mb-2">Create Project</h4>
                      <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
                        zion create my-ai-project
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold mb-2">Deploy</h4>
                      <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
                        zion deploy
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Link href="#" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors">
                    View Full Guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* API Reference Section */}
        <section id="api-reference" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">API Reference</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Authentication</h3>
                <p className="text-gray-300 mb-4">All API requests require authentication using your API key in the Authorization header.</p>
                <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm mb-6">
                  Authorization: Bearer YOUR_API_KEY
                </div>
                
                <h4 className="text-xl font-semibold mb-4">Example Request</h4>
                                  <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm mb-6">
                    <div className="text-green-400">POST</div>
                    <div className="text-blue-400">https://api.ziontechgroup.com/v1/ai/chat</div>
                    <div className="text-yellow-400">Content-Type: application/json</div>
                    <div className="text-yellow-400">Authorization: Bearer YOUR_API_KEY</div>
                    <br />
                    <div className="text-gray-300">{'{'}</div>
                    <div className="text-gray-300 ml-4">&quot;model&quot;: &quot;zion-gpt-4&quot;,</div>
                    <div className="text-gray-300 ml-4">&quot;messages&quot;: [</div>
                    <div className="text-gray-300 ml-8">{'{'}</div>
                    <div className="text-gray-300 ml-12">&quot;role&quot;: &quot;user&quot;,</div>
                    <div className="text-gray-300 ml-12">&quot;content&quot;: &quot;Hello, how can you help me?&quot;</div>
                    <div className="text-gray-300 ml-8">{'}'}</div>
                    <div className="text-gray-300 ml-4">]</div>
                    <div className="text-gray-300">{'}'}</div>
                  </div>
                
                <div className="text-center">
                  <Link href="#" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium transition-colors">
                    View Full API Reference
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Need Help?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our support team is here to help 
              you get the most out of our platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                Contact Support
              </Link>
              <Link href="#" className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                Community Forum
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}