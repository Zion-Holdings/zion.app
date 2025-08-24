import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Server, 
  Database, 
  Code, 
  Network, 
  Globe, 
  Users, 
  Zap, 
  Monitor,
  Lock,
  Settings,
  BarChart3,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign
} from 'lucide-react';

export default function ITServicesPage() {
  const itServices = [
    {
      id: 'cloud-migration',
      title: 'Cloud Migration & Strategy',
      description: 'Seamless migration to cloud platforms with optimization and cost management',
      category: 'Cloud',
      price: 'From $8,000',
      features: ['Migration Planning', 'Cost Optimization', 'Performance Tuning', 'Security Implementation'],
      icon: <Cloud className="h-8 w-8 text-zion-blue" />,
      badge: 'Popular',
      rating: 4.9,
      reviewCount: 234,
      deliveryTime: '4-8 weeks',
      link: '/services/cloud-migration'
    },
    {
      id: 'cybersecurity-audit',
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security audits and vulnerability assessments for your infrastructure',
      category: 'Security',
      price: 'From $5,500',
      features: ['Security Audit', 'Vulnerability Scan', 'Penetration Testing', 'Compliance Review'],
      icon: <Shield className="h-8 w-8 text-red-500" />,
      badge: 'Featured',
      rating: 4.8,
      reviewCount: 189,
      deliveryTime: '2-4 weeks',
      link: '/services/cybersecurity-audit'
    },
    {
      id: 'devops-implementation',
      title: 'DevOps Implementation',
      description: 'Streamline development and operations with CI/CD pipelines and automation',
      category: 'DevOps',
      price: 'From $6,500',
      features: ['CI/CD Setup', 'Infrastructure as Code', 'Monitoring Tools', 'Automation Scripts'],
      icon: <Code className="h-8 w-8 text-green-500" />,
      rating: 4.7,
      reviewCount: 156,
      deliveryTime: '6-10 weeks',
      link: '/services/devops-implementation'
    },
    {
      id: 'data-backup-recovery',
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data protection solutions with disaster recovery planning',
      category: 'Data',
      price: 'From $3,200',
      features: ['Backup Strategy', 'Disaster Recovery', 'Data Encryption', 'Recovery Testing'],
      icon: <Database className="h-8 w-8 text-purple-500" />,
      rating: 4.6,
      reviewCount: 98,
      deliveryTime: '2-3 weeks',
      link: '/services/data-backup-recovery'
    },
    {
      id: 'network-infrastructure',
      title: 'Network Infrastructure',
      description: 'Design and implementation of scalable network solutions for growing businesses',
      category: 'Infrastructure',
      price: 'From $7,500',
      features: ['Network Design', 'Hardware Installation', 'Security Configuration', 'Performance Optimization'],
      icon: <Network className="h-8 w-8 text-cyan-500" />,
      rating: 4.8,
      reviewCount: 134,
      deliveryTime: '4-6 weeks',
      link: '/services/network-infrastructure'
    },
    {
      id: 'managed-it-services',
      title: 'Managed IT Services',
      description: '24/7 IT support and management for continuous business operations',
      category: 'Management',
      price: 'From $2,500/month',
      features: ['24/7 Monitoring', 'Help Desk Support', 'Proactive Maintenance', 'Performance Reports'],
      icon: <Monitor className="h-8 w-8 text-blue-500" />,
      badge: 'New',
      rating: 4.5,
      reviewCount: 67,
      deliveryTime: '1-2 weeks',
      link: '/services/managed-it-services'
    },
    {
      id: 'mobile-app-development',
      title: 'Mobile App Development',
      description: 'Custom mobile applications for iOS and Android platforms',
      category: 'Development',
      price: 'From $15,000',
      features: ['UI/UX Design', 'Cross-platform Development', 'Testing & QA', 'App Store Deployment'],
      icon: <Smartphone className="h-8 w-8 text-indigo-500" />,
      rating: 4.7,
      reviewCount: 89,
      deliveryTime: '8-16 weeks',
      link: '/services/mobile-app-development'
    },
    {
      id: 'web-application',
      title: 'Web Application Development',
      description: 'Custom web applications and e-commerce solutions',
      category: 'Development',
      price: 'From $12,000',
      features: ['Custom Development', 'Responsive Design', 'Database Design', 'Security Implementation'],
      icon: <Globe className="h-8 w-8 text-emerald-500" />,
      rating: 4.6,
      reviewCount: 112,
      deliveryTime: '6-12 weeks',
      link: '/services/web-application'
    },
    {
      id: 'it-consulting',
      title: 'IT Strategy Consulting',
      description: 'Strategic IT planning and digital transformation consulting',
      category: 'Consulting',
      price: 'From $8,500',
      features: ['Technology Assessment', 'Digital Roadmap', 'Vendor Selection', 'Implementation Planning'],
      icon: <Users className="h-8 w-8 text-amber-500" />,
      rating: 4.9,
      reviewCount: 78,
      deliveryTime: '2-4 weeks',
      link: '/services/it-consulting'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & BI',
      description: 'Business intelligence solutions and data analytics implementation',
      category: 'Analytics',
      price: 'From $6,800',
      features: ['Data Warehouse Setup', 'Dashboard Creation', 'Report Automation', 'Data Visualization'],
      icon: <BarChart3 className="h-8 w-8 text-pink-500" />,
      rating: 4.7,
      reviewCount: 95,
      deliveryTime: '4-8 weeks',
      link: '/services/data-analytics'
    },
    {
      id: 'endpoint-security',
      title: 'Endpoint Security',
      description: 'Comprehensive endpoint protection and device management solutions',
      category: 'Security',
      price: 'From $4,200',
      features: ['Antivirus Protection', 'Device Management', 'Threat Detection', 'Policy Enforcement'],
      icon: <Lock className="h-8 w-8 text-orange-500" />,
      rating: 4.6,
      reviewCount: 73,
      deliveryTime: '2-3 weeks',
      link: '/services/endpoint-security'
    },
    {
      id: 'it-automation',
      title: 'IT Process Automation',
      description: 'Automate repetitive IT tasks and workflows for efficiency',
      category: 'Automation',
      price: 'From $3,800',
      features: ['Workflow Automation', 'Script Development', 'Integration Setup', 'Monitoring Tools'],
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      rating: 4.5,
      reviewCount: 56,
      deliveryTime: '3-5 weeks',
      link: '/services/it-automation'
    }
  ];

  const categories = [
    { name: 'All Services', count: itServices.length, active: true },
    { name: 'Cloud', count: itServices.filter(s => s.category === 'Cloud').length },
    { name: 'Security', count: itServices.filter(s => s.category === 'Security').length },
    { name: 'Development', count: itServices.filter(s => s.category === 'Development').length },
    { name: 'Infrastructure', count: itServices.filter(s => s.category === 'Infrastructure').length },
    { name: 'Management', count: itServices.filter(s => s.category === 'Management').length }
  ];

  return (
    <>
      <SEO 
        title="IT Services - Zion Tech Group" 
        description="Comprehensive IT services including cloud migration, cybersecurity, DevOps, and infrastructure solutions. Expert IT consulting and managed services."
        keywords="IT services, cloud migration, cybersecurity, DevOps, managed IT services, IT consulting"
        canonical="https://ziontechgroup.com/it-services"
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-cyan py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/10 to-zion-cyan/10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-zion-blue/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-zion-purple/30 rounded-full blur-2xl animate-pulse delay-500"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                IT Services & Solutions
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Transform your business technology infrastructure with our comprehensive IT services. 
                From cloud migration to cybersecurity, we deliver enterprise-grade solutions that drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark">
                  <Link to="/request-quote">Get Free Assessment</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/contact">Contact Our Team</Link>
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
                Enterprise IT Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Choose from our comprehensive portfolio of IT services, each designed to address specific 
                business challenges and drive measurable results.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={category.active ? "default" : "outline"}
                  className={category.active ? "bg-zion-cyan text-zion-slate-dark" : "border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10"}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service) => (
                <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border-zion-cyan/20 hover:border-zion-cyan/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-3">
                      {service.icon}
                      {service.badge && (
                        <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                          {service.badge}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pb-4">
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-zion-cyan">{service.price}</span>
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
                    <Button asChild className="w-full group-hover:bg-zion-cyan group-hover:text-zion-slate-dark transition-all duration-300">
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
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-cyan-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let our IT experts help you identify the right solutions for your business. 
              Get a free assessment and discover how modern IT can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark">
                <Link to="/request-quote">Start Your IT Transformation</Link>
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