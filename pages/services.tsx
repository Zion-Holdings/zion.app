import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Zap, Shield, Cloud, Brain, Globe, Cpu, Database, Lock, Smartphone, Code, Rocket, Target } from 'lucide-react';

const Services: NextPage = () => {
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence and machine learning solutions for modern businesses",
      icon: Brain,
      features: [
        "Custom AI Model Development",
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Machine Learning Automation",
        "AI-Powered Decision Making"
      ],
      price: "Starting at $5,000",
      href: "/services/ai-machine-learning",
      category: "AI & ML"
    },
    {
      title: "Cloud & Infrastructure",
      description: "Comprehensive cloud migration, optimization, and multi-cloud management services",
      icon: Cloud,
      features: [
        "Cloud Migration Strategy",
        "Cost Optimization",
        "Performance Tuning",
        "Security Management",
        "Multi-Cloud Solutions",
        "DevOps Automation"
      ],
      price: "Starting at $10,000",
      href: "/services/cloud-infrastructure",
      category: "Cloud"
    },
    {
      title: "Web & Mobile Development",
      description: "Full-stack web applications and native mobile apps for all platforms",
      icon: Smartphone,
      features: [
        "Web Applications",
        "Mobile Apps (iOS/Android)",
        "API Development",
        "UI/UX Design",
        "Progressive Web Apps",
        "Cross-Platform Solutions"
      ],
      price: "Starting at $8,000",
      href: "/services/web-mobile-development",
      category: "Development"
    },
    {
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets and infrastructure",
      icon: Shield,
      features: [
        "Security Audits",
        "Penetration Testing",
        "Incident Response",
        "Security Training",
        "Compliance Management",
        "Threat Intelligence"
      ],
      price: "Starting at $7,500",
      href: "/services/cybersecurity",
      category: "Security"
    },
    {
      title: "Blockchain & DeFi",
      description: "Decentralized solutions and blockchain technology for innovative business models",
      icon: Globe,
      features: [
        "Smart Contract Development",
        "DeFi Platform Building",
        "Blockchain Integration",
        "Cryptocurrency Solutions",
        "NFT Marketplaces",
        "Web3 Applications"
      ],
      price: "Starting at $12,000",
      href: "/services/blockchain-defi",
      category: "Blockchain"
    },
    {
      title: "IoT & Smart Cities",
      description: "Connected infrastructure and Internet of Things solutions for modern cities",
      icon: Cpu,
      features: [
        "IoT Device Development",
        "Smart City Solutions",
        "Sensor Networks",
        "Data Analytics",
        "Automation Systems",
        "Connected Infrastructure"
      ],
      price: "Starting at $15,000",
      href: "/services/iot-smart-cities",
      category: "IoT"
    }
  ];

  const industries = [
    "Financial Services",
    "Healthcare",
    "Manufacturing",
    "Government",
    "Education",
    "Retail & E-commerce",
    "Energy",
    "Transportation"
  ];

  const technologies = [
    "React & Next.js",
    "Python & Django",
    "Node.js & Express",
    "AWS & Azure",
    "Docker & Kubernetes",
    "TensorFlow & PyTorch",
    "PostgreSQL & MongoDB",
    "Redis & Elasticsearch",
    "GraphQL & REST APIs",
    "Jenkins & GitLab CI",
    "Terraform & Ansible",
    "Prometheus & Grafana"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Services - Zion Tech Group | AI, Cloud, Development & More</title>
        <meta name="description" content="Comprehensive technology services from Zion Tech Group including AI development, cloud migration, web development, cybersecurity, blockchain, and IoT solutions." />
        <meta name="keywords" content="technology services, AI services, cloud migration, web development, mobile apps, cybersecurity, blockchain, IoT, smart cities" />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Comprehensive technology solutions designed to transform your business 
            and drive innovation across all industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Started
            </Link>
            <Link href="/pricing" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              View Pricing
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">6+</div>
              <div className="text-sm md:text-base opacity-80">Service Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-sm md:text-base opacity-80">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">8+</div>
              <div className="text-sm md:text-base opacity-80">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-sm md:text-base opacity-80">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Comprehensive Service Portfolio
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl mb-4">
                    <service.icon className="w-12 h-12 text-blue-400" />
                  </div>
                  <span className="inline-block bg-blue-100/20 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-sm text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-semibold text-blue-400">{service.price}</span>
                  <Link href={service.href} className="text-blue-400 hover:text-blue-300 font-medium group-hover:text-blue-300 transition-colors">
                    Learn More →
                  </Link>
                </div>
                
                <Link href="/contact" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors text-center block">
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Industries We Serve
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="text-2xl mb-3">🏢</div>
                <h3 className="text-white font-medium">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Technologies We Master
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <span key={index} className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Our Process
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Discovery</h3>
              <p className="text-gray-300 text-sm">Understanding your needs and objectives</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Planning</h3>
              <p className="text-gray-300 text-sm">Strategic roadmap and architecture design</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
              <p className="text-gray-300 text-sm">Agile development and iterative delivery</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Launch</h3>
              <p className="text-gray-300 text-sm">Deployment and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s discuss how our services can transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Your Project
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;