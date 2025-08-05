
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import FuturisticCard from '../components/ui/FuturisticCard'
import FuturisticDataTable from '../components/ui/FuturisticDataTable'

const Marketplace: NextPage = () => {
  const marketplaceCategories = [
    {
      title: 'AI Services',
      description: 'Professional AI development and consulting services',
      icon: '🤖',
      price: 'From $50/hr',
      rating: 4.8,
      link: '/services',
      category: 'Services',
      color: 'blue' as const,
      featured: true
    },
    {
      title: 'AI Talent',
      description: 'Expert AI professionals and developers',
      icon: '👥',
      price: 'From $75/hr',
      rating: 4.9,
      link: '/talents',
      category: 'Talent',
      color: 'purple' as const,
      featured: true
    },
    {
      title: 'Computing Equipment',
      description: 'High-performance AI hardware and servers',
      icon: '⚙️',
      price: 'From $100/day',
      rating: 4.7,
      link: '/equipment',
      category: 'Equipment',
      color: 'green' as const,
      featured: false
    },
    {
      title: 'AI Products',
      description: 'Cutting-edge AI software and tools',
      icon: '🚀',
      price: 'From $99',
      rating: 4.6,
      link: '/products',
      category: 'Products',
      color: 'pink' as const,
      featured: false
    }
  ];

  const trendingServices = [
    {
      id: 1,
      name: 'AI Model Training',
      provider: 'TechCorp AI',
      price: '$150/hr',
      rating: 4.9,
      category: 'Development',
      status: 'Available'
    },
    {
      id: 2,
      name: 'Data Analysis',
      provider: 'DataFlow Solutions',
      price: '$120/hr',
      rating: 4.8,
      category: 'Analytics',
      status: 'Available'
    },
    {
      id: 3,
      name: 'ML Infrastructure',
      provider: 'CloudTech Systems',
      price: '$200/hr',
      rating: 4.7,
      category: 'Infrastructure',
      status: 'Available'
    },
    {
      id: 4,
      name: 'AI Consulting',
      provider: 'AI Advisors',
      price: '$180/hr',
      rating: 4.9,
      category: 'Consulting',
      status: 'Available'
    }
  ];

  const tableColumns = [
    { key: 'name', label: 'Service Name', sortable: true },
    { key: 'provider', label: 'Provider', sortable: true },
    { key: 'category', label: 'Category', sortable: true },
    { key: 'price', label: 'Price', sortable: true },
    { key: 'rating', label: 'Rating', sortable: true },
    { key: 'status', label: 'Status', sortable: true },
    {
      key: 'actions',
      label: 'Actions',
      render: (value: any, row: any) => (
        <button className="px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg text-white text-sm hover:shadow-neon-blue transition-all duration-300">
          View Details
        </button>
      )
    }
  ];

  return (
    <>
      <Head>
        <title>Marketplace - Zion</title>
        <meta name="description" content="Explore Zion's AI-powered marketplace for services, talents, equipment, and products." />
      </Head>

      <div className="relative z-10 container-responsive py-8">
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"></div>
          <div className="absolute inset-0 bg-holographic bg-[length:400%_400%] animate-holographic-shift opacity-10"></div>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-responsive-4xl lg:text-responsive-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Zion Marketplace
            </span>
          </h1>
          <p className="text-responsive-lg text-gray-400 max-w-3xl mx-auto mb-8">
            The world's first free AI-powered marketplace connecting businesses with cutting-edge technology solutions, talent, and equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg text-white font-semibold text-lg neon-glow hover:shadow-neon-blue transition-all duration-300 transform hover:scale-105">
              Start Trading
            </button>
            <button className="px-8 py-4 glass border border-neon-blue/30 rounded-lg text-white font-semibold text-lg hover:border-neon-blue/60 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>

        {/* Marketplace Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">
                Marketplace Categories
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Explore our comprehensive marketplace featuring cutting-edge technology solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketplaceCategories.map((category, index) => (
              <FuturisticCard key={index} {...category} />
            ))}
          </div>
        </section>

        {/* Trending Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-responsive-3xl lg:text-responsive-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-blue">
                Trending Services
              </span>
            </h2>
            <p className="text-responsive-lg text-gray-400 max-w-2xl mx-auto">
              Most popular AI services this week
            </p>
          </div>
          
          <FuturisticDataTable
            columns={tableColumns}
            data={trendingServices}
            title="Trending Services"
            description="Most popular AI services and solutions"
            searchable={true}
            sortable={true}
            pagination={true}
            itemsPerPage={10}
          />
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-dark border border-neon-blue/20 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-white mb-2">10,000+</h3>
              <p className="text-gray-400">Active Users</p>
            </div>
            <div className="glass-dark border border-neon-purple/20 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-2xl font-bold text-white mb-2">5,000+</h3>
              <p className="text-gray-400">Services Available</p>
            </div>
            <div className="glass-dark border border-neon-pink/20 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-white mb-2">4.8</h3>
              <p className="text-gray-400">Average Rating</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
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
              <Link
                href="/auth/signup"
                className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg text-white font-semibold text-lg neon-glow hover:shadow-neon-blue transition-all duration-300 transform hover:scale-105"
              >
                Get Started Now
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 glass border border-neon-blue/30 rounded-lg text-white font-semibold text-lg hover:border-neon-blue/60 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Floating Elements */}
        <div className="fixed top-20 right-20 w-32 h-32 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="fixed bottom-20 left-20 w-48 h-48 bg-neon-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-pink/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </>
  )
}

export default Marketplace
