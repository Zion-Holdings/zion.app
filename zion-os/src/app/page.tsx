import Link from 'next/link';

export default function HomePage() {
  const features = [
    {
      title: 'AI Autonomous Systems',
      description: 'Revolutionary AI agents that operate independently, making decisions and executing complex tasks without human intervention.',
      icon: '🤖',
      href: '/ai-autonomous-systems'
    },
    {
      title: 'Quantum Neural Networks',
      description: 'Next-generation quantum computing platforms that leverage quantum mechanics for unprecedented AI processing power.',
      icon: '⚛️',
      href: '/quantum-neural-network-platform'
    },
    {
      title: 'Enterprise Security',
      description: 'AI-powered security solutions that protect your business with intelligent threat detection and response.',
      icon: '🔒',
      href: '/ai-powered-enterprise-security'
    },
    {
      title: 'Business Intelligence',
      description: 'Advanced analytics and insights powered by AI to drive data-driven decision making.',
      icon: '📊',
      href: '/ai-business-intelligence'
    },
    {
      title: 'Content Generation',
      description: 'AI-powered content creation tools that generate high-quality, engaging content at scale.',
      icon: '✍️',
      href: '/ai-content-generator'
    },
    {
      title: 'Research Automation',
      description: 'Autonomous research assistants that accelerate discovery and innovation across all domains.',
      icon: '🔬',
      href: '/ai-autonomous-research-assistant'
    }
  ];

  const stats = [
    { number: '500+', label: 'AI Models Deployed' },
    { number: '50+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'AI Support' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
              The Future of AI
            </span>
            <br />
            <span className="text-white">is Here</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Zion Tech Group leads the revolution in AI-powered technology solutions. 
            Transform your business with autonomous systems, quantum computing, and cutting-edge innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Revolutionary AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our cutting-edge AI platforms that are transforming industries and reshaping the future of technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                href={feature.href}
                className="group p-8 rounded-2xl border border-white/10 hover:border-white/20 bg-black/20 hover:bg-black/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-4 text-purple-400 font-medium group-hover:text-purple-300 transition-colors duration-200">
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the AI revolution and stay ahead of the competition with Zion Tech Group's cutting-edge solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Schedule a Demo
            </Link>
            <Link
              href="/case-studies"
              className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}