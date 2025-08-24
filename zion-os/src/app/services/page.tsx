import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      category: "AI Autonomous Systems",
      items: [
        {
          title: "AI Autonomous Business Manager",
          description: "Self-managing AI systems that autonomously handle business operations, decision-making, and strategic planning.",
          href: "/services/ai-autonomous-business-manager",
          icon: "🏢"
        },
        {
          title: "AI Autonomous Decision Engine",
          description: "Advanced decision-making AI that analyzes complex data and makes optimal business decisions in real-time.",
          href: "/services/ai-autonomous-decision-engine",
          icon: "🧠"
        },
        {
          title: "AI Autonomous Ecosystem Manager",
          description: "Comprehensive AI system that manages and optimizes entire business ecosystems autonomously.",
          href: "/services/ai-autonomous-ecosystem-manager",
          icon: "🌐"
        },
        {
          title: "AI Autonomous Systems Platform",
          description: "Integrated platform for deploying and managing multiple autonomous AI systems across your organization.",
          href: "/services/ai-autonomous-systems-platform",
          icon: "⚡"
        }
      ]
    },
    {
      category: "Enterprise AI Solutions",
      items: [
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
          description: "Advanced content creation tools that generate high-quality, engaging content for marketing and communications.",
          href: "/services/ai-content-generator",
          icon: "✍️"
        },
        {
          title: "AI Marketing Automation",
          description: "Intelligent marketing automation that personalizes campaigns and optimizes customer engagement.",
          href: "/services/ai-content-marketing-automation",
          icon: "📈"
        }
      ]
    },
    {
      category: "AI Research & Development",
      items: [
        {
          title: "AI Consciousness Evolution",
          description: "Cutting-edge research in AI consciousness, neural networks, and cognitive computing systems.",
          href: "/services/ai-consciousness-evolution",
          icon: "🌟"
        },
        {
          title: "AI Autonomous Research Assistant",
          description: "AI-powered research tools that accelerate scientific discovery and innovation across all domains.",
          href: "/services/ai-autonomous-research-assistant",
          icon: "🔬"
        },
        {
          title: "AI Neural Network Platform",
          description: "Advanced neural network development and training platform for custom AI model creation.",
          href: "/services/quantum-neural-network-platform",
          icon: "🕸️"
        },
        {
          title: "AI Brain-Computer Interface",
          description: "Next-generation brain-computer interface technology for seamless human-AI interaction.",
          href: "/services/ai-brain-computer-interface",
          icon: "🧬"
        }
      ]
    },
    {
      category: "Quantum & Advanced Technologies",
      items: [
        {
          title: "Quantum Computing Services",
          description: "Quantum computing solutions for complex problem-solving and optimization challenges.",
          href: "/services/quantum-computing",
          icon: "⚛️"
        },
        {
          title: "Quantum Financial Trading",
          description: "Quantum-powered trading algorithms that provide unprecedented market analysis and prediction capabilities.",
          href: "/services/quantum-financial-trading",
          icon: "💰"
        },
        {
          title: "Quantum Cloud Infrastructure",
          description: "Scalable quantum computing infrastructure accessible through the cloud for enterprise applications.",
          href: "/services/quantum-cloud-infrastructure",
          icon: "☁️"
        },
        {
          title: "AI Blockchain Analytics",
          description: "Advanced analytics for blockchain networks using AI to detect patterns and optimize operations.",
          href: "/services/ai-blockchain-analytics",
          icon: "🔗"
        }
      ]
    },
    {
      category: "Industry-Specific Solutions",
      items: [
        {
          title: "AI Healthcare Solutions",
          description: "AI-powered healthcare technologies including autonomous medical diagnosis and treatment planning.",
          href: "/services/ai-autonomous-healthcare-physician",
          icon: "🏥"
        },
        {
          title: "AI Manufacturing Systems",
          description: "Intelligent manufacturing solutions that optimize production processes and quality control.",
          href: "/services/ai-autonomous-manufacturing",
          icon: "🏭"
        },
        {
          title: "AI Logistics Optimization",
          description: "Autonomous logistics systems that streamline supply chains and delivery operations.",
          href: "/services/ai-autonomous-logistics",
          icon: "🚚"
        },
        {
          title: "AI Security Systems",
          description: "Advanced AI-powered security solutions for threat detection and prevention.",
          href: "/services/ai-autonomous-security",
          icon: "🔒"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform every aspect of your business operations. 
            From autonomous systems to quantum computing, we deliver cutting-edge technology that drives innovation and growth.
          </p>
        </div>
      </section>

      {/* Services by Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {services.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {category.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-4xl mb-4">{service.icon}</div>
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
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 py-20 mt-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team to discuss how our AI services can transform your business and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Schedule a Consultation
            </Link>
            <Link href="/solutions" className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:bg-white/10">
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}