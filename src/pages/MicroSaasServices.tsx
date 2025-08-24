import React from 'react';
<<<<<<< HEAD
import { MICRO_SAAS_SERVICES, MICRO_SAAS_CATEGORIES, CONTACT_INFO } from '../data/microSaasServices';
=======
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  Database, 
  BarChart3, 
  MessageSquare, 
  Palette, 
  Key, 
  Network, 
  TrendingUp, 
  Rocket, 
  Smartphone, 
  ShoppingCart,
  Zap,
  Globe,
  Lock,
  Cpu,
  FileText,
  Target,
  Eye,
  Headphones,
  Monitor,
  Server,
  ShieldCheck,
  Lightning,
  Globe2,
  Layers,
  Activity,
  Sparkles,
  CheckCircle,
  Star,
  Users,
  Clock,
  DollarSign
} from 'lucide-react';

const MicroSaasServices = () => {
  const serviceCategories = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      icon: <Brain className="h-12 w-12 text-zion-cyan" />,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'AI Content Generation',
          description: 'Generate high-quality content, articles, and marketing copy using advanced AI models',
          price: 99,
          period: '/month',
          features: ['Unlimited content generation', 'SEO optimization', 'Brand voice consistency', 'Multi-language support'],
          savings: 'Save 40% vs market',
          badge: 'Popular'
        },
        {
          name: 'AI-Powered Analytics',
          description: 'Transform raw data into actionable insights with machine learning algorithms',
          price: 199,
          period: '/month',
          features: ['Predictive analytics', 'Automated reporting', 'Real-time insights', 'Custom dashboards'],
          savings: 'Save 35% vs market',
          badge: 'New'
        },
        {
          name: 'AI Chatbot Platform',
          description: 'Custom AI chatbots for customer service and business automation',
          price: 399,
          period: '/month',
          features: ['24/7 customer support', 'Lead generation', 'Multi-platform integration', 'Advanced NLP'],
          savings: 'Save 45% vs market',
          badge: 'Featured'
        }
      ]
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      description: 'Robust infrastructure solutions for modern businesses',
      icon: <Cloud className="h-12 w-12 text-zion-cyan" />,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'Cloud Migration Suite',
          description: 'Seamless cloud migration and management for AWS, Azure, and Google Cloud',
          price: 799,
          period: '/month',
          features: ['Multi-cloud support', 'Cost optimization', '24/7 monitoring', 'Security compliance'],
          savings: 'Save 50% vs market',
          badge: 'Featured'
        },
        {
          name: 'Cybersecurity Platform',
          description: 'Comprehensive security audits and compliance management',
          price: 599,
          period: '/month',
          features: ['Penetration testing', 'SOC 2 compliance', 'Threat detection', 'Incident response'],
          savings: 'Save 40% vs market',
          badge: 'Essential'
        },
        {
          name: 'DevOps Automation',
          description: 'Streamline development workflows with CI/CD and infrastructure as code',
          price: 499,
          period: '/month',
          features: ['Automated testing', 'Deployment pipelines', 'Infrastructure management', 'Performance monitoring'],
          savings: 'Save 35% vs market',
          badge: 'Popular'
        }
      ]
    },
    {
      id: 'business-solutions',
      title: 'Business Solutions',
      description: 'Strategic solutions to drive business transformation',
      icon: <Rocket className="h-12 w-12 text-zion-cyan" />,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          name: 'Digital Transformation',
          description: 'Strategic consulting to modernize legacy systems and drive innovation',
          price: 1499,
          period: '/month',
          features: ['Legacy modernization', 'Process automation', 'Change management', 'ROI optimization'],
          savings: 'Save 60% vs market',
          badge: 'Premium'
        },
        {
          name: 'API Development Platform',
          description: 'Custom API development and third-party integrations',
          price: 399,
          period: '/month',
          features: ['RESTful APIs', 'GraphQL support', 'Webhook management', 'Documentation'],
          savings: 'Save 45% vs market',
          badge: 'Popular'
        },
        {
          name: 'Mobile App Development',
          description: 'Native and cross-platform mobile applications with modern UI/UX',
          price: 899,
          period: '/month',
          features: ['iOS & Android', 'React Native', 'UI/UX design', 'App store deployment'],
          savings: 'Save 40% vs market',
          badge: 'Featured'
        }
      ]
    },
    {
      id: 'specialized-services',
      title: 'Specialized Services',
      description: 'Expert solutions for cutting-edge technologies',
      icon: <Key className="h-12 w-12 text-zion-cyan" />,
      color: 'from-orange-500 to-red-500',
      services: [
        {
          name: 'Blockchain Development',
          description: 'Smart contracts, DeFi applications, and blockchain infrastructure',
          price: 1299,
          period: '/month',
          features: ['Smart contracts', 'DeFi protocols', 'Multi-chain support', 'Security auditing'],
          savings: 'Save 55% vs market',
          badge: 'Premium'
        },
        {
          name: 'IoT Solutions Platform',
          description: 'Internet of Things device development and sensor networks',
          price: 599,
          period: '/month',
          features: ['Sensor integration', 'Data collection', 'Real-time monitoring', 'Scalable architecture'],
          savings: 'Save 40% vs market',
          badge: 'New'
        },
        {
          name: 'Data Science Consulting',
          description: 'Advanced analytics and machine learning model development',
          price: 899,
          period: '/month',
          features: ['Predictive modeling', 'Statistical analysis', 'Data strategy', 'Model deployment'],
          savings: 'Save 45% vs market',
          badge: 'Featured'
        }
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 99,
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'AI Content Generation',
        'Basic Analytics',
        'Email Support',
        '5 Projects',
        'Standard Security'
      ],
      color: 'from-zion-cyan to-zion-purple',
      popular: false
    },
    {
      name: 'Professional',
      price: 299,
      period: '/month',
      description: 'Ideal for growing companies and teams',
      features: [
        'All Starter Features',
        'AI Analytics Platform',
        'Priority Support',
        'Unlimited Projects',
        'API Access',
        'Advanced Security'
      ],
      color: 'from-zion-purple to-zion-blue',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 799,
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'All Professional Features',
        'Custom AI Models',
        'Dedicated Support',
        'White-labeling',
        'Advanced Security',
        'Custom Integrations'
      ],
      color: 'from-zion-blue to-zion-cyan',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8 text-zion-cyan" />,
      title: 'Cost Savings',
      description: 'Save 30-60% compared to traditional enterprise solutions'
    },
    {
      icon: <Zap className="h-8 w-8 text-zion-cyan" />,
      title: 'Rapid Deployment',
      description: 'Get up and running in days, not months'
    },
    {
      icon: <Shield className="h-8 w-8 text-zion-cyan" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance'
    },
    {
      icon: <Users className="h-8 w-8 text-zion-cyan" />,
      title: 'Expert Support',
      description: '24/7 technical support from certified professionals'
    },
    {
      icon: <Globe className="h-8 w-8 text-zion-cyan" />,
      title: 'Global Reach',
      description: 'Services available worldwide with local support'
    },
    {
      icon: <Clock className="h-8 w-8 text-zion-cyan" />,
      title: 'Always Available',
      description: '99.9% uptime guarantee with real-time monitoring'
    }
  ];
>>>>>>> cfb04f63b138e721e668a86f56f120d011c10c16

export default function MicroSaasServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Micro SAAS Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transform your business with our comprehensive suite of micro SAAS solutions, 
            designed to streamline operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pricing"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Pricing
            </a>
            <a
              href={`tel:${CONTACT_INFO.mobile}`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MICRO_SAAS_SERVICES.slice(0, 6).map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  <a
                    href={service.link}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
=======
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Services</span>
          </h1>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Enterprise-grade technology solutions at micro SAAS prices. Transform your business with AI, 
            cloud infrastructure, and digital transformation services that scale with you.
          </p>
          
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-4xl mx-auto border border-zion-cyan/20 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center gap-3 text-zion-cyan">
                <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                <div className="text-left">
                  <div className="text-white font-semibold">Call Us</div>
                  <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan-light">
                    +1 302 464 0950
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-zion-cyan">
                <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                <div className="text-left">
                  <div className="text-white font-semibold">Email Us</div>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light">
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 text-zion-cyan">
                <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                <div className="text-left">
                  <div className="text-white font-semibold">Visit Us</div>
                  <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-cyan-light">
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-4 text-zion-slate-light text-sm">
              Address: 364 E Main St STE 1008, Middletown DE 19709
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-quote">
              <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white text-lg px-8 py-3">
                Get Started Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 text-lg px-8 py-3">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Zion</span>
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Get enterprise-grade technology solutions without the enterprise price tag
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-lg p-6 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group">
                <div className="inline-flex p-3 rounded-full bg-zion-cyan/20 mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-zion-slate-light">{benefit.description}</p>
>>>>>>> cfb04f63b138e721e668a86f56f120d011c10c16
              </div>
            ))}
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p>{CONTACT_INFO.mobile}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>{CONTACT_INFO.email}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p>{CONTACT_INFO.address}</p>
            </div>
=======
      {/* Service Categories */}
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Service Categories</span>
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Comprehensive solutions across AI, IT infrastructure, business transformation, and specialized services
            </p>
          </div>
          
          {serviceCategories.map((category, categoryIndex) => (
            <div key={category.id} className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 mb-6">
                  {category.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 group overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-4">
                        {service.badge && (
                          <Badge className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white">
                            {service.badge}
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl text-white mb-2">{service.name}</CardTitle>
                      <CardDescription className="text-zion-slate-light">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="text-center">
                        <div className="flex items-baseline justify-center">
                          <span className="text-3xl font-bold text-zion-cyan">${service.price}</span>
                          <span className="text-zion-slate-light ml-1">{service.period}</span>
                        </div>
                        <p className="text-sm text-green-400 font-medium">{service.savings}</p>
                      </div>
                      
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-zion-slate-light text-sm">
                            <CheckCircle className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white group-hover:scale-105 transition-transform">
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Pricing</span>
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Choose the plan that fits your business needs. All plans include enterprise-grade security and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-md rounded-lg p-8 border ${plan.popular ? 'border-zion-cyan' : 'border-zion-slate-light/30'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-zion-cyan">${plan.price}</span>
                    <span className="text-zion-slate-light ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zion-slate-light mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-zion-slate-light">
                      <CheckCircle className="h-5 w-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 transition-opacity text-lg py-3`}>
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </Button>
              </div>
            ))}
>>>>>>> cfb04f63b138e721e668a86f56f120d011c10c16
          </div>
          <a
            href={`tel:${CONTACT_INFO.mobile}`}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us Now
          </a>
        </div>
<<<<<<< HEAD
      </section>
=======
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Business</span>?
          </h2>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto mb-8">
            Join thousands of businesses already using Zion's micro SAAS services to scale and innovate.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-quote">
              <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white text-lg px-8 py-3">
                Start Free Trial
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 text-lg px-8 py-3">
                Schedule Demo
              </Button>
            </Link>
          </div>
          
          <p className="text-zion-slate-light text-sm mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
>>>>>>> cfb04f63b138e721e668a86f56f120d011c10c16
    </div>
  );
};

export default MicroSaasServices;