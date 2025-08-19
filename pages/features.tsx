import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const FeaturesPage: React.FC = () => {
  const features = [
    {
      title: "Autonomous Cloud Automations",
      description: "227+ automated workflows that run continuously to maintain, optimize, and improve your application.",
      icon: "🤖",
      benefits: [
        "Zero-downtime deployments",
        "Automatic performance optimization",
        "Continuous security monitoring",
        "Self-healing infrastructure"
      ]
    },
    {
      title: "AI-Powered Content Generation",
      description: "Advanced AI systems that create, optimize, and manage content automatically.",
      icon: "🧠",
      benefits: [
        "SEO-optimized content creation",
        "Automatic image optimization",
        "Smart content scheduling",
        "Performance analytics"
      ]
    },
    {
      title: "Advanced Monitoring & Analytics",
      description: "Comprehensive monitoring with real-time insights and automated alerting.",
      icon: "📊",
      benefits: [
        "Real-time performance metrics",
        "Automated health checks",
        "Security vulnerability scanning",
        "Predictive maintenance"
      ]
    },
    {
      title: "Enterprise-Grade Security",
      description: "Multi-layered security with automated threat detection and response.",
      icon: "🔒",
      benefits: [
        "Automated security scanning",
        "Vulnerability management",
        "Compliance monitoring",
        "Incident response automation"
      ]
    },
    {
      title: "Performance Optimization",
      description: "Continuous performance monitoring and optimization for optimal user experience.",
      icon: "⚡",
      benefits: [
        "Lighthouse score optimization",
        "Image and asset optimization",
        "Caching strategies",
        "CDN integration"
      ]
    },
    {
      title: "Developer Experience",
      description: "Streamlined development workflow with automated testing and deployment.",
      icon: "👨‍💻",
      benefits: [
        "Automated testing suite",
        "CI/CD pipeline",
        "Code quality checks",
        "Automated documentation"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Features - Zion App</title>
        <meta name="description" content="Discover the powerful features of Zion App - autonomous cloud automations, AI-powered content generation, and advanced monitoring." />
        <meta name="keywords" content="features, automation, AI, monitoring, security, performance" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        {/* Header */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Powerful Features
              </h1>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Experience the future of web applications with our cutting-edge features powered by AI and autonomous automation.
              </p>
            </div>
          </div>
        </header>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-blue-200 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-blue-100">
                      <span className="text-green-400 mr-2">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Impressive Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">227+</div>
                <div className="text-blue-200">Automations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">2,960+</div>
                <div className="text-blue-200">Pages</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-blue-200">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">95+</div>
                <div className="text-blue-200">Lighthouse Score</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Join thousands of developers building the future with Zion App.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Get Started
              </Link>
              <Link
                href="/automation"
                className="bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                View Automations
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/20 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-blue-200">
              <p>&copy; 2025 Zion App. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FeaturesPage;