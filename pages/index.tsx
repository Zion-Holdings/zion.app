import React from 'react';
import Head from 'next/head';
import Hero from '../components/ui/Hero';
import FeatureCard from '../components/ui/FeatureCard';
import Section from '../components/ui/Section';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group — World's Most Advanced Autonomous Innovation Hub & AI-Powered Cloud Platform</title>
        <meta name="description" content="Experience the future of autonomous technology with 227+ intelligent automations, AI-powered cloud systems, comprehensive redundancy infrastructure, and zero-downtime operations. The most advanced autonomous platform ever built." />
        <meta property="og:title" content="Zion Tech Group — World's Most Advanced Autonomous Innovation Hub & AI-Powered Cloud Platform" />
        <meta property="og:description" content="Experience the future of autonomous technology with 227+ intelligent automations, AI-powered cloud systems, comprehensive redundancy infrastructure, and zero-downtime operations." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      {/* Hero Section */}
      <Hero
        title="The Future of Autonomous Technology"
        subtitle="Experience the world's most advanced autonomous innovation hub delivering cutting-edge technology solutions, intelligent automation systems, and the future of cloud-native AI infrastructure."
        ctaPrimary={{
          text: "Get Started",
          href: "/contact"
        }}
        ctaSecondary={{
          text: "Learn More",
          href: "/about"
        }}
        stats={[
          { value: "227+", label: "Intelligent Automations" },
          { value: "2960+", label: "Dynamic Pages" },
          { value: "12", label: "Core Components" },
          { value: "99.99%", label: "Uptime" }
        ]}
      />

      {/* Features Section */}
      <Section className="bg-gradient-to-br from-gray-900 to-black">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary Platform Capabilities
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover how our autonomous systems are transforming the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="☁️"
            title="Autonomous Cloud Systems"
            description="Self-healing CI/CD pipelines, intelligent build orchestration, automated dependency management, and real-time performance monitoring with zero-downtime deployments."
            gradient="blue"
          />
          
          <FeatureCard
            icon="🤖"
            title="AI-Powered Automation"
            description="227+ autonomous agents, intelligent content generation, automated quality assurance, smart error recovery, and predictive maintenance systems."
            gradient="purple"
          />
          
          <FeatureCard
            icon="🔄"
            title="Redundancy & Reliability"
            description="Multi-layer redundancy systems, automatic failover, comprehensive monitoring, and intelligent recovery mechanisms ensuring continuous operation."
            gradient="green"
          />
          
          <FeatureCard
            icon="🚀"
            title="Performance Optimization"
            description="Advanced caching strategies, intelligent load balancing, real-time analytics, and automated performance tuning for optimal user experience."
            gradient="orange"
          />
          
          <FeatureCard
            icon="🔒"
            title="Security & Compliance"
            description="Enterprise-grade security, automated threat detection, compliance monitoring, and secure-by-design architecture principles."
            gradient="blue"
          />
          
          <FeatureCard
            icon="📊"
            title="Intelligent Analytics"
            description="Real-time data processing, predictive insights, automated reporting, and intelligent decision-making systems."
            gradient="purple"
          />
        </div>
      </Section>

      {/* Technology Stack Section */}
      <Section className="bg-black">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cutting-Edge Technology Stack
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Built with the latest technologies and frameworks for maximum performance and scalability
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

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Technology?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the future of autonomous technology and experience unprecedented efficiency, reliability, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-white/90 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Start Your Journey
            </a>
            <a
              href="/about"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
