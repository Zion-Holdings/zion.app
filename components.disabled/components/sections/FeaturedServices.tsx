import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { ArrowRight, Star, Users, TrendingUp } from 'lucide-react';

export default function FeaturedServices() {
  const featuredServices = [
    {
      icon: '🚀',
      title: 'Micro SaaS Solutions',
      description: 'Discover curated micro SaaS services that solve real business problems with proven results.',
      features: [
        '8 specialized categories',
        'Real user reviews & ratings',
        'Free tier options available',
        'Direct integration support'
      ],
      stats: {
        services: '24+',
        users: '50K+',
        rating: '4.8'
      },
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      href: '/micro-saas',
      category: 'Business Solutions'
    },
    {
      icon: '🔌',
      title: 'Developer API Tools',
      description: 'Powerful APIs and developer tools for building modern, scalable applications.',
      features: [
        '8 production-ready APIs',
        'Comprehensive documentation',
        'Open source SDKs',
        '99.9% uptime guarantee'
      ],
      stats: {
        services: '8',
        users: '25K+',
        rating: '4.9'
      },
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      href: '/api-tools',
      category: 'Developer Tools'
    },
    {
      icon: '🤖',
      title: 'AI & Automation',
      description: 'Cutting-edge AI tools and automation solutions that transform business workflows.',
      features: [
        '9 AI-powered tools',
        'Custom model training',
        'Enterprise-grade security',
        'Real-time analytics'
      ],
      stats: {
        services: '9',
        users: '35K+',
        rating: '4.7'
      },
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      href: '/ai-tools',
      category: 'Artificial Intelligence'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Featured Service Collections
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight">
            Transform Your Business with Our Curated Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Each collection is carefully curated to provide comprehensive solutions for specific business challenges. 
            Discover tools that have helped thousands of businesses succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <Card
              key={index}
              className="group border border-gray-800 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className={`w-24 h-24 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-4xl">{service.icon}</span>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full font-medium mb-3">
                    {service.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{service.stats.services}</div>
                    <div className="text-xs text-gray-500">Services</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{service.stats.users}</div>
                    <div className="text-xs text-gray-500">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{service.stats.rating}</div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                </div>

                <ul className="space-y-2 mb-8 text-left">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href={service.href}
                  variant="primary"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Explore {service.title}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300">
            <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
            <span className="text-sm font-medium">All services are actively maintained and regularly updated</span>
          </div>
        </div>
      </div>
    </section>
  );
}