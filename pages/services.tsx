import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, 
  Users, Target, Star, Zap, Globe, TrendingUp,
  CheckCircle, ArrowRight, ExternalLink, Sparkles
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Brain,
      title: "AI Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI-powered analytics platform.",
      features: [
        "Real-time data processing",
        "Predictive analytics",
        "Custom AI models",
        "Interactive dashboards",
        "Automated reporting"
      ],
      price: "$499/month",
      color: "from-purple-500 to-pink-500",
      href: "/ai-business-intelligence"
    },
    {
      icon: Shield,
      title: "Quantum Cybersecurity",
      description: "Future-proof your security with quantum-resistant encryption and AI-powered threat detection.",
      features: [
        "Quantum-resistant encryption",
        "AI threat detection",
        "Zero-trust architecture",
        "24/7 monitoring",
        "Compliance ready"
      ],
      price: "$799/month",
      color: "from-red-500 to-orange-500",
      href: "/quantum-cybersecurity"
    },
    {
      icon: Users,
      title: "AI Customer Experience",
      description: "Deliver personalized customer experiences at scale with intelligent automation and insights.",
      features: [
        "Customer journey mapping",
        "AI personalization",
        "Sentiment analysis",
        "Automated support",
        "Behavioral insights"
      ],
      price: "$399/month",
      color: "from-green-500 to-teal-500",
      href: "/ai-customer-experience"
    },
    {
      icon: Database,
      title: "Edge Computing Orchestration",
      description: "Deploy and manage applications at the edge with intelligent orchestration and optimization.",
      features: [
        "Edge node management",
        "IoT device management",
        "Real-time monitoring",
        "Load balancing",
        "Auto-scaling"
      ],
      price: "$349/month",
      color: "from-yellow-500 to-orange-500",
      href: "/edge-computing-orchestration"
    },
    {
      icon: Rocket,
      title: "Space Technology Innovation",
      description: "Accelerate space exploration with cutting-edge AI and quantum technology solutions.",
      features: [
        "Satellite management",
        "AI mission planning",
        "Quantum communication",
        "Resource optimization",
        "Risk assessment"
      ],
      price: "$2,499/month",
      color: "from-violet-500 to-purple-500",
      href: "/space-technology"
    },
    {
      icon: Atom,
      title: "Neural Interface Development",
      description: "Build the future of human-computer interaction with advanced neural interfaces.",
      features: [
        "BCI development tools",
        "Neural signal processing",
        "AI pattern recognition",
        "Real-time analysis",
        "Custom algorithms"
      ],
      price: "$899/month",
      color: "from-pink-500 to-rose-500",
      href: "/neural-interface"
    }
  ];

  const specializedServices = [
    {
      title: "AI Autonomous Systems",
      description: "Build self-managing, self-optimizing systems that adapt and evolve",
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Quantum Machine Learning",
      description: "Leverage quantum computing for unprecedented ML performance",
      icon: Atom,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI-Powered DevOps",
      description: "Automate and optimize your development and deployment processes",
      icon: Cpu,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Blockchain AI Integration",
      description: "Combine blockchain security with AI intelligence for next-gen applications",
      icon: Shield,
      color: "from-orange-500 to-red-500"
    }
  ];

  const industries = [
    "Finance & Banking",
    "Healthcare & Life Sciences",
    "Manufacturing & Industry 4.0",
    "Retail & E-commerce",
    "Energy & Utilities",
    "Transportation & Logistics",
    "Education & Research",
    "Government & Defense"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Services — Zion Tech Group | AI, Quantum Computing & Technology Solutions</title>
        <meta name="description" content="Discover Zion Tech Group's comprehensive AI, quantum computing, and technology services. Transform your business with cutting-edge solutions." />
        <meta property="og:title" content="Zion Tech Group Services" />
        <meta property="og:description" content="AI, quantum computing, and technology solutions for modern businesses." />
        <meta name="keywords" content="AI services, quantum computing, technology solutions, business intelligence, cybersecurity" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Comprehensive AI, quantum computing, and technology solutions designed to transform 
              your business and drive innovation across every industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Core Technology Services</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI and quantum technology solutions, 
              each designed to address specific business challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 hover:border-slate-600/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-slate-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
=======
import Link from 'next/link';
import { Brain, Cloud, Code, Shield, Globe, Zap, Database, Lock, Cpu, Network, BarChart3, Smartphone } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Development',
      description: 'Custom AI solutions and machine learning models tailored to your business needs.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Recommendation Systems'
      ],
      benefits: [
        'Increased operational efficiency',
        'Data-driven decision making',
        'Automated processes',
        'Competitive advantage'
      ],
      href: '/services/ai-development'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions and infrastructure design for modern applications.',
      features: [
        'AWS/Azure/GCP Migration',
        'Microservices Architecture',
        'Serverless Solutions',
        'DevOps Automation',
        'Container Orchestration',
        'Cloud Security'
      ],
      benefits: [
        'Scalable infrastructure',
        'Cost optimization',
        'High availability',
        'Reduced maintenance'
      ],
      href: '/services/cloud-services'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      features: [
        'React/Next.js Applications',
        'Full-Stack Development',
        'Progressive Web Apps',
        'API Development',
        'E-commerce Solutions',
        'Custom CMS'
      ],
      benefits: [
        'Modern user experience',
        'Mobile-first design',
        'Fast performance',
        'SEO optimization'
      ],
      href: '/services/web-development'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Incident Response',
        'Security Training',
        'Threat Intelligence'
      ],
      benefits: [
        'Protect sensitive data',
        'Meet compliance requirements',
        'Reduce security risks',
        'Build customer trust'
      ],
      href: '/services/cybersecurity'
    },
    {
      icon: Globe,
      title: 'IoT Platforms',
      description: 'Connected device solutions for smart environments and automation.',
      features: [
        'Sensor Networks',
        'Edge Computing',
        'Real-time Analytics',
        'Device Management',
        'Data Collection',
        'Remote Monitoring'
      ],
      benefits: [
        'Automated operations',
        'Real-time insights',
        'Cost savings',
        'Improved efficiency'
      ],
      href: '/services/iot-platforms'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business.',
      features: [
        'Process Automation',
        'Legacy Modernization',
        'Change Management',
        'Training Programs',
        'Workflow Optimization',
        'Technology Roadmaps'
      ],
      benefits: [
        'Streamlined operations',
        'Improved productivity',
        'Better customer experience',
        'Future-ready business'
      ],
      href: '/services/digital-transformation'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights for strategic decision making.',
      features: [
        'Business Intelligence',
        'Data Warehousing',
        'Predictive Analytics',
        'Data Visualization',
        'ETL Processes',
        'Performance Dashboards'
      ],
      benefits: [
        'Data-driven decisions',
        'Identify opportunities',
        'Optimize operations',
        'Measure performance'
      ],
      href: '/services/data-analytics'
    },
    {
      icon: Lock,
      title: 'Blockchain Solutions',
      description: 'Secure, transparent, and decentralized applications for modern businesses.',
      features: [
        'Smart Contracts',
        'DeFi Applications',
        'NFT Marketplaces',
        'Supply Chain Tracking',
        'Identity Management',
        'Cross-chain Solutions'
      ],
      benefits: [
        'Enhanced security',
        'Transparent operations',
        'Reduced costs',
        'New business models'
      ],
      href: '/services/blockchain'
    },
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'Advanced ML solutions that learn and adapt to your business needs.',
      features: [
        'Custom ML Models',
        'Deep Learning',
        'Neural Networks',
        'Model Training',
        'A/B Testing',
        'Continuous Learning'
      ],
      benefits: [
        'Automated insights',
        'Pattern recognition',
        'Predictive capabilities',
        'Scalable intelligence'
      ],
      href: '/services/machine-learning'
    },
    {
      icon: Network,
      title: 'API Development',
      description: 'Robust and scalable APIs that power modern applications.',
      features: [
        'RESTful APIs',
        'GraphQL Services',
        'API Gateway',
        'Rate Limiting',
        'Authentication',
        'Documentation'
      ],
      benefits: [
        'Seamless integration',
        'Scalable architecture',
        'Developer experience',
        'Faster development'
      ],
      href: '/services/api-development'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Comprehensive BI solutions for data-driven business decisions.',
      features: [
        'Interactive Dashboards',
        'KPI Tracking',
        'Report Automation',
        'Data Mining',
        'Trend Analysis',
        'Executive Reporting'
      ],
      benefits: [
        'Real-time insights',
        'Better decisions',
        'Performance tracking',
        'Competitive advantage'
      ],
      href: '/services/business-intelligence'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'iOS Development',
        'Android Development',
        'React Native',
        'Flutter Apps',
        'Mobile UI/UX',
        'App Store Optimization'
      ],
      benefits: [
        'Mobile presence',
        'User engagement',
        'Brand visibility',
        'Revenue growth'
      ],
      href: '/services/mobile-development'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs, current systems, and objectives to understand your requirements.'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a tailored solution that aligns with your business goals and technical requirements.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We develop your solution using best practices and conduct thorough testing to ensure quality.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing support and maintenance to ensure optimal performance.'
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of technology services including AI development, cloud architecture, web development, cybersecurity, and more." />
        <meta name="keywords" content="technology services, AI development, cloud architecture, web development, cybersecurity, digital transformation" />
      </Head>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver cutting-edge technology solutions that drive innovation, efficiency, and growth 
            for forward-thinking organizations across industries.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From AI and machine learning to cloud architecture and cybersecurity, we offer end-to-end 
              solutions that transform businesses and drive measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 hover:bg-gray-900/80 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
                      </li>
                    ))}
                  </ul>
                </div>
                
<<<<<<< HEAD
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-blue-400">{service.price}</div>
                  <a
                    href={service.href}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                
                <Link
                  href="/contact"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg text-white font-semibold text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </motion.div>
=======
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                  <span className="inline-flex items-center">
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Specialized Services */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Specialized Solutions</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Advanced technology solutions for specific use cases and emerging opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specializedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed mb-6">{service.description}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  <span>Discuss Requirements</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
=======
      {/* Our Process */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful project delivery and maximum value 
              for your investment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Industries We Serve */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Industries We Serve</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our technology solutions are designed to work across all industries, 
              with specialized expertise in key sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6 text-center hover:border-slate-600/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver 
              solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cutting-Edge Technology</h3>
              <p className="text-slate-300 leading-relaxed">
                Access to the latest AI, quantum computing, and emerging technologies 
                that give you a competitive advantage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-slate-300 leading-relaxed">
                World-class engineers, scientists, and consultants with deep expertise 
                in AI, quantum computing, and industry applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-slate-300 leading-relaxed">
                Track record of successful implementations across 500+ projects 
                with measurable business impact and ROI.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our AI and quantum technology solutions can help 
              you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/case-studies"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                View Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}
=======
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let&rsquo;s discuss how our technology services can transform your business and drive 
            innovation in your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </Link>
            <Link 
              href="/about" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
