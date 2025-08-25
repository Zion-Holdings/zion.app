

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Cpu, 
  Rocket, 
  TrendingUp, 
  Users, 
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  ChevronRight,
  ChevronLeft,
  Award,
  Globe,
  Zap,
  Target,
  BarChart3,
  Lightbulb,
  Code,
  Database,
  Cloud,
  Lock
} from 'lucide-react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Auto-rotate hero slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      title: "AI-Powered Innovation",
      subtitle: "Transform your business with cutting-edge artificial intelligence solutions",
      description: "From predictive analytics to intelligent automation, we deliver AI solutions that drive real business results.",
      cta: "Explore AI Solutions",
      path: "/ai-solutions",
      icon: Brain,
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Enterprise IT Excellence",
      subtitle: "Comprehensive IT services for modern businesses",
      description: "24/7 support, cybersecurity, cloud solutions, and strategic technology consulting to keep your business ahead.",
      cta: "View IT Services",
      path: "/services",
      icon: Shield,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Micro SAAS Solutions",
      subtitle: "Scalable software solutions for every business need",
      description: "Custom micro SAAS applications that streamline operations, reduce costs, and accelerate growth.",
      cta: "Browse Services",
      path: "/services",
      icon: Cpu,
      color: "from-green-500 to-emerald-600"
    }
  ];

  const featuredServices = [
    {
      id: "ai-powered-crm",
      title: "AI-Powered CRM",
      description: "Intelligent customer relationship management with predictive analytics and automated insights",
      price: "$1,500/month",
      features: ["Predictive Analytics", "Automated Follow-ups", "Smart Lead Scoring", "Real-time Insights"],
      icon: Brain,
      category: "AI & Machine Learning",
      rating: 4.9,
      reviewCount: 342,
      path: "/services/ai-powered-crm"
    },
    {
      id: "cybersecurity-platform",
      title: "Cybersecurity Platform",
      description: "Comprehensive threat detection and response system with AI-powered security intelligence",
      price: "$1,800/month",
      features: ["Threat Detection", "Incident Response", "Compliance Monitoring", "24/7 Protection"],
      icon: Shield,
      category: "Cybersecurity",
      rating: 4.8,
      reviewCount: 189,
      path: "/services/cybersecurity-platform"
    },
    {
      id: "cloud-optimization",
      title: "Cloud Cost Optimization",
      description: "AI-driven cloud cost management that reduces spending by 30-50% automatically",
      price: "$350/month",
      features: ["Cost Analysis", "Automated Optimization", "Resource Scheduling", "Budget Management"],
      icon: Cpu,
      category: "Cloud Computing",
      rating: 4.7,
      reviewCount: 234,
      path: "/services/cloud-optimization"
    }
  ];

  const stats = [
    { label: "AI Services", value: "25+", icon: Brain, color: "text-cyan-400" },
    { label: "Happy Clients", value: "100+", icon: Users, color: "text-purple-400" },
    { label: "Uptime", value: "99.9%", icon: Shield, color: "text-green-400" },
    { label: "Support", value: "24/7", icon: Clock, color: "text-yellow-400" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechFlow Inc.",
      company: "TechFlow Inc.",
      content: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 40% and reduced costs significantly.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "CEO, DataSphere",
      company: "DataSphere",
      content: "The cybersecurity platform they implemented has given us peace of mind. Their team is incredibly responsive and knowledgeable.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Director, GreenTech",
      company: "GreenTech",
      content: "Their micro SAAS solution streamlined our entire workflow. The ROI was immediate and the support is outstanding.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const caseStudies = [
    {
      title: "Global Retail Chain Transformation",
      description: "Implemented AI-powered inventory management for a 500+ store retail chain, reducing waste by 35% and increasing profits by 28%.",
      metrics: ["35% waste reduction", "28% profit increase", "500+ stores", "6 months implementation"],
      icon: BarChart3,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Healthcare Data Security",
      description: "Deployed comprehensive cybersecurity solution for a major hospital network, achieving 100% compliance and zero security breaches.",
      metrics: ["100% compliance", "0 security breaches", "24/7 monitoring", "HIPAA certified"],
      icon: Shield,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Manufacturing Automation",
      description: "AI-driven process optimization for manufacturing company, increasing production efficiency by 45% while reducing operational costs.",
      metrics: ["45% efficiency increase", "30% cost reduction", "Real-time monitoring", "Predictive maintenance"],
      icon: Cpu,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen futuristic-bg">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Slides */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80"></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${slide.color} opacity-20`}></div>
                
                <div className="relative z-10 h-full flex items-center">
                  <div className="max-w-4xl mx-auto text-center px-6">
                    <div className="mb-8">
                      <slide.icon className="w-20 h-20 mx-auto mb-6 text-white opacity-80" />
                      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-xl md:text-2xl text-cyan-300 mb-8 font-medium">
                        {slide.subtitle}
                      </p>
                      <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        {slide.description}
                      </p>
                      <Link
                        to={slide.path}
                        className="inline-flex items-center space-x-3 futuristic-btn text-lg px-8 py-4 group"
                      >
                        <span>{slide.cta}</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-full hover:bg-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 z-20"
            >
              <ChevronLeft className="w-6 h-6 text-cyan-400" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm border border-cyan-500/30 rounded-full hover:bg-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 z-20"
            >
              <ChevronRight className="w-6 h-6 text-cyan-400" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-cyan-400 w-8' 
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-12 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-lg text-gray-400 mb-4">Trusted by Industry Leaders</h3>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-yellow-400" />
                <span className="text-gray-300">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-green-400" />
                <span className="text-gray-300">SOC 2 Type II</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-6 h-6 text-blue-400" />
                <span className="text-gray-300">Global Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                  <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our most popular AI-powered solutions and IT services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={service.id}
                className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <service.icon className="w-12 h-12 text-cyan-400" />
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{service.rating}</span>
                    <span className="text-xs text-gray-500">({service.reviewCount})</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-4">
                  <span className="text-sm text-purple-400 font-medium">{service.category}</span>
                  <div className="text-2xl font-bold text-cyan-400 mt-1">{service.price}</div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.path}
                  className="w-full futuristic-btn text-center group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-3 futuristic-btn text-lg px-8 py-4 group"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900/30 to-black/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses. See how we've transformed operations across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${study.color} p-4 mb-6 mx-auto`}>
                  <study.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors duration-300">
                  {study.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-center">
                  {study.description}
                </p>

                <div className="space-y-2">
                  {study.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI-First Approach",
                description: "Every solution is built with artificial intelligence at its core, ensuring maximum efficiency and innovation."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Bank-grade security protocols and compliance standards to protect your business and data."
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock technical support and monitoring to keep your systems running smoothly."
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description: "Track record of delivering measurable business outcomes and ROI for our clients."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified professionals with deep expertise in AI, cybersecurity, and enterprise IT."
              },
              {
                icon: Rocket,
                title: "Future-Ready",
                description: "Solutions designed to scale and adapt as your business grows and technology evolves."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="w-16 h-16 mx-auto mb-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900/30 to-black/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies to deliver robust, scalable, and secure solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Brain, label: "Machine Learning", color: "text-cyan-400" },
              { icon: Cloud, label: "Cloud Native", color: "text-blue-400" },
              { icon: Lock, label: "Zero Trust", color: "text-green-400" },
              { icon: Zap, label: "Edge Computing", color: "text-yellow-400" },
              { icon: Database, label: "Big Data", color: "text-purple-400" },
              { icon: Code, label: "Microservices", color: "text-pink-400" },
              { icon: Target, label: "DevOps", color: "text-orange-400" },
              { icon: Lightbulb, label: "IoT Solutions", color: "text-indigo-400" }
            ].map((tech, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                  <tech.icon className={`w-12 h-12 mx-auto mb-4 ${tech.color}`} />
                  <div className="text-gray-300 font-medium">{tech.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of businesses that have already revolutionized their operations with our AI-powered solutions
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/contact"
                  className="futuristic-btn text-lg px-8 py-4 group"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <Link
                  to="/services"
                  className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-full font-semibold hover:bg-cyan-500/20 hover:border-cyan-500 transition-all duration-300 group"
                >
                  <span>Explore Services</span>
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
