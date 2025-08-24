import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      category: "AI Autonomous Systems",
      services: [
        {
          title: "AI Autonomous Business Manager",
          description: "Self-operating business management systems that handle operations, decision-making, and growth autonomously.",
          href: "/services/ai-autonomous-business-manager",
          icon: "🏢"
        },
        {
          title: "AI Autonomous Decision Engine",
          description: "Advanced decision-making systems that analyze data and execute strategic decisions without human intervention.",
          href: "/services/ai-autonomous-decision-engine",
          icon: "🧠"
        },
        {
          title: "AI Autonomous Ecosystem Manager",
          description: "Comprehensive ecosystem management platforms that coordinate multiple AI systems and business processes.",
          href: "/services/ai-autonomous-ecosystem-manager",
          icon: "🌐"
        },
        {
          title: "AI Autonomous Systems Platform",
          description: "Integrated platform for deploying and managing autonomous AI systems across your organization.",
          href: "/services/ai-autonomous-systems-platform",
          icon: "🚀"
        }
      ]
    },
    {
      category: "Enterprise AI Solutions",
      services: [
        {
          title: "AI Business Intelligence Suite",
          description: "Comprehensive business intelligence platform powered by advanced AI analytics and machine learning.",
          href: "/services/ai-business-intelligence-suite",
          icon: "📊"
        },
        {
          title: "AI Analytics Copilot",
          description: "AI-powered analytics assistant that helps teams discover insights and make data-driven decisions.",
          href: "/services/ai-analytics-copilot",
          icon: "🔍"
        },
        {
          title: "AI Content Generation",
          description: "Automated content creation systems that generate high-quality marketing materials and business content.",
          href: "/services/ai-content-generator",
          icon: "✍️"
        },
        {
          title: "AI Code Review",
          description: "Automated code review systems that identify issues, suggest improvements, and ensure code quality.",
          href: "/services/ai-code-review",
          icon: "💻"
        }
      ]
    },
    {
      category: "Specialized AI Platforms",
      services: [
        {
          title: "AI Consciousness Evolution Platform",
          description: "Advanced platforms for developing and understanding AI consciousness and cognitive systems.",
          href: "/services/ai-consciousness-evolution-platform",
          icon: "🌟"
        },
        {
          title: "AI Autonomous Research Assistant",
          description: "Intelligent research systems that autonomously conduct research, analyze findings, and generate insights.",
          href: "/services/ai-autonomous-research-assistant",
          icon: "🔬"
        },
        {
          title: "AI Autonomous Creative Director",
          description: "Creative AI systems that manage and execute creative campaigns and content strategies.",
          href: "/services/ai-autonomous-creative-director",
          icon: "🎨"
        },
        {
          title: "AI Autonomous Healthcare Physician",
          description: "AI-powered healthcare systems that assist in diagnosis, treatment planning, and patient care.",
          href: "/services/ai-autonomous-healthcare-physician",
          icon: "🏥"
        }
      ]
    },
    {
      category: "Industry-Specific Solutions",
      services: [
        {
          title: "AI Autonomous Manufacturing",
          description: "Smart manufacturing systems that optimize production, quality control, and supply chain management.",
          href: "/services/ai-autonomous-manufacturing",
          icon: "🏭"
        },
        {
          title: "AI Autonomous Logistics",
          description: "Intelligent logistics systems that optimize routes, inventory, and delivery operations.",
          href: "/services/ai-autonomous-logistics",
          icon: "📦"
        },
        {
          title: "AI Autonomous Security",
          description: "Advanced security systems that detect threats, respond to incidents, and protect digital assets.",
          href: "/services/ai-autonomous-security",
          icon: "🔒"
        },
        {
          title: "AI Autonomous Testing",
          description: "Automated testing systems that ensure software quality and reliability across all platforms.",
          href: "/services/ai-autonomous-testing",
          icon: "🧪"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to revolutionize your business operations. 
            From autonomous systems to specialized industry solutions, we deliver cutting-edge technology that drives growth.
          </p>
        </div>
      </div>

      {/* Services by Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {services.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <Link 
                        href={service.href} 
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
                      >
                        Learn More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Additional AI Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">AI Automation Services</h3>
            <p className="text-gray-300 text-sm mb-4">
              Streamline operations with intelligent automation solutions
            </p>
            <Link href="/services/ai-automation-services" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-white/10 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
            <p className="text-gray-300 text-sm mb-4">
              Next-generation computing power for complex problem solving
            </p>
            <Link href="/services/quantum-computing" className="text-green-400 hover:text-green-300 text-sm font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-white/10 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Research & Development</h3>
            <p className="text-gray-300 text-sm mb-4">
              Cutting-edge research in AI consciousness and quantum systems
            </p>
            <Link href="/research" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
              Learn More →
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 text-center">
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10 rounded-xl p-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI solutions can transform your business operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Schedule a Consultation
            </Link>
            <Link href="/solutions" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-white/10">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}