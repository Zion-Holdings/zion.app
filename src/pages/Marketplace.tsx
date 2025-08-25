import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { 
  Store, 
  Users, 
  Cpu, 
  Shield, 
  Cloud, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Brain,
  Award,
  Zap,
  Search,
  Filter,
  Grid,
  List,
  ShoppingCart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Marketplace = () => {
  const categories = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Cutting-edge AI solutions and machine learning services",
      count: "150+",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cpu,
      title: "Micro SAAS Services",
      description: "Custom software solutions for modern businesses",
      count: "200+",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automation",
      count: "120+",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Shield,
      title: "Enterprise Solutions",
      description: "Comprehensive business technology solutions",
      count: "80+",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Tech Talent",
      description: "Verified technology professionals and experts",
      count: "500+",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Emerging Tech",
      description: "Next-generation technology solutions",
      count: "60+",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const featuredServices = [
    {
      title: "AI-Powered Business Intelligence Platform",
      provider: "Zion Tech Group",
      rating: 5,
      price: "$2,500/month",
      category: "AI & Machine Learning",
      description: "Advanced analytics and business intelligence powered by machine learning algorithms",
      features: ["Real-time dashboards", "Predictive analytics", "Custom reporting", "Data visualization"]
    },
    {
      title: "Enterprise Cloud Migration Suite",
      provider: "Cloud Solutions Pro",
      rating: 5,
      price: "$75,000",
      category: "Cloud & DevOps",
      description: "End-to-end cloud migration with optimization for performance, cost, and security",
      features: ["Multi-cloud strategy", "Performance optimization", "Cost optimization", "Security implementation"]
    },
    {
      title: "Custom CRM System",
      provider: "Tech Innovators",
      rating: 5,
      price: "$45,000",
      category: "Micro SAAS Services",
      description: "Tailored customer relationship management system for your business needs",
      features: ["Custom workflows", "Integration APIs", "Analytics dashboard", "Mobile app"]
    }
  ];

  const stats = [
    { label: "Active Services", value: "1,200+", icon: Store },
    { label: "Verified Providers", value: "300+", icon: Users },
    { label: "Successful Projects", value: "2,500+", icon: CheckCircle },
    { label: "Client Satisfaction", value: "98%", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <SEO 
        title="Marketplace - Zion Tech Group"
        description="Discover and connect with verified technology services, AI solutions, and tech talent in our comprehensive marketplace."
        keywords="marketplace, technology services, AI solutions, tech talent, micro SAAS, cloud services, Zion Tech Group"
        canonical="https://ziontechgroup.com/marketplace"
      />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-cyan opacity-95" />
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-zion-cyan opacity-60 blur-sm"
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div 
            className="absolute top-3/4 right-1/4 w-6 h-6 rounded-full bg-zion-blue-light opacity-40 blur-sm"
            animate={{ y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-blue-light to-zion-blue bg-clip-text text-transparent">
                Technology
              </span>
              <br />
              <span className="text-white">Marketplace</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Discover and connect with verified technology services, AI solutions, and tech talent 
              in our comprehensive marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Request Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-zion-slate-light">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Explore Categories
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Browse our comprehensive selection of technology services and solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-zion-slate-light mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-zion-cyan font-semibold">{category.count} services</span>
                    <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Handpicked services from our top-rated providers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue border border-zion-blue-light rounded-2xl p-6 hover:border-zion-cyan/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-zion-cyan/20 text-zion-cyan rounded-full">
                    {service.category}
                  </span>
                  <div className="flex items-center gap-1">
                    {[...Array(service.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-zion-slate-light text-sm mb-3">by {service.provider}</p>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-zion-slate-light">
                        <CheckCircle className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-zion-cyan">{service.price}</div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Simple steps to find and connect with the right technology solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Browse & Search",
                description: "Explore our comprehensive marketplace of technology services and solutions",
                icon: Search
              },
              {
                step: "2",
                title: "Compare & Choose",
                description: "Compare different providers and select the best solution for your needs",
                icon: Filter
              },
              {
                step: "3",
                title: "Connect & Collaborate",
                description: "Connect with providers and start your project with confidence",
                icon: Users
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                    {item.step}
                  </div>
                  <div className="w-16 h-16 bg-zion-blue-dark border border-zion-blue-light rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-zion-slate-light">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Find Your Perfect Tech Solution?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Join thousands of businesses that have found their technology partners through our marketplace
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-zion-blue-dark font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Start Exploring
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white hover:text-zion-blue-dark transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;