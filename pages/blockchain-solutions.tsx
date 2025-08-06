import type { NextPage } from 'next'
import EnhancedLayout from '../components/layout/EnhancedLayout'
import EnhancedButton from '../components/ui/EnhancedButton'
import GlassmorphismCard from '../components/ui/GlassmorphismCard'
import InteractiveStats from '../components/ui/InteractiveStats'

const BlockchainSolutions: NextPage = () => {
  const stats = [
    { value: 1000, label: 'Smart Contracts', icon: '📄', color: 'blue' as const, suffix: '+' },
    { value: 99.9, label: 'Security Score', icon: '🔒', color: 'green' as const, suffix: '%' },
    { value: 50, label: 'Blockchain Networks', icon: '🔗', color: 'purple' as const, suffix: '+' },
    { value: 24, label: 'Transaction Speed', icon: '⚡', color: 'pink' as const, suffix: 'ms' }
  ]

  const services = [
    {
      title: 'Smart Contracts',
      description: 'Automated, self-executing contracts that eliminate intermediaries and reduce costs with advanced security features',
      icon: '📄',
      color: 'blue' as const,
      price: '$5K-50K',
      rating: 4.9,
      featured: true
    },
    {
      title: 'DeFi Platforms',
      description: 'Decentralized finance solutions for lending, borrowing, and trading with high liquidity and low fees',
      icon: '💰',
      color: 'green' as const,
      price: '$25K-250K',
      rating: 4.8
    },
    {
      title: 'NFT Marketplaces',
      description: 'Create and trade unique digital assets with our comprehensive NFT platform solutions',
      icon: '🎨',
      color: 'purple' as const,
      price: '$15K-150K',
      rating: 4.7
    },
    {
      title: 'Tokenization',
      description: 'Convert real-world assets into digital tokens for enhanced liquidity and fractional ownership',
      icon: '🪙',
      color: 'pink' as const,
      price: '$10K-100K',
      rating: 4.8
    },
    {
      title: 'Security Audits',
      description: 'Comprehensive security audits for smart contracts and blockchain applications with detailed reports',
      icon: '🔍',
      color: 'blue' as const,
      price: '$5K-25K',
      rating: 4.9
    },
    {
      title: 'Cross-Chain Solutions',
      description: 'Interoperability solutions that enable seamless transactions across multiple blockchain networks',
      icon: '🌐',
      color: 'green' as const,
      price: '$20K-200K',
      rating: 4.8
    }
  ]

  const features = [
    {
      title: 'Decentralized Architecture',
      description: 'True decentralization with no single point of failure and distributed consensus mechanisms',
      icon: '🏗️',
      color: 'blue' as const
    },
    {
      title: 'Immutable Records',
      description: 'Tamper-proof data storage with cryptographic verification and permanent audit trails',
      icon: '🔐',
      color: 'purple' as const
    },
    {
      title: 'Smart Automation',
      description: 'Programmable logic that executes automatically based on predefined conditions',
      icon: '🤖',
      color: 'green' as const
    },
    {
      title: 'Transparent Transactions',
      description: 'Public ledger with complete transparency and verifiable transaction history',
      icon: '👁️',
      color: 'pink' as const
    },
    {
      title: 'Cost Efficiency',
      description: 'Reduced transaction costs and elimination of middlemen fees',
      icon: '💸',
      color: 'blue' as const
    },
    {
      title: 'Global Accessibility',
      description: 'Borderless transactions accessible to anyone with internet connection',
      icon: '🌍',
      color: 'purple' as const
    }
  ]

  return (
    <EnhancedLayout
      title="Blockchain Solutions - Zion"
      description="Transform your business with cutting-edge blockchain technology. We provide comprehensive solutions for decentralized applications, smart contracts, and digital asset management."
    >
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-responsive-4xl lg:text-responsive-6xl font-bold text-white mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                Revolutionary Blockchain Solutions
              </span>
            </h1>
            <p className="text-responsive-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge blockchain technology. We provide comprehensive 
              solutions for decentralized applications, smart contracts, and digital asset management 
              with enterprise-grade security and scalability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton
                href="/contact"
                size="lg"
                gradient="blue"
                glow
                icon="🚀"
              >
                Get Started
              </EnhancedButton>
              <EnhancedButton
                href="/services"
                variant="outline"
                size="lg"
                icon="📋"
              >
                View Solutions
              </EnhancedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
                Platform Statistics
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Real-time metrics showcasing our blockchain platform's capabilities and performance
            </p>
          </div>
          
          <InteractiveStats stats={stats} />
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-50"></div>

        <div className="container-responsive relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">
                Blockchain Services
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive blockchain solutions tailored for different industries and use cases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <GlassmorphismCard key={index} gradient={service.color} glow>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      {service.featured && (
                        <span className="text-xs bg-neon-blue text-black px-2 py-1 rounded-full font-semibold">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-neon-green font-semibold">{service.price}</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-white">{service.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-green">
                Why Choose Blockchain?
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Discover the unique advantages that blockchain technology brings to your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <GlassmorphismCard key={index} gradient={feature.color} glow>
                <div className="text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="glass-dark border border-neon-blue/30 rounded-2xl p-12 text-center">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                Ready to Transform Your Business?
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging blockchain technology to streamline 
              operations, reduce costs, and create new revenue streams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton
                href="/contact"
                size="lg"
                gradient="blue"
                glow
                icon="🚀"
              >
                Start Your Blockchain Journey
              </EnhancedButton>
              <EnhancedButton
                href="/services"
                variant="outline"
                size="lg"
                icon="📋"
              >
                View All Solutions
              </EnhancedButton>
            </div>
          </div>
        </div>
      </section>
    </EnhancedLayout>
  )
}

export default BlockchainSolutions
