
import React from 'react';
import { Link } from 'react-router-dom';
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
import { EnhancedSearchSection } from '@/components/home/EnhancedSearchSection';
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

        {/* Enhanced Search Section */}
        <EnhancedSearchSection />

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
  );
}
