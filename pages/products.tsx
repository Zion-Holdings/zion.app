import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Zap, Shield, Cloud, Brain, Globe, Cpu, Database, Lock, Smartphone, Code, Rocket, Target, Star, Users, TrendingUp } from 'lucide-react';

const Products: NextPage = () => {
  const products = [
    {
      name: "SmartDoc AI",
      description: "AI-powered document processing and automation platform that transforms how businesses handle paperwork",
      price: "$99/month",
      category: "AI Automation",
      icon: Brain,
      features: [
        "Intelligent Document Recognition",
        "Automated Data Extraction",
        "Workflow Automation",
        "Multi-format Support",
        "Real-time Processing",
        "API Integration"
      ],
      href: "/products/smartdoc-ai",
      popular: false,
      badge: "New"
    },
    {
      name: "DataViz Pro",
      description: "Advanced business intelligence and data visualization platform for actionable insights",
      price: "$149/month",
      category: "Business Intelligence",
      icon: TrendingUp,
      features: [
        "Interactive Dashboards",
        "Real-time Analytics",
        "Custom Reports",
        "Data Integration",
        "Predictive Analytics",
        "Mobile Access"
      ],
      href: "/products/dataviz-pro",
      popular: true,
      badge: "Popular"
    },
    {
      name: "CloudSync Manager",
      description: "Multi-cloud management and optimization platform for seamless cloud operations",
      price: "$199/month",
      category: "Cloud Management",
      icon: Cloud,
      features: [
        "Multi-cloud Dashboard",
        "Cost Optimization",
        "Performance Monitoring",
        "Security Management",
        "Automated Scaling",
        "Compliance Tools"
      ],
      href: "/products/cloudsync-manager",
      popular: false,
      badge: "Enterprise"
    },
    {
      name: "SecureGate",
      description: "Comprehensive cybersecurity platform with advanced threat detection and prevention",
      price: "$179/month",
      category: "Cybersecurity",
      icon: Shield,
      features: [
        "Threat Detection",
        "Vulnerability Scanning",
        "Incident Response",
        "Compliance Management",
        "Security Training",
        "24/7 Monitoring"
      ],
      href: "/products/securegate",
      popular: false,
      badge: "Security"
    },
    {
      name: "CodeFlow",
      description: "AI-powered code review and development automation platform for development teams",
      price: "$129/month",
      category: "Development",
      icon: Code,
      features: [
        "AI Code Review",
        "Automated Testing",
        "Code Quality Metrics",
        "Team Collaboration",
        "Version Control",
        "CI/CD Integration"
      ],
      href: "/products/codeflow",
      popular: false,
      badge: "DevOps"
    },
    {
      name: "BlockChain Hub",
      description: "Comprehensive blockchain development and DeFi platform for modern businesses",
      price: "$299/month",
      category: "Blockchain",
      icon: Globe,
      features: [
        "Smart Contract Development",
        "DeFi Platform Building",
        "NFT Marketplace",
        "Blockchain Analytics",
        "Wallet Integration",
        "Compliance Tools"
      ],
      href: "/products/blockchain-hub",
      popular: false,
      badge: "Web3"
    }
  ];

  const categories = [
    "All Products",
    "AI & Automation",
    "Business Intelligence",
    "Cloud Management",
    "Cybersecurity",
    "Development Tools",
    "Blockchain & DeFi"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      company: "TechCorp Inc.",
      content: "SmartDoc AI has revolutionized our document processing. We&apos;ve reduced manual work by 80% and improved accuracy significantly.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "VP Engineering",
      company: "DataFlow Systems",
      content: "DataViz Pro gives us the insights we need to make data-driven decisions. The dashboards are intuitive and powerful.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Emily Rodriguez",
      role: "DevOps Manager",
      company: "CloudFirst Solutions",
      content: "CloudSync Manager has streamlined our multi-cloud operations. The cost optimization features alone have saved us thousands.",
      rating: 5,
      avatar: "👩‍🔧"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Products - Zion Tech Group | Micro SaaS Solutions & Platforms</title>
        <meta name="description" content="Discover Zion Tech Group's innovative micro SaaS products including AI automation, business intelligence, cloud management, and cybersecurity solutions." />
        <meta name="keywords" content="micro SaaS, software products, AI automation, business intelligence, cloud management, cybersecurity, blockchain" />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our Products
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Innovative micro SaaS solutions designed to transform your business operations, 
            enhance productivity, and drive growth through cutting-edge technology.
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
              <div className="text-sm md:text-base opacity-80">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">1000+</div>
              <div className="text-sm md:text-base opacity-80">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-sm md:text-base opacity-80">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-sm md:text-base opacity-80">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group relative">
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 right-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      product.popular 
                        ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                        : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Popular Badge */}
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-medium">
                      ⭐ Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <product.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <span className="inline-block bg-blue-100/20 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{product.name}</h3>
                <p className="text-gray-300 mb-6 text-center">{product.description}</p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-sm text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">{product.price}</div>
                  <div className="text-sm text-gray-400">per month</div>
                </div>
                
                <div className="space-y-3">
                  <Link href={product.href} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors text-center block">
                    Learn More
                  </Link>
                  <Link href="/contact" className="w-full bg-transparent border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white py-3 px-4 rounded-lg font-medium transition-colors text-center block">
                    Get Demo
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Why Choose Our Products?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300">
                Built with performance in mind, our products deliver blazing-fast speeds 
                and responsive user experiences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security with SOC 2 compliance, encryption, and regular 
                security audits to protect your data.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock customer support with dedicated account managers 
                and technical experts ready to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            What Our Customers Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-blue-400 text-sm">{testimonial.role}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic">&quot;{testimonial.content}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Start your free trial today and experience the power of our innovative products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Free Trial
              </Link>
              <Link href="/pricing" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                View Pricing
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;