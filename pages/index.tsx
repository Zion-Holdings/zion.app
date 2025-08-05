import type { NextPage }  from 'next';
import ModernLayout from '../components/layout/ModernLayout'

import Head from 'next/head';
import { useState, useEffect }  from 'react';
import Link from 'next/link';
import FuturisticHero from '../components/ui/FuturisticHero';
import FuturisticCard from '../components/ui/FuturisticCard';

const Home: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const marketplaceCategories = [
    {
      title: 'IT Services',
      description: 'Professional IT consulting and development services',
      icon: '💻',
      link: '/services',
      color: 'blue' as const,
      category: 'Services'
    },
    {
      title: 'AI Talents',
      description: 'Expert AI developers and consultants',
      icon: '🤖',
      link: '/talents',
      color: 'purple' as const,
      category: 'Talent'
    },
    {
      title: 'Equipment',
      description: 'High-performance computing hardware',
      icon: '⚙️',
      link: '/equipment',
      color: 'green' as const,
      category: 'Hardware'
    },
    {
      title: 'Innovation',
      description: 'Cutting-edge technology solutions',
      icon: '🚀',
      link: '/products',
      color: 'pink' as const,
      category: 'Products'
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
      featured: true
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless cloud infrastructure setup and migration services',
      price: '$2000-15000',
      rating: 4.8,
      link: '/services/cloud-migration-services',
      color: 'purple' as const
    },
    {
      title: 'Security Auditing',
      description: 'Comprehensive security assessments and penetration testing',
      price: '$1000-8000',
      rating: 4.9,
      link: '/services/security-auditing',
      color: 'green' as const
    },
    {
      title: 'Performance Optimization',
      description: 'System and application optimization for maximum efficiency',
      price: '$800-3000',
      rating: 4.7,
      link: '/services/performance-optimization',
      color: 'pink' as const
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
      featured: true
    },
    {
      title: 'Alex Rodriguez',
      description: 'Deep Learning Specialist specializing in neural networks and computer vision',
      price: '$180/hr',
      rating: 4.8,
      link: '/talents',
      color: 'purple' as const
    },
    {
      title: 'Dr. Michael Kim',
      description: 'AI Research Scientist with 10+ years in quantum computing and AI',
      price: '$250/hr',
      rating: 4.9,
      link: '/talents',
      color: 'green' as const
    },
    {
      title: 'Emma Thompson',
      description: 'Computer Vision Engineer with expertise in autonomous systems',
      price: '$160/hr',
      rating: 4.7,
      link: '/talents',
      color: 'pink' as const
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
      featured: true
    },
    {
      title: 'Quantum Computers',
      description: 'Next-generation quantum processing units for advanced computations',
      price: '$100000+',
      rating: 4.8,
      link: '/equipment',
      color: 'purple' as const
    },
    {
      title: 'Edge Computing Devices',
      description: 'IoT and edge processing solutions for real-time applications',
      price: '$1000-10000',
      rating: 4.7,
      link: '/equipment',
      color: 'green' as const
    },
    {
      title: 'Data Storage Systems',
      description: 'Enterprise-grade storage solutions with high availability',
      price: '$2000-25000',
      rating: 4.8,
      link: '/equipment',
      color: 'pink' as const
    }
  ]

  return (
    <ModernLayout>
      <>
      <Head>
        <title>Zion - The First Free AI-Powered Marketplace</title>
        <meta name="description" content="Experience the future of commerce with our cutting-edge AI-powered marketplace. Connect with top-tier IT services, AI talents, and innovative products." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        {/* Hero Section */}
        <FuturisticHero />

        {/* Marketplace Categories */}
        <section className="relative py-40 lg py-32">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-responsive-3xl lg text-responsive-4xl font-bold text-high-contrast mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                  Marketplace Categories
                </span>
              </h2>
              <p className="text-responsive-lg text-high-contrast-secondary max-w-2xl mx-auto">
                Explore our comprehensive marketplace featuring cutting-edge technology solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md grid-cols-2 lg grid-cols-4 gap-6">
              {marketplaceCategories.map((category, index) => (
                <FuturisticCard
                  key={index}
                  {...category}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="relative py-40 lg py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-50"></div>
          <div className="container-responsive relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-responsive-3xl lg text-responsive-4xl font-bold text-high-contrast mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">
                  Featured IT Services
                </span>
              </h2>
              <p className="text-responsive-lg text-high-contrast-secondary max-w-2xl mx-auto">
                Professional IT services delivered by certified experts
              </p>
            </div>

            <div className="grid grid-cols-1 md grid-cols-2 lg grid-cols-4 gap-6">
              {featuredServices.map((service, index) => (
                <FuturisticCard
                  key={index}
                  {...service}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Top AI Talents */}
        <section className="relative py-40 lg py-32">
          <div className="container-responsive">
            <div className="text-center mb-16">
              <h2 className="text-responsive-3xl lg text-responsive-4xl font-bold text-high-contrast mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
                  Top AI Talents
                </span>
              </h2>
              <p className="text-responsive-lg text-high-contrast-secondary max-w-2xl mx-auto">
                Connect with world-class AI experts and developers
              </p>
            </div>

            <div className="grid grid-cols-1 md grid-cols-2 lg grid-cols-4 gap-6">
              {topTalents.map((talent, index) => (
                <FuturisticCard
                  key={index}
                  {...talent}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Premium Equipment */}
        <section className="relative py-40 lg py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark-blue via-cyber-darker to-cyber-dark opacity-50"></div>
          <div className="container-responsive relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-responsive-3xl lg text-responsive-4xl font-bold text-high-contrast mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple">
                  Premium Equipment
                </span>
              </h2>
              <p className="text-responsive-lg text-high-contrast-secondary max-w-2xl mx-auto">
                High-performance computing hardware and advanced technology solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md grid-cols-2 lg grid-cols-4 gap-6">
              {premiumEquipment.map((equipment, index) => (
                <FuturisticCard
                  key={index}
                  {...equipment}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-40 lg py-32">
          <div className="container-responsive">
            <div className="glass-dark border border-neon-blue/30 rounded-2xl p-12 text-center">
              <h2 className="text-responsive-3xl lg text-responsive-4xl font-bold text-high-contrast mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                  Ready to Start Trading?
                </span>
              </h2>
              <p className="text-responsive-lg text-high-contrast-secondary mb-8 max-w-2xl mx-auto">
                Join thousands of users already trading on Zion. Experience the future of AI-powered commerce today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/auth/signup"
                  className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg text-white font-semibold text-lg neon-glow hover:shadow-neon-blue transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Now
                </Link>
                <Link
                  href="/marketplace"
                  className="px-8 py-4 glass border border-neon-blue/30 rounded-lg text-white font-semibold text-lg hover:border-neon-blue/60 transition-all duration-300 transform hover:scale-105"
                >
                  Explore Marketplace
                </Link>
                <Link
                  href="/agent-chat"
                  className="px-8 py-4 glass border border-neon-green/30 rounded-lg text-white font-semibold text-lg hover:border-neon-green/60 transition-all duration-300 transform hover:scale-105"
                >
                  Start AI Chat
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  
  </ModernLayout>

  </ModernLayout>

  </ModernLayout>
)
};

export default Home 