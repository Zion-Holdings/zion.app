import React, { useState, useEffect } from 'react';
import { SEO } from "@/components/SEO";
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Users, 
  Globe, 
  Lock, 
  BarChart3,
  ArrowRight,
  CheckCircle,
  Search,
  Filter,
  Star,
  Award,
  Clock,
  TrendingUp
} from 'lucide-react';

export default function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI & Machine Learning",
      description: "Custom AI solutions including predictive analytics, natural language processing, and computer vision.",
      features: ["Machine Learning Models", "Predictive Analytics", "NLP Solutions", "Computer Vision", "AI Consulting"],
      category: "AI/ML",
      price: "From $5,000",
      duration: "4-12 weeks",
      rating: 4.9,
      popular: true,
      tags: ["AI", "Machine Learning", "Analytics", "Automation"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions including threat detection, compliance, and risk management.",
      features: ["Threat Detection", "Compliance & Audit", "Risk Assessment", "Security Monitoring", "Incident Response"],
      category: "Security",
      price: "From $3,500",
      duration: "2-8 weeks",
      rating: 4.8,
      popular: false,
      tags: ["Security", "Compliance", "Risk Management", "Monitoring"]
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud & Infrastructure",
      description: "Cloud migration, infrastructure management, and scalable solutions for modern businesses.",
      features: ["Cloud Migration", "Infrastructure Management", "Scalable Solutions", "DevOps", "Monitoring"],
      category: "Cloud",
      price: "From $4,200",
      duration: "6-16 weeks",
      rating: 4.7,
      popular: false,
      tags: ["Cloud", "Infrastructure", "DevOps", "Scalability"]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business operations.",
      features: ["Process Automation", "Digital Workflows", "Legacy Modernization", "Change Management", "Training"],
      category: "Transformation",
      price: "From $8,000",
      duration: "8-24 weeks",
      rating: 4.9,
      popular: true,
      tags: ["Transformation", "Automation", "Modernization", "Process"]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "IT Consulting",
      description: "Strategic IT consulting to align technology with your business objectives.",
      features: ["Technology Strategy", "Architecture Design", "Implementation Planning", "Performance Optimization", "ROI Analysis"],
      category: "Consulting",
      price: "From $2,500",
      duration: "1-4 weeks",
      rating: 4.8,
      popular: false,
      tags: ["Consulting", "Strategy", "Architecture", "Planning"]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Solutions",
      description: "Worldwide technology solutions with local expertise and 24/7 support.",
      features: ["Global Deployment", "Local Expertise", "24/7 Support", "Multi-language Support", "Compliance"],
      category: "Global",
      price: "From $6,000",
      duration: "12-32 weeks",
      rating: 4.9,
      popular: false,
      tags: ["Global", "Deployment", "Support", "Compliance"]
    }
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥", description: "HIPAA compliant solutions for healthcare providers" },
    { name: "Finance", icon: "🏦", description: "Secure financial technology solutions" },
    { name: "Retail", icon: "🛍️", description: "E-commerce and retail technology platforms" },
    { name: "Manufacturing", icon: "🏭", description: "Industry 4.0 and smart manufacturing" },
    { name: "Education", icon: "🎓", description: "EdTech solutions for modern learning" },
    { name: "Government", icon: "🏛️", description: "Secure government technology solutions" }
  ];

  const categories = ['all', 'AI/ML', 'Security', 'Cloud', 'Transformation', 'Consulting', 'Global'];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI/ML': 'from-purple-500 to-pink-500',
      'Security': 'from-red-500 to-orange-500',
      'Cloud': 'from-blue-500 to-cyan-500',
      'Transformation': 'from-green-500 to-teal-500',
      'Consulting': 'from-indigo-500 to-purple-500',
      'Global': 'from-yellow-500 to-orange-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen relative">
      <SEO 
        title="Comprehensive Technology Services - Zion Tech Group"
        description="Transform your business with our comprehensive technology services including AI & Machine Learning, Cybersecurity, Cloud Infrastructure, Digital Transformation, IT Consulting, and Global Solutions. Expert consulting and implementation services."
        url="https://ziontechgroup.com/services"
        keywords="AI services, cybersecurity, cloud computing, digital transformation, IT consulting, technology services, Zion Tech Group"
        ogImage="https://ziontechgroup.com/services-og-image.jpg"
        twitterCard="summary_large_image"
      />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animate-quantum-float animation-delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        <div className="relative z-10 container mx-auto text-center">
          <div className={`animate-fade-in-up transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="neon-text">
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive technology solutions designed to transform your business and drive innovation.
              From AI to cybersecurity, we deliver the expertise you need to succeed.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-black'
                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white'
                    }`}
                  >
                    {category === 'all' ? 'All Services' : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 px-4">
        <div className="relative z-10 container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover our comprehensive range of technology services designed to meet your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={index} 
                className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    ⭐ Popular
                  </div>
                )}
                
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Service Meta */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="text-cyan-400 font-medium">{service.price}</span>
                  <span className="text-gray-500 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {service.duration}
                  </span>
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm ml-2">{service.rating}</span>
                </div>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* CTA */}
                <Link 
                  to={`/services/${service.category.toLowerCase()}`}
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                >
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
          
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No services found</h3>
              <p className="text-gray-400">Try adjusting your search terms or category filter</p>
            </div>
          )}
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative py-16 px-4">
        <div className="relative z-10 container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We have extensive experience across multiple industries, delivering tailored solutions for your specific needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={industry.name} 
                className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-6 text-center border border-gray-700/30 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 px-4">
        <div className="relative z-10 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed", icon: "🚀" },
              { number: "50+", label: "Expert Consultants", icon: "👥" },
              { number: "98%", label: "Client Satisfaction", icon: "⭐" },
              { number: "24/7", label: "Support Available", icon: "🔄" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4">
        <div className="relative z-10 container mx-auto text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-12 border border-gray-700/50">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can transform your business. Contact our experts today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="quantum-button text-lg px-8 py-4"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}