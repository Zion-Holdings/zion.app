import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  RefreshCw, 
  Users, 
  BarChart3, 
  Zap, 
  Globe, 
  Shield, 
  Database, 
  Smartphone, 
  Cloud,
  Circle,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  Award,
  ArrowUpZA
} from 'lucide-react';

export default function DigitalTransformationPage() {
  const transformationServices = [
    {
      id: 'digital-strategy',
      title: 'Digital Strategy & Roadmap',
      description: 'Comprehensive digital transformation strategy aligned with business objectives',
      category: 'Strategy',
      price: 'From $12,000',
      features: ['Business Analysis', 'Technology Assessment', 'Digital Roadmap', 'ROI Projections'],
      icon: <Circle className="h-8 w-8 text-zion-purple" />,
      badge: 'Premium',
      rating: 4.9,
      reviewCount: 89,
      deliveryTime: '4-6 weeks',
      link: '/services/digital-strategy'
    },
    {
      id: 'process-optimization',
      title: 'Business Process Optimization',
      description: 'Streamline operations and eliminate inefficiencies with digital workflows',
      category: 'Optimization',
      price: 'From $8,500',
      features: ['Process Mapping', 'Workflow Design', 'Automation Planning', 'Performance Metrics'],
      icon: <RefreshCw className="h-8 w-8 text-zion-cyan" />,
      badge: 'Popular',
      rating: 4.8,
      reviewCount: 156,
      deliveryTime: '6-10 weeks',
      link: '/services/process-optimization'
    },
    {
      id: 'legacy-modernization',
      title: 'Legacy System Modernization',
      description: 'Transform outdated systems into modern, scalable technology solutions',
      category: 'Modernization',
      price: 'From $25,000',
      features: ['System Analysis', 'Migration Planning', 'Data Migration', 'Testing & Validation'],
      icon: <ArrowUpZA className="h-8 w-8 text-zion-blue" />,
      rating: 4.7,
      reviewCount: 134,
      deliveryTime: '12-24 weeks',
      link: '/services/legacy-modernization'
    },
    {
      id: 'cloud-transformation',
      title: 'Cloud Transformation',
      description: 'Migrate to cloud-native architecture for scalability and cost efficiency',
      category: 'Cloud',
      price: 'From $18,000',
      features: ['Cloud Assessment', 'Architecture Design', 'Migration Execution', 'Optimization'],
      icon: <Cloud className="h-8 w-8 text-blue-500" />,
      rating: 4.8,
      reviewCount: 98,
      deliveryTime: '8-16 weeks',
      link: '/services/cloud-transformation'
    },
    {
      id: 'data-modernization',
      title: 'Data Modernization',
      description: 'Transform data infrastructure for analytics, AI, and business intelligence',
      category: 'Data',
      price: 'From $15,000',
      features: ['Data Architecture', 'Warehouse Design', 'ETL Pipelines', 'Analytics Setup'],
      icon: <Database className="h-8 w-8 text-green-500" />,
      rating: 4.6,
      reviewCount: 112,
      deliveryTime: '10-18 weeks',
      link: '/services/data-modernization'
    },
    {
      id: 'customer-experience',
      title: 'Customer Experience Transformation',
      description: 'Redesign customer touchpoints for seamless digital interactions',
      category: 'CX',
      price: 'From $20,000',
      features: ['Journey Mapping', 'UX Design', 'Technology Integration', 'Performance Tracking'],
      icon: <Users className="h-8 w-8 text-pink-500" />,
      badge: 'Featured',
      rating: 4.9,
      reviewCount: 78,
      deliveryTime: '12-20 weeks',
      link: '/services/customer-experience'
    },
    {
      id: 'workplace-digitalization',
      title: 'Workplace Digitalization',
      description: 'Create modern, collaborative digital workplaces for remote and hybrid teams',
      category: 'Workplace',
      price: 'From $10,000',
      features: ['Collaboration Tools', 'Communication Platforms', 'Security Implementation', 'Training'],
      icon: <Smartphone className="h-8 w-8 text-indigo-500" />,
      rating: 4.7,
      reviewCount: 95,
      deliveryTime: '6-12 weeks',
      link: '/services/workplace-digitalization'
    },
    {
      id: 'supply-chain-digital',
      title: 'Supply Chain Digitalization',
      description: 'Digitize supply chain operations for transparency and efficiency',
      category: 'Supply Chain',
      price: 'From $22,000',
      features: ['Process Mapping', 'Technology Selection', 'Integration', 'Monitoring'],
      icon: <Globe className="h-8 w-8 text-emerald-500" />,
      rating: 4.6,
      reviewCount: 67,
      deliveryTime: '16-24 weeks',
      link: '/services/supply-chain-digital'
    },
    {
      id: 'ai-adoption',
      title: 'AI & Automation Adoption',
      description: 'Implement AI and automation solutions for operational excellence',
      category: 'AI',
      price: 'From $30,000',
      features: ['Use Case Identification', 'Solution Design', 'Implementation', 'Training'],
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      badge: 'New',
      rating: 4.8,
      reviewCount: 45,
      deliveryTime: '20-32 weeks',
      link: '/services/ai-adoption'
    },
    {
      id: 'cybersecurity-transformation',
      title: 'Cybersecurity Transformation',
      description: 'Modernize security infrastructure for digital-first business models',
      category: 'Security',
      price: 'From $18,500',
      features: ['Security Assessment', 'Architecture Design', 'Implementation', 'Monitoring'],
      icon: <Shield className="h-8 w-8 text-red-500" />,
      rating: 4.7,
      reviewCount: 89,
      deliveryTime: '8-16 weeks',
      link: '/services/cybersecurity-transformation'
    },
    {
      id: 'change-management',
      title: 'Change Management & Training',
      description: 'Support organizational change with comprehensive training and adoption programs',
      category: 'Change',
      price: 'From $6,500',
      features: ['Change Strategy', 'Training Programs', 'Communication Plans', 'Adoption Support'],
      icon: <Lightbulb className="h-8 w-8 text-amber-500" />,
      rating: 4.5,
      reviewCount: 73,
      deliveryTime: '4-8 weeks',
      link: '/services/change-management'
    },
    {
      id: 'performance-monitoring',
      title: 'Digital Performance Monitoring',
      description: 'Comprehensive monitoring and analytics for digital transformation success',
      category: 'Monitoring',
      price: 'From $8,000',
      features: ['KPI Definition', 'Dashboard Creation', 'Real-time Monitoring', 'Reporting'],
      icon: <BarChart3 className="h-8 w-8 text-cyan-500" />,
      rating: 4.6,
      reviewCount: 56,
      deliveryTime: '4-6 weeks',
      link: '/services/performance-monitoring'
    }
  ];

  const categories = [
    { name: 'All Services', count: transformationServices.length, active: true },
    { name: 'Strategy', count: transformationServices.filter(s => s.category === 'Strategy').length },
    { name: 'Modernization', count: transformationServices.filter(s => s.category === 'Modernization').length },
    { name: 'Cloud', count: transformationServices.filter(s => s.category === 'Cloud').length },
    { name: 'Data', count: transformationServices.filter(s => s.category === 'Data').length },
    { name: 'CX', count: transformationServices.filter(s => s.category === 'CX').length }
  ];

  return (
    <>
      <SEO 
        title="Digital Transformation Services - Zion Tech Group" 
        description="Transform your business with comprehensive digital transformation services. From strategy to implementation, we help organizations thrive in the digital age."
        keywords="digital transformation, business transformation, digital strategy, legacy modernization, cloud transformation"
        canonical="https://ziontechgroup.com/digital-transformation"
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-zion-purple-dark via-zion-purple to-zion-cyan py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-zion-purple/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-zion-blue/30 rounded-full blur-2xl animate-pulse delay-500"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Digital Transformation Services
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Transform your business for the digital age with our comprehensive transformation services. 
                From strategy to implementation, we help organizations thrive in an increasingly digital world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark">
                  <Link to="/request-quote">Get Transformation Roadmap</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/contact">Schedule Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Transformation Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Choose from our extensive portfolio of digital transformation services, each designed to address 
                specific business challenges and drive measurable results.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={category.active ? "default" : "outline"}
                  className={category.active ? "bg-zion-purple text-white" : "border-zion-purple/30 text-zion-purple hover:bg-zion-purple/10"}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {transformationServices.map((service) => (
                <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border-zion-purple/20 hover:border-zion-purple/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-3">
                      {service.icon}
                      {service.badge && (
                        <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
                          {service.badge}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl group-hover:text-zion-purple transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pb-4">
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-zion-purple">{service.price}</span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-muted-foreground">{service.rating}</span>
                        <span className="text-sm text-muted-foreground">({service.reviewCount})</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {service.category}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{service.deliveryTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        <span>Fixed Price</span>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardContent className="pt-0">
                    <Button asChild className="w-full group-hover:bg-zion-purple group-hover:text-white transition-all duration-300">
                      <Link to={service.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-purple-dark to-zion-cyan-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let our digital transformation experts help you identify the right solutions for your business. 
              Get a free consultation and discover how digital transformation can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark">
                <Link to="/request-quote">Start Your Transformation</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}