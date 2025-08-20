import React from 'react';
import Head from 'next/head';
import Section from '../components/ui/Section';
import FeatureCard from '../components/ui/FeatureCard';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Zion Tech Group - AI-Powered Solutions</title>
        <meta name="description" content="Discover our comprehensive range of AI-powered services including autonomous systems, cloud solutions, and intelligent automation." />
        <meta property="og:title" content="Services | Zion Tech Group" />
        <meta property="og:description" content="AI-powered solutions and autonomous systems." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-black via-gray-900 to-black py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            Comprehensive AI-powered solutions that transform your business and drive innovation
          </p>
        </div>
      </Section>

      {/* Core Services Section */}
      <Section className="bg-gradient-to-br from-gray-900 to-black">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Core Services</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Cutting-edge solutions designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🤖"
            title="AI Development"
            description="Custom AI solutions including machine learning models, natural language processing, computer vision, and autonomous decision-making systems."
            gradient="blue"
          />
          
          <FeatureCard
            icon="☁️"
            title="Cloud Solutions"
            description="Scalable cloud infrastructure, serverless architectures, container orchestration, and automated deployment pipelines."
            gradient="purple"
          />
          
          <FeatureCard
            icon="🔄"
            title="Automation Systems"
            description="Intelligent automation for business processes, workflow optimization, and operational efficiency improvements."
            gradient="green"
          />
          
          <FeatureCard
            icon="🔒"
            title="Security & Compliance"
            description="Enterprise-grade security solutions, threat detection, compliance monitoring, and secure-by-design architecture."
            gradient="orange"
          />
          
          <FeatureCard
            icon="📊"
            title="Data Analytics"
            description="Advanced analytics, real-time dashboards, predictive insights, and data-driven decision support systems."
            gradient="blue"
          />
          
          <FeatureCard
            icon="🚀"
            title="Performance Optimization"
            description="Application performance tuning, load testing, monitoring, and optimization for maximum efficiency."
            gradient="purple"
          />
        </div>
      </Section>

      {/* Specialized Solutions Section */}
      <Section className="bg-black">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Specialized Solutions</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Tailored solutions for specific industry challenges and business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">Enterprise AI Integration</h3>
            <p className="text-white/70 mb-6">
              Seamlessly integrate AI capabilities into your existing enterprise systems with minimal disruption and maximum impact.
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Legacy system modernization
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                API integration services
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Data migration support
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                Training and support
              </li>
            </ul>
          </div>
          
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">Autonomous Operations</h3>
            <p className="text-white/70 mb-6">
              Transform your operations with self-managing systems that continuously optimize and improve performance.
            </p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Self-healing infrastructure
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Predictive maintenance
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Automated scaling
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Intelligent monitoring
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Technology Stack Section */}
      <Section className="bg-gradient-to-br from-gray-900 to-black">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technology Stack</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Built with cutting-edge technologies for maximum performance and scalability
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Next.js", icon: "⚡", color: "from-green-500 to-emerald-500" },
            { name: "React", icon: "⚛️", color: "from-blue-500 to-cyan-500" },
            { name: "TypeScript", icon: "🔷", color: "from-blue-600 to-blue-700" },
            { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-500 to-blue-500" },
            { name: "Node.js", icon: "🟢", color: "from-green-600 to-green-700" },
            { name: "PostgreSQL", icon: "🐘", color: "from-blue-500 to-indigo-600" },
            { name: "Docker", icon: "🐳", color: "from-blue-500 to-cyan-500" },
            { name: "Kubernetes", icon: "☸️", color: "from-blue-500 to-indigo-600" }
          ].map((tech, index) => (
            <div key={index} className="text-center group">
              <div className={`w-20 h-20 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{tech.icon}</span>
              </div>
              <h3 className="text-white font-semibold text-lg group-hover:text-white transition-colors duration-200">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-black">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Process</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A proven methodology that ensures successful delivery and maximum value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Discovery", description: "Understanding your needs and objectives" },
            { step: "02", title: "Strategy", description: "Designing the optimal solution architecture" },
            { step: "03", title: "Development", description: "Building and testing your solution" },
            { step: "04", title: "Deployment", description: "Launching and ongoing support" }
          ].map((phase, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">{phase.step}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{phase.title}</h3>
              <p className="text-white/70">{phase.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI-powered solutions can transform your business and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-white/90 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get a Quote
            </a>
            <a
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}