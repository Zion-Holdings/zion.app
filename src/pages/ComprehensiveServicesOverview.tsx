import React from 'react';
import { SEO } from '../components/SEO';
import { 
  Brain, 
  Zap, 
  Users, 
  Truck, 
  Building2, 
  ChartBar, 
  Code, 
  Microscope,
  Hospital,
  Leaf,
  TrendingUp,
  Camera,
  Database,
  Lock,
  Building,
  Car,
  Bot,
  Atom,
  Globe,
  Wifi,
  Shield,
  Cloud,
  Factory,
  ShoppingCart,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

// Import all service data
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { advancedAIAutomationServices } from '../../data/2026-advanced-ai-automation-services';
import { blockchainWeb3Services } from '../../data/2026-blockchain-web3-innovations';
import { healthcareBiotechServices } from '../../data/2026-healthcare-biotech-innovations';
import { iotSmartCityServices } from '../../data/2026-iot-smart-city-innovations';
import { roboticsAutomationServices } from '../../data/2026-robotics-automation-innovations';
import { quantumComputingServices } from '../../data/2026-quantum-computing-innovations';

interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  contactInfo?: {
    mobile: string;
    email: string;
    address: string;
  };
}

const ComprehensiveServicesOverview: React.FC = () => {
  // Combine all services
  const allServices: Service[] = [
    ...enhancedRealMicroSaasServices,
    ...advancedAIAutomationServices,
    ...blockchainWeb3Services,
    ...healthcareBiotechServices,
    ...iotSmartCityServices,
    ...roboticsAutomationServices,
    ...quantumComputingServices
  ];

  // Service categories with descriptions
  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      description: 'Advanced artificial intelligence and machine learning solutions',
      icon: Brain,
      color: 'from-blue-600 to-cyan-500',
      services: allServices.filter(s => s.category.includes('AI')),
      count: allServices.filter(s => s.category.includes('AI')).length
    },
    {
      name: 'Blockchain & Web3',
      description: 'Decentralized technology and blockchain solutions',
      icon: Globe,
      color: 'from-purple-600 to-pink-500',
      services: allServices.filter(s => s.category.includes('Blockchain') || s.category.includes('Web3') || s.category.includes('DeFi') || s.category.includes('NFT') || s.category.includes('DAO')),
      count: allServices.filter(s => s.category.includes('Blockchain') || s.category.includes('Web3') || s.category.includes('DeFi') || s.category.includes('NFT') || s.category.includes('DAO')).length
    },
    {
      name: 'Healthcare & Biotech',
      description: 'Innovative healthcare and biotechnology solutions',
      icon: Microscope,
      color: 'from-green-600 to-emerald-500',
      services: allServices.filter(s => s.category.includes('Healthcare') || s.category.includes('Biotech') || s.category.includes('Medical')),
      count: allServices.filter(s => s.category.includes('Healthcare') || s.category.includes('Biotech') || s.category.includes('Medical')).length
    },
    {
      name: 'IoT & Smart Cities',
      description: 'Internet of Things and smart city infrastructure',
      icon: Wifi,
      color: 'from-teal-600 to-cyan-500',
      services: allServices.filter(s => s.category.includes('Smart') || s.category.includes('IoT')),
      count: allServices.filter(s => s.category.includes('Smart') || s.category.includes('IoT')).length
    },
    {
      name: 'Robotics & Automation',
      description: 'Advanced robotics and automation systems',
      icon: Bot,
      color: 'from-indigo-600 to-blue-500',
      services: allServices.filter(s => s.category.includes('Robotics') || s.category.includes('Automation')),
      count: allServices.filter(s => s.category.includes('Robotics') || s.category.includes('Automation')).length
    },
    {
      name: 'Quantum Computing',
      description: 'Next-generation quantum computing solutions',
      icon: Atom,
      color: 'from-yellow-600 to-orange-500',
      services: allServices.filter(s => s.category.includes('Quantum')),
      count: allServices.filter(s => s.category.includes('Quantum')).length
    },
    {
      name: 'Digital Marketing & Content',
      description: 'AI-powered marketing and content creation',
      icon: ChartBar,
      color: 'from-red-600 to-pink-500',
      services: allServices.filter(s => s.category.includes('Marketing') || s.category.includes('Content')),
      count: allServices.filter(s => s.category.includes('Marketing') || s.category.includes('Content')).length
    },
    {
      name: 'Financial & Business',
      description: 'Financial technology and business automation',
      icon: Building2,
      color: 'from-emerald-600 to-green-500',
      services: allServices.filter(s => s.category.includes('Financial') || s.category.includes('Business')),
      count: allServices.filter(s => s.category.includes('Financial') || s.category.includes('Business')).length
    }
  ];

  const getPopularServices = (limit: number = 6) => {
    return allServices.filter(service => service.popular).slice(0, limit);
  };

  const getServicesByROI = (limit: number = 6) => {
    return allServices
      .sort((a, b) => {
        const aROI = parseInt(a.roi.split('%')[0]);
        const bROI = parseInt(b.roi.split('%')[0]);
        return bROI - aROI;
      })
      .slice(0, limit);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Comprehensive Services Overview - Zion Tech Group" 
        description="Explore our complete portfolio of innovative micro SAAS services, AI solutions, blockchain technology, and cutting-edge business solutions."
        keywords="comprehensive services, micro SAAS, AI solutions, blockchain, quantum computing, robotics, IoT, healthcare, biotech, business solutions"
        url="https://ziontechgroup.com/comprehensive-services-overview"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Services Overview
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Your Complete Technology Solution Partner
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Discover our extensive portfolio of {allServices.length}+ innovative services spanning AI, blockchain, 
            healthcare, IoT, robotics, quantum computing, and more. Each solution is designed to deliver 
            measurable ROI and drive business transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore All Services
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our services are organized into comprehensive categories, each designed to address 
              specific business challenges and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-zion-blue-dark mb-2 text-center">
                    {category.name}
                  </h3>
                  <p className="text-sm text-zion-slate text-center mb-4">
                    {category.description}
                  </p>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-zion-cyan">{category.count}</span>
                    <div className="text-xs text-zion-slate">Services</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Most Popular Services
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              These are our most sought-after services, delivering exceptional value and ROI to businesses worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getPopularServices().map((service, index) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">Popular</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-white/90 text-sm">{service.tagline}</p>
                </div>

                <div className="p-6">
                  <p className="text-zion-slate mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-zion-blue-dark">{service.price}</span>
                      <span className="text-zion-slate">{service.period}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-zion-slate">{service.trialDays} days trial</div>
                      <div className="text-xs text-zion-slate">{service.setupTime} setup</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-blue-dark mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-zion-slate">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={service.link}
                      className="flex-1 bg-zion-cyan hover:bg-zion-cyan-light text-white text-center py-2 px-4 rounded-lg font-medium transition-colors"
                    >
                      Learn More
                    </a>
                    <button className="bg-zion-blue-dark hover:bg-zion-blue text-white py-2 px-4 rounded-lg font-medium transition-colors">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High ROI Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Highest ROI Services
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              These services deliver the highest return on investment, helping businesses achieve 
              maximum value from their technology investments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getServicesByROI().map((service, index) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-zion-cyan/20">
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    <div className="bg-zion-cyan text-white px-3 py-1 rounded-full text-sm font-bold">
                      {service.roi}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-white/90 text-sm">{service.tagline}</p>
                </div>

                <div className="p-6">
                  <p className="text-zion-slate mb-4 line-clamp-3">{service.description}</p>
                  
                  <div className="mb-4 p-3 bg-zion-cyan/10 rounded-lg">
                    <div className="text-sm font-semibold text-zion-cyan mb-2">ROI Breakdown:</div>
                    <div className="text-xs text-zion-slate space-y-1">
                      <div>• {service.roi}</div>
                      <div>• Market Size: {service.marketSize}</div>
                      <div>• Growth Rate: {service.growthRate}</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={service.link}
                      className="flex-1 bg-zion-cyan hover:bg-zion-cyan-light text-white text-center py-2 px-4 rounded-lg font-medium transition-colors"
                    >
                      Learn More
                    </a>
                    <button className="bg-zion-blue-dark hover:bg-zion-blue text-white py-2 px-4 rounded-lg font-medium transition-colors">
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              We leverage cutting-edge technologies to deliver innovative solutions that drive business transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'AI/ML', icon: Brain, color: 'from-blue-600 to-cyan-500' },
              { name: 'Blockchain', icon: Globe, color: 'from-purple-600 to-pink-500' },
              { name: 'Quantum', icon: Atom, color: 'from-yellow-600 to-orange-500' },
              { name: 'IoT', icon: Wifi, color: 'from-teal-600 to-cyan-500' },
              { name: 'Robotics', icon: Bot, color: 'from-indigo-600 to-blue-500' },
              { name: 'Cloud', icon: Cloud, color: 'from-gray-600 to-slate-500' },
              { name: 'Cybersecurity', icon: Shield, color: 'from-red-600 to-pink-500' },
              { name: 'Big Data', icon: Database, color: 'from-green-600 to-emerald-500' },
              { name: 'Mobile', icon: Users, color: 'from-blue-600 to-purple-500' },
              { name: 'Web3', icon: Globe, color: 'from-purple-600 to-indigo-500' },
              { name: 'DevOps', icon: Code, color: 'from-gray-600 to-blue-500' },
              { name: 'Analytics', icon: ChartBar, color: 'from-green-600 to-blue-500' }
            ].map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-medium text-zion-blue-dark">{tech.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Our comprehensive service portfolio is designed to meet your every technology need. 
            Get in touch with our experts to discuss your requirements and find the perfect solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Services
            </button>
          </div>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">📞</div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            <div>
              <div className="text-3xl mb-2">✉️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📍</div>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensiveServicesOverview;