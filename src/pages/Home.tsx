
import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { FeatureCard } from '@/components/FeatureCard';
import { FeaturedListingsSection } from '@/components/FeaturedListingsSection';
import { NewsletterSection } from '@/components/NewsletterSection';
import { TrustedBySection } from '@/components/TrustedBySection';
import { EnhancedQuickAccess } from '@/components/home/EnhancedQuickAccess';
import { ComprehensiveServicesShowcase } from '@/components/ComprehensiveServicesShowcase';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  ArrowRight, 
  Star, 
  CheckCircle,
  TrendingUp,
  Award,
  Clock,
  MapPin
} from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence services that transform your business operations and drive innovation.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive cybersecurity solutions protecting your digital assets with industry-leading protocols.'
    },
    {
      icon: Users,
      title: 'Top Tech Talent',
      description: 'Access to a curated network of skilled professionals ready to tackle your most complex challenges.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide service delivery with local expertise and 24/7 support across all time zones.'
    }
  ];

  const stats = [
    { label: 'Happy Clients', value: '500+', icon: Users },
    { label: 'Projects Completed', value: '1000+', icon: CheckCircle },
    { label: 'Years Experience', value: '15+', icon: Award },
    { label: 'Global Locations', value: '25+', icon: MapPin }
  ];

  const services = [
    {
      title: 'IT Infrastructure',
      description: 'Complete IT infrastructure solutions including cloud migration, network optimization, and system integration.',
      features: ['Cloud Migration', 'Network Security', 'System Integration', '24/7 Monitoring'],
      price: 'Starting at $2,500',
      badge: 'Popular'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Custom AI solutions that automate processes, provide insights, and create competitive advantages.',
      features: ['Custom AI Models', 'Process Automation', 'Data Analytics', 'Predictive Insights'],
      price: 'Starting at $5,000',
      badge: 'Trending'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security services protecting your organization from evolving cyber threats.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Security Training'],
      price: 'Starting at $3,500',
      badge: 'Essential'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our IT infrastructure completely. Their AI solutions increased our efficiency by 40%.',
      rating: 5,
      company: 'TechCorp'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, InnovateLab',
      content: 'The cybersecurity implementation was seamless and comprehensive. We feel much more secure now.',
      rating: 5,
      company: 'InnovateLab'
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering, DataFlow',
      content: 'Their talent matching service connected us with exceptional developers who perfectly fit our culture.',
      rating: 5,
      company: 'DataFlow'
    }
  ];

  return (
    <>
      <SEO 
        title="Zion Tech Group - Leading Technology Solutions & AI Services"
        description="Transform your business with Zion Tech Group's cutting-edge IT solutions, AI services, and access to top tech talent. Enterprise-grade security and global support."
        keywords="IT solutions, AI services, cybersecurity, tech talent, enterprise technology, digital transformation"
      />
      
      <Header />
      
      <main className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <TrendingUp className="h-4 w-4 mr-2" />
              Industry Leader in Tech Solutions
            </Badge>
            
            <GradientHeading className="text-5xl md:text-6xl lg:text-7xl mb-6">
              Transform Your Business with
              <span className="block text-zion-cyan">Next-Gen Technology</span>
            </GradientHeading>
            
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed">
              Zion Tech Group delivers cutting-edge IT solutions, AI services, and connects you with top tech talent. 
              Drive innovation and stay ahead of the competition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-white px-8 py-4 text-lg">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-zion-blue/10 rounded-full flex items-center justify-center">
                      <stat.icon className="h-8 w-8 text-zion-blue" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <TrustedBySection />

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to meet your business needs and drive growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      {service.badge && (
                        <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan">
                          {service.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-zion-blue">{service.price}</span>
                      <Button variant="outline" size="sm">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/services">
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Listings */}
        <FeaturedListingsSection />

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what industry leaders have to say about working with Zion Tech Group.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-8">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                      <div className="text-sm text-zion-blue font-medium">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Quick Access Section */}
        <EnhancedQuickAccess />

        {/* Comprehensive Services Showcase */}
        <ComprehensiveServicesShowcase />

        {/* CTA Section */}
        <section className="py-20 bg-zion-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have already revolutionized their operations with Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-white px-8 py-4 text-lg">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <NewsletterSection />
      </main>
      
      <Footer />
    </>
=======
import { ArrowRight, Brain, Shield, BarChart3, Bot, Globe, Sparkles, Star, TrendingUp, Building, Settings, Code } from 'lucide-react';

export function Home() {
  const microSaasServices = [
    {
      icon: '🚀',
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence with predictive insights',
      price: '$299/month',
      features: ['Machine Learning', 'Custom Reports', 'API Integration']
    },
    {
      icon: '💼',
      title: 'Smart Project Management',
      description: 'AI-driven task prioritization and team collaboration',
      price: '$199/month',
      features: ['Automated Scheduling', 'Resource Optimization', 'Progress Tracking']
    },
    {
      icon: '📊',
      title: 'Customer Relationship Hub',
      description: '360-degree customer view with sentiment analysis',
      price: '$399/month',
      features: ['Lead Scoring', 'Email Automation', 'Sales Forecasting']
    },
    {
      icon: '🔒',
      title: 'Cybersecurity Compliance Suite',
      description: 'Automated security audits and compliance reporting',
      price: '$599/month',
      features: ['GDPR Compliance', 'SOC 2 Reports', 'Threat Detection']
    },
    {
      icon: '📱',
      title: 'Mobile App Builder',
      description: 'No-code mobile app development platform',
      price: '$149/month',
      features: ['Drag & Drop', 'Cross-Platform', 'App Store Ready']
    },
    {
      icon: '🌐',
      title: 'E-commerce Optimization',
      description: 'AI-powered conversion rate optimization',
      price: '$249/month',
      features: ['A/B Testing', 'Personalization', 'Revenue Analytics']
    }
  ];

  const itServices = [
    {
      icon: '☁️',
      title: 'Cloud Migration & Optimization',
      description: 'Seamless cloud transition with cost optimization',
      price: 'From $5,000',
      features: ['AWS/Azure/GCP', 'Performance Tuning', 'Cost Management']
    },
    {
      icon: '🛡️',
      title: 'Cybersecurity Implementation',
      description: 'Comprehensive security infrastructure setup',
      price: 'From $8,000',
      features: ['Firewall Setup', 'VPN Configuration', 'Security Audits']
    },
    {
      icon: '⚙️',
      title: 'DevOps Automation',
      description: 'CI/CD pipeline optimization and automation',
      price: 'From $6,000',
      features: ['Jenkins/GitLab CI', 'Docker/Kubernetes', 'Monitoring']
    },
    {
      icon: '🗄️',
      title: 'Database Optimization',
      description: 'Performance tuning and scalability improvements',
      price: 'From $4,000',
      features: ['Query Optimization', 'Indexing', 'Backup Strategies']
    },
    {
      icon: '🖥️',
      title: 'On-Site IT Support',
      description: '24/7 technical support and maintenance',
      price: 'From $150/hour',
      features: ['Emergency Response', 'Preventive Maintenance', 'Hardware Support']
    },
    {
      icon: '🔧',
      title: 'Equipment Procurement',
      description: 'Strategic technology purchasing and setup',
      price: 'From $2,000',
      features: ['Vendor Management', 'Installation', 'Warranty Support']
    }
  ];

  const aiServices = [
    {
      icon: '🤖',
      title: 'Custom AI Model Development',
      description: 'Tailored machine learning solutions for your business',
      price: 'From $15,000',
      features: ['Data Analysis', 'Model Training', 'API Integration']
    },
    {
      icon: '📈',
      title: 'Predictive Analytics',
      description: 'Forecast trends and optimize business decisions',
      price: 'From $8,000',
      features: ['Data Mining', 'Statistical Modeling', 'Visualization']
    },
    {
      icon: '🔍',
      title: 'Natural Language Processing',
      description: 'Text analysis and language understanding systems',
      price: 'From $12,000',
      features: ['Sentiment Analysis', 'Text Classification', 'Chatbots']
    },
    {
      icon: '🖼️',
      title: 'Computer Vision Solutions',
      description: 'Image and video analysis for automation',
      price: 'From $10,000',
      features: ['Object Detection', 'Image Recognition', 'Video Processing']
    },
    {
      icon: '⚡',
      title: 'Process Automation',
      description: 'Intelligent workflow automation with AI',
      price: 'From $6,000',
      features: ['RPA Integration', 'Smart Workflows', 'Error Handling']
    },
    {
      icon: '🧠',
      title: 'AI Consulting & Strategy',
      description: 'Strategic guidance for AI implementation',
      price: 'From $200/hour',
      features: ['Technology Assessment', 'Roadmap Planning', 'Implementation Support']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-blue-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.3),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transform Your Business with
              <span className="block">Next-Gen Technology</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Unlock the power of AI, micro SAAS solutions, and cutting-edge IT services. 
              Drive innovation, efficiency, and growth with Zion Tech Group.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/services"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From micro SAAS applications to enterprise AI solutions, we provide the tools and expertise 
              to accelerate your digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Micro SAAS */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Micro SAAS Solutions</h3>
              <p className="text-gray-300 mb-6">
                Scalable, focused software solutions that solve specific business problems with 
                modern technology and AI integration.
              </p>
              <Link
                to="/micro-saas-services"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* IT Services */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">IT Infrastructure</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive IT solutions including cloud migration, cybersecurity, DevOps automation, 
                and on-site support services.
              </p>
              <Link
                to="/it-onsite-services"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* AI Services */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">AI & Machine Learning</h3>
              <p className="text-gray-300 mb-6">
                Custom AI solutions, predictive analytics, and intelligent automation to 
                transform your business processes and decision-making.
              </p>
              <Link
                to="/ai-services"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SAAS Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready-to-deploy software solutions that scale with your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {microSaasServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="text-2xl font-bold text-green-400 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <Star className="w-4 h-4 text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              IT Infrastructure Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive IT solutions to modernize and secure your technology infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-green-400">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="text-2xl font-bold text-green-400 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <Shield className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI & Machine Learning Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Intelligent solutions that learn, adapt, and optimize your business processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-purple-400">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="text-2xl font-bold text-green-400 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <Brain className="w-4 h-4 text-purple-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Start Project
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our technology solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Get Started Today
            </Link>
            <div className="text-gray-400">
              <p>📞 +1 302 464 0950</p>
              <p>✉️ kleber@ziontechgroup.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
>>>>>>> b0227f6a3f6a80df96e210611ae67bdcdc943ae0
  );
}
