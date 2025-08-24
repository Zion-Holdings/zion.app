
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, TrendingUp, Star, Clock, MapPin } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Marketplace - Zion Tech Group" 
        description="Discover AI services, tech talent, and equipment in our comprehensive marketplace."
        keywords="marketplace, AI services, tech talent, equipment, technology"
        canonical="https://ziontechgroup.com/marketplace"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion Marketplace
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            The world's premier marketplace for AI services, tech talent, and cutting-edge equipment
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search for services, talent, or equipment..."
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-zion-cyan text-zion-blue-dark px-6 py-2 rounded-md font-semibold hover:bg-zion-cyan-light transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">10K+</div>
              <div className="text-zion-slate-light">Active Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">5K+</div>
              <div className="text-zion-slate-light">Verified Talent</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">2K+</div>
              <div className="text-zion-slate-light">Equipment Items</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Explore Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'AI & Machine Learning', icon: '🤖', count: '2.5K+', href: '/categories/ai-machine-learning' },
              { name: 'Web Development', icon: '🌐', count: '3.2K+', href: '/categories/web-development' },
              { name: 'Mobile Development', icon: '📱', count: '1.8K+', href: '/categories/mobile-development' },
              { name: 'Data Science', icon: '📊', count: '1.5K+', href: '/categories/data-science' },
              { name: 'Cybersecurity', icon: '🔒', count: '900+', href: '/categories/cybersecurity' },
              { name: 'Cloud Services', icon: '☁️', count: '1.2K+', href: '/categories/cloud-services' },
            ].map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg p-6 hover:bg-zion-purple/10 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {category.name}
                </h3>
                <p className="text-zion-slate-light">{category.count} services</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-white">Featured Services</h2>
            <Link to="/services" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
              View All Services →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'AI-Powered Chatbot Development',
                description: 'Custom chatbot solutions with advanced NLP capabilities',
                rating: 4.9,
                reviews: 127,
                price: '$2,500',
                delivery: '2-3 weeks',
                location: 'San Francisco, CA'
              },
              {
                title: 'Full-Stack Web Application',
                description: 'Modern web apps with React, Node.js, and cloud deployment',
                rating: 4.8,
                reviews: 89,
                price: '$5,000',
                delivery: '4-6 weeks',
                location: 'New York, NY'
              },
              {
                title: 'Data Analytics Dashboard',
                description: 'Interactive dashboards with real-time data visualization',
                rating: 4.7,
                reviews: 156,
                price: '$3,200',
                delivery: '3-4 weeks',
                location: 'Austin, TX'
              }
            ].map((service, index) => (
              <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-white font-semibold">{service.rating}</span>
                    <span className="ml-2 text-zion-slate-light">({service.reviews})</span>
                  </div>
                  <span className="text-zion-cyan font-bold text-lg">{service.price}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between text-sm text-zion-slate-light">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.delivery}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {service.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-purple to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Join thousands of businesses and professionals who trust Zion for their tech needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/publish"
              className="bg-zion-cyan text-zion-blue-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
            >
              List Your Service
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-blue-dark transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
