import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Server, 
  Network, 
  Shield, 
  Database, 
  Monitor, 
  Zap, 
  Cloud, 
  Cpu, 
  HardDrive, 
  Activity,
  TrendingUp,
  Users,
  Target,
  Award,
  Globe,
  Building
} from 'lucide-react';
import { SPECIALIZED_IT_INFRASTRUCTURE_SERVICES } from '../../data/specializedITInfrastructureServices';

export default function SpecializedITInfrastructure() {
  const categories = [
    {
      name: "Edge Computing",
      icon: Server,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Cloud Management",
      icon: Cloud,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Networking",
      icon: Network,
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Containerization",
      icon: Cpu,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Data Center",
      icon: Building,
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Security",
      icon: Shield,
      color: "from-red-500 to-orange-500"
    },
    {
      name: "HPC",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Storage",
      icon: HardDrive,
      color: "from-gray-500 to-blue-500"
    },
    {
      name: "Monitoring",
      icon: Monitor,
      color: "from-emerald-500 to-green-500"
    }
  ];

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.icon : Globe;
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat ? cat.color : "from-gray-500 to-gray-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="Specialized IT Infrastructure Services - Zion Tech Group" 
        description="Enterprise-grade IT infrastructure solutions including edge computing, hybrid cloud, SDN, containerization, and high-performance computing platforms."
      />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Specialized IT Infrastructure
            </h1>
            <p className="text-xl md:text-2xl text-zion-cyan mb-8">
              Enterprise-grade infrastructure solutions that power modern digital transformation and drive business innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-zion-cyan/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-cyan">
                <span className="text-zion-cyan font-semibold">Edge Computing</span>
              </div>
              <div className="bg-zion-purple/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-purple">
                <span className="text-zion-purple font-semibold">Hybrid Cloud</span>
              </div>
              <div className="bg-zion-green/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-green">
                <span className="text-zion-green font-semibold">SDN & Security</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Enterprise Infrastructure Portfolio
          </h2>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
            Discover our comprehensive suite of specialized IT infrastructure services designed for enterprise-scale operations and digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIALIZED_IT_INFRASTRUCTURE_SERVICES.map((service) => {
            const IconComponent = getCategoryIcon(service.subcategory);
            const categoryColor = getCategoryColor(service.subcategory);
            
            return (
              <div key={service.id} className="group relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${categoryColor}`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-cyan">
                        {service.currency}{service.price}
                      </div>
                      <div className="text-sm text-zion-cyan/70">
                        per {service.pricingModel}
                      </div>
                    </div>
                  </div>

                  {/* Service Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zion-cyan/80 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-white/80">
                          <Zap className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center text-sm text-white/80">
                          <Target className="w-3 h-3 text-zion-cyan mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="mb-4 p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-cyan/70">Market Price:</span>
                      <span className="text-white font-semibold">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-1">
                      <span className="text-zion-cyan/70">ROI:</span>
                      <span className="text-green-400 font-semibold">{service.roi}</span>
                    </div>
                  </div>



                  {/* CTA Button */}
                  <div className="mt-6">
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="w-full bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-blue hover:to-zion-cyan text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25 flex items-center justify-center"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Get Started
                    </a>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-4 text-center">
                    <div className="text-xs text-zion-cyan/70">
                      Contact: {service.contactInfo.phone}
                    </div>
                    <div className="text-xs text-zion-cyan/70">
                      {service.contactInfo.email}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Infrastructure Categories Overview */}
      <div className="bg-white/5 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Infrastructure Categories
            </h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              Comprehensive coverage across all critical IT infrastructure domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Edge Computing</h3>
              <p className="text-zion-cyan/80 text-center">
                Distributed computing infrastructure for low-latency, high-performance applications
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Cloud Management</h3>
              <p className="text-zion-cyan/80 text-center">
                Hybrid and multi-cloud orchestration with unified management and security
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Networking</h3>
              <p className="text-zion-cyan/80 text-center">
                Software-defined networking and advanced network infrastructure solutions
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Containerization</h3>
              <p className="text-zion-cyan/80 text-center">
                Enterprise container orchestration and microservices infrastructure
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Data Center</h3>
              <p className="text-zion-cyan/80 text-center">
                AI-powered automation and optimization for modern data center operations
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">Security</h3>
              <p className="text-zion-cyan/80 text-center">
                Zero-trust architecture and advanced network security solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
              Built on cutting-edge technologies and industry-leading platforms
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Core Technologies</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-zion-cyan rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Kubernetes & Docker</h4>
                    <p className="text-zion-cyan/80">Container orchestration and management</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-zion-purple rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">AI & Machine Learning</h4>
                    <p className="text-zion-cyan/80">Intelligent automation and optimization</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-zion-green rounded-full w-3 h-3 mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Edge Computing</h4>
                    <p className="text-zion-cyan/80">Distributed computing infrastructure</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Performance Metrics</h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">Performance Improvement</span>
                    <span className="text-blue-400 font-bold">40-90%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">Cost Reduction</span>
                    <span className="text-green-400 font-bold">30-70%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-semibold">Efficiency Gain</span>
                    <span className="text-purple-400 font-bold">50-80%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-purple-400 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto">
            Contact our infrastructure experts to discuss how our specialized services can modernize your IT environment
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="bg-zion-cyan rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Infrastructure Assessment</h3>
              <p className="text-zion-cyan/80 mb-4">
                Get a comprehensive evaluation of your current infrastructure
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Infrastructure Assessment Request"
                className="text-zion-cyan hover:text-white transition-colors font-semibold"
              >
                Schedule Assessment →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="bg-zion-purple rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Performance Analysis</h3>
              <p className="text-zion-cyan/80 mb-4">
                Understand your infrastructure performance and optimization opportunities
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Performance Analysis Request"
                className="text-zion-cyan hover:text-white transition-colors font-semibold"
              >
                Get Analysis →
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="bg-zion-green rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Implementation</h3>
              <p className="text-zion-cyan/80 mb-4">
                Start your infrastructure transformation journey immediately
              </p>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Implementation Request"
                className="text-zion-cyan hover:text-white transition-colors font-semibold"
              >
                Start Now →
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
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
      </div>
    </div>
  );
}