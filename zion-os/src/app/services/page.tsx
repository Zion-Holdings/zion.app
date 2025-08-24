import Link from 'next/link';
<<<<<<< HEAD
import { Brain, Rocket, Shield, Globe, Zap, Users, Target, Database, Lock, Cpu, Network, BarChart3 } from 'lucide-react';

export const metadata = {
  title: "Services - Zion Tech Group",
  description: "Comprehensive AI-powered solutions including autonomous systems, business intelligence, quantum computing, and enterprise security.",
};

const services = [
  {
    icon: Brain,
    title: "AI Autonomous Systems",
    description: "Self-managing AI systems that operate independently across your business operations, from customer service to supply chain management.",
    features: ["24/7 autonomous operation", "Self-learning capabilities", "Scalable architecture", "Real-time decision making"],
    color: "blue"
  },
  {
    icon: Rocket,
    title: "Business Intelligence",
    description: "Advanced analytics and insights powered by machine learning and AI, providing actionable intelligence for strategic decision-making.",
    features: ["Predictive analytics", "Real-time dashboards", "Custom reporting", "Data visualization"],
    color: "purple"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "AI-powered security solutions protecting your digital assets and infrastructure with advanced threat detection and prevention.",
    features: ["Threat intelligence", "Behavioral analysis", "Zero-trust architecture", "Compliance automation"],
    color: "green"
  },
  {
    icon: Globe,
    title: "Quantum Computing",
    description: "Next-generation computing solutions for complex problem-solving, optimization, and cryptographic applications.",
    features: ["Quantum algorithms", "Optimization engines", "Cryptographic solutions", "Research partnerships"],
    color: "orange"
  },
  {
    icon: Zap,
    title: "AI Content Creation",
    description: "Revolutionary content generation platform that creates engaging, personalized content at scale across all channels.",
    features: ["Multi-format content", "Brand voice consistency", "SEO optimization", "Performance analytics"],
    color: "yellow"
  },
  {
    icon: Users,
    title: "AI Research Assistant",
    description: "Autonomous research capabilities that accelerate discovery and innovation across all fields and industries.",
    features: ["Literature analysis", "Data synthesis", "Hypothesis generation", "Collaboration tools"],
    color: "indigo"
  },
  {
    icon: Database,
    title: "Data Infrastructure",
    description: "Scalable data platforms and pipelines designed for AI workloads and real-time processing requirements.",
    features: ["Data lakes", "Stream processing", "ETL automation", "Quality monitoring"],
    color: "teal"
  },
  {
    icon: Lock,
    title: "Blockchain Solutions",
    description: "Secure, transparent blockchain implementations for supply chain, identity, and financial applications.",
    features: ["Smart contracts", "Identity management", "Supply chain tracking", "DeFi solutions"],
    color: "red"
  }
];

const getColorClasses = (color: string) => {
  const colors: { [key: string]: string } = {
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
    yellow: "bg-yellow-100 text-yellow-600",
    indigo: "bg-indigo-100 text-indigo-600",
    teal: "bg-teal-100 text-teal-600",
    red: "bg-red-100 text-red-600"
  };
  return colors[color] || colors.blue;
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive AI-powered solutions designed to transform your business and drive innovation across all industries
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${getColorClasses(service.color)}`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for implementing AI solutions that deliver measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">We analyze your business needs and identify AI opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600">We develop a comprehensive AI implementation roadmap</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">We build and deploy your AI solutions with precision</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600">We continuously improve and scale your AI systems</p>
=======

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: 'AI Autonomous Systems',
      description: 'Revolutionary AI agents that operate independently across all business functions',
      services: [
        {
          name: 'AI Autonomous Business Manager',
          description: 'Fully autonomous business operations management with decision-making capabilities',
          href: '/ai-autonomous-business-manager',
          features: ['Strategic Planning', 'Resource Allocation', 'Performance Optimization', 'Risk Management']
        },
        {
          name: 'AI Autonomous Research Assistant',
          description: 'Advanced research automation across scientific, business, and academic domains',
          href: '/ai-autonomous-research-assistant',
          features: ['Literature Review', 'Data Analysis', 'Hypothesis Generation', 'Report Writing']
        },
        {
          name: 'AI Autonomous Decision Engine',
          description: 'Real-time decision making powered by advanced machine learning algorithms',
          href: '/ai-autonomous-decision-engine',
          features: ['Predictive Analytics', 'Scenario Modeling', 'Risk Assessment', 'Optimization']
        }
      ]
    },
    {
      title: 'Quantum Computing Solutions',
      description: 'Next-generation quantum computing platforms for unprecedented processing power',
      services: [
        {
          name: 'Quantum Neural Network Platform',
          description: 'Quantum-enhanced neural networks for complex AI computations',
          href: '/quantum-neural-network-platform',
          features: ['Quantum Algorithms', 'Neural Network Optimization', 'Quantum-Classical Hybrid', 'Scalable Architecture']
        },
        {
          name: 'Quantum Financial Trading',
          description: 'Quantum computing solutions for high-frequency trading and risk analysis',
          href: '/quantum-financial-trading',
          features: ['Portfolio Optimization', 'Risk Assessment', 'Market Prediction', 'Algorithmic Trading']
        },
        {
          name: 'Quantum Cloud Infrastructure',
          description: 'Cloud-based quantum computing services for enterprise applications',
          href: '/quantum-cloud-infrastructure',
          features: ['Quantum Processing Units', 'Hybrid Computing', 'API Access', 'Enterprise Security']
        }
      ]
    },
    {
      title: 'Enterprise AI Solutions',
      description: 'Comprehensive AI solutions designed for enterprise-scale operations',
      services: [
        {
          name: 'AI Business Intelligence Suite',
          description: 'Advanced analytics and business intelligence powered by AI',
          href: '/ai-business-intelligence-suite',
          features: ['Data Visualization', 'Predictive Analytics', 'Custom Dashboards', 'Real-time Insights']
        },
        {
          name: 'AI-Powered Enterprise Security',
          description: 'Intelligent security solutions with AI-driven threat detection',
          href: '/ai-powered-enterprise-security',
          features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', 'Compliance Management']
        },
        {
          name: 'AI Content Generation Platform',
          description: 'Enterprise-grade content creation and management with AI',
          href: '/ai-content-generator',
          features: ['Multi-format Content', 'Brand Consistency', 'SEO Optimization', 'Content Analytics']
        }
      ]
    },
    {
      title: 'Specialized AI Platforms',
      description: 'Domain-specific AI solutions for specialized industries and use cases',
      services: [
        {
          name: 'AI Autonomous Healthcare',
          description: 'AI-powered healthcare solutions for diagnosis and treatment planning',
          href: '/ai-autonomous-healthcare-physician',
          features: ['Medical Imaging', 'Diagnostic Support', 'Treatment Planning', 'Patient Monitoring']
        },
        {
          name: 'AI Legal Counsel',
          description: 'Automated legal research and document analysis',
          href: '/ai-autonomous-legal-counsel',
          features: ['Contract Analysis', 'Legal Research', 'Compliance Checking', 'Document Generation']
        },
        {
          name: 'AI Manufacturing Systems',
          description: 'Intelligent manufacturing with predictive maintenance and quality control',
          href: '/ai-autonomous-manufacturing',
          features: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Process Automation']
        }
      ]
    }
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize business processes',
      icon: '⚡'
    },
    {
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation',
      icon: '💰'
    },
    {
      title: 'Scalability',
      description: 'Scale operations without proportional cost increases',
      icon: '📈'
    },
    {
      title: 'Innovation',
      description: 'Stay ahead with cutting-edge AI technology',
      icon: '🚀'
    },
    {
      title: 'Risk Mitigation',
      description: 'Identify and address risks before they become issues',
      icon: '🛡️'
    },
    {
      title: 'Competitive Advantage',
      description: 'Gain market leadership through AI innovation',
      icon: '🏆'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive AI solutions that transform businesses and drive innovation. 
            From autonomous systems to quantum computing, we provide the technology you need to succeed.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-20">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-black/20 p-8 rounded-2xl border border-white/10">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">{category.title}</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-black/40 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200">
                    <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-purple-400 font-medium mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                            <span className="text-purple-400 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      href={service.href}
                      className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                    >
                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
>>>>>>> a0daef61051dc7ac77abcb710b25158f7273c42d
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-6 rounded-xl border border-white/10 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how AI can transform your business and drive growth
          </p>
          
          {/* Contact Details */}
          <div className="bg-white/10 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center gap-2">
                <span>📱</span>
                <a href="tel:+13024640950" className="hover:underline">+1 302 464 0950</a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>📍</span>
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Schedule a Consultation
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
=======

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can drive innovation and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/case-studies"
              className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
>>>>>>> a0daef61051dc7ac77abcb710b25158f7273c42d
    </div>
  );
}