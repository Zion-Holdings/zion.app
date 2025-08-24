import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Database, 
  Lock, 
  Users, 
  BarChart3, 
  Code, 
  Smartphone, 
  Server,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Award,
  Rocket,
  Atom,
  Cpu,
  Satellite,
  Building,
  Target,
  Globe2,
  Network,
  FileText,
  Palette,
  Search,
  Monitor,
  Smartphone as Mobile,
  Laptop,
  Shield as Security,
  Database as DataIcon,
  Cloud as CloudIcon,
  Zap as Lightning,
  Users as TeamIcon,
  BarChart3 as AnalyticsIcon,
  Code as CodeIcon,
  Smartphone as AppIcon,
  Server as ServerIcon,
  Brain as AI,
  Shield as CyberIcon,
  Globe as WebIcon,
  Database as BigDataIcon,
  Lock as PrivacyIcon,
  Users as SupportIcon,
  BarChart3 as BI,
  Code as DevIcon,
  Smartphone as MobileDev,
  Server as InfraIcon,
  ShoppingCart,
  Mail
} from 'lucide-react';

export default function HomePage() {
  const heroServices = [
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      price: "$299/month",
      features: ["Real-time Analytics", "Predictive Insights", "Custom Dashboards", "API Integration"]
    },
    {
      title: "Cloud Infrastructure Management",
      description: "Scalable cloud solutions with 99.9% uptime guarantee and 24/7 monitoring",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      price: "$199/month",
      features: ["Auto-scaling", "Load Balancing", "Backup & Recovery", "Security Monitoring"]
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Enterprise-grade security solutions with SOC 2 compliance and threat detection",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      price: "$399/month",
      features: ["Threat Detection", "Compliance Reporting", "Penetration Testing", "Security Training"]
    }
  ];

  const microSaasServices = [
    {
      category: "Business Intelligence & Analytics",
      services: [
        {
          name: "Zion Analytics Pro",
          description: "AI-powered business intelligence platform with real-time dashboards",
          price: "$199/month",
          features: ["Custom Dashboards", "Predictive Analytics", "Data Integration", "Mobile App"],
          icon: <BarChart3 className="w-6 h-6" />,
          link: "https://ziontechgroup.com/analytics"
        },
        {
          name: "Data Insights Engine",
          description: "Automated data analysis and reporting for business decision making",
          price: "$149/month",
          features: ["Automated Reports", "Data Visualization", "Scheduled Alerts", "Export Options"],
          icon: <Database className="w-6 h-6" />,
          link: "https://ziontechgroup.com/data-insights"
        },
        {
          name: "Performance Monitor",
          description: "Real-time performance tracking and optimization recommendations",
          price: "$99/month",
          features: ["Real-time Monitoring", "Performance Alerts", "Optimization Tips", "Historical Data"],
          icon: <TrendingUp className="w-6 h-6" />,
          link: "https://ziontechgroup.com/performance"
        }
      ]
    },
    {
      category: "AI & Machine Learning",
      services: [
        {
          name: "AI Content Generator",
          description: "Advanced AI-powered content creation for marketing and communications",
          price: "$299/month",
          features: ["Content Creation", "SEO Optimization", "Multi-language Support", "Brand Consistency"],
          icon: <Brain className="w-6 h-6" />,
          link: "https://ziontechgroup.com/ai-content"
        },
        {
          name: "Predictive Analytics Suite",
          description: "Machine learning models for business forecasting and trend analysis",
          price: "$399/month",
          features: ["ML Models", "Forecasting", "Trend Analysis", "Custom Algorithms"],
          icon: <Cpu className="w-6 h-6" />,
          link: "https://ziontechgroup.com/predictive-analytics"
        },
        {
          name: "AI Chatbot Platform",
          description: "Intelligent chatbot solutions for customer service and support",
          price: "$199/month",
          features: ["Natural Language", "Multi-channel", "Analytics", "Custom Training"],
          icon: <Users className="w-6 h-6" />,
          link: "https://ziontechgroup.com/ai-chatbot"
        }
      ]
    },
    {
      category: "Web Development & Design",
      services: [
        {
          name: "Website Builder Pro",
          description: "Professional website creation with AI-powered design suggestions",
          price: "$149/month",
          features: ["Drag & Drop", "AI Design", "SEO Tools", "Mobile Responsive"],
          icon: <Globe className="w-6 h-6" />,
          link: "https://ziontechgroup.com/website-builder"
        },
        {
          name: "E-commerce Platform",
          description: "Complete e-commerce solution with payment processing and inventory management",
          price: "$249/month",
          features: ["Payment Gateway", "Inventory Management", "Order Processing", "Analytics"],
          icon: <ShoppingCart className="w-6 h-6" />,
          link: "https://ziontechgroup.com/ecommerce"
        },
        {
          name: "Mobile App Development",
          description: "Cross-platform mobile applications for iOS and Android",
          price: "$399/month",
          features: ["Cross-platform", "Native Performance", "Push Notifications", "App Store Support"],
          icon: <Smartphone className="w-6 h-6" />,
          link: "https://ziontechgroup.com/mobile-apps"
        }
      ]
    },
    {
      category: "Cloud & Infrastructure",
      services: [
        {
          name: "Cloud Migration Service",
          description: "Seamless migration to cloud infrastructure with zero downtime",
          price: "$599/month",
          features: ["Zero Downtime", "Data Security", "Performance Optimization", "24/7 Support"],
          icon: <Cloud className="w-6 h-6" />,
          link: "https://ziontechgroup.com/cloud-migration"
        },
        {
          name: "DevOps Automation",
          description: "Automated deployment and continuous integration/continuous deployment",
          price: "$299/month",
          features: ["CI/CD Pipeline", "Automated Testing", "Deployment Automation", "Monitoring"],
          icon: <Zap className="w-6 h-6" />,
          link: "https://ziontechgroup.com/devops"
        },
        {
          name: "Server Management",
          description: "Comprehensive server administration and maintenance services",
          price: "$199/month",
          features: ["24/7 Monitoring", "Security Updates", "Backup Management", "Performance Tuning"],
          icon: <Server className="w-6 h-6" />,
          link: "https://ziontechgroup.com/server-management"
        }
      ]
    },
    {
      category: "Cybersecurity & Compliance",
      services: [
        {
          name: "Security Audit Pro",
          description: "Comprehensive security assessment and vulnerability scanning",
          price: "$499/month",
          features: ["Vulnerability Scan", "Penetration Testing", "Compliance Check", "Security Report"],
          icon: <Shield className="w-6 h-6" />,
          link: "https://ziontechgroup.com/security-audit"
        },
        {
          name: "Data Protection Suite",
          description: "GDPR and CCPA compliance tools with data encryption and privacy controls",
          price: "$349/month",
          features: ["Data Encryption", "Privacy Controls", "Compliance Tools", "Audit Trails"],
          icon: <Lock className="w-6 h-6" />,
          link: "https://ziontechgroup.com/data-protection"
        },
        {
          name: "Threat Intelligence",
          description: "Real-time threat detection and automated response system",
          price: "$399/month",
          features: ["Real-time Detection", "Automated Response", "Threat Intelligence", "Incident Management"],
          icon: <Shield className="w-6 h-6" />,
          link: "https://ziontechgroup.com/threat-intelligence"
        }
      ]
    },
    {
      category: "Digital Marketing & SEO",
      services: [
        {
          name: "SEO Optimization Suite",
          description: "Comprehensive search engine optimization with AI-powered insights",
          price: "$199/month",
          features: ["Keyword Research", "On-page SEO", "Technical SEO", "Performance Tracking"],
          icon: <Search className="w-6 h-6" />,
          link: "https://ziontechgroup.com/seo-suite"
        },
        {
          name: "Social Media Manager",
          description: "Automated social media management with AI content optimization",
          price: "$149/month",
          features: ["Content Scheduling", "AI Optimization", "Analytics", "Multi-platform"],
          icon: <Users className="w-6 h-6" />,
          link: "https://ziontechgroup.com/social-media"
        },
        {
          name: "Email Marketing Platform",
          description: "Advanced email marketing with automation and personalization",
          price: "$99/month",
          features: ["Email Automation", "Personalization", "A/B Testing", "Analytics"],
          icon: <Mail className="w-6 h-6" />,
          link: "https://ziontechgroup.com/email-marketing"
        }
      ]
    }
  ];

  const itServices = [
    {
      name: "IT Consulting & Strategy",
      description: "Strategic IT planning and digital transformation consulting",
      price: "$150/hour",
      features: ["Technology Assessment", "Digital Strategy", "Roadmap Planning", "Vendor Selection"],
      icon: <Building className="w-8 h-8" />,
      link: "https://ziontechgroup.com/it-consulting"
    },
    {
      name: "Network Infrastructure",
      description: "Enterprise network design, implementation, and maintenance",
      price: "$200/hour",
      features: ["Network Design", "Implementation", "Security", "24/7 Support"],
      icon: <Network className="w-8 h-8" />,
      link: "https://ziontechgroup.com/network-infrastructure"
    },
    {
      name: "Data Center Solutions",
      description: "On-premise and hybrid data center design and management",
      price: "$250/hour",
      features: ["Design & Build", "Virtualization", "Backup Systems", "Disaster Recovery"],
      icon: <Server className="w-8 h-8" />,
      link: "https://ziontechgroup.com/data-center"
    }
  ];

  const aiSolutions = [
    {
      name: "Custom AI Development",
      description: "Tailored AI solutions for specific business needs and use cases",
      price: "$500/hour",
      features: ["Custom Models", "Integration", "Training", "Maintenance"],
      icon: <Brain className="w-8 h-8" />,
      link: "https://ziontechgroup.com/custom-ai"
    },
    {
      name: "AI Model Training",
      description: "Specialized training of AI models for industry-specific applications",
      price: "$400/hour",
      features: ["Data Preparation", "Model Training", "Validation", "Deployment"],
      icon: <Cpu className="w-8 h-8" />,
      link: "https://ziontechgroup.com/ai-training"
    },
    {
      name: "AI Integration Services",
      description: "Seamless integration of AI solutions into existing business systems",
      price: "$300/hour",
      features: ["System Integration", "API Development", "Testing", "Documentation"],
      icon: <Code className="w-8 h-8" />,
      link: "https://ziontechgroup.com/ai-integration"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CTO",
      content: "Zion Tech Group transformed our business with their AI analytics platform. We've seen a 40% increase in operational efficiency.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Global Retail Corp",
      role: "IT Director",
      content: "Their cloud migration service was seamless. Zero downtime and improved performance from day one.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Healthcare Solutions",
      role: "Operations Manager",
      content: "The cybersecurity solutions provided by Zion Tech Group helped us achieve SOC 2 compliance in record time.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI, IT & Micro SAAS Solutions Provider</title>
        <meta name="description" content="Zion Tech Group delivers cutting-edge AI solutions, IT services, and innovative micro SAAS platforms. Transform your business with our technology expertise." />
        <meta property="og:title" content="Zion Tech Group - AI, IT & Micro SAAS Solutions" />
        <meta property="og:description" content="Leading provider of AI solutions, IT services, and innovative micro SAAS platforms. Transform your business with Zion Tech Group." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="AI solutions, IT services, micro SAAS, cloud computing, cybersecurity, business intelligence, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
        {/* Header */}
        <header className="relative z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h1>
                  <p className="text-sm text-white/60">Innovation • Intelligence • Impact</p>
                </div>
              </div>
              <nav className="hidden md:flex items-center space-x-8">
                <Link href="#services" className="text-white/80 hover:text-white transition-colors">Services</Link>
                <Link href="#solutions" className="text-white/80 hover:text-white transition-colors">Solutions</Link>
                <Link href="#about" className="text-white/80 hover:text-white transition-colors">About</Link>
                <Link href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
              </nav>
              <div className="flex items-center space-x-4">
                <Link 
                  href="#contact"
                  className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative container mx-auto px-6 text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                Transform Your Business
              </span>
              <br />
              <span className="text-white">With AI & Technology</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
              Zion Tech Group delivers cutting-edge AI solutions, innovative micro SAAS platforms, and comprehensive IT services to drive your business forward.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link 
                href="#services"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105"
              >
                Explore Services
              </Link>
              <Link 
                href="#contact"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                Schedule Consultation
              </Link>
            </div>
            
            {/* Hero Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {heroServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-white/70 mb-4 text-sm">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-3">{service.price}</div>
                  <ul className="space-y-1 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-white/60 flex items-center">
                        <CheckCircle className="w-3 h-3 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services */}
        <section id="services" className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Micro SAAS Solutions
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Innovative, scalable software-as-a-service solutions designed to solve specific business challenges
              </p>
            </div>

            {microSaasServices.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h3 className="text-2xl font-bold mb-8 text-center text-fuchsia-400">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 rounded-xl flex items-center justify-center mr-4">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">{service.name}</h4>
                          <div className="text-cyan-400 font-bold">{service.price}</div>
                        </div>
                      </div>
                      <p className="text-white/70 mb-4 text-sm">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-white/60 flex items-center">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link 
                        href={service.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IT Services */}
        <section id="solutions" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                  IT Services & Solutions
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive IT consulting, infrastructure management, and digital transformation services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-2xl flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.name}</h3>
                  <p className="text-white/70 mb-6">{service.description}</p>
                  <div className="text-3xl font-bold text-blue-400 mb-6">{service.price}</div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-white/60 flex items-center">
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={service.link}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>

            {/* AI Solutions */}
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-8 text-green-400">AI & Machine Learning Solutions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {aiSolutions.map((solution, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-2xl flex items-center justify-center mb-6">
                      {solution.icon}
                    </div>
                    <h4 className="text-2xl font-bold mb-4 text-white">{solution.name}</h4>
                    <p className="text-white/70 mb-6">{solution.description}</p>
                    <div className="text-3xl font-bold text-green-400 mb-6">{solution.price}</div>
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-white/60 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={solution.link}
                      className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  What Our Clients Say
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Trusted by businesses worldwide for innovative technology solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400">{testimonial.role}</div>
                    <div className="text-white/60 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Ready to Get Started?
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Let's discuss how Zion Tech Group can transform your business with cutting-edge technology solutions
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Smartphone className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-white">+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-white">kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center">
                      <Building className="w-5 h-5 text-cyan-400 mr-3" />
                      <span className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-fuchsia-400">Quick Links</h3>
                  <div className="space-y-3">
                    <Link href="https://ziontechgroup.com" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                      Visit Our Website →
                    </Link>
                    <Link href="/ai-solutions" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                      AI Solutions →
                    </Link>
                    <Link href="/services-2024" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                      All Services →
                    </Link>
                    <Link href="/about" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                      About Us →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link 
                  href="https://ziontechgroup.com"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-200 transform hover:scale-105"
                >
                  Visit Zion Tech Group
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-950/90 border-t border-white/10 py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-xl flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                </div>
                <p className="text-white/60 text-sm">
                  Leading provider of AI solutions, IT services, and innovative micro SAAS platforms.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li><Link href="/ai-solutions" className="hover:text-white transition-colors">AI Solutions</Link></li>
                  <li><Link href="/services-2024" className="hover:text-white transition-colors">IT Services</Link></li>
                  <li><Link href="#services" className="hover:text-white transition-colors">Micro SAAS</Link></li>
                  <li><Link href="#solutions" className="hover:text-white transition-colors">Consulting</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-white/60">
                  <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                <div className="space-y-2 text-sm text-white/60">
                  <p>Mobile: +1 302 464 0950</p>
                  <p>Email: kleber@ziontechgroup.com</p>
                  <p>Address: 364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 text-center">
              <p className="text-white/60 text-sm">
                © 2024 Zion Tech Group. All rights reserved. | 
                <Link href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-1">
                  ziontechgroup.com
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
