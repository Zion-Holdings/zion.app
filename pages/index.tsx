import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import EnhancedLayout from '../components/layout/EnhancedLayout'
import FuturisticHero from '../components/ui/FuturisticHero'
import EnhancedCard from '../components/ui/EnhancedCard'
import EnhancedButton from '../components/ui/EnhancedButton'
import InteractiveStats from '../components/ui/InteractiveStats'
import GlassmorphismCard from '../components/ui/GlassmorphismCard'

const Home: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { value: 10000, label: 'Active Users', icon: '👥', color: 'blue' as const },
    { value: 500, label: 'AI Services', icon: '🤖', color: 'purple' as const },
    { value: 99.9, label: 'Uptime %', icon: '⚡', color: 'green' as const, suffix: '%' },
    { value: 24, label: 'Support Hours', icon: '🛡️', color: 'pink' as const, suffix: '/7' }
  ]

  const marketplaceCategories = [
    {
      title: 'IT Services',
      description: 'Professional IT consulting and development services',
      icon: '💻',
      link: '/services',
      color: 'blue' as const,
      category: 'Services',
      price: 'From $50/hr',
      rating: 4.9,
      tags: ['Consulting', 'Development', 'Cloud'],
      stats: [
        { label: 'Experts', value: '500+' },
        { label: 'Projects', value: '2K+' }
      ]
    },
    {
      title: 'AI Talents',
      description: 'Expert AI developers and consultants',
      icon: '🤖',
      link: '/talents',
      color: 'purple' as const,
      category: 'Talent',
      price: 'From $100/hr',
      rating: 4.8,
      tags: ['Machine Learning', 'Deep Learning', 'NLP'],
      stats: [
        { label: 'Experts', value: '200+' },
        { label: 'Skills', value: '50+' }
      ]
    },
    {
      title: 'Equipment',
      description: 'High-performance computing hardware',
      icon: '⚙️',
      link: '/equipment',
      color: 'green' as const,
      category: 'Hardware',
      price: 'From $1K',
      rating: 4.7,
      tags: ['GPU Clusters', 'Quantum', 'Edge'],
      stats: [
        { label: 'Units', value: '1K+' },
        { label: 'Brands', value: '20+' }
      ]
    },
    {
      title: 'Innovation',
      description: 'Cutting-edge technology solutions',
      icon: '🚀',
      link: '/products',
      color: 'pink' as const,
      category: 'Products',
      price: 'From $500',
      rating: 4.9,
      tags: ['AI Tools', 'Software', 'Platforms'],
      stats: [
        { label: 'Products', value: '300+' },
        { label: 'Categories', value: '15+' }
      ]
    }
  ]

  const featuredServices = [
    {
      title: 'AI Development',
      description: 'Custom AI solutions and machine learning models for your business needs',
      price: '$150-500/hr',
      rating: 4.9,
      link: '/services/ai-model-development',
      color: 'blue' as const,
      featured: true,
      tags: ['Machine Learning', 'Deep Learning', 'NLP'],
      stats: [
        { label: 'Projects', value: '500+' },
        { label: 'Success Rate', value: '98%' }
      ]
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless cloud infrastructure setup and migration services',
      price: '$2000-15000',
      rating: 4.8,
      link: '/services/cloud-migration-services',
      color: 'purple' as const,
      tags: ['AWS', 'Azure', 'GCP'],
      stats: [
        { label: 'Migrations', value: '200+' },
        { label: 'Uptime', value: '99.9%' }
      ]
    },
    {
      title: 'Security Auditing',
      description: 'Comprehensive security assessments and penetration testing',
      price: '$1000-8000',
      rating: 4.9,
      link: '/services/security-auditing',
      color: 'green' as const,
      tags: ['Penetration Testing', 'Compliance', 'Threat Analysis'],
      stats: [
        { label: 'Audits', value: '150+' },
        { label: 'Vulnerabilities', value: '1K+' }
      ]
    },
    {
      title: 'Performance Optimization',
      description: 'System and application optimization for maximum efficiency',
      price: '$800-3000',
      rating: 4.7,
      link: '/services/performance-optimization',
      color: 'pink' as const,
      tags: ['System Tuning', 'Database', 'Caching'],
      stats: [
        { label: 'Optimizations', value: '300+' },
        { label: 'Performance Gain', value: '40%' }
      ]
    }
  ]

  const topTalents = [
    {
      title: 'Dr. Sarah Chen',
      description: 'Machine Learning Expert with 8+ years of experience in AI research',
      price: '$200/hr',
      rating: 4.9,
      link: '/talents',
      color: 'blue' as const,
      featured: true,
      tags: ['Machine Learning', 'Research', 'PhD'],
      stats: [
        { label: 'Experience', value: '8+ years' },
        { label: 'Projects', value: '50+' }
      ]
    },
    {
      title: 'Alex Rodriguez',
      description: 'Deep Learning Specialist specializing in neural networks and computer vision',
      price: '$180/hr',
      rating: 4.8,
      link: '/talents',
      color: 'purple' as const,
      tags: ['Deep Learning', 'Computer Vision', 'Neural Networks'],
      stats: [
        { label: 'Experience', value: '6+ years' },
        { label: 'Models', value: '100+' }
      ]
    },
    {
      title: 'Dr. Michael Kim',
      description: 'AI Research Scientist with 10+ years in quantum computing and AI',
      price: '$250/hr',
      rating: 4.9,
      link: '/talents',
      color: 'green' as const,
      tags: ['Quantum Computing', 'Research', 'PhD'],
      stats: [
        { label: 'Experience', value: '10+ years' },
        { label: 'Papers', value: '25+' }
      ]
    },
    {
      title: 'Emma Thompson',
      description: 'Computer Vision Engineer with expertise in autonomous systems',
      price: '$160/hr',
      rating: 4.7,
      link: '/talents',
      color: 'pink' as const,
      tags: ['Computer Vision', 'Autonomous Systems', 'Robotics'],
      stats: [
        { label: 'Experience', value: '5+ years' },
        { label: 'Systems', value: '30+' }
      ]
    }
  ]

  const premiumEquipment = [
    {
      title: 'GPU Clusters',
      description: 'High-performance computing clusters for AI and machine learning workloads',
      price: '$5000-50000',
      rating: 4.9,
      link: '/equipment',
      color: 'blue' as const,
      featured: true,
      tags: ['NVIDIA', 'AMD', 'Multi-GPU'],
      stats: [
        { label: 'TFLOPS', value: '100+' },
        { label: 'Memory', value: '1TB+' }
      ]
    },
    {
      title: 'Quantum Computers',
      description: 'Next-generation quantum processing units for advanced computations',
      price: '$100000+',
      rating: 4.8,
      link: '/equipment',
      color: 'purple' as const,
      tags: ['IBM', 'Google', 'Quantum'],
      stats: [
        { label: 'Qubits', value: '50+' },
        { label: 'Coherence', value: '100μs' }
      ]
    },
    {
      title: 'Edge Computing Devices',
      description: 'IoT and edge processing solutions for real-time applications',
      price: '$1000-10000',
      rating: 4.7,
      link: '/equipment',
      color: 'green' as const,
      tags: ['IoT', 'Edge', 'Real-time'],
      stats: [
        { label: 'Devices', value: '500+' },
        { label: 'Latency', value: '<10ms' }
      ]
    },
    {
      title: 'Data Storage Systems',
      description: 'Enterprise-grade storage solutions with high availability',
      price: '$2000-25000',
      rating: 4.8,
      link: '/equipment',
      color: 'pink' as const,
      tags: ['SSD', 'RAID', 'Backup'],
      stats: [
        { label: 'Capacity', value: '100TB+' },
        { label: 'IOPS', value: '1M+' }
      ]
    }
  ]

  return (
    <EnhancedLayout>
      {/* Hero Section */}
      <FuturisticHero />

      {/* Stats Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                Platform Statistics
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Real-time metrics showcasing our platform's growth and success
            </p>
          </div>
          
          <InteractiveStats stats={stats} />
        </div>
      </section>

      {/* Marketplace Categories */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                Marketplace Categories
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Explore our comprehensive marketplace featuring cutting-edge technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketplaceCategories.map((category, index) => (
              <EnhancedCard
                key={index}
                {...category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-50"></div>

        <div className="container-responsive relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">
                Featured IT Services
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Professional IT services delivered by certified experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <EnhancedCard
                key={index}
                {...service}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Top AI Talents */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
                Top AI Talents
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Connect with world-class AI experts and developers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topTalents.map((talent, index) => (
              <EnhancedCard
                key={index}
                {...talent}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Premium Equipment */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark-blue via-cyber-darker to-cyber-dark opacity-50"></div>

        <div className="container-responsive relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">
                Premium Equipment
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              High-performance computing hardware and advanced technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumEquipment.map((equipment, index) => (
              <EnhancedCard
                key={index}
                {...equipment}
              />
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
                Why Choose Zion?
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Discover the unique features that make Zion the leading AI marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GlassmorphismCard gradient="blue" glow>
              <div className="text-center">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Matching</h3>
                <p className="text-gray-300">Advanced algorithms connect you with the perfect services and talents based on your specific requirements.</p>
              </div>
            </GlassmorphismCard>

            <GlassmorphismCard gradient="purple" glow>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-white mb-3">Secure Transactions</h3>
                <p className="text-gray-300">Enterprise-grade security with encrypted payments and protected data for all your business transactions.</p>
              </div>
            </GlassmorphismCard>

            <GlassmorphismCard gradient="green" glow>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-white mb-3">Instant Access</h3>
                <p className="text-gray-300">Get started in minutes with our streamlined onboarding process and instant service activation.</p>
              </div>
            </GlassmorphismCard>

            <GlassmorphismCard gradient="pink" glow>
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-white mb-3">Real-time Analytics</h3>
                <p className="text-gray-300">Comprehensive dashboards and insights to track your projects and optimize performance.</p>
              </div>
            </GlassmorphismCard>

            <GlassmorphismCard gradient="blue" glow>
              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-white mb-3">Global Network</h3>
                <p className="text-gray-300">Connect with experts and services from around the world, available 24/7 for your needs.</p>
              </div>
            </GlassmorphismCard>

            <GlassmorphismCard gradient="purple" glow>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-white mb-3">Quality Assurance</h3>
                <p className="text-gray-300">Rigorous vetting process ensures only the highest quality services and talents are available.</p>
              </div>
            </GlassmorphismCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="glass-dark border border-neon-blue/30 rounded-2xl p-12 text-center">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                Ready to Start Trading?
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of users already trading on Zion. Experience the future of AI-powered commerce today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton
                href="/auth/signup"
                size="lg"
                gradient="blue"
                glow
                icon="🚀"
              >
                Get Started Now
              </EnhancedButton>
              <EnhancedButton
                href="/marketplace"
                variant="outline"
                size="lg"
                icon="🔍"
              >
                Explore Marketplace
              </EnhancedButton>
            </div>
          </div>
        </div>
      </section>
    </EnhancedLayout>
  )
}

export default Home 