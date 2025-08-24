import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  Database, 
  Network, 
  Globe, 
  Users, 
  Zap, 
  BarChart3,
  TrendingUp,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  ArrowUpZA,
  Circle,
  Lightbulb,
  Eye,
  MessageSquare,
  Server,
  Lock,
  Monitor,
  Settings,
  FileText,
  Video,
  Mic
} from 'lucide-react';

export default function ServicesHubPage() {
  const serviceCategories = [
    {
      id: 'ai-services',
      title: 'AI & Machine Learning Services',
      description: 'Transform your business with cutting-edge artificial intelligence solutions',
      icon: <Brain className="h-12 w-12 text-zion-cyan" />,
      color: 'from-zion-cyan/20 to-zion-cyan/5',
      borderColor: 'border-zion-cyan/30',
      services: [
        {
          title: 'AI Development & Integration',
          price: 'From $5,000',
          rating: 4.9,
          reviewCount: 156,
          features: ['Custom AI Models', 'API Integration', 'Performance Optimization'],
          link: '/ai-services'
        },
        {
          title: 'Machine Learning Solutions',
          price: 'From $3,500',
          rating: 4.8,
          reviewCount: 89,
          features: ['Data Preprocessing', 'Model Training', 'Deployment'],
          link: '/ai-services'
        },
        {
          title: 'Natural Language Processing',
          price: 'From $3,800',
          rating: 4.6,
          reviewCount: 67,
          features: ['Text Analysis', 'Sentiment Detection', 'Language Models'],
          link: '/ai-services'
        },
        {
          title: 'Computer Vision Solutions',
          price: 'From $4,500',
          rating: 4.8,
          reviewCount: 92,
          features: ['Object Detection', 'Image Classification', 'Video Analysis'],
          link: '/ai-services'
        }
      ],
      link: '/ai-services'
    },
    {
      id: 'it-services',
      title: 'IT Infrastructure & Services',
      description: 'Enterprise-grade IT solutions for modern businesses',
      icon: <Cloud className="h-12 w-12 text-zion-blue" />,
      color: 'from-zion-blue/20 to-zion-blue/5',
      borderColor: 'border-zion-blue/30',
      services: [
        {
          title: 'Cloud Migration & Strategy',
          price: 'From $8,000',
          rating: 4.9,
          reviewCount: 234,
          features: ['Migration Planning', 'Cost Optimization', 'Performance Tuning'],
          link: '/it-services'
        },
        {
          title: 'Cybersecurity Assessment',
          price: 'From $5,500',
          rating: 4.8,
          reviewCount: 189,
          features: ['Security Audit', 'Vulnerability Scan', 'Penetration Testing'],
          link: '/it-services'
        },
        {
          title: 'DevOps Implementation',
          price: 'From $6,500',
          rating: 4.7,
          reviewCount: 156,
          features: ['CI/CD Setup', 'Infrastructure as Code', 'Monitoring Tools'],
          link: '/it-services'
        },
        {
          title: 'Managed IT Services',
          price: 'From $2,500/month',
          rating: 4.5,
          reviewCount: 67,
          features: ['24/7 Monitoring', 'Help Desk Support', 'Proactive Maintenance'],
          link: '/it-services'
        }
      ],
      link: '/it-services'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Comprehensive business transformation for the digital age',
      icon: <TrendingUp className="h-12 w-12 text-zion-purple" />,
      color: 'from-zion-purple/20 to-zion-purple/5',
      borderColor: 'border-zion-purple/30',
      services: [
        {
          title: 'Digital Strategy & Roadmap',
          price: 'From $12,000',
          rating: 4.9,
          reviewCount: 89,
          features: ['Business Analysis', 'Technology Assessment', 'Digital Roadmap'],
          link: '/digital-transformation'
        },
        {
          title: 'Legacy System Modernization',
          price: 'From $25,000',
          rating: 4.7,
          reviewCount: 134,
          features: ['System Analysis', 'Migration Planning', 'Data Migration'],
          link: '/digital-transformation'
        },
        {
          title: 'Business Process Optimization',
          price: 'From $8,500',
          rating: 4.8,
          reviewCount: 156,
          features: ['Process Mapping', 'Workflow Design', 'Automation Planning'],
          link: '/digital-transformation'
        },
        {
          title: 'Customer Experience Transformation',
          price: 'From $20,000',
          rating: 4.9,
          reviewCount: 78,
          features: ['Journey Mapping', 'UX Design', 'Technology Integration'],
          link: '/digital-transformation'
        }
      ],
      link: '/digital-transformation'
    },
    {
      id: 'development-services',
      title: 'Software Development',
      description: 'Custom software solutions for web, mobile, and enterprise applications',
      icon: <Code className="h-12 w-12 text-green-500" />,
      color: 'from-green-500/20 to-green-500/5',
      borderColor: 'border-green-500/30',
      services: [
        {
          title: 'Web Application Development',
          price: 'From $12,000',
          rating: 4.6,
          reviewCount: 112,
          features: ['Custom Development', 'Responsive Design', 'Database Design'],
          link: '/it-services'
        },
        {
          title: 'Mobile App Development',
          price: 'From $15,000',
          rating: 4.7,
          reviewCount: 89,
          features: ['UI/UX Design', 'Cross-platform Development', 'Testing & QA'],
          link: '/it-services'
        },
        {
          title: 'API Development & Integration',
          price: 'From $8,000',
          rating: 4.8,
          reviewCount: 134,
          features: ['RESTful APIs', 'Third-party Integration', 'Documentation'],
          link: '/it-services'
        },
        {
          title: 'Custom Software Solutions',
          price: 'From $20,000',
          rating: 4.7,
          reviewCount: 95,
          features: ['Requirements Analysis', 'Custom Development', 'Testing & Deployment'],
          link: '/it-services'
        }
      ],
      link: '/it-services'
    },
    {
      id: 'data-analytics',
      title: 'Data & Analytics Services',
      description: 'Transform data into actionable business insights',
      icon: <BarChart3 className="h-12 w-12 text-pink-500" />,
      color: 'from-pink-500/20 to-pink-500/5',
      borderColor: 'border-pink-500/30',
      services: [
        {
          title: 'Data Science & Analytics',
          price: 'From $4,200',
          rating: 4.7,
          reviewCount: 134,
          features: ['Data Mining', 'Statistical Analysis', 'Visualization'],
          link: '/ai-services'
        },
        {
          title: 'Business Intelligence',
          price: 'From $6,800',
          rating: 4.7,
          reviewCount: 95,
          features: ['Data Warehouse Setup', 'Dashboard Creation', 'Report Automation'],
          link: '/it-services'
        },
        {
          title: 'Big Data Engineering',
          price: 'From $8,500',
          rating: 4.6,
          reviewCount: 78,
          features: ['Data Pipeline Design', 'ETL Development', 'Performance Optimization'],
          link: '/it-services'
        },
        {
          title: 'Predictive Analytics',
          price: 'From $7,500',
          rating: 4.8,
          reviewCount: 89,
          features: ['Model Development', 'Forecasting', 'Risk Analysis'],
          link: '/ai-services'
        }
      ],
      link: '/ai-services'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your digital assets',
      icon: <Shield className="h-12 w-12 text-red-500" />,
      color: 'from-red-500/20 to-red-500/5',
      borderColor: 'border-red-500/30',
      services: [
        {
          title: 'Security Assessment & Audit',
          price: 'From $5,500',
          rating: 4.8,
          reviewCount: 189,
          features: ['Security Audit', 'Vulnerability Scan', 'Compliance Review'],
          link: '/it-services'
        },
        {
          title: 'AI-Powered Threat Detection',
          price: 'From $5,500',
          rating: 4.7,
          reviewCount: 112,
          features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response'],
          link: '/ai-services'
        },
        {
          title: 'Endpoint Security',
          price: 'From $4,200',
          rating: 4.6,
          reviewCount: 73,
          features: ['Antivirus Protection', 'Device Management', 'Policy Enforcement'],
          link: '/it-services'
        },
        {
          title: 'Security Training & Awareness',
          price: 'From $3,500',
          rating: 4.5,
          reviewCount: 56,
          features: ['Security Training', 'Phishing Simulations', 'Compliance Training'],
          link: '/it-services'
        }
      ],
      link: '/it-services'
    }
  ];

  const featuredServices = [
    {
      title: 'AI-Powered Recruiting Assistant',
      description: 'Streamline your hiring process with intelligent candidate matching and screening',
      price: 'From $2,500/month',
      rating: 4.9,
      reviewCount: 234,
      link: '/zion-hire-ai',
      icon: <Brain className="h-8 w-8 text-zion-cyan" />,
      badge: 'Most Popular'
    },
    {
      title: 'Global IT Onsite Services',
      description: 'Professional IT support available in 50+ countries with local technicians',
      price: 'From $150/hour',
      rating: 4.8,
      reviewCount: 567,
      link: '/it-onsite-services',
      icon: <Globe className="h-8 w-8 text-zion-blue" />,
      badge: 'Global Service'
    },
    {
      title: 'Digital Transformation Consulting',
      description: 'Strategic guidance for modernizing your business operations and technology',
      price: 'From $12,000',
      rating: 4.9,
      reviewCount: 89,
      link: '/digital-transformation',
      icon: <TrendingUp className="h-8 w-8 text-zion-purple" />,
      badge: 'Premium Service'
    }
  ];

  return (
    <>
      <SEO 
        title="Services Hub - Zion Tech Group" 
        description="Comprehensive portfolio of AI services, IT solutions, and digital transformation services. Expert consulting and implementation for modern businesses."
        keywords="AI services, IT services, digital transformation, software development, cybersecurity, data analytics, consulting"
        canonical="https://ziontechgroup.com/services"
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-zion-blue-dark via-zion-purple to-zion-cyan py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/10 via-zion-purple/10 to-zion-cyan/10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-zion-blue/30 rounded-full blur-2xl animate-pulse delay-500"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Services Hub
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Discover our comprehensive portfolio of AI services, IT solutions, and digital transformation 
                services. From strategy to implementation, we help businesses thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark">
                  <Link to="/request-quote">Get Free Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/contact">Contact Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Services</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our most popular and highly-rated services that deliver exceptional value to businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-zion-purple/20 hover:border-zion-purple/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-3">
                      {service.icon}
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
                        {service.badge}
                      </Badge>
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
                    
                    <div className="flex items-center gap-1 mb-4">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-muted-foreground">{service.rating}</span>
                      <span className="text-sm text-muted-foreground">({service.reviewCount} reviews)</span>
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

        {/* Service Categories */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Service Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore our comprehensive service categories, each designed to address specific business 
                challenges and drive measurable results.
              </p>
            </div>

            <div className="space-y-12">
              {serviceCategories.map((category) => (
                <div key={category.id} className={`p-8 rounded-2xl bg-gradient-to-r ${category.color} border ${category.borderColor}`}>
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                      {category.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                        <p className="text-muted-foreground text-lg">{category.description}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {category.services.map((service, index) => (
                          <div key={index} className="bg-background/50 p-4 rounded-lg border border-border/50">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-semibold text-white">{service.title}</h4>
                              <span className="text-sm font-bold text-zion-cyan">{service.price}</span>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                              <Star className="h-3 w-3 text-yellow-500 fill-current" />
                              <span className="text-xs text-muted-foreground">{service.rating}</span>
                              <span className="text-xs text-muted-foreground">({service.reviewCount})</span>
                            </div>
                            <div className="space-y-1">
                              {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center text-xs text-muted-foreground">
                                  <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <Button asChild className="bg-zion-purple hover:bg-zion-purple-light text-white">
                        <Link to={category.link}>
                          View All {category.title}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let our experts help you identify the right solutions for your business. 
              Get a free consultation and discover how our services can transform your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark">
                <Link to="/request-quote">Start Your Journey</Link>
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