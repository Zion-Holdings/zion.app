import Link from 'next/link';

export const metadata = {
  title: 'Services - Zion Tech Group',
  description: 'Comprehensive AI automation, quantum computing, cybersecurity, and blockchain solutions for enterprise digital transformation.',
  keywords: 'AI services, quantum computing, cybersecurity, blockchain, enterprise solutions, Zion Tech Group',
};

export default function ServicesPage() {
  const services = [
    {
      category: 'AI & Automation',
      items: [
        {
          title: 'AI Autonomous Business Manager',
          description: 'Self-managing business operations with advanced AI agents',
          href: '/ai-autonomous-business-manager',
          icon: '🤖',
        },
        {
          title: 'AI Content Generation',
          description: 'Automated content creation and marketing automation',
          href: '/ai-content-generation',
          icon: '✍️',
        },
        {
          title: 'AI Research Assistant',
          description: 'Autonomous research and data analysis systems',
          href: '/ai-autonomous-research-assistant',
          icon: '🔬',
        },
        {
          title: 'AI Code Review',
          description: 'Automated code analysis and quality assurance',
          href: '/ai-code-review',
          icon: '💻',
        },
      ],
    },
    {
      category: 'Quantum Computing',
      items: [
        {
          title: 'Quantum Financial Trading',
          description: 'Next-generation quantum algorithms for financial markets',
          href: '/quantum-financial-trading',
          icon: '📈',
        },
        {
          title: 'Quantum Cloud Infrastructure',
          description: 'Scalable quantum computing as a service',
          href: '/quantum-cloud-infrastructure',
          icon: '☁️',
        },
        {
          title: 'Quantum Neural Networks',
          description: 'Advanced AI powered by quantum computing',
          href: '/quantum-neural-network-platform',
          icon: '🧠',
        },
      ],
    },
    {
      category: 'Cybersecurity & Compliance',
      items: [
        {
          title: 'Advanced Cybersecurity Suite',
          description: 'AI-powered threat detection and prevention',
          href: '/advanced-cybersecurity-suite',
          icon: '🛡️',
        },
        {
          title: 'SOC2 Compliance Automation',
          description: 'Automated compliance and audit processes',
          href: '/soc2-compliance-automation',
          icon: '✅',
        },
        {
          title: 'AI-Powered Enterprise Security',
          description: 'Intelligent security for enterprise environments',
          href: '/ai-powered-enterprise-security',
          icon: '🔒',
        },
      ],
    },
    {
      category: 'Blockchain & Web3',
      items: [
        {
          title: 'AI Blockchain Analytics',
          description: 'Intelligent blockchain data analysis and insights',
          href: '/ai-blockchain-analytics',
          icon: '🔗',
        },
        {
          title: 'AI Blockchain Governance',
          description: 'Automated governance for decentralized systems',
          href: '/ai-blockchain-governance',
          icon: '⚖️',
        },
        {
          title: 'Smart Contract Development',
          description: 'Advanced smart contract solutions and automation',
          href: '/smart-contract-development',
          icon: '📜',
        },
      ],
    },
    {
      category: 'Enterprise Solutions',
      items: [
        {
          title: 'Advanced IT Infrastructure',
          description: 'Scalable and secure enterprise IT solutions',
          href: '/advanced-it-infrastructure-services',
          icon: '🏗️',
        },
        {
          title: 'Autonomous DevOps Platform',
          description: 'Self-managing development and operations',
          href: '/autonomous-devops-platform',
          icon: '🚀',
        },
        {
          title: 'Enterprise AI Solutions',
          description: 'Custom AI solutions for enterprise needs',
          href: '/enterprise-ai-solutions',
          icon: '🏢',
        },
      ],
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
        <p className="text-xl md:text-2xl opacity-80 mb-8 max-w-3xl mx-auto">
          Comprehensive AI-powered solutions designed to transform your business operations and drive innovation across all industries.
        </p>
      </section>

      {/* Services Grid */}
      <section className="space-y-16">
        {services.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((service, serviceIndex) => (
                <Link
                  key={serviceIndex}
                  href={service.href}
                  className="p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200 group hover:bg-white/5"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="opacity-80 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
          Contact our team to discuss how Zion Tech Group can transform your business with our cutting-edge AI solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
          >
            Contact Sales
          </Link>
          <Link
            href="/demo"
            className="px-8 py-4 border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-all duration-200"
          >
            Request Demo
          </Link>
        </div>
      </section>
    </div>
  );
}