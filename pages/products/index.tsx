import type { NextPage } from 'next'
import EnhancedLayout from '../../components/layout/EnhancedLayout'
import EnhancedButton from '../../components/ui/EnhancedButton'
import GlassmorphismCard from '../../components/ui/GlassmorphismCard'
import InteractiveStats from '../../components/ui/InteractiveStats'

const ProductsPage: NextPage = () => {
  const stats = [
    { value: 50, label: 'Products Available', icon: '📦', color: 'blue' as const, suffix: '+' },
    { value: 99.9, label: 'Uptime %', icon: '⚡', color: 'green' as const, suffix: '%' },
    { value: 1000, label: 'Enterprise Clients', icon: '🏢', color: 'purple' as const, suffix: '+' },
    { value: 24, label: 'Support Hours', icon: '🛡️', color: 'pink' as const, suffix: '/7' }
  ]

  const products = [
    {
      id: 'ai-platform',
      title: 'AI-Powered Analytics Platform',
      description: 'Advanced machine learning platform for business intelligence and predictive analytics with real-time processing capabilities',
      features: ['Real-time data processing', 'Predictive modeling', 'Custom dashboards', 'API integration'],
      category: 'AI & Analytics',
      price: '$10K-100K',
      rating: 4.9,
      icon: '🤖',
      color: 'blue' as const,
      featured: true
    },
    {
      id: 'cloud-suite',
      title: 'Enterprise Cloud Suite',
      description: 'Comprehensive cloud infrastructure and management solution for enterprises with multi-cloud support',
      features: ['Multi-cloud management', 'Auto-scaling', 'Security compliance', 'Cost optimization'],
      category: 'Cloud Infrastructure',
      price: '$25K-500K',
      rating: 4.8,
      icon: '☁️',
      color: 'purple' as const
    },
    {
      id: 'mobile-platform',
      title: 'Cross-Platform Mobile Platform',
      description: 'Native mobile development platform for iOS and Android applications with offline capabilities',
      features: ['Cross-platform development', 'Native performance', 'Offline capabilities', 'Push notifications'],
      category: 'Mobile Development',
      price: '$15K-150K',
      rating: 4.7,
      icon: '📱',
      color: 'green' as const
    },
    {
      id: 'security-suite',
      title: 'Cybersecurity Suite',
      description: 'Comprehensive security solution for enterprise threat detection and prevention with 24/7 monitoring',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring'],
      category: 'Security',
      price: '$20K-200K',
      rating: 4.9,
      icon: '🔒',
      color: 'pink' as const
    },
    {
      id: 'data-platform',
      title: 'Data Pipeline Platform',
      description: 'End-to-end data engineering and analytics platform for big data processing and real-time streaming',
      features: ['ETL/ELT processing', 'Real-time streaming', 'Data warehousing', 'Business intelligence'],
      category: 'Data Engineering',
      price: '$30K-300K',
      rating: 4.8,
      icon: '📊',
      color: 'blue' as const
    },
    {
      id: 'devops-platform',
      title: 'DevOps Automation Platform',
      description: 'Complete CI/CD and infrastructure automation platform for modern development teams',
      features: ['Automated deployments', 'Infrastructure as code', 'Monitoring & alerting', 'Team collaboration'],
      category: 'DevOps',
      price: '$18K-180K',
      rating: 4.8,
      icon: '⚙️',
      color: 'purple' as const
    }
  ]

  const categories = [
    {
      name: 'AI & Analytics',
      description: 'Cutting-edge AI and machine learning solutions',
      count: '15+ products',
      icon: '🤖',
      color: 'blue' as const
    },
    {
      name: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for enterprises',
      count: '12+ products',
      icon: '☁️',
      color: 'purple' as const
    },
    {
      name: 'Mobile Development',
      description: 'Cross-platform mobile solutions',
      count: '8+ products',
      icon: '📱',
      color: 'green' as const
    },
    {
      name: 'Security',
      description: 'Enterprise-grade security solutions',
      count: '10+ products',
      icon: '🔒',
      color: 'pink' as const
    },
    {
      name: 'Data Engineering',
      description: 'Big data and analytics platforms',
      count: '6+ products',
      icon: '📊',
      color: 'blue' as const
    },
    {
      name: 'DevOps',
      description: 'Automation and deployment tools',
      count: '9+ products',
      icon: '⚙️',
      color: 'purple' as const
    }
  ]

  return (
    <EnhancedLayout
      title="Enterprise Product Suite - Zion"
      description="Discover Zion's comprehensive product suite - from AI platforms to cloud infrastructure solutions designed for enterprise success."
    >
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-responsive-4xl lg:text-responsive-6xl font-bold text-white mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                Enterprise Product Suite
              </span>
            </h1>
            <p className="text-responsive-xl text-gray-300 mb-8 leading-relaxed">
              Discover Zion's comprehensive product suite - from AI platforms to cloud infrastructure 
              solutions designed for enterprise success and digital transformation.
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
                View Services
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
                Product Statistics
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Real-time metrics showcasing our product platform's capabilities and enterprise adoption
            </p>
          </div>
          
          <InteractiveStats stats={stats} />
        </div>
      </section>

      {/* Categories Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-50"></div>

        <div className="container-responsive relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">
                Product Categories
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Explore our comprehensive range of enterprise products organized by category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <GlassmorphismCard key={index} gradient={category.color} glow>
                <div className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{category.name}</h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  <div className="text-neon-blue font-semibold">{category.count}</div>
                </div>
              </GlassmorphismCard>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-green">
                Featured Products
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Our most popular and highly-rated enterprise products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <GlassmorphismCard key={index} gradient={product.color} glow>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{product.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                      {product.featured && (
                        <span className="text-xs bg-neon-blue text-black px-2 py-1 rounded-full font-semibold">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <div className="space-y-2 mb-4">
                      {product.features.slice(0, 2).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <span className="text-neon-green">✓</span>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neon-green font-semibold">{product.price}</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-white">{product.rating}</span>
                      </div>
                    </div>
                  </div>
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
                Ready to Transform Your Enterprise?
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of enterprises already using our products to accelerate their digital 
              transformation and achieve competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton
                href="/contact"
                size="lg"
                gradient="blue"
                glow
                icon="🚀"
              >
                Start Your Journey
              </EnhancedButton>
              <EnhancedButton
                href="/services"
                variant="outline"
                size="lg"
                icon="📋"
              >
                View Services
              </EnhancedButton>
            </div>
          </div>
        </div>
      </section>
    </EnhancedLayout>
  )
}

export default ProductsPage
