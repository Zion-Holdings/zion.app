import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  Zap, 
  Users, 
  TrendingUp, 
  Shield, 
  Globe, 
  Building, 
  Rocket, 
  Cpu, 
  BarChart3,
  Code,
  Cloud,
  Server,
  Database,
  Network,
  Workflow,
  MessageCircle,
  Bot,
  Headphones,
  Monitor,
  Lock,
  CheckCircle,
  ArrowRight,
  Play,
  DollarSign,
  Clock,
  Target
} from 'lucide-react';

export default function ComprehensiveServicesOverview() {
  const serviceCategories = [
    {
      name: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence services that transform business operations",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          title: "AI Workflow Automation",
          description: "Transform business processes with AI-powered workflow automation",
          price: "From $299/month",
          features: ["Intelligent process discovery", "Smart workflow design", "Predictive analytics", "Automated decision making"],
          link: "/services/ai-workflow-automation",
          popular: true
        },
        {
          title: "AI Customer Experience",
          description: "Revolutionize customer interactions with intelligent AI solutions",
          price: "From $199/month",
          features: ["Intelligent chatbots", "Personalized recommendations", "Sentiment analysis", "Omnichannel experience"],
          link: "/services/ai-customer-experience",
          popular: false
        },
        {
          title: "AI Content Creation Suite",
          description: "AI-powered content generation and marketing automation",
          price: "From $399/month",
          features: ["Multi-format content creation", "SEO optimization", "Content performance analytics", "Brand voice consistency"],
          link: "/services/innovative-new-services",
          popular: false
        }
      ]
    },
    {
      name: "Micro SAAS Solutions",
      description: "Custom software-as-a-service solutions for rapid deployment and growth",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          title: "Custom SAAS Development",
          description: "Tailored software solutions designed for your business needs",
          price: "From $15,000",
          features: ["Custom workflows", "API integration", "User management", "Scalable architecture"],
          link: "/services/micro-saas-solutions",
          popular: false
        },
        {
          title: "Multi-tenant Architecture",
          description: "Efficient multi-tenant systems with data isolation and security",
          price: "From $25,000",
          features: ["Data isolation", "Resource sharing", "Customization options", "Performance optimization"],
          link: "/services/micro-saas-solutions",
          popular: false
        },
        {
          title: "Subscription Management",
          description: "Comprehensive billing and subscription systems",
          price: "From $8,000",
          features: ["Flexible pricing", "Automated billing", "Usage tracking", "Payment processing"],
          link: "/services/micro-saas-solutions",
          popular: false
        }
      ]
    },
    {
      name: "IT Infrastructure Services",
      description: "Comprehensive infrastructure management and cloud solutions",
      icon: Server,
      color: "from-green-500 to-teal-500",
      services: [
        {
          title: "IT Infrastructure as a Service",
          description: "Managed infrastructure solutions with 24/7 support",
          price: "From $499/month",
          features: ["Cloud infrastructure management", "Network security", "Data center services", "24/7 monitoring"],
          link: "/services/it-infrastructure-as-service",
          popular: true
        },
        {
          title: "Cloud DevOps Solutions",
          description: "End-to-end cloud development and operations",
          price: "From $799/month",
          features: ["CI/CD pipelines", "Infrastructure as code", "Cloud migration", "Performance optimization"],
          link: "/cloud-devops",
          popular: false
        },
        {
          title: "Cybersecurity Services",
          description: "Advanced security solutions for modern threats",
          price: "From $599/month",
          features: ["Threat detection", "Vulnerability assessment", "Security audits", "Incident response"],
          link: "/services/cybersecurity",
          popular: false
        }
      ]
    },
    {
      name: "Emerging Technology",
      description: "Cutting-edge solutions in quantum computing and advanced technologies",
      icon: Rocket,
      color: "from-indigo-500 to-purple-500",
      services: [
        {
          title: "Quantum Technology Solutions",
          description: "Revolutionary quantum computing applications",
          price: "From $5,000/month",
          features: ["Quantum algorithms", "Cryptography", "Optimization", "Research support"],
          link: "/services/quantum-technology",
          popular: false
        },
        {
          title: "AI Autonomous Systems",
          description: "Self-learning and autonomous AI systems",
          price: "From $3,000/month",
          features: ["Machine learning", "Predictive analytics", "Automated decision making", "Continuous learning"],
          link: "/services/ai-autonomous-systems",
          popular: false
        }
      ]
    }
  ];

  const pricingComparison = [
    {
      service: "AI Workflow Automation",
      starter: "$299/month",
      professional: "$799/month",
      enterprise: "$1,999/month",
      features: ["Up to 10 workflows", "Up to 50 workflows", "Unlimited workflows"]
    },
    {
      service: "AI Customer Experience",
      starter: "$199/month",
      professional: "$599/month",
      enterprise: "$1,499/month",
      features: ["1K conversations", "10K conversations", "Unlimited conversations"]
    },
    {
      service: "IT Infrastructure",
      starter: "$499/month",
      professional: "$1,299/month",
      enterprise: "$2,999/month",
      features: ["Basic monitoring", "Advanced monitoring", "24/7 dedicated support"]
    },
    {
      service: "Micro SAAS Development",
      starter: "$8,000",
      professional: "$25,000",
      enterprise: "$50,000+",
      features: ["Basic features", "Advanced features", "Custom enterprise"]
    }
  ];

  const benefits = [
    {
      metric: "80%",
      description: "Faster time to market",
      icon: Zap
    },
    {
      metric: "65%",
      description: "Cost reduction",
      icon: DollarSign
    },
    {
      metric: "99.9%",
      description: "Uptime guarantee",
      icon: Shield
    },
    {
      metric: "24/7",
      description: "Expert support",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Comprehensive Services Overview - Zion Tech Group" 
        description="Explore our complete portfolio of AI-powered solutions, micro SAAS services, IT infrastructure, and emerging technology solutions. Transform your business with cutting-edge technology."
        keywords="AI services, micro SAAS, IT infrastructure, quantum technology, workflow automation, customer experience"
        canonical="https://ziontechgroup.com/services/comprehensive-services-overview"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Services Portfolio
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              AI-Powered Solutions for Every Business Need
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover our complete range of innovative services designed to transform your business 
            operations, enhance customer experiences, and drive digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Explore Services
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our comprehensive service portfolio delivers measurable business outcomes with 
              cutting-edge technology and exceptional support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-zion-cyan mb-2">
                  {benefit.metric}
                </div>
                <p className="text-zion-slate font-medium">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              From AI-powered automation to infrastructure management, we provide comprehensive 
              solutions that address every aspect of modern business technology needs.
            </p>
          </div>
          
          <div className="space-y-12">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-zion-blue-dark mb-2">
                      {category.name}
                    </h3>
                    <p className="text-xl text-zion-slate">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, idx) => (
                    <div key={idx} className={`bg-zion-blue-light rounded-xl p-6 border-2 ${
                      service.popular ? 'border-zion-cyan' : 'border-transparent'
                    }`}>
                      {service.popular && (
                        <div className="bg-zion-cyan text-white px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                          Most Popular
                        </div>
                      )}
                      <h4 className="text-xl font-semibold text-zion-blue-dark mb-3">
                        {service.title}
                      </h4>
                      <p className="text-zion-slate mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-center text-sm text-zion-slate">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-zion-cyan font-semibold">
                          {service.price}
                        </div>
                      </div>
                      <a
                        href={service.link}
                        className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-blue hover:to-zion-cyan text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-center block"
                      >
                        Learn More
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Service Pricing Overview
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Transparent pricing across all our services with flexible plans to meet your business needs.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="bg-zion-blue-light">
                  <th className="text-left p-6 font-semibold text-zion-blue-dark">Service</th>
                  <th className="text-center p-6 font-semibold text-zion-blue-dark">Starter</th>
                  <th className="text-center p-6 font-semibold text-zion-blue-dark">Professional</th>
                  <th className="text-center p-6 font-semibold text-zion-blue-dark">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {pricingComparison.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-zion-blue-light/30'}>
                    <td className="p-6 font-semibold text-zion-blue-dark">{row.service}</td>
                    <td className="p-6 text-center">
                      <div className="text-zion-cyan font-bold">{row.starter}</div>
                      <div className="text-sm text-zion-slate">{row.features[0]}</div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="text-zion-cyan font-bold">{row.professional}</div>
                      <div className="text-sm text-zion-slate">{row.features[1]}</div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="text-zion-cyan font-bold">{row.enterprise}</div>
                      <div className="text-sm text-zion-slate">{row.features[2]}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our services are tailored to meet the unique requirements and compliance needs 
              of various industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">Healthcare</h3>
              <p className="text-sm text-zion-slate mb-4">
                HIPAA-compliant solutions with patient data security and workflow automation
              </p>
              <div className="text-sm font-semibold text-zion-cyan">
                AI Diagnostics, Patient Management
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">Finance</h3>
              <p className="text-sm text-zion-slate mb-4">
                PCI DSS compliant solutions with fraud detection and regulatory compliance
              </p>
              <div className="text-sm font-semibold text-zion-cyan">
                Fraud Detection, Compliance
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">E-commerce</h3>
              <p className="text-sm text-zion-slate mb-4">
                Scalable solutions with personalized experiences and automated operations
              </p>
              <div className="text-sm font-semibold text-zion-cyan">
                Personalization, Automation
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-zion-blue-dark mb-2">Manufacturing</h3>
              <p className="text-sm text-zion-slate mb-4">
                IoT integration with predictive maintenance and supply chain optimization
              </p>
              <div className="text-sm font-semibold text-zion-cyan">
                IoT, Predictive Maintenance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Choose from our comprehensive portfolio of AI-powered solutions, micro SAAS services, 
            and IT infrastructure solutions. Start your transformation journey today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
          
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Phone</h4>
                <p className="text-white">+1 302 464 0950</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Email</h4>
                <p className="text-white">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Website</h4>
                <p className="text-white">https://ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Address</h4>
                <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}