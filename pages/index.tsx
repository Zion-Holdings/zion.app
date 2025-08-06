import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const HomePage: NextPage = () => {
  const marketplaceCategories = [
    {
      icon: '💻',
      title: 'IT Services',
      description: 'Professional IT consulting and development services',
      href: '/services'
    },
    {
      icon: '🤖',
      title: 'AI Talents',
      description: 'Expert AI developers and consultants',
      href: '/talent'
    },
    {
      icon: '⚙️',
      title: 'Equipment',
      description: 'High-performance computing hardware',
      href: '/products'
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Cutting-edge technology solutions',
      href: '/products'
    }
  ]

  const featuredServices = [
    {
      title: 'AI Development',
      description: 'Custom AI solutions and machine learning models for your business needs',
      price: '$150-500/hr',
      rating: 4.9,
      featured: true
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless cloud infrastructure setup and migration services',
      price: '$2000-15000',
      rating: 4.8,
      featured: true
    },
    {
      title: 'Security Auditing',
      description: 'Comprehensive security assessments and penetration testing',
      price: '$1000-8000',
      rating: 4.9,
      featured: true
    },
    {
      title: 'Performance Optimization',
      description: 'System and application optimization for maximum efficiency',
      price: '$800-3000',
      rating: 4.7,
      featured: true
    }
  ]

  const topTalents = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Machine Learning Expert',
      description: '8+ years of experience in AI research',
      price: '$200/hr',
      rating: 4.9,
      featured: true
    },
    {
      name: 'Alex Rodriguez',
      title: 'Deep Learning Specialist',
      description: 'Specializing in neural networks and computer vision',
      price: '$180/hr',
      rating: 4.8,
      featured: true
    },
    {
      name: 'Dr. Michael Kim',
      title: 'AI Research Scientist',
      description: '10+ years in quantum computing and AI',
      price: '$250/hr',
      rating: 4.9,
      featured: true
    },
    {
      name: 'Emma Thompson',
      title: 'Computer Vision Engineer',
      description: 'Expertise in autonomous systems',
      price: '$160/hr',
      rating: 4.7,
      featured: true
    }
  ]

  const premiumEquipment = [
    {
      title: 'GPU Clusters',
      description: 'High-performance computing clusters for AI and machine learning workloads',
      price: '$5000-50000',
      rating: 4.9,
      featured: true
    },
    {
      title: 'Quantum Computers',
      description: 'Next-generation quantum processing units for advanced computations',
      price: '$100000+',
      rating: 4.8,
      featured: true
    },
    {
      title: 'Edge Computing Devices',
      description: 'IoT and edge processing solutions for real-time applications',
      price: '$1000-10000',
      rating: 4.7,
      featured: true
    },
    {
      title: 'Data Storage Systems',
      description: 'Enterprise-grade storage solutions with high availability',
      price: '$2000-25000',
      rating: 4.8,
      featured: true
    }
  ]

  const stats = [
    { value: '10K+', label: 'Active Users' },
    { value: '500+', label: 'AI Services' },
    { value: '99.9%', label: 'Uptime' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Head>
        <title>Zion - The First Free AI-Powered Marketplace</title>
        <meta
          name="description"
          content="Experience the future of commerce with our cutting-edge AI-powered marketplace. Connect with top-tier IT services, AI talents, and innovative products in a seamless, secure environment."
        />
      </Head>

      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
            >
              Zion
            </Link>
            <div className="hidden md:flex gap-6 text-sm font-medium">
              <Link href="/services" className="hover:text-purple-300">
                Services
              </Link>
              <Link href="/products" className="hover:text-purple-300">
                Products
              </Link>
              <Link href="/talent" className="hover:text-purple-300">
                Talent
              </Link>
              <Link href="/blog" className="hover:text-purple-300">
                Blog
              </Link>
              <Link href="/about" className="hover:text-purple-300">
                About
              </Link>
              <Link href="/contact" className="hover:text-purple-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center px-4 py-24">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Zion
          </span>{' '}
          The First Free AI-Powered Marketplace
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 mb-10 text-lg md:text-xl">
          Experience the future of commerce with our cutting-edge AI-powered marketplace. Connect with top-tier IT services, AI talents, and innovative products in a seamless, secure environment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/services"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Start Trading Now
          </Link>
          <Link
            href="/products"
            className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            Explore Marketplace
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </header>

      {/* Marketplace Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Marketplace Categories</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our comprehensive marketplace featuring cutting-edge technology solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {marketplaceCategories.map((category, index) => (
            <Link
              key={index}
              href={category.href}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center group"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-300 text-sm">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured IT Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Featured IT Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professional IT services delivered by certified experts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredServices.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              {service.featured && (
                <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                  FEATURED
                </span>
              )}
              <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-purple-400 font-semibold">{service.price}</span>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-white text-sm ml-1">{service.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top AI Talents */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Top AI Talents</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Connect with world-class AI experts and developers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topTalents.map((talent, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              {talent.featured && (
                <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                  FEATURED
                </span>
              )}
              <h3 className="text-lg font-bold text-white mb-2">{talent.name}</h3>
              <p className="text-purple-400 text-sm mb-2">{talent.title}</p>
              <p className="text-gray-300 text-sm mb-4">{talent.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-purple-400 font-semibold">{talent.price}</span>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-white text-sm ml-1">{talent.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Equipment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Premium Equipment</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            High-performance computing hardware and advanced technology solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {premiumEquipment.map((equipment, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              {equipment.featured && (
                <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                  FEATURED
                </span>
              )}
              <h3 className="text-lg font-bold text-white mb-3">{equipment.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{equipment.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-purple-400 font-semibold">{equipment.price}</span>
                <div className="flex items-center">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-white text-sm ml-1">{equipment.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users already trading on Zion. Experience the future of AI-powered commerce today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Get Started Now
            </Link>
            <Link
              href="/products"
              className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Explore Marketplace
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Zion. All rights reserved.
      </footer>
    </div>
  )
}

export default HomePage

