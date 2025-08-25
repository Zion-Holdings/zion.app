import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Star, Users, Clock, TrendingUp, Zap, Shield, Globe } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  rating: number;
  users: number;
  deliveryTime: string;
  price: string;
  features: string[];
  trending: boolean;
  featured: boolean;
}

const services: Service[] = [
  {
    id: '1',
    title: 'AI-Powered Development',
    description: 'Cutting-edge AI solutions for modern applications with machine learning integration.',
    icon: <Zap className="w-8 h-8" />,
    category: 'AI & ML',
    rating: 4.9,
    users: 1250,
    deliveryTime: '2-4 weeks',
    price: '$5,000+',
    features: ['Machine Learning', 'Neural Networks', 'Predictive Analytics', 'Natural Language Processing'],
    trending: true,
    featured: true
  },
  {
    id: '2',
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions with enterprise-grade security and performance optimization.',
    icon: <Globe className="w-8 h-8" />,
    category: 'DevOps',
    rating: 4.8,
    users: 890,
    deliveryTime: '3-5 weeks',
    price: '$3,500+',
    features: ['AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Monitoring & Logging'],
    trending: false,
    featured: true
  },
  {
    id: '3',
    title: 'Cybersecurity Solutions',
    description: 'Comprehensive security frameworks protecting your digital assets from modern threats.',
    icon: <Shield className="w-8 h-8" />,
    category: 'Security',
    rating: 4.9,
    users: 650,
    deliveryTime: '4-6 weeks',
    price: '$4,500+',
    features: ['Penetration Testing', 'Security Audits', 'Incident Response', 'Compliance'],
    trending: true,
    featured: false
  },
  {
    id: '4',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications with modern UI/UX design.',
    icon: <TrendingUp className="w-8 h-8" />,
    category: 'Mobile',
    rating: 4.7,
    users: 2100,
    deliveryTime: '6-8 weeks',
    price: '$8,000+',
    features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'],
    trending: false,
    featured: true
  }
];

export function InteractiveServiceShowcase() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'rating' | 'users' | 'price' | 'trending'>('rating');
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'AI & ML', 'DevOps', 'Security', 'Mobile', 'Web3', 'Data Science'];

  const filteredServices = services
    .filter(service => selectedCategory === 'All' || service.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating': return b.rating - a.rating;
        case 'users': return b.users - a.users;
        case 'price': return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'trending': return Number(b.trending) - Number(a.trending);
        default: return 0;
      }
    });

  const handleCardHover = (id: string | null) => {
    setHoveredCard(id);
  };

  const handleCardClick = (service: Service) => {
    // Here you would typically navigate to service details or open a modal
    console.log('Service selected:', service.title);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-zion-slate-light/5 to-zion-blue-light/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover cutting-edge technology solutions designed to transform your business and drive innovation
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/30'
                    : 'bg-white dark:bg-zion-slate text-zion-slate border border-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-zion-slate-light">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 border border-zion-slate-light rounded-lg bg-white dark:bg-zion-slate text-zion-slate focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
            >
              <option value="rating">Rating</option>
              <option value="users">Users</option>
              <option value="price">Price</option>
              <option value="trending">Trending</option>
            </select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8" ref={containerRef}>
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                hoveredCard === service.id ? 'scale-105' : 'scale-100'
              }`}
              onMouseEnter={() => handleCardHover(service.id)}
              onMouseLeave={() => handleCardHover(null)}
              onClick={() => handleCardClick(service)}
            >
              {/* 3D Card Effect */}
              <div
                className={`relative bg-white dark:bg-zion-slate rounded-2xl p-6 shadow-lg border border-zion-slate-light transition-all duration-500 ${
                  hoveredCard === service.id
                    ? 'shadow-2xl shadow-zion-cyan/20 border-zion-cyan/30 rotate-y-3'
                    : 'hover:shadow-xl'
                }`}
                style={{
                  transform: hoveredCard === service.id 
                    ? 'perspective(1000px) rotateY(3deg) rotateX(2deg)' 
                    : 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
                }}
              >
                {/* Badges */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {service.trending && (
                    <span className="px-2 py-1 bg-gradient-to-r from-zion-emerald to-zion-cyan text-white text-xs font-medium rounded-full">
                      Trending
                    </span>
                  )}
                  {service.featured && (
                    <span className="px-2 py-1 bg-gradient-to-r from-zion-gold to-zion-orange text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${
                    service.category === 'AI & ML' ? 'bg-zion-cyan/10 text-zion-cyan' :
                    service.category === 'DevOps' ? 'bg-zion-purple/10 text-zion-purple' :
                    service.category === 'Security' ? 'bg-zion-emerald/10 text-zion-emerald' :
                    'bg-zion-gold/10 text-zion-gold'
                  }`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-zion-slate mb-2">{service.title}</h3>
                    <p className="text-zion-slate-light text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-zion-gold mb-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{service.rating}</span>
                    </div>
                    <span className="text-xs text-zion-slate-light">Rating</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-zion-cyan mb-1">
                      <Users className="w-4 h-4" />
                      <span className="text-sm font-medium">{service.users.toLocaleString()}</span>
                    </div>
                    <span className="text-xs text-zion-slate-light">Users</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-zion-emerald mb-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-medium">{service.deliveryTime}</span>
                    </div>
                    <span className="text-xs text-zion-slate-light">Delivery</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-zion-slate mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-zion-slate-light">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-zion-cyan">{service.price}</div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-200 group-hover:shadow-lg group-hover:shadow-zion-cyan/30">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 rounded-2xl opacity-0 transition-opacity duration-300 ${
                  hoveredCard === service.id ? 'opacity-100' : ''
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-2xl p-8 border border-zion-cyan/20">
            <h3 className="text-2xl font-bold text-zion-slate mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution that drives results
            </p>
            <button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-zion-cyan/30 hover:-translate-y-1">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}