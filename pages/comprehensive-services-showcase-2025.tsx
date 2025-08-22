import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import { 
  Brain, Atom, Server, Package, Satellite, Bot, Rocket, Target, 
  BookOpen, Users, Phone, Mail, MapPin, Globe, Zap, Search, 
  Cpu, Gem, Car, Cloud, Settings, HardDrive, Code, Lock, Wifi,
  BarChart, Megaphone, Headphones, UserCheck, Calculator, Calendar,
  Stethoscope, CreditCard, ShoppingCart, GraduationCap, Building2,
  Truck, Eye, View, BarChart3, FileText, MessageSquare, Sparkles,
  Heart, Activity, Palette, Network, Lightbulb, Cog, Code2,
  TestTube, GitBranch, TrendingUp, Star, Award, Clock, Shield,
  Database, Layers, CpuIcon, BrainCircuit, AtomIcon, CheckCircle,
  ArrowRight, ExternalLink
} from 'lucide-react';
import Link from 'next/link';

const ComprehensiveServicesShowcase2025: NextPage = () => {
  const serviceCategories = [
    {
      id: 'ai-consciousness',
      title: 'AI & Consciousness',
      icon: Brain,
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-gradient-to-br from-cyan-500/10 to-blue-600/10',
      borderColor: 'border-cyan-500/30',
      description: 'Revolutionary AI consciousness and emotional intelligence solutions',
      services: [
        {
          name: 'AI Consciousness Evolution',
          description: 'Advanced AI systems with emotional intelligence and self-awareness',
          price: '$15,000',
          period: '/month',
          features: ['Emotional Intelligence', 'Self-Awareness', 'Ethical Decision Making', 'Human-like Interaction'],
          benefits: ['Improved Customer Experience', 'Ethical AI Development', 'Human-AI Collaboration'],
          link: '/ai-consciousness-evolution'
        },
        {
          name: 'AI Emotional Intelligence Training',
          description: 'Platform for training AI systems in emotional understanding',
          price: '$8,500',
          period: '/month',
          features: ['Emotion Recognition', 'Sentiment Analysis', 'Empathy Training', 'Behavioral Modeling'],
          benefits: ['Better Human-AI Communication', 'Enhanced User Experience', 'Improved Decision Making'],
          link: '/ai-emotional-intelligence-training'
        },
        {
          name: 'Autonomous Research Assistant',
          description: 'Self-directed AI research and analysis platform',
          price: '$12,000',
          period: '/month',
          features: ['Independent Research', 'Data Analysis', 'Report Generation', 'Trend Identification'],
          benefits: ['Accelerated Research', 'Cost Reduction', '24/7 Availability'],
          link: '/ai-autonomous-research-assistant'
        }
      ]
    },
    {
      id: 'quantum-emerging',
      title: 'Quantum & Emerging Tech',
      icon: Atom,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-purple-500/10 to-pink-600/10',
      borderColor: 'border-purple-500/30',
      description: 'Cutting-edge quantum computing and breakthrough technologies',
      services: [
        {
          name: 'Space Resource Mining',
          description: 'AI-powered asteroid mining and space resource extraction',
          price: '$25,000',
          period: '/month',
          features: ['Resource Detection', 'Mining Optimization', 'Risk Assessment', 'ROI Analysis'],
          benefits: ['New Revenue Streams', 'Resource Security', 'Space Exploration'],
          link: '/space-resource-mining'
        },
        {
          name: 'Brain-Computer Interface',
          description: 'Neural interface technology for human-computer interaction',
          price: '$18,000',
          period: '/month',
          features: ['Neural Signal Processing', 'Thought Recognition', 'Device Control', 'Data Visualization'],
          benefits: ['Accessibility', 'Enhanced Productivity', 'Medical Applications'],
          link: '/quantum-ai-brain-computer-interface'
        },
        {
          name: 'Quantum Materials Discovery',
          description: 'AI-accelerated materials science and discovery platform',
          price: '$20,000',
          period: '/month',
          features: ['Material Simulation', 'Property Prediction', 'Synthesis Optimization', 'Performance Analysis'],
          benefits: ['Faster Innovation', 'Cost Reduction', 'Superior Materials'],
          link: '/quantum-materials-discovery'
        }
      ]
    },
    {
      id: 'enterprise-it',
      title: 'Enterprise IT',
      icon: Server,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-gradient-to-br from-green-500/10 to-emerald-600/10',
      borderColor: 'border-green-500/30',
      description: 'Enterprise-grade infrastructure and security solutions',
      services: [
        {
          name: 'Quantum-Secure Cloud Infrastructure',
          description: 'Future-proof cloud computing with quantum encryption',
          price: '$22,000',
          period: '/month',
          features: ['Quantum Encryption', 'Zero-Trust Security', 'Scalable Architecture', '24/7 Monitoring'],
          benefits: ['Unbreakable Security', 'Future-Proof Technology', 'Compliance Ready'],
          link: '/quantum-secure-cloud-infrastructure'
        },
        {
          name: 'Autonomous IT Operations Center',
          description: 'Self-healing IT infrastructure with AI management',
          price: '$16,000',
          period: '/month',
          features: ['Self-Healing Systems', 'Predictive Maintenance', 'Automated Recovery', 'Performance Optimization'],
          benefits: ['Reduced Downtime', 'Lower Costs', 'Improved Efficiency'],
          link: '/autonomous-it-operations-center'
        },
        {
          name: 'Edge Computing Orchestration',
          description: 'Intelligent edge computing management platform',
          price: '$14,000',
          period: '/month',
          features: ['Edge Node Management', 'Load Balancing', 'Latency Optimization', 'Resource Allocation'],
          benefits: ['Faster Response Times', 'Reduced Bandwidth', 'Local Processing'],
          link: '/edge-computing-orchestration-platform'
        }
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS',
      icon: Package,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-blue-500/10 to-indigo-600/10',
      borderColor: 'border-blue-500/30',
      description: 'Innovative business solutions for modern enterprises',
      services: [
        {
          name: 'AI Customer Success Platform',
          description: 'Intelligent customer retention and success management',
          price: '$3,500',
          period: '/month',
          features: ['Churn Prediction', 'Customer Segmentation', 'Success Metrics', 'Automated Outreach'],
          benefits: ['Increased Retention', 'Higher Customer Lifetime Value', 'Improved Satisfaction'],
          link: '/ai-customer-success-platform'
        },
        {
          name: 'Supply Chain Optimization',
          description: 'AI-powered logistics and supply chain management',
          price: '$4,200',
          period: '/month',
          features: ['Route Optimization', 'Demand Forecasting', 'Inventory Management', 'Risk Assessment'],
          benefits: ['Cost Reduction', 'Improved Efficiency', 'Better Planning'],
          link: '/intelligent-supply-chain-optimization'
        },
        {
          name: 'AI Financial Planning Platform',
          description: 'Intelligent financial analysis and planning tools',
          price: '$3,800',
          period: '/month',
          features: ['Financial Modeling', 'Risk Analysis', 'Investment Optimization', 'Budget Planning'],
          benefits: ['Better Financial Decisions', 'Risk Mitigation', 'Growth Optimization'],
          link: '/ai-financial-planning-platform'
        }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <Layout showSidebar={false} backgroundTheme="quantum" backgroundIntensity="high">
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Comprehensive Services Showcase 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover our complete portfolio of cutting-edge AI, quantum computing, and innovative technology solutions. 
            Transform your business with the future of technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              href="/revolutionary-2025-pricing"
              className="px-8 py-4 border-2 border-cyan-500/50 hover:border-cyan-400 text-cyan-400 hover:text-white hover:bg-cyan-500/20 font-semibold rounded-xl transition-all duration-200 hover:scale-105"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Contact Information Banner */}
        <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-8 h-8 text-cyan-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-lg font-semibold text-white">{contactInfo.phone}</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-8 h-8 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-lg font-semibold text-white">{contactInfo.email}</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-8 h-8 text-pink-400" />
              <div>
                <p className="text-sm text-gray-400">Address</p>
                <p className="text-lg font-semibold text-white">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category) => (
            <div key={category.id} className="space-y-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl border border-cyan-500/30 mb-6">
                  <category.icon className={`w-10 h-10 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">{category.title}</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {category.services.map((service, index) => (
                  <div
                    key={index}
                    className={`${category.bgColor} border ${category.borderColor} rounded-2xl p-8 hover:scale-105 transition-all duration-300 group`}
                  >
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="flex items-baseline space-x-2 mb-6">
                        <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                          {service.price}
                        </span>
                        <span className="text-gray-400">{service.period}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Award className="w-5 h-5 text-cyan-400 mr-2" />
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={service.link}
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-200 group-hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the future of technology with Zion Tech Group. Our expert team is ready to help you implement 
              cutting-edge solutions that drive innovation and growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 hover:scale-105"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/case-studies"
                className="px-8 py-4 border-2 border-cyan-500/50 hover:border-cyan-400 text-cyan-400 hover:text-white hover:bg-cyan-500/20 font-semibold rounded-xl transition-all duration-200 hover:scale-105"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            href="/revolutionary-2025-pricing"
            className="group p-6 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-xl hover:scale-105 transition-all duration-200"
          >
            <Target className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Pricing Plans</h3>
            <p className="text-gray-400 text-sm">Explore our competitive pricing and find the perfect plan for your business.</p>
          </Link>

          <Link
            href="/case-studies"
            className="group p-6 bg-gradient-to-br from-purple-500/10 to-pink-600/10 border border-purple-500/30 rounded-xl hover:scale-105 transition-all duration-200"
          >
            <BookOpen className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Case Studies</h3>
            <p className="text-gray-400 text-sm">See how our solutions have transformed businesses across industries.</p>
          </Link>

          <Link
            href="/docs"
            className="group p-6 bg-gradient-to-br from-green-500/10 to-emerald-600/10 border border-green-500/30 rounded-xl hover:scale-105 transition-all duration-200"
          >
            <FileText className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
            <p className="text-gray-400 text-sm">Comprehensive guides and technical documentation for all our services.</p>
          </Link>

          <Link
            href="/support"
            className="group p-6 bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/30 rounded-xl hover:scale-105 transition-all duration-200"
          >
            <Headphones className="w-8 h-8 text-orange-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
            <p className="text-gray-400 text-sm">24/7 expert support to help you succeed with our solutions.</p>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ComprehensiveServicesShowcase2025;