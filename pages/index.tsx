import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import FuturisticHero from '../components/ui/FuturisticHero';
import EnhancedMarketplaceCard from '../components/ui/EnhancedMarketplaceCard';

const Home: NextPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')

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
      category: 'Services',
      tags: ['Consulting', 'Development', 'Support']
    },
    {
      title: 'AI Talents',
      description: 'Expert AI developers and consultants',
      icon: '🤖',
      link: '/talent',
      color: 'purple' as const,
      category: 'Talent',
      tags: ['AI', 'Machine Learning', 'Data Science']
    },
    {
      title: 'Equipment',
      description: 'High-performance computing hardware',
      icon: '⚙️',
      link: '/products',
      color: 'green' as const,
      category: 'Hardware',
      tags: ['Hardware', 'Computing', 'Infrastructure']
    },
    {
      title: 'Innovation',
      description: 'Cutting-edge technology solutions',
      icon: '🚀',
      link: '/products',
      color: 'pink' as const,
      category: 'Products',
      tags: ['Innovation', 'Technology', 'Solutions']
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
      tags: ['AI', 'Machine Learning', 'Custom Solutions']
    },
    {
      title: 'Cloud Migration',
      description: 'Seamless cloud infrastructure setup and migration services',
      price: '$2000-15000',
      rating: 4.8,
      link: '/services/cloud-migration-services',
      color: 'purple' as const,
      tags: ['Cloud', 'Migration', 'Infrastructure']
    },
    {
      title: 'Security Auditing',
      description: 'Comprehensive security assessments and penetration testing',
      price: '$1000-8000',
      rating: 4.9,
      link: '/services/security-auditing',
      color: 'green' as const,
      tags: ['Security', 'Auditing', 'Testing']
    },
    {
      title: 'Performance Optimization',
      description: 'System and application optimization for maximum efficiency',
      price: '$800-3000',
      rating: 4.7,
      link: '/services/performance-optimization',
      color: 'pink' as const,
      tags: ['Performance', 'Optimization', 'Efficiency']
    }
  ]

  const topTalents = [
    {
      title: 'Dr. Sarah Chen',
      description: 'Machine Learning Expert with 8+ years of experience in AI research',
      price: '$200/hr',
      rating: 4.9,
      link: '/talent',
      color: 'blue' as const,
      featured: true,
      tags: ['AI', 'Machine Learning', 'Research']
    },
    {
      title: 'Alex Rodriguez',
      description: 'Deep Learning Specialist specializing in neural networks and computer vision',
      price: '$180/hr',
      rating: 4.8,
      link: '/talent',
      color: 'purple' as const,
      tags: ['Deep Learning', 'Neural Networks', 'Computer Vision']
    },
    {
      title: 'Maria Johnson',
      description: 'Cloud Architecture Expert with AWS, Azure, and GCP certifications',
      price: '$220/hr',
      rating: 4.9,
      link: '/talent',
      color: 'green' as const,
      tags: ['Cloud', 'AWS', 'Azure', 'GCP']
    },
    {
      title: 'David Kim',
      description: 'Cybersecurity Specialist with expertise in threat detection and prevention',
      price: '$250/hr',
      rating: 4.9,
      link: '/talent',
      color: 'pink' as const,
      tags: ['Cybersecurity', 'Threat Detection', 'Prevention']
    }
  ]

  const stats = [
    { value: '10K+', label: 'Active Users' },
    { value: '500+', label: 'AI Services' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' }
  ]

  const categories = [
    { id: 'all', name: 'All', color: 'blue' },
    { id: 'services', name: 'Services', color: 'purple' },
    { id: 'talent', name: 'Talent', color: 'green' },
    { id: 'products', name: 'Products', color: 'pink' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Head>
        <title>Zion - The First Free AI-Powered Marketplace</title>
        <meta name="description" content="Experience the future of commerce with Zion's cutting-edge AI-powered marketplace. Connect with top-tier IT services, AI talents, and innovative products." />
        <meta name="keywords" content="AI marketplace, IT services, AI talents, technology solutions, digital transformation" />
        <meta property="og:title" content="Zion - The First Free AI-Powered Marketplace" />
        <meta property="og:description" content="Experience the future of commerce with Zion's cutting-edge AI-powered marketplace." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.netlify.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zion - The First Free AI-Powered Marketplace" />
        <meta name="twitter:description" content="Experience the future of commerce with Zion's cutting-edge AI-powered marketplace." />
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
              <Link href="/services" className="hover:text-purple-300 transition-colors">
                Services
              </Link>
              <Link href="/products" className="hover:text-purple-300 transition-colors">
                Products
              </Link>
              <Link href="/talent" className="hover:text-purple-300 transition-colors">
                Talent
              </Link>
              <Link href="/blog" className="hover:text-purple-300 transition-colors">
                Blog
              </Link>
              <Link href="/about" className="hover:text-purple-300 transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-purple-300 transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex gap-4">
              <Link
                href="/auth"
                className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
              >
                Sign In
              </Link>
              <Link
                href="/auth"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-lg text-white text-sm font-medium transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <FuturisticHero />

      {/* Interactive Stats Section */}
      <section className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2 group-hover:animate-pulse">
                  {stat.value}
                </div>
                <div className="text-gray-300 text-sm md:text-base group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Marketplace Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Explore Our Marketplace
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover a comprehensive ecosystem of technology solutions, from AI services to enterprise infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketplaceCategories.map((category, index) => (
              <EnhancedMarketplaceCard
                key={index}
                title={category.title}
                description={category.description}
                icon={category.icon}
                link={category.link}
                color={category.color}
                category={category.category}
                tags={category.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Services */}
      <section className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Featured Services
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Top-rated services from our verified professionals and companies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <EnhancedMarketplaceCard
                key={index}
                title={service.title}
                description={service.description}
                link={service.link}
                color={service.color}
                price={service.price}
                rating={service.rating}
                featured={service.featured}
                tags={service.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Top Talents */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Top AI Talents
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Connect with world-class AI experts and technology professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topTalents.map((talent, index) => (
              <EnhancedMarketplaceCard
                key={index}
                title={talent.title}
                description={talent.description}
                link={talent.link}
                color={talent.color}
                price={talent.price}
                rating={talent.rating}
                featured={talent.featured}
                tags={talent.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already leveraging Zion's AI-powered marketplace for their technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth"
              className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">Get Started Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
            <Link
              href="/services"
              className="border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                Zion
              </h3>
              <p className="text-gray-300 text-sm">
                The first free AI-powered marketplace connecting businesses with top technology solutions.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/services" className="hover:text-purple-300 transition-colors">IT Services</Link></li>
                <li><Link href="/services" className="hover:text-purple-300 transition-colors">AI Development</Link></li>
                <li><Link href="/services" className="hover:text-purple-300 transition-colors">Cloud Solutions</Link></li>
                <li><Link href="/services" className="hover:text-purple-300 transition-colors">Security</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/about" className="hover:text-purple-300 transition-colors">About</Link></li>
                <li><Link href="/talent" className="hover:text-purple-300 transition-colors">Careers</Link></li>
                <li><Link href="/blog" className="hover:text-purple-300 transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-purple-300 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><Link href="/contact" className="hover:text-purple-300 transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-purple-300 transition-colors">Contact Support</Link></li>
                <li><Link href="/auth" className="hover:text-purple-300 transition-colors">Sign In</Link></li>
                <li><Link href="/auth" className="hover:text-purple-300 transition-colors">Sign Up</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Zion. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 