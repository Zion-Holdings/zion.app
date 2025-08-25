

import React, { useState, useEffect, useCallback, useMemo } from 'react';
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
  Zap,
  Globe,
  Target
} from 'lucide-react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Memoized hero slides for better performance
  const heroSlides = useMemo(() => [
    {
      title: "AI-Powered Innovation",
      subtitle: "Transform your business with cutting-edge artificial intelligence solutions",
      description: "From predictive analytics to intelligent automation, we deliver AI solutions that drive real business results.",
      cta: "Explore AI Solutions",
      path: "/comprehensive-services",
      icon: Brain,
      color: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-900/20 to-blue-900/20"
    },
    {
      title: "Enterprise IT Excellence",
      subtitle: "Comprehensive IT services for modern businesses",
      description: "24/7 support, cybersecurity, cloud solutions, and strategic technology consulting to keep your business ahead.",
      cta: "View IT Services",
      path: "/it-onsite-services",
      icon: Shield,
      color: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-900/20 to-pink-900/20"
    },
    {
      title: "Micro SAAS Solutions",
      subtitle: "Scalable software solutions for every business need",
      description: "Custom micro SAAS applications that streamline operations, reduce costs, and accelerate growth.",
      cta: "Browse Services",
      path: "/services",
      icon: Cpu,
      color: "from-green-500 to-emerald-600",
      bgGradient: "from-green-900/20 to-emerald-900/20"
    }
  ], []);

  // Memoized featured services for better performance
  const featuredServices = useMemo(() => [
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
      path: "/services/ai-powered-crm",
      badge: "Most Popular"
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
      path: "/services/cybersecurity-platform",
      badge: "Enterprise Ready"
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
      path: "/services/cloud-optimization",
      badge: "Cost Effective"
    }
  ], []);

  // Memoized stats for better performance
  const stats = useMemo(() => [
    { label: "Projects Completed", value: "500+", icon: CheckCircle },
    { label: "Happy Clients", value: "200+", icon: Users },
    { label: "Team Members", value: "50+", icon: Users },
    { label: "Years Experience", value: "10+", icon: Clock }
  ], []);

  // Memoized scroll handler for better performance
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY;
    const windowHeight = window.innerHeight;
    setIsVisible(scrolled > windowHeight * 0.3);
  }, []);

  useEffect(() => {
    // Auto-rotate hero slides with better performance
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // Increased to 6 seconds for better UX

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/80 to-blue-900/80"></div>
        
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Hero Content */}
          <div className="relative">
            {/* Hero Slides */}
            <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.title}
                  className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                    index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  aria-hidden={index !== currentSlide}
                >
                  <div className={`p-8 rounded-full ${slide.bgGradient} mb-8`}>
                    <slide.icon className="w-16 h-16 lg:w-20 lg:h-20 text-white" />
                  </div>
                  
                  <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {slide.title}
                    </span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-gray-300 mb-4 max-w-3xl">
                    {slide.subtitle}
                  </p>
                  
                  <p className="text-lg text-gray-400 mb-8 max-w-2xl">
                    {slide.description}
                  </p>
                  
                  <Link
                    to={slide.path}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                    aria-label={`${slide.cta} - ${slide.title}`}
                  >
                    {slide.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                    index === currentSlide 
                      ? 'bg-cyan-400 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === currentSlide ? 'true' : 'false'}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover our most popular and innovative solutions designed to transform your business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                {/* Badge */}
                {service.badge && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white mb-4">
                    {service.badge}
                  </div>
                )}

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price and Rating */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-white">{service.price}</div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-white font-medium">{service.rating}</span>
                    <span className="ml-1 text-gray-400">({service.reviewCount})</span>
                  </div>
                </div>

                {/* CTA */}
                <Link
                  to={service.path}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of companies already leveraging our cutting-edge technology solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              aria-label="Get started with Zion Tech Group"
            >
              Get Started Today
              <Rocket className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold rounded-lg transition-all duration-300"
              aria-label="View all our services"
            >
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
