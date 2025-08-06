import type { NextPage } from 'next'
import EnhancedLayout from '../components/layout/EnhancedLayout'
import EnhancedButton from '../components/ui/EnhancedButton'
import GlassmorphismCard from '../components/ui/GlassmorphismCard'
import InteractiveStats from '../components/ui/InteractiveStats'
import FuturisticHero from '../components/ui/FuturisticHero'

const IoTPlatforms: NextPage = () => {
  const stats = [
    { value: 1000, label: 'Connected Devices', icon: '📱', color: 'blue' as const, suffix: '+' },
    { value: 99.9, label: 'Uptime %', icon: '⚡', color: 'green' as const, suffix: '%' },
    { value: 50, label: 'Protocols Supported', icon: '🔗', color: 'purple' as const, suffix: '+' },
    { value: 24, label: 'Real-time Monitoring', icon: '📊', color: 'pink' as const, suffix: '/7' }
  ]

  const features = [
    {
      title: 'Advanced AI Capabilities',
      description: 'Leverage cutting-edge AI technology for superior results and intelligent automation',
      icon: '🤖',
      color: 'blue' as const
    },
    {
      title: 'Real-time Processing',
      description: 'Process data and make decisions in real-time with sub-millisecond latency',
      icon: '⚡',
      color: 'purple' as const
    },
    {
      title: 'Scalable Architecture',
      description: 'Handle millions of devices with our cloud-native, auto-scaling platform',
      icon: '📈',
      color: 'green' as const
    },
    {
      title: 'Secure Communication',
      description: 'End-to-end encryption and secure protocols for all device communications',
      icon: '🔒',
      color: 'pink' as const
    },
    {
      title: 'Edge Computing',
      description: 'Process data at the edge for faster response times and reduced bandwidth',
      icon: '🌐',
      color: 'blue' as const
    },
    {
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and insights for all your IoT devices and data',
      icon: '📊',
      color: 'purple' as const
    }
  ]

  const solutions = [
    {
      title: 'Smart City Infrastructure',
      description: 'Complete IoT solutions for modern smart cities including traffic management, environmental monitoring, and public safety',
      price: '$50K-500K',
      rating: 4.9,
      icon: '🏙️',
      color: 'blue' as const,
      featured: true
    },
    {
      title: 'Industrial IoT (IIoT)',
      description: 'Manufacturing automation, predictive maintenance, and industrial monitoring solutions',
      price: '$100K-1M',
      rating: 4.8,
      icon: '🏭',
      color: 'purple' as const
    },
    {
      title: 'Healthcare IoT',
      description: 'Medical device monitoring, patient tracking, and healthcare facility management',
      price: '$75K-750K',
      rating: 4.9,
      icon: '🏥',
      color: 'green' as const
    },
    {
      title: 'Agriculture IoT',
      description: 'Precision farming, crop monitoring, and automated irrigation systems',
      price: '$25K-250K',
      rating: 4.7,
      icon: '🌾',
      color: 'pink' as const
    }
  ]

  return (
    <EnhancedLayout
      title="IoT Platforms - Zion"
      description="Comprehensive IoT platforms that connect and manage your smart devices and sensors with cutting-edge technology."
    >
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-responsive-4xl lg:text-responsive-6xl font-bold text-white mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                IoT Platforms
              </span>
            </h1>
            <p className="text-responsive-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive IoT platforms that connect and manage your smart devices and sensors 
              with cutting-edge AI technology and real-time processing capabilities.
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
              Real-time metrics showcasing our IoT platform's capabilities and performance
            </p>
          </div>
          
          <InteractiveStats stats={stats} />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-50"></div>

        <div className="container-responsive relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">
                Key Features
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Discover the powerful capabilities that make our IoT platform solution stand out
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

      {/* Solutions Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-green">
                IoT Solutions
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive IoT solutions tailored for different industries and use cases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <GlassmorphismCard key={index} gradient={solution.color} glow>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{solution.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                      {solution.featured && (
                        <span className="text-xs bg-neon-blue text-black px-2 py-1 rounded-full font-semibold">
                          FEATURED
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 mb-4">{solution.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-neon-green font-semibold">{solution.price}</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-white">{solution.rating}</span>
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
                Ready to Connect Your Devices?
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our IoT platform to transform their operations 
              and gain real-time insights from their connected devices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <EnhancedButton
                href="/contact"
                size="lg"
                gradient="blue"
                glow
                icon="🚀"
              >
                Start Your IoT Journey
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

export default IoTPlatforms
