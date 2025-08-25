import React from 'react';
import { Helmet } from 'react-helmet-async';
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
  TrendingUp,
  Building,
  Car,
  GraduationCap,
  Factory,
  Home,
  Leaf,
  Scale,
  Truck,
  Briefcase,
  Cpu,
  Eye,
  ShoppingCart,
  Calculator,
  Stethoscope,
  BookOpen,
  Settings,
  MessageSquare,
  Bot,
  Monitor,
  Wifi,
  PieChart,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { enhancedRealMicroSaasServices, serviceCategories } from '../../../data/enhanced-real-micro-saas-services';

export default function ServicesOverview() {
  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'AI & Machine Learning': <Brain className="w-8 h-8" />,
      'Cloud & Infrastructure': <Cloud className="w-8 h-8" />,
      'Digital Marketing': <TrendingUp className="w-8 h-8" />,
      'AI & Content Creation': <Brain className="w-8 h-8" />,
      'Software Development': <Zap className="w-8 h-8" />,
      'Cybersecurity': <Shield className="w-8 h-8" />,
      'Data & Analytics': <BarChart3 className="w-8 h-8" />,
      'Design & User Experience': <Eye className="w-8 h-8" />,
      'E-commerce & Sales': <ShoppingCart className="w-8 h-8" />,
      'Finance & Accounting': <Calculator className="w-8 h-8" />,
      'Healthcare & Medical': <Stethoscope className="w-8 h-8" />,
      'Education & Training': <BookOpen className="w-8 h-8" />,
      'Productivity & Automation': <Settings className="w-8 h-8" />,
      'Communication & Collaboration': <MessageSquare className="w-8 h-8" />,
      'Robotics & Automation': <Bot className="w-8 h-8" />,
      'Metaverse & VR/AR': <Monitor className="w-8 h-8" />,
      'IoT & Smart Cities': <Wifi className="w-8 h-8" />,
      'Analytics & Business Intelligence': <PieChart className="w-8 h-8" />,
      'Legal & Compliance': <Scale className="w-8 h-8" />,
      'Logistics & Supply Chain': <Truck className="w-8 h-8" />,
      'Human Resources': <Briefcase className="w-8 h-8" />,
      'Manufacturing & Industry 4.0': <Factory className="w-8 h-8" />,
      'Real Estate & Property': <Home className="w-8 h-8" />,
      'Energy & Sustainability': <Leaf className="w-8 h-8" />
    };
    return icons[category] || <Globe className="w-8 h-8" />;
  };

  const getServicesByCategory = (category: string) => {
    return enhancedRealMicroSaasServices.filter(service => service.category === category);
  };

  const getCategoryDescription = (category: string) => {
    const descriptions: { [key: string]: string } = {
      'AI & Machine Learning': 'Cutting-edge artificial intelligence and machine learning solutions that transform how businesses operate and make decisions.',
      'Cloud & Infrastructure': 'Scalable cloud solutions and infrastructure management services that ensure your business runs smoothly and efficiently.',
      'Digital Marketing': 'Data-driven digital marketing strategies and tools that help you reach your target audience and grow your business.',
      'AI & Content Creation': 'AI-powered content creation tools that generate high-quality, engaging content for all your marketing needs.',
      'Software Development': 'Custom software solutions and development services tailored to your specific business requirements.',
      'Cybersecurity': 'Comprehensive security solutions that protect your business from threats and ensure compliance with regulations.',
      'Data & Analytics': 'Advanced analytics and business intelligence tools that turn your data into actionable insights.',
      'Design & User Experience': 'User-centered design solutions that create engaging and intuitive digital experiences.',
      'E-commerce & Sales': 'Complete e-commerce solutions and sales optimization tools to maximize your online revenue.',
      'Finance & Accounting': 'Financial management and accounting solutions that streamline your business operations.',
      'Healthcare & Medical': 'Innovative healthcare technology solutions that improve patient care and operational efficiency.',
      'Education & Training': 'Modern learning platforms and training solutions that enhance educational outcomes.',
      'Productivity & Automation': 'Workflow automation and productivity tools that streamline your business processes.',
      'Communication & Collaboration': 'Team collaboration and communication tools that improve workplace productivity.',
      'Robotics & Automation': 'Advanced robotics and automation solutions for industrial and commercial applications.',
      'Metaverse & VR/AR': 'Immersive technology solutions that create engaging virtual experiences and digital environments.',
      'IoT & Smart Cities': 'Internet of Things solutions that connect devices and create smart, efficient systems.',
      'Analytics & Business Intelligence': 'Comprehensive analytics platforms that provide deep insights into your business performance.',
      'Legal & Compliance': 'AI-powered legal research and compliance tools that streamline legal operations.',
      'Logistics & Supply Chain': 'Intelligent supply chain and logistics solutions that optimize your operations.',
      'Human Resources': 'AI-driven HR solutions that improve recruitment, engagement, and workforce management.',
      'Manufacturing & Industry 4.0': 'Smart manufacturing solutions that optimize production and improve efficiency.',
      'Real Estate & Property': 'AI-powered real estate analytics and management tools for better investment decisions.',
      'Energy & Sustainability': 'Smart energy management and sustainability solutions for a greener future.'
    };
    return descriptions[category] || 'Comprehensive technology solutions for your business needs.';
  };

  const getCategoryStats = (category: string) => {
    const services = getServicesByCategory(category);
    const totalServices = services.length;
    const popularServices = services.filter(s => s.popular).length;
    const avgPrice = services.reduce((sum, s) => sum + parseFloat(s.price.replace('$', '')), 0) / totalServices;
    
    return {
      totalServices,
      popularServices,
      avgPrice: `$${Math.round(avgPrice)}/month`
    };
  };

  return (
    <>
      <Helmet>
        <title>Services Overview - Zion Tech Group</title>
        <meta name="description" content="Comprehensive overview of all our technology services including AI, cybersecurity, cloud infrastructure, and specialized industry solutions. Discover how we can transform your business." />
        <meta name="keywords" content="technology services, AI solutions, cybersecurity, cloud computing, Zion Tech Group services overview" />
        <link rel="canonical" href="https://ziontechgroup.com/services-overview" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Complete <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Services Overview</span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed mb-8">
              Explore our comprehensive portfolio of technology services designed to transform every aspect of your business. 
              From AI and cybersecurity to specialized industry solutions, we have the expertise to drive your success.
            </p>
            
            {/* Contact Information */}
            <div className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-zion-cyan mb-4">Ready to Get Started?</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2 text-zion-slate-light">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <span>Middletown, DE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Categories Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Our Service Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.filter(cat => cat !== 'All').map((category) => {
                const stats = getCategoryStats(category);
                const services = getServicesByCategory(category);
                
                return (
                  <div key={category} className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-zion-cyan">
                        {getCategoryIcon(category)}
                      </div>
                      <h3 className="text-xl font-bold text-white">{category}</h3>
                    </div>

                    {/* Category Description */}
                    <p className="text-zion-slate-light text-sm mb-4">
                      {getCategoryDescription(category)}
                    </p>

                    {/* Category Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
                      <div className="text-center p-2 bg-zion-blue-light/10 rounded">
                        <div className="text-zion-cyan font-bold">{stats.totalServices}</div>
                        <div className="text-zion-slate-light">Services</div>
                      </div>
                      <div className="text-center p-2 bg-zion-blue-light/10 rounded">
                        <div className="text-zion-cyan font-bold">{stats.popularServices}</div>
                        <div className="text-zion-slate-light">Popular</div>
                      </div>
                      <div className="text-center p-2 bg-zion-blue-light/10 rounded">
                        <div className="text-zion-cyan font-bold">{stats.avgPrice}</div>
                        <div className="text-zion-slate-light">Avg Price</div>
                      </div>
                    </div>

                    {/* Sample Services */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-white mb-2">Featured Services:</h4>
                      <ul className="space-y-1">
                        {services.slice(0, 3).map((service, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-zion-slate-light">
                            <CheckCircle className="w-3 h-3 text-zion-cyan flex-shrink-0" />
                            {service.name}
                          </li>
                        ))}
                        {services.length > 3 && (
                          <li className="text-xs text-zion-cyan">
                            +{services.length - 3} more services
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link
                      to={`/services-showcase?category=${encodeURIComponent(category)}`}
                      className="text-zion-cyan hover:text-zion-cyan-light flex items-center group text-sm"
                    >
                      View All {category} Services <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Featured Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enhancedRealMicroSaasServices.filter(service => service.popular).slice(0, 6).map((service) => (
                <div key={service.id} className="bg-zion-blue-light/20 rounded-xl p-6 border border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl">{service.icon}</div>
                    <div className="flex items-center gap-1 bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full text-xs">
                      <CheckCircle className="w-3 h-3 fill-current" />
                      Popular
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-zion-slate-light text-sm mb-3">{service.tagline}</p>
                  
                  <div className="mb-4">
                    <span className="text-xl font-bold text-zion-cyan">{service.price}</span>
                    <span className="text-zion-slate-light">{service.period}</span>
                  </div>

                  <div className="mb-4 p-3 bg-zion-blue-light/10 rounded-lg">
                    <div className="text-xs text-zion-slate-light space-y-1">
                      <div><strong>ROI:</strong> {service.roi}</div>
                      <div><strong>Market:</strong> {service.marketSize}</div>
                    </div>
                  </div>

                  <Link
                    to={service.link}
                    className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark font-bold py-2 px-4 rounded-lg transition-colors text-center text-sm block"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Zion Tech Group */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why Choose Zion Tech Group?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-bold text-white mb-2">Innovation First</h3>
                <p className="text-zion-slate-light text-sm">Cutting-edge technology solutions that keep you ahead of the competition</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-lg font-bold text-white mb-2">Proven Results</h3>
                <p className="text-zion-slate-light text-sm">Track record of delivering measurable ROI and business transformation</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-lg font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-zion-slate-light text-sm">Bank-level security and compliance for all our solutions</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-lg font-bold text-white mb-2">Global Support</h3>
                <p className="text-zion-slate-light text-sm">24/7 support and expertise available worldwide</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Our team of technology experts is ready to help you choose the perfect solutions for your business needs. 
              Let's discuss how we can drive your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Schedule a Consultation
              </Link>
              <a
                href="tel:+13024640950"
                className="bg-transparent hover:bg-zion-purple/20 text-zion-cyan border-2 border-zion-cyan font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}